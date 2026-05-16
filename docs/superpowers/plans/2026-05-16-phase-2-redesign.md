# Phase 2 — Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.
>
> **Orchestration hub:** `docs/superpowers/ROADMAP.md` holds the live status across all 4 phases. After completing each task below, check its boxes here **and** update the Live status table + Task progress log in the roadmap, then commit. At the end of this plan, stop — do not start Phase 3; its plan is written separately against the finished code.
>
> **Design execution:** This is visual work. Each component task ends with a browser verification step, not a unit test (the project has no visual test harness). The code in each step is a complete, real, deployable v1 — when the verification step says "check in the browser," genuinely look, and adjust spacing/scale to taste within the task before committing. Use the `frontend-design` skill's judgement during execution.

**Goal:** Rebuild every page and component of the portfolio in the "Sleight of hand" visual identity — a flat near-black editorial canvas with a warm amber accent, Space Grotesk / Inter / JetBrains Mono typography, an asymmetric editorial grid, and deliberate scroll-reveal motion — replacing the stock Astro template look. No new features (filtering, contact form, blog are Phase 3); no content changes (Phase 4).

**Architecture:** Work continues on the `redesign` branch. The redesign is built bottom-up: first a complete CSS design-token system in `global.css` (dark default + light override, fluid type scale, motion primitives), then the `Reveal` motion wrapper, then the shell (`MainHead`, `BaseLayout`, `Nav`, `Footer`), then primitives (`Pill`, `CallToAction`, toggles), then composite components (`Hero`, `Grid`, project card, `Skills`, `ContactCTA`), and finally the five page-content components. Every component keeps its existing prop interface and the i18n/`lang` wiring from Phase 1 — only markup and styles change. Styling stays in scoped Astro `<style>` blocks driven by CSS custom properties, matching the established Phase 1 codebase pattern.

**Tech Stack:** Astro 6.3.x, Tailwind CSS 4 (`@tailwindcss/vite`), scoped Astro `<style>`, CSS custom properties, IntersectionObserver, Google Fonts (Space Grotesk, Inter, JetBrains Mono). pnpm.

**Source references:**
- Spec: `docs/superpowers/specs/2026-05-15-portfolio-redesign-design.md` (§2 Design identity, §3 component set)
- Phase 1 plan (finished interfaces): `docs/superpowers/plans/2026-05-15-phase-1-foundation.md`
- i18n keys: `src/i18n/en.ts`, `src/i18n/es.ts`

**Locked design decisions (made for this plan; appended to the roadmap decision log):**
- **Typography:** Space Grotesk (headings/display), Inter (body), JetBrains Mono (metadata/tags/dates). This is a deliberate override of the spec's "editorial display face" wording — Rodrigo chose the geometric sans Space Grotesk over a serif for a modern-editorial rather than magazine-serif feel.
- **Default theme:** dark, always, on first visit (the designed canvas). Light mode is kept, derived from the same tokens, reached via the toggle and remembered in `localStorage`.
- **Canvas:** flat near-black (`#0a0a0b`) plus a faint CSS film-grain overlay. The stock template's background-image system (curves SVGs, gradient JPGs, lazy-loaded subtle backgrounds) is removed entirely.

**Model tags:** Each task is tagged `haiku` (mechanical, low-judgment) or `sonnet` (design/layout judgment).

**Theme-class change:** Phase 1 used `.theme-dark` on `<html>` with light as the `:root` default. Phase 2 inverts this: `:root` holds the **dark** tokens (the default), and a `.theme-light` class holds the light overrides. Every `.theme-dark` reference in the codebase is rewritten in this plan (Tasks 3, 7). Do not leave any `.theme-dark` selector behind — Task 18 greps for it.

---

## Task 1: Phase 2 kickoff checkpoint

**Model:** haiku

**Files:** none (git + environment only)

- [x] **Step 1: Confirm the branch and a green baseline**

Run: `git branch --show-current`
Expected: `redesign`. If not, run `git checkout redesign`.

Run: `pnpm install && pnpm astro check && pnpm build`
Expected: 0 type errors, build succeeds. This is the finished Phase 1 state. If anything fails, stop — Phase 2 assumes a green Phase 1.

- [x] **Step 2: Commit the checkpoint**

```bash
git commit --allow-empty -m "chore: start Phase 2 redesign work"
```

---

## Task 2: Build the design-token system in `global.css`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/styles/global.css`

**Context:** `global.css` currently holds the stock template's `--gray-0..999` scale, purple `--accent-*`, gradient/shadow tokens, `Rubik`/`Public Sans` fonts, and the `--text-*` scale, plus base element styles and the `.stack` / `.gap-*` / `.wrapper` / `.sr-only` utilities. This task replaces the **token layer and base styles** with the "Sleight of hand" system. The layout utilities (`.stack`, `.gap-*`, `.lg:gap-*`, `.sr-only`) are kept verbatim because many components still consume them. After this task, components still referencing old `--gray-*` vars will look rough until their own task rewrites them — that is expected on the redesign branch and is resolved per-component below.

- [x] **Step 1: Replace the entire contents of `src/styles/global.css`**

```css
/* ============================================================
   Sleight of hand — design tokens & base styles
   Dark is the default (:root). Light is the .theme-light override.
   ============================================================ */

:root {
	/* Surfaces (dark canvas) */
	--bg: #0a0a0b;
	--surface: #141416;
	--surface-2: #1c1c20;
	--border: #2a2a2e;
	--border-strong: #3a3a40;

	/* Text */
	--text: #e7e7e8;
	--text-strong: #fafafa;
	--text-dim: #94949b;

	/* Accent — warm amber stage-light */
	--accent: #f5a524;
	--accent-hover: #ffbe4d;
	--accent-press: #d98e16;
	--accent-soft: rgba(245, 165, 36, 0.14);
	--accent-line: rgba(245, 165, 36, 0.32);
	--accent-contrast: #0a0a0b;

	/* Icon gradient stops (consumed by Icon.astro `gradient` prop) */
	--gradient-stop-1: #ffce6b;
	--gradient-stop-2: #f5a524;
	--gradient-stop-3: #d98e16;

	/* Type families */
	--font-system: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	--font-display: 'Space Grotesk', var(--font-system);
	--font-body: 'Inter', var(--font-system);
	--font-mono: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace;

	/* Fluid type scale */
	--text-xs: 0.75rem;
	--text-sm: 0.875rem;
	--text-base: 1rem;
	--text-md: 1.125rem;
	--text-lg: clamp(1.25rem, 1.13rem + 0.55vw, 1.5rem);
	--text-xl: clamp(1.6rem, 1.34rem + 1.15vw, 2.1rem);
	--text-2xl: clamp(2.1rem, 1.66rem + 1.95vw, 3.1rem);
	--text-3xl: clamp(2.7rem, 1.9rem + 3.6vw, 4.4rem);
	--text-display: clamp(3.2rem, 1.7rem + 6.8vw, 7rem);

	/* Layout */
	--wrapper-max: 78rem;
	--wrapper-pad: clamp(1.25rem, 0.55rem + 3vw, 4rem);
	--measure: 65ch;

	/* Radius */
	--radius-sm: 0.375rem;
	--radius: 0.625rem;
	--radius-lg: 1.125rem;

	/* Motion */
	--ease-reveal: cubic-bezier(0.16, 1, 0.3, 1);
	--ease-quick: cubic-bezier(0.4, 0, 0.2, 1);
	--dur-reveal: 0.7s;
	--dur-quick: 0.22s;

	/* Elevation */
	--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.45);
	--shadow-md: 0 10px 34px rgba(0, 0, 0, 0.5);

	color-scheme: dark;
}

:root.theme-light {
	--bg: #f4f3f0;
	--surface: #ffffff;
	--surface-2: #ecebe6;
	--border: #ddd9d1;
	--border-strong: #c8c3b7;

	--text: #2c2b27;
	--text-strong: #141310;
	--text-dim: #6e6c63;

	--accent: #a96a0c;
	--accent-hover: #8a5607;
	--accent-press: #744904;
	--accent-soft: rgba(169, 106, 12, 0.1);
	--accent-line: rgba(169, 106, 12, 0.28);
	--accent-contrast: #ffffff;

	--gradient-stop-1: #d98e16;
	--gradient-stop-2: #a96a0c;
	--gradient-stop-3: #744904;

	--shadow-sm: 0 1px 2px rgba(20, 19, 16, 0.08);
	--shadow-md: 0 12px 34px rgba(20, 19, 16, 0.13);

	color-scheme: light;
}

/* ---------- Reset & base ---------- */

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

html,
body {
	min-height: 100%;
	overflow-x: hidden;
}

body {
	background-color: var(--bg);
	color: var(--text);
	font-family: var(--font-body);
	font-size: var(--text-base);
	line-height: 1.6;
	-webkit-font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
}

img {
	max-width: 100%;
	height: auto;
	display: block;
}

h1,
h2,
h3,
h4,
h5 {
	font-family: var(--font-display);
	font-weight: 600;
	line-height: 1.05;
	letter-spacing: -0.02em;
	color: var(--text-strong);
}

h1 {
	font-size: var(--text-3xl);
}
h2 {
	font-size: var(--text-2xl);
}
h3 {
	font-size: var(--text-xl);
}
h4 {
	font-size: var(--text-lg);
}
h5 {
	font-size: var(--text-md);
}

a {
	color: var(--accent);
	text-decoration-thickness: 1px;
	text-underline-offset: 0.2em;
}

::selection {
	background: var(--accent);
	color: var(--accent-contrast);
}

:focus-visible {
	outline: 2px solid var(--accent);
	outline-offset: 3px;
	border-radius: 2px;
}

/* ---------- Layout utilities (kept from Phase 1 — components depend on these) ---------- */

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}

.wrapper {
	width: 100%;
	max-width: var(--wrapper-max);
	margin-inline: auto;
	padding-inline: var(--wrapper-pad);
}

.stack {
	display: flex;
	flex-direction: column;
}

.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-8 { gap: 2rem; }
.gap-10 { gap: 2.5rem; }
.gap-15 { gap: 3.75rem; }
.gap-20 { gap: 5rem; }
.gap-30 { gap: 7.5rem; }
.gap-48 { gap: 12rem; }

@media (min-width: 50em) {
	.lg\:gap-2 { gap: 0.5rem; }
	.lg\:gap-4 { gap: 1rem; }
	.lg\:gap-8 { gap: 2rem; }
	.lg\:gap-10 { gap: 2.5rem; }
	.lg\:gap-15 { gap: 3.75rem; }
	.lg\:gap-20 { gap: 5rem; }
	.lg\:gap-30 { gap: 7.5rem; }
	.lg\:gap-48 { gap: 12rem; }
}

/* ---------- Editorial 12-column grid ---------- */

.editorial-grid {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: clamp(1rem, 0.4rem + 2vw, 2.5rem);
}

@media (min-width: 50em) {
	.editorial-grid {
		grid-template-columns: repeat(12, 1fr);
	}
}

/* ---------- Mono eyebrow / kicker ---------- */

.kicker {
	font-family: var(--font-mono);
	font-size: var(--text-xs);
	font-weight: 500;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: var(--accent);
}
```

- [x] **Step 2: Verify the build still compiles**

Run: `pnpm astro check`
Expected: 0 errors (CSS custom properties are not type-checked; this confirms nothing in `.astro`/`.ts` broke).

- [x] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add Sleight of hand design-token system"
```

---

## Task 3: Load the new fonts, default to dark, bridge tokens to Tailwind

**Model:** sonnet

**Files:**
- Modify: `src/components/MainHead.astro`
- Modify: `src/styles/tailwind.css`

**Context:** `MainHead.astro` currently loads `Public Sans` + `Rubik` from Google Fonts and runs an inline theme script that defaults to the OS preference and toggles a `.theme-dark` class. This task swaps the fonts and inverts the theme logic: dark is the default, `.theme-light` is the opt-in class.

- [x] **Step 1: Replace the font `<link>` in `MainHead.astro`**

Open `src/components/MainHead.astro`. Replace the single Google Fonts stylesheet `<link>` (the `href="https://fonts.googleapis.com/css2?family=Public+Sans...Rubik..."` line) with:

```html
<link
	href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap"
	rel="stylesheet"
/>
```

Leave the two `preconnect` links above it unchanged.

- [x] **Step 2: Replace the inline theme script in `MainHead.astro`**

Replace the entire `<script is:inline>` block with this dark-default version:

```html
<script is:inline>
	// Inlined & blocking so the theme is correct before first paint.
	// Dark is the default; light is opt-in and persisted in localStorage.
	const stored =
		typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
	if (stored === 'light') {
		document.documentElement.classList.add('theme-light');
	}
	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isLight = document.documentElement.classList.contains('theme-light');
			localStorage.setItem('theme', isLight ? 'light' : 'dark');
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});
	}
</script>
```

Leave the rest of `MainHead.astro` (meta tags, `<title>`, favicon, `SpeedInsights`, the `lang`/`t` frontmatter) unchanged.

- [x] **Step 3: Bridge the font tokens to Tailwind 4 in `src/styles/tailwind.css`**

Replace the contents of `src/styles/tailwind.css` with:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
	--font-sans: 'Inter', system-ui, sans-serif;
	--font-display: 'Space Grotesk', system-ui, sans-serif;
	--font-mono: 'JetBrains Mono', ui-monospace, monospace;
}
```

This keeps any Tailwind utility usage and the `typography` plugin consistent with the design tokens. Scoped component `<style>` blocks remain the primary styling mechanism.

- [x] **Step 4: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`, open `/`. The page will still look rough (components not yet redesigned) but confirm: (a) body text now renders in Inter, (b) the page loads dark with no flash of light, (c) no console errors. Stop the server.

- [x] **Step 5: Commit**

```bash
git add src/components/MainHead.astro src/styles/tailwind.css
git commit -m "feat: load Space Grotesk/Inter/JetBrains Mono, default to dark theme"
```

---

## Task 4: Strip the stock background system and add film grain in `BaseLayout`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/layouts/BaseLayout.astro`

**Context:** `BaseLayout.astro` carries a large `<style>` block implementing the stock template's background-image system (`--bg-image-*` variables, `.backgrounds` multi-layer `background` with curve SVGs and gradient JPGs, a `load` event that adds a `.loaded` class to lazy-load below-the-fold images). The "Sleight of hand" canvas is flat near-black with a faint film grain — all of that machinery is removed. The `lang`/`title`/`description` frontmatter and the `MainHead`/`Nav`/`slot`/`Footer` structure from Phase 1 stay.

- [x] **Step 1: Replace the entire contents of `src/layouts/BaseLayout.astro`**

```astro
---
import MainHead from '../components/MainHead.astro';
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
import '../styles/tailwind.css';
import { getLangFromUrl } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

interface Props {
	title?: string;
	description?: string;
}

const { title, description } = Astro.props;
const lang: Lang = getLangFromUrl(Astro.url);
---

<html lang={lang}>
	<head>
		<MainHead lang={lang} title={title} description={description} />
	</head>
	<body>
		<a class="skip-link" href="#main">Skip to content</a>
		<div class="page stack">
			<Nav lang={lang} />
			<slot />
			<Footer lang={lang} />
		</div>
		<div class="grain" aria-hidden="true"></div>

		<style>
			.page {
				min-height: 100vh;
			}

			.skip-link {
				position: absolute;
				left: 0.5rem;
				top: 0.5rem;
				z-index: 10000;
				padding: 0.5rem 1rem;
				background: var(--accent);
				color: var(--accent-contrast);
				border-radius: var(--radius-sm);
				font-family: var(--font-mono);
				font-size: var(--text-sm);
				text-decoration: none;
				transform: translateY(-150%);
				transition: transform var(--dur-quick) var(--ease-quick);
			}
			.skip-link:focus {
				transform: translateY(0);
			}

			/* Fixed film-grain overlay — CSS-only, no image asset. */
			.grain {
				position: fixed;
				inset: 0;
				z-index: 9000;
				pointer-events: none;
				opacity: 0.035;
				mix-blend-mode: overlay;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
			}

			@media (forced-colors: active) {
				.grain {
					display: none;
				}
			}
		</style>
	</body>
</html>
```

- [x] **Step 2: Verify**

Run: `pnpm dev`, open `/`. Confirm: flat near-black background, a faint grain texture, no console errors, no 404s for `/assets/backgrounds/*` (those requests are gone). Tab once to confirm the skip-link appears. Stop the server.

- [x] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: flat grain canvas in BaseLayout, drop stock background system"
```

---

## Task 5: Build the `Reveal` scroll-motion wrapper

**Model:** sonnet

**Files:**
- Create: `src/components/Reveal.astro`

**Context:** The signature motion of the redesign — content reveals on scroll, "the way a card turn does: deliberate, smooth, never bouncy." This is a new wrapper component used throughout the page rebuilds (Tasks 13–17). It uses one shared `IntersectionObserver`, fully respects `prefers-reduced-motion`, and is invisible to no-JS users (CSS fallback makes content visible). Astro bundles the inline `<script>` once regardless of how many `<Reveal>` instances render.

- [x] **Step 1: Create `src/components/Reveal.astro`**

```astro
---
interface Props {
	/** Tag to render. Default 'div'. */
	as?: keyof HTMLElementTagNameMap;
	/** Stagger delay in ms (for sequenced groups). */
	delay?: number;
	class?: string;
}

const { as = 'div', delay = 0, class: className } = Astro.props;
const Tag = as as any;
---

<Tag class:list={['reveal', className]} style={`--reveal-delay:${delay}ms`}>
	<slot />
</Tag>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(1.75rem);
		transition:
			opacity var(--dur-reveal) var(--ease-reveal),
			transform var(--dur-reveal) var(--ease-reveal);
		transition-delay: var(--reveal-delay, 0ms);
		will-change: opacity, transform;
	}

	.reveal.is-visible {
		opacity: 1;
		transform: none;
	}

	/* No-JS fallback: if the script never runs, content must still be visible. */
	@media (scripting: none) {
		.reveal {
			opacity: 1;
			transform: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.reveal {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>

<script>
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const reveal = (el: Element) => el.classList.add('is-visible');

	if (reduce) {
		document.querySelectorAll('.reveal').forEach(reveal);
	} else {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						reveal(entry.target);
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		);
		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
	}
</script>
```

- [x] **Step 2: Verify it compiles**

Run: `pnpm astro check`
Expected: 0 errors. (The component is exercised visually once it is used in Task 13.)

- [x] **Step 3: Commit**

```bash
git add src/components/Reveal.astro
git commit -m "feat: add Reveal scroll-motion wrapper"
```

---

## Task 6: Redesign the `Pill` and `CallToAction` primitives

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/Pill.astro`
- Modify (full rewrite): `src/components/CallToAction.astro`

**Context:** `Pill` is used for project tags and the home hero role-pills (its slot can contain an `Icon`). `CallToAction` is the primary button (used on the home page and inside `ContactCTA`). Both keep their current interfaces: `Pill` is slot-only; `CallToAction` takes `href` + slot.

- [x] **Step 1: Replace `src/components/Pill.astro`**

```astro
---
---

<span class="pill"><slot /></span>

<style>
	.pill {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.3rem 0.7rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		font-weight: 500;
		letter-spacing: 0.04em;
		line-height: 1.4;
		color: var(--text-dim);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 999rem;
		white-space: nowrap;
		transition:
			color var(--dur-quick) var(--ease-quick),
			border-color var(--dur-quick) var(--ease-quick);
	}
</style>
```

- [x] **Step 2: Replace `src/components/CallToAction.astro`**

```astro
---
interface Props {
	href: string;
}

const { href } = Astro.props;
---

<a class="cta" href={href}>
	<span class="cta-label"><slot /></span>
</a>

<style>
	.cta {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.5em;
		padding: 0.85em 1.6em;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		font-weight: 500;
		letter-spacing: 0.02em;
		text-decoration: none;
		color: var(--accent-contrast);
		background: var(--accent);
		border-radius: 999rem;
		overflow: hidden;
		transition:
			background-color var(--dur-quick) var(--ease-quick),
			transform var(--dur-quick) var(--ease-quick);
	}

	.cta-label {
		display: inline-flex;
		align-items: center;
		gap: 0.5em;
		position: relative;
		z-index: 1;
	}

	.cta:hover,
	.cta:focus-visible {
		background: var(--accent-hover);
	}

	@media (prefers-reduced-motion: no-preference) {
		.cta:hover,
		.cta:focus-visible {
			transform: translateY(-2px);
		}
	}
</style>
```

- [x] **Step 3: Verify**

Run: `pnpm astro check`
Expected: 0 errors. Visual check happens when these are used (Tasks 12–13); a quick `pnpm dev` look at `/` is optional here.

- [x] **Step 4: Commit**

```bash
git add src/components/Pill.astro src/components/CallToAction.astro
git commit -m "feat: redesign Pill and CallToAction primitives"
```

---

## Task 7: Redesign the `ThemeToggle` and `LangToggle`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/ThemeToggle.astro`
- Modify (full rewrite): `src/components/LangToggle.astro`

**Context:** `ThemeToggle` currently toggles a `.theme-dark` class; it must now toggle `.theme-light` (dark is the default — see the theme-class change note in the header). `LangToggle` keeps its server-side target-URL computation (that logic is correct and language-neutral) — only the markup/styles change, dropping the `:global(.theme-dark)` purple hacks.

- [x] **Step 1: Replace `src/components/ThemeToggle.astro`**

```astro
---
import Icon from './Icon.astro';
---

<theme-toggle>
	<button type="button" aria-pressed="false">
		<span class="sr-only">Toggle light theme</span>
		<span class="icon sun"><Icon icon="sun" /></span>
		<span class="icon moon"><Icon icon="moon-stars" /></span>
	</button>
</theme-toggle>

<style>
	button {
		display: flex;
		align-items: center;
		padding: 0.3rem;
		border: 1px solid var(--border);
		border-radius: 999rem;
		background: var(--surface);
		color: var(--text-dim);
		cursor: pointer;
		transition: border-color var(--dur-quick) var(--ease-quick);
	}

	button:hover {
		border-color: var(--border-strong);
	}

	.icon {
		display: flex;
		padding: 0.3rem;
		font-size: 0.9rem;
		border-radius: 999rem;
	}

	/* Default (dark): the moon is the active marker. */
	.moon {
		background: var(--accent-soft);
		color: var(--accent);
	}
	.sun {
		color: var(--text-dim);
	}

	/* Light theme: the sun becomes the active marker. */
	:global(.theme-light) .sun {
		background: var(--accent-soft);
		color: var(--accent);
	}
	:global(.theme-light) .moon {
		background: transparent;
		color: var(--text-dim);
	}

	@media (prefers-reduced-motion: no-preference) {
		.icon {
			transition:
				background-color var(--dur-quick) var(--ease-quick),
				color var(--dur-quick) var(--ease-quick);
		}
	}
</style>

<script>
	class ThemeToggle extends HTMLElement {
		constructor() {
			super();
			const button = this.querySelector('button')!;

			const isLight = () => document.documentElement.classList.contains('theme-light');

			const setLight = (light: boolean) => {
				document.documentElement.classList.toggle('theme-light', light);
				button.setAttribute('aria-pressed', String(light));
			};

			button.addEventListener('click', () => setLight(!isLight()));
			button.setAttribute('aria-pressed', String(isLight()));
		}
	}
	customElements.define('theme-toggle', ThemeToggle);
</script>
```

- [x] **Step 2: Replace `src/components/LangToggle.astro`**

Keep the frontmatter (the `targetHref` computation) **exactly as it is today** — copy it verbatim from the current file. Replace only the markup and `<style>`:

```astro
---
import type { Lang } from '../i18n/ui';
import { routes } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);

const otherLang: Lang = lang === 'en' ? 'es' : 'en';
const otherLangCode = otherLang.toUpperCase();

const currentPath = Astro.url.pathname;

let neutralPath = currentPath;
if (neutralPath.startsWith('/es')) {
	neutralPath = neutralPath.slice(3) || '/';
}
if (!neutralPath.startsWith('/')) neutralPath = '/' + neutralPath;

const slugMap: Record<string, string> = {};
for (const key of Object.keys(routes) as (keyof typeof routes)[]) {
	const fromSlug = routes[key][lang];
	const toSlug = routes[key][otherLang];
	if (fromSlug !== toSlug && fromSlug !== '') {
		slugMap[fromSlug] = toSlug;
	}
}

const segments = neutralPath.split('/');
if (segments.length >= 2 && segments[1] in slugMap) {
	segments[1] = slugMap[segments[1]];
	neutralPath = segments.join('/') || '/';
}

const targetHref = otherLang === 'en'
	? (neutralPath || '/')
	: '/es' + (neutralPath === '/' ? '' : neutralPath);
---

<a href={targetHref} class="lang-toggle">
	<span class="sr-only">{t('lang.switch')}: </span>
	<span aria-hidden="true">{otherLangCode}</span>
</a>

<style>
	.lang-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 2.4rem;
		padding: 0.35rem 0.55rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		font-weight: 500;
		letter-spacing: 0.06em;
		color: var(--text-dim);
		text-decoration: none;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 999rem;
		transition:
			color var(--dur-quick) var(--ease-quick),
			border-color var(--dur-quick) var(--ease-quick);
	}

	.lang-toggle:hover,
	.lang-toggle:focus-visible {
		color: var(--accent);
		border-color: var(--accent-line);
	}
</style>
```

- [x] **Step 3: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`. On `/`, click the theme toggle — the page must switch dark↔light and the active icon marker must move. Reload — the choice persists. Click the lang toggle — it must navigate to the matching `/es` page. Stop the server.

- [x] **Step 4: Commit**

```bash
git add src/components/ThemeToggle.astro src/components/LangToggle.astro
git commit -m "feat: redesign theme and language toggles, switch to theme-light class"
```

---

## Task 8: Redesign the `Nav`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/Nav.astro`

**Context:** `Nav` keeps its `lang` prop, the `textLinks`/`iconLinks` frontmatter, the `<menu-button>` custom element + `#menu-content` no-JS pattern, and the `LangToggle`/`ThemeToggle` children. The redesign turns the stock radial-gradient pill nav into a flat editorial top bar: a wordmark on the left, mono nav links + toggles on the right, a hairline bottom border. On mobile, the menu opens as a full-width panel. Drop the `terminal-window` gradient icon from the wordmark.

- [x] **Step 1: Replace `src/components/Nav.astro`**

```astro
---
import Icon from './Icon.astro';
import ThemeToggle from './ThemeToggle.astro';
import type { iconPaths } from './IconPaths';
import LangToggle from './LangToggle.astro';
import type { Lang } from '../i18n/ui';
import { useTranslations, getRoutePath } from '../i18n/utils';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);

const textLinks: { label: string; href: string }[] = [
	{ label: t('nav.home'), href: getRoutePath('home', lang) },
	{ label: t('nav.work'), href: getRoutePath('work', lang) },
	{ label: t('nav.about'), href: getRoutePath('about', lang) },
];

const iconLinks: { label: string; href: string; icon: keyof typeof iconPaths }[] = [
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/rodrigo-camino', icon: 'linkedin-logo' },
	{ label: 'GitHub', href: 'https://github.com/kirigaya97', icon: 'github-logo' },
	{ label: 'Instagram', href: 'https://instagram.com/rodri.camino', icon: 'instagram' },
];

const current = Astro.url.pathname;
const isActive = (href: string) =>
	current === href || (href !== '/' && current.startsWith(href));
---

<nav>
	<div class="bar wrapper">
		<a href={getRoutePath('home', lang)} class="wordmark">
			Rodrigo&nbsp;Camino<span class="dot" aria-hidden="true">.</span>
		</a>

		<menu-button>
			<template>
				<button class="menu-button" aria-expanded="false" aria-controls="menu-content">
					<span class="sr-only">{t('nav.menu')}</span>
					<Icon icon="list" />
				</button>
			</template>
		</menu-button>

		<div id="menu-content" class="menu">
			<ul class="links">
				{
					textLinks.map(({ label, href }) => (
						<li>
							<a
								href={href}
								class:list={['link', { active: isActive(href) }]}
								aria-current={isActive(href) ? 'page' : undefined}
							>
								{label}
							</a>
						</li>
					))
				}
			</ul>
			<div class="controls">
				<div class="socials">
					{
						iconLinks.map(({ href, icon, label }) => (
							<a href={href} class="social" target="_blank" rel="noopener">
								<span class="sr-only">{label}</span>
								<Icon icon={icon} />
							</a>
						))
					}
				</div>
				<LangToggle lang={lang} />
				<ThemeToggle />
			</div>
		</div>
	</div>
</nav>

<script>
	class MenuButton extends HTMLElement {
		constructor() {
			super();
			this.appendChild(this.querySelector('template')!.content.cloneNode(true));
			const btn = this.querySelector('button')!;
			const menu = document.getElementById('menu-content')!;

			menu.dataset.open = 'false';

			const setExpanded = (open: boolean) => {
				btn.setAttribute('aria-expanded', String(open));
				menu.dataset.open = String(open);
			};

			btn.addEventListener('click', () =>
				setExpanded(btn.getAttribute('aria-expanded') !== 'true'),
			);

			const handleViewports = (e: MediaQueryList | MediaQueryListEvent) => {
				btn.hidden = e.matches;
				setExpanded(e.matches);
			};
			const mq = window.matchMedia('(min-width: 50em)');
			handleViewports(mq);
			mq.addEventListener('change', handleViewports);
		}
	}
	customElements.define('menu-button', MenuButton);
</script>

<style>
	nav {
		position: relative;
		z-index: 9999;
		border-bottom: 1px solid var(--border);
		background: color-mix(in srgb, var(--bg) 88%, transparent);
		backdrop-filter: blur(8px);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 1.15rem;
	}

	.wordmark {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: var(--text-md);
		letter-spacing: -0.02em;
		color: var(--text-strong);
		text-decoration: none;
		white-space: nowrap;
	}
	.dot {
		color: var(--accent);
	}

	.menu-button {
		display: flex;
		padding: 0.45rem;
		font-size: 1.35rem;
		color: var(--text);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		cursor: pointer;
	}
	.menu-button[hidden] {
		display: none;
	}

	/* Mobile: menu is a panel dropped below the bar. */
	.menu {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
		top: 100%;
		flex-direction: column;
		gap: 1.5rem;
		padding: 1.5rem var(--wrapper-pad) 2rem;
		background: var(--bg);
		border-bottom: 1px solid var(--border);
	}
	.menu[data-open='true'] {
		display: flex;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.link {
		display: inline-block;
		padding: 0.35rem 0;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-dim);
		text-decoration: none;
		transition: color var(--dur-quick) var(--ease-quick);
	}
	.link:hover,
	.link:focus-visible {
		color: var(--text-strong);
	}
	.link.active {
		color: var(--accent);
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.socials {
		display: flex;
		gap: 0.35rem;
		margin-right: auto;
		font-size: 1.1rem;
	}
	.social {
		display: flex;
		padding: 0.35rem;
		color: var(--text-dim);
		transition: color var(--dur-quick) var(--ease-quick);
	}
	.social:hover,
	.social:focus-visible {
		color: var(--accent);
	}

	@media (min-width: 50em) {
		.menu {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1.75rem;
			position: static;
			padding: 0;
			background: none;
			border: 0;
		}
		.links {
			flex-direction: row;
			gap: 1.5rem;
		}
		.socials {
			margin-right: 0;
			gap: 0.15rem;
		}
	}

	@media (forced-colors: active) {
		.link.active {
			color: SelectedItem;
		}
	}
</style>
```

- [x] **Step 2: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`. Desktop width: wordmark left, mono links + socials + toggles right, hairline border, active link in amber. Narrow the window below `50em`: a menu button appears and opens/closes the panel. Both themes look correct. Stop the server.

- [x] **Step 3: Commit**

```bash
git add src/components/Nav.astro
git commit -m "feat: redesign Nav as editorial top bar"
```

---

## Task 9: Redesign the `Footer`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/Footer.astro`

**Context:** `Footer` keeps its `lang` prop and the `t('footer.creditPrefix')` + Astro-link + rocket-icon credit pattern, the `currentYear`, and the four social links. The redesign makes it an editorial closing band: a hairline top border, a large wordmark, the credit and copyright in mono, social links right-aligned.

- [x] **Step 1: Replace `src/components/Footer.astro`**

```astro
---
import type { Lang } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);
const currentYear = new Date().getFullYear();

const socials = [
	{ label: 'X', href: 'https://x.com/RodrigoCamino8' },
	{ label: 'GitHub', href: 'https://github.com/kirigaya97' },
	{ label: 'Instagram', href: 'https://instagram.com/rodri.camino' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/rodrigo-camino' },
];
---

<footer>
	<div class="wrapper inner">
		<p class="wordmark">Rodrigo&nbsp;Camino<span class="dot" aria-hidden="true">.</span></p>
		<ul class="socials">
			{
				socials.map(({ label, href }) => (
					<li>
						<a href={href} target="_blank" rel="noopener">{label}</a>
					</li>
				))
			}
		</ul>
		<div class="meta">
			<p class="credit">{t('footer.creditPrefix')}<a href="https://astro.build/">Astro</a></p>
			<p>&copy; {currentYear} Rodrigo Camino</p>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: auto;
		border-top: 1px solid var(--border);
	}

	.inner {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		padding-block: clamp(3rem, 2rem + 4vw, 5rem);
	}

	.wordmark {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: var(--text-2xl);
		letter-spacing: -0.02em;
		color: var(--text-strong);
	}
	.dot {
		color: var(--accent);
	}

	.socials {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.socials a {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-dim);
		text-decoration: none;
		transition: color var(--dur-quick) var(--ease-quick);
	}
	.socials a:hover,
	.socials a:focus-visible {
		color: var(--accent);
	}

	.meta {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-dim);
	}
	.meta a {
		color: var(--text-dim);
		text-underline-offset: 0.2em;
	}
	.meta a:hover {
		color: var(--accent);
	}

	@media (min-width: 50em) {
		.inner {
			display: grid;
			grid-template-columns: 1fr auto;
			align-items: start;
			gap: 2rem 4rem;
		}
		.wordmark {
			font-size: var(--text-3xl);
		}
		.socials {
			justify-content: flex-end;
		}
		.meta {
			grid-column: 1 / -1;
			border-top: 1px solid var(--border);
			padding-top: 1.5rem;
		}
	}
</style>
```

- [x] **Step 2: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`, scroll to the footer on `/`. Confirm the large wordmark, right-aligned mono socials, hairline borders, mono credit row. Check both themes and `/es/`. Stop the server.

- [x] **Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: redesign Footer as editorial closing band"
```

---

## Task 10: Redesign the `Hero`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/Hero.astro`

**Context:** `Hero` is reused by every page (home, work, about, project detail, 404). Today its props are `title`, `tagline?`, `align?`. The redesign adds two optional props: `kicker?` (a mono eyebrow above the title) and `size?: 'display' | 'page'` (the home page uses the oversized `display`; every other page uses `page`). `align` still toggles centered text (used by 404). The slot still renders after the tagline (role pills on home, the portrait/pixelart image on about, the tags+description on project detail).

- [x] **Step 1: Replace `src/components/Hero.astro`**

```astro
---
interface Props {
	title: string;
	tagline?: string;
	kicker?: string;
	align?: 'start' | 'center';
	size?: 'display' | 'page';
}

const { align = 'start', size = 'page', tagline, title, kicker } = Astro.props;
---

<div class:list={['hero', align, size]}>
	{kicker && <p class="kicker">{kicker}</p>}
	<h1 class="title">{title}</h1>
	{tagline && <p class="tagline">{tagline}</p>}
	<slot />
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.hero.center {
		align-items: center;
		text-align: center;
	}

	.kicker {
		margin-bottom: -0.4rem;
	}

	.title {
		max-width: 20ch;
		text-wrap: balance;
	}
	.page .title {
		font-size: var(--text-3xl);
	}
	.display .title {
		font-size: var(--text-display);
		max-width: 16ch;
	}
	.center .title {
		max-width: 26ch;
		margin-inline: auto;
	}

	.tagline {
		max-width: 48ch;
		font-size: var(--text-lg);
		line-height: 1.5;
		color: var(--text-dim);
	}
	.center .tagline {
		margin-inline: auto;
	}
</style>
```

- [x] **Step 2: Verify**

Run: `pnpm astro check`
Expected: 0 errors. (`size`/`kicker` are optional, so existing callers still type-check; pages start passing them in Tasks 13–17.)

- [x] **Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: redesign Hero with kicker and display/page sizes"
```

---

## Task 11: Redesign the `Grid` and project card (`PortfolioPreview`)

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/Grid.astro`
- Modify (full rewrite): `src/components/PortfolioPreview.astro`

**Context:** `Grid` is used by `HomeContent` and `WorkIndexContent` as `<Grid variant="offset">`. The `small` variant is unused — drop it. `PortfolioPreview` is the project card; it keeps its `project` + `lang` props and the `getRoutePath('work', lang)/{id}` href from Phase 1. The redesigned card is an editorial figure: framed image with a hover zoom + reveal of a corner indicator, and a mono caption (title, tags joined with ` / `, year).

- [x] **Step 1: Replace `src/components/Grid.astro`**

```astro
---
interface Props {
	variant?: 'offset';
}

const { variant } = Astro.props;
---

<ul class:list={['grid', { offset: variant === 'offset' }]}>
	<slot />
</ul>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 50em) {
		.grid {
			grid-template-columns: 1fr 1fr;
			column-gap: clamp(2rem, 1rem + 3vw, 5rem);
			row-gap: 6rem;
		}

		/* Editorial offset: even-indexed cards drop down to break the baseline. */
		.grid.offset > :global(li:nth-child(even)) {
			transform: translateY(4.5rem);
		}
	}
</style>
```

- [x] **Step 2: Replace `src/components/PortfolioPreview.astro`**

```astro
---
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { getRoutePath } from '../i18n/utils';

interface Props {
	project: CollectionEntry<'work'> | CollectionEntry<'proyectos'>;
	lang: Lang;
}

const { project, lang } = Astro.props;
const { data, id } = project;
const year = data.publishDate.getFullYear();
const href = `${getRoutePath('work', lang)}/${id}`;
---

<a class="card" href={href}>
	<figure class="frame">
		<img src={data.img} alt={data.img_alt || ''} loading="lazy" decoding="async" />
		<span class="indicator" aria-hidden="true">↗</span>
	</figure>
	<div class="caption">
		<h3 class="title">{data.title}</h3>
		<div class="meta">
			<span class="tags">{data.tags.join(' / ')}</span>
			<span class="year">{year}</span>
		</div>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		text-decoration: none;
		color: inherit;
	}

	.frame {
		position: relative;
		margin: 0;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		background: var(--surface);
	}

	.frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.indicator {
		position: absolute;
		top: 0.85rem;
		right: 0.85rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.4rem;
		height: 2.4rem;
		font-size: 1.1rem;
		color: var(--accent-contrast);
		background: var(--accent);
		border-radius: 999rem;
		opacity: 0;
		transform: translateY(-0.4rem);
	}

	.title {
		font-size: var(--text-xl);
		transition: color var(--dur-quick) var(--ease-quick);
	}

	.meta {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 0.6rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-dim);
	}

	.card:hover .title,
	.card:focus-visible .title {
		color: var(--accent);
	}

	@media (prefers-reduced-motion: no-preference) {
		.frame img {
			transition: transform 0.6s var(--ease-reveal);
		}
		.indicator {
			transition:
				opacity var(--dur-quick) var(--ease-quick),
				transform var(--dur-quick) var(--ease-quick);
		}
		.card:hover .frame img,
		.card:focus-visible .frame img {
			transform: scale(1.05);
		}
	}

	.card:hover .indicator,
	.card:focus-visible .indicator {
		opacity: 1;
		transform: translateY(0);
	}
</style>
```

- [x] **Step 3: Verify**

Run: `pnpm astro check`
Expected: 0 errors. Visual check happens in Tasks 13–14 where the cards render in a grid.

- [x] **Step 4: Commit**

```bash
git add src/components/Grid.astro src/components/PortfolioPreview.astro
git commit -m "feat: redesign Grid and project card with editorial offset and hover reveal"
```

---

## Task 12: Redesign the `Skills` and `ContactCTA`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/Skills.astro`
- Modify (full rewrite): `src/components/ContactCTA.astro`
- Modify: `src/i18n/en.ts`, `src/i18n/es.ts` (add one key)

**Context:** `Skills` renders three cards from the `skills.card1..3.title/body` keys; the redesign drops the boxed/icon stock look for a numbered editorial three-column list. `ContactCTA` keeps its `lang` prop, the `contactCta.heading`/`contactCta.button` keys and the WhatsApp `CallToAction`; it gains a mono kicker, which needs one new i18n key.

- [x] **Step 1: Add the `contactCta.kicker` key to both dictionaries**

In `src/i18n/en.ts`, add alongside the other `contactCta.*` entries:

```ts
'contactCta.kicker': "Let's talk",
```

In `src/i18n/es.ts`, add the matching entry:

```ts
'contactCta.kicker': 'Conversemos',
```

- [x] **Step 2: Replace `src/components/Skills.astro`**

```astro
---
import type { Lang } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);

const cards = [
	{ index: '01', title: t('skills.card1.title'), body: t('skills.card1.body') },
	{ index: '02', title: t('skills.card2.title'), body: t('skills.card2.body') },
	{ index: '03', title: t('skills.card3.title'), body: t('skills.card3.body') },
];
---

<section class="skills">
	<ul class="list">
		{
			cards.map((card) => (
				<li class="item">
					<span class="index">{card.index}</span>
					<h3 class="title">{card.title}</h3>
					<p class="body">{card.body}</p>
				</li>
			))
		}
	</ul>
</section>

<style>
	.list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.item {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding-block: 2rem;
		border-top: 1px solid var(--border);
	}

	.index {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		letter-spacing: 0.1em;
		color: var(--accent);
	}

	.title {
		font-size: var(--text-lg);
	}

	.body {
		max-width: 38ch;
		color: var(--text-dim);
	}

	@media (min-width: 50em) {
		.list {
			grid-template-columns: repeat(3, 1fr);
			column-gap: 3rem;
		}
		.item {
			padding-block: 2.5rem 0;
		}
	}
</style>
```

- [x] **Step 3: Replace `src/components/ContactCTA.astro`**

```astro
---
import CallToAction from './CallToAction.astro';
import Icon from './Icon.astro';
import type { Lang } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);
---

<aside class="contact">
	<div class="wrapper inner">
		<div class="text">
			<p class="kicker">{t('contactCta.kicker')}</p>
			<h2 class="heading">{t('contactCta.heading')}</h2>
		</div>
		<CallToAction href="https://wa.me/+5491132125484">
			{t('contactCta.button')}
			<Icon icon="whatsapp" size="1.2em" />
		</CallToAction>
	</div>
</aside>

<style>
	.contact {
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
		background: var(--surface);
	}

	.inner {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2.5rem;
		padding-block: clamp(4rem, 3rem + 5vw, 7rem);
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.heading {
		font-size: var(--text-2xl);
		max-width: 16ch;
		text-wrap: balance;
	}

	@media (min-width: 50em) {
		.inner {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			gap: 3rem;
		}
	}
</style>
```

- [x] **Step 4: Verify**

Run: `pnpm astro check`
Expected: 0 errors. A missing-key error in `es.ts` means Step 1 was skipped.

- [x] **Step 5: Commit**

```bash
git add src/components/Skills.astro src/components/ContactCTA.astro src/i18n/en.ts src/i18n/es.ts
git commit -m "feat: redesign Skills and ContactCTA"
```

---

## Task 13: Rebuild `HomeContent`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/pages/HomeContent.astro`
- Modify: `src/i18n/en.ts`, `src/i18n/es.ts` (add one key)

**Context:** `HomeContent` keeps its `lang` prop and its data fetch (`getCollection(lang === 'es' ? 'proyectos' : 'work')`, sorted newest-first, sliced to 4). The rebuild composes the redesigned components into an editorial home: an asymmetric hero (display heading + role pills on the left, portrait on the right), the `Skills` list, a "Selected Work" section using the offset `Grid`, and `ContactCTA`. Sections are wrapped in `Reveal`. The unused `.mention-card` / `.with-background` CSS from the stock template is dropped. The hero needs one new i18n key for its mono kicker.

- [x] **Step 1: Add the `home.hero.kicker` key to both dictionaries**

In `src/i18n/en.ts`, alongside the `home.hero.*` entries:

```ts
'home.hero.kicker': 'Creative Web Developer',
```

In `src/i18n/es.ts`:

```ts
'home.hero.kicker': 'Desarrollador Web Creativo',
```

- [x] **Step 2: Replace `src/components/pages/HomeContent.astro`**

```astro
---
import { getCollection } from 'astro:content';
import type { Lang } from '../../i18n/ui';
import { useTranslations, getRoutePath } from '../../i18n/utils';

import CallToAction from '../CallToAction.astro';
import Grid from '../Grid.astro';
import Hero from '../Hero.astro';
import Icon from '../Icon.astro';
import Pill from '../Pill.astro';
import PortfolioPreview from '../PortfolioPreview.astro';
import ContactCTA from '../ContactCTA.astro';
import Skills from '../Skills.astro';
import Reveal from '../Reveal.astro';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const projects = (await getCollection(lang === 'es' ? 'proyectos' : 'work'))
	.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
	.slice(0, 4);
---

<div class="home stack">
	<section class="wrapper home-hero">
		<Reveal class="hero-text">
			<Hero
				size="display"
				kicker={t('home.hero.kicker')}
				title={t('home.hero.title')}
				tagline={t('home.hero.tagline')}
			>
				<div class="roles">
					<Pill><Icon icon="code" size="1.1em" /> {t('home.pill.developer')}</Pill>
					<Pill><Icon icon="pencil-line" size="1.1em" /> {t('home.pill.creative')}</Pill>
					<Pill><Icon icon="wand" size="1.1em" /> {t('home.pill.illusionist')}</Pill>
				</div>
			</Hero>
		</Reveal>
		<Reveal class="hero-media" delay={120}>
			<img
				class="portrait"
				alt={t('home.portrait.alt')}
				width="480"
				height="600"
				src="/assets/portrait.jpg"
			/>
		</Reveal>
	</section>

	<Reveal as="section" class="wrapper section">
		<Skills lang={lang} />
	</Reveal>

	<section class="wrapper section">
		<Reveal class="section-head">
			<p class="kicker">{t('home.work.heading')}</p>
			<div class="section-head-row">
				<p class="section-lead">{t('home.work.body')}</p>
				<a class="view-all" href={getRoutePath('work', lang)}>
					{t('home.work.viewAll')} <Icon icon="arrow-right" size="1em" />
				</a>
			</div>
		</Reveal>

		<Grid variant="offset">
			{
				projects.map((project, i) => (
					<li>
						<Reveal delay={i * 90}>
							<PortfolioPreview project={project} lang={lang} />
						</Reveal>
					</li>
				))
			}
		</Grid>
	</section>

	<Reveal as="section">
		<ContactCTA lang={lang} />
	</Reveal>
</div>

<style>
	.home {
		gap: clamp(5rem, 3rem + 8vw, 9rem);
		padding-top: clamp(3rem, 2rem + 4vw, 6rem);
	}

	.home-hero {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.roles {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.portrait {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		object-position: top;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}

	.section-head {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-bottom: 3.5rem;
	}

	.section-head-row {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.section-lead {
		max-width: 42ch;
		font-size: var(--text-lg);
		color: var(--text-dim);
	}

	.view-all {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-strong);
		text-decoration: none;
		white-space: nowrap;
	}
	.view-all:hover {
		color: var(--accent);
	}

	@media (min-width: 50em) {
		.home-hero {
			display: grid;
			grid-template-columns: 7fr 5fr;
			gap: 4rem;
			align-items: center;
		}
		.section-head-row {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-end;
		}
	}
</style>
```

- [x] **Step 3: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`, open `/`. Confirm: the display-size hero with kicker and role pills, the portrait beside it on desktop, the numbered Skills list, the offset project grid with 4 cards, the ContactCTA band. Scroll from the top — sections fade/slide in via `Reveal`. Toggle the theme and check `/es/`. Set the OS to reduced-motion (or DevTools → Rendering → Emulate `prefers-reduced-motion`) and reload — content is immediately visible, no motion. Adjust spacing to taste, then stop the server.

- [x] **Step 4: Commit**

```bash
git add src/components/pages/HomeContent.astro src/i18n/en.ts src/i18n/es.ts
git commit -m "feat: rebuild home page in Sleight of hand identity"
```

---

## Task 14: Rebuild `WorkIndexContent`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/pages/WorkIndexContent.astro`

**Context:** `WorkIndexContent` keeps its `lang` prop and data fetch (all projects from the locale collection, sorted newest-first — no slice). The rebuild is a `page`-size hero plus the full project grid plus `ContactCTA`, with `Reveal` wrappers. Tag filtering is explicitly **not** added here — that is a Phase 3 feature.

- [x] **Step 1: Replace `src/components/pages/WorkIndexContent.astro`**

```astro
---
import { getCollection } from 'astro:content';
import type { Lang } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

import ContactCTA from '../ContactCTA.astro';
import PortfolioPreview from '../PortfolioPreview.astro';
import Hero from '../Hero.astro';
import Grid from '../Grid.astro';
import Reveal from '../Reveal.astro';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);

const projects = (await getCollection(lang === 'es' ? 'proyectos' : 'work')).sort(
	(a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
);
---

<div class="work stack">
	<section class="wrapper">
		<Reveal>
			<Hero
				kicker={t('nav.work')}
				title={t('work.hero.title')}
				tagline={t('work.hero.tagline')}
			/>
		</Reveal>
	</section>

	<section class="wrapper">
		<Grid variant="offset">
			{
				projects.map((project, i) => (
					<li>
						<Reveal delay={(i % 2) * 90}>
							<PortfolioPreview project={project} lang={lang} />
						</Reveal>
					</li>
				))
			}
		</Grid>
	</section>

	<Reveal as="section">
		<ContactCTA lang={lang} />
	</Reveal>
</div>

<style>
	.work {
		gap: clamp(4rem, 3rem + 6vw, 8rem);
		padding-top: clamp(3rem, 2rem + 4vw, 6rem);
	}
</style>
```

- [x] **Step 2: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`, open `/work/` and `/es/proyectos/`. Confirm the hero, the full offset grid of project cards, hover zoom/indicator on a card, the reveal motion, both themes. Stop the server.

- [x] **Step 3: Commit**

```bash
git add src/components/pages/WorkIndexContent.astro
git commit -m "feat: rebuild work index page in Sleight of hand identity"
```

---

## Task 15: Rebuild `AboutContent`

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/pages/AboutContent.astro`

**Context:** `AboutContent` keeps its `lang` prop and all existing keys (`about.hero.*`, `about.background.heading`/`p1`/`p2`, `about.education.heading`/`item1..4`, `about.skills.heading`/`item1..5`). The rebuild uses a `page`-size hero with the pixel-art image in the slot, then three editorial sections where each section's heading sits in a narrow left column and its content in a wider right column. `Reveal` wraps the hero and each section.

- [x] **Step 1: Replace `src/components/pages/AboutContent.astro`**

```astro
---
import type { Lang } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

import ContactCTA from '../ContactCTA.astro';
import Hero from '../Hero.astro';
import Reveal from '../Reveal.astro';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<div class="about stack">
	<section class="wrapper">
		<Reveal>
			<Hero
				kicker={t('nav.about')}
				title={t('about.hero.title')}
				tagline={t('about.hero.tagline')}
			/>
		</Reveal>
		<Reveal delay={120}>
			<img
				class="portrait"
				width="1553"
				height="873"
				src="/assets/pixelart.webp"
				alt="Rodrigo Camino pixel art"
			/>
		</Reveal>
	</section>

	<div class="wrapper sections">
		<Reveal as="section" class="row">
			<h2 class="row-title">{t('about.background.heading')}</h2>
			<div class="row-body">
				<p>{t('about.background.p1')}</p>
				<p>{t('about.background.p2')}</p>
			</div>
		</Reveal>

		<Reveal as="section" class="row">
			<h2 class="row-title">{t('about.education.heading')}</h2>
			<div class="row-body">
				<p>{t('about.education.item1')}</p>
				<p>{t('about.education.item2')}</p>
				<p>{t('about.education.item3')}</p>
				<p>{t('about.education.item4')}</p>
			</div>
		</Reveal>

		<Reveal as="section" class="row">
			<h2 class="row-title">{t('about.skills.heading')}</h2>
			<ul class="row-body skills-list">
				<li>{t('about.skills.item1')}</li>
				<li>{t('about.skills.item2')}</li>
				<li>{t('about.skills.item3')}</li>
				<li>{t('about.skills.item4')}</li>
				<li>{t('about.skills.item5')}</li>
			</ul>
		</Reveal>
	</div>

	<Reveal as="section">
		<ContactCTA lang={lang} />
	</Reveal>
</div>

<style>
	.about {
		gap: clamp(4rem, 3rem + 6vw, 8rem);
		padding-top: clamp(3rem, 2rem + 4vw, 6rem);
	}

	.about > section:first-child {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.portrait {
		width: 100%;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}

	.sections {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-block: 2.5rem;
		border-top: 1px solid var(--border);
	}

	.row-title {
		font-size: var(--text-lg);
		color: var(--accent);
	}

	.row-body {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: var(--measure);
		color: var(--text);
	}

	.skills-list {
		margin: 0;
		padding-left: 1.1rem;
	}
	.skills-list li {
		margin-bottom: 0.4rem;
	}

	@media (min-width: 50em) {
		.row {
			display: grid;
			grid-template-columns: 1fr 2.4fr;
			gap: 3rem;
			padding-block: 3.5rem;
		}
	}
</style>
```

- [x] **Step 2: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`, open `/about/` and `/es/about/`. Confirm the hero with the pixel-art image, the three two-column sections with hairline dividers, the reveal motion, both themes. Stop the server.

- [x] **Step 3: Commit**

```bash
git add src/components/pages/AboutContent.astro
git commit -m "feat: rebuild about page in Sleight of hand identity"
```

---

## Task 16: Rebuild `ProjectDetailContent` and its article styling

**Model:** sonnet

**Files:**
- Modify (full rewrite): `src/components/pages/ProjectDetailContent.astro`

**Context:** `ProjectDetailContent` keeps its `{ lang, entry }` props and `const { Content } = await render(entry)` from Phase 1. The rebuild restyles: the back-link, a `page`-size `Hero` with the tags (`Pill`s) and description in the slot, the lead image, the rendered markdown article, the optional `screenshots` and `video`, and `ContactCTA`. The article markdown uses `###`/`#####` headings, `<b>` bold, and `>` blockquotes (see any file in `src/content/work/`) — the `:global` article styles must cover those. `Reveal` wraps the major blocks.

- [x] **Step 1: Replace `src/components/pages/ProjectDetailContent.astro`**

```astro
---
import { type CollectionEntry, render } from 'astro:content';
import type { Lang } from '../../i18n/ui';
import { useTranslations, getRoutePath } from '../../i18n/utils';

import ContactCTA from '../ContactCTA.astro';
import Hero from '../Hero.astro';
import Icon from '../Icon.astro';
import Pill from '../Pill.astro';
import Reveal from '../Reveal.astro';

interface Props {
	lang: Lang;
	entry: CollectionEntry<'work'> | CollectionEntry<'proyectos'>;
}

const { lang, entry } = Astro.props;
const t = useTranslations(lang);
const { Content } = await render(entry);
const year = entry.data.publishDate.getFullYear();
---

<div class="project stack">
	<header class="wrapper project-header">
		<a class="back-link" href={`${getRoutePath('work', lang)}/`}>
			<Icon icon="arrow-left" size="1em" /> {t('project.back')}
		</a>
		<Reveal>
			<Hero kicker={String(year)} title={entry.data.title}>
				<div class="details">
					<div class="tags">
						{entry.data.tags.map((tag) => <Pill>{tag}</Pill>)}
					</div>
					<p class="description">{entry.data.description}</p>
				</div>
			</Hero>
		</Reveal>
	</header>

	<main class="wrapper project-main">
		{
			entry.data.img && (
				<Reveal>
					<img class="lead" src={entry.data.img} alt={entry.data.img_alt || ''} />
				</Reveal>
			)
		}

		<Reveal class="article">
			<Content />
		</Reveal>

		{
			entry.data.screenshots && (
				<div class="shots">
					{entry.data.screenshots.map((s) => (
						<Reveal>
							<img src={s} alt="" loading="lazy" />
						</Reveal>
					))}
				</div>
			)
		}

		{
			entry.data.video && (
				<Reveal class="video">
					<iframe
						src={entry.data.video}
						title="Project video"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</Reveal>
			)
		}
	</main>

	<Reveal as="section">
		<ContactCTA lang={lang} />
	</Reveal>
</div>

<style>
	.project {
		gap: clamp(4rem, 3rem + 6vw, 7rem);
		padding-top: clamp(2rem, 1rem + 3vw, 4rem);
	}

	.project-header {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid var(--border);
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-dim);
		text-decoration: none;
	}
	.back-link:hover {
		color: var(--accent);
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 0.5rem;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.description {
		max-width: var(--measure);
		font-size: var(--text-lg);
		color: var(--text-dim);
	}

	.project-main {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.lead,
	.shots img {
		width: 100%;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}

	.shots {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.video {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		border-radius: var(--radius-lg);
	}
	.video :global(iframe) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	/* ---------- Rendered markdown article ---------- */
	.article {
		max-width: var(--measure);
		margin-inline: auto;
		color: var(--text);
	}

	.article :global(> * + *) {
		margin-top: 1.15rem;
	}

	.article :global(h1),
	.article :global(h2),
	.article :global(h3) {
		margin-top: 2.5rem;
		font-size: var(--text-xl);
	}
	.article :global(h4),
	.article :global(h5) {
		margin-top: 2rem;
		font-size: var(--text-md);
		color: var(--accent);
	}

	.article :global(b),
	.article :global(strong) {
		color: var(--text-strong);
		font-weight: 600;
	}

	.article :global(a) {
		color: var(--accent);
		text-underline-offset: 0.2em;
	}

	.article :global(ul),
	.article :global(ol) {
		padding-left: 1.25rem;
	}
	.article :global(li) {
		margin-top: 0.4rem;
	}

	.article :global(img) {
		border: 1px solid var(--border);
		border-radius: var(--radius);
	}

	.article :global(code) {
		font-family: var(--font-mono);
		font-size: 0.9em;
		padding: 0.1em 0.35em;
		background: var(--surface-2);
		border-radius: var(--radius-sm);
	}

	.article :global(blockquote) {
		margin-top: 1.5rem;
		padding: 0.25rem 0 0.25rem 1.5rem;
		border-left: 2px solid var(--accent);
		color: var(--text-strong);
		font-size: var(--text-md);
	}
</style>
```

- [x] **Step 2: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`. Open an EN project (e.g. `/work/BlukiStudio/`) and an ES project (`/es/proyectos/BlukiStudio/`). Confirm: back-link, hero with year kicker + tags + description, lead image, the markdown article with styled headings/bold/blockquotes/lists, screenshots stacked, the back-link returns to the index. Open a project with a `video` field if one exists. Check both themes and reveal motion. Stop the server.

- [x] **Step 3: Commit**

```bash
git add src/components/pages/ProjectDetailContent.astro
git commit -m "feat: rebuild project detail page and article styling"
```

---

## Task 17: Rebuild `NotFoundContent` (404)

**Model:** haiku

**Files:**
- Modify (full rewrite): `src/components/pages/NotFoundContent.astro`
- Modify: `src/i18n/en.ts`, `src/i18n/es.ts` (add one key)

**Context:** `NotFoundContent` keeps its `lang` prop and the `notFound.title`/`notFound.tagline` keys. The rebuild centers a `page`-size hero and adds a "back home" link, which needs one new i18n key. It is rendered by both `src/pages/404.astro` and `src/pages/es/404.astro`.

- [x] **Step 1: Add the `notFound.home` key to both dictionaries**

In `src/i18n/en.ts`, alongside the `notFound.*` entries:

```ts
'notFound.home': 'Back to home',
```

In `src/i18n/es.ts`:

```ts
'notFound.home': 'Volver al inicio',
```

- [x] **Step 2: Replace `src/components/pages/NotFoundContent.astro`**

```astro
---
import type { Lang } from '../../i18n/ui';
import { useTranslations, getRoutePath } from '../../i18n/utils';
import Hero from '../Hero.astro';
import Icon from '../Icon.astro';

interface Props {
	lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<section class="not-found wrapper">
	<Hero align="center" title={t('notFound.title')} tagline={t('notFound.tagline')}>
		<a class="home-link" href={getRoutePath('home', lang)}>
			<Icon icon="arrow-left" size="1em" /> {t('notFound.home')}
		</a>
	</Hero>
</section>

<style>
	.not-found {
		display: flex;
		justify-content: center;
		padding-block: clamp(5rem, 3rem + 10vw, 12rem);
	}

	.home-link {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		margin-top: 1rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--text-dim);
		text-decoration: none;
	}
	.home-link:hover {
		color: var(--accent);
	}
</style>
```

- [x] **Step 3: Verify**

Run: `pnpm astro check`
Expected: 0 errors.

Run: `pnpm dev`, open a non-existent path like `/nope` and `/es/nope`. Confirm the centered 404 hero and the working back-home link, both themes. Stop the server.

- [x] **Step 4: Commit**

```bash
git add src/components/pages/NotFoundContent.astro src/i18n/en.ts src/i18n/es.ts
git commit -m "feat: rebuild 404 page in Sleight of hand identity"
```

---

## Task 18: Final verification and roadmap update

**Model:** haiku

**Files:**
- Modify: `docs/superpowers/ROADMAP.md`

- [x] **Step 1: Confirm no stale stock-template references remain**

Run: `grep -rn "theme-dark\|--gray-\|--accent-regular\|font-brand\|bg-image-\|gradient-subtle" src/`
Expected: no output. Any hit is a component still referencing a deleted Phase-1/stock token — fix it to use the Task 2 token system before continuing.

- [x] **Step 2: Type-check, test, and build**

Run: `pnpm astro check && pnpm test && pnpm build`
Expected: 0 type errors, the 14 i18n tests still pass, build succeeds.

- [x] **Step 3: Full visual QA**

Run `pnpm dev` and walk every route in **both languages and both themes** (toggle theme on each): `/`, `/work/`, a project detail, `/about/`, a bad URL (404), and the `/es/` equivalents. On each, confirm: correct fonts, amber accent, grain canvas, hairline borders, no stock-template purple, no console errors, no layout overflow. Then enable `prefers-reduced-motion` (DevTools → Rendering) and reload `/` — all content is immediately visible with no motion. Stop the server.

- [x] **Step 4: Update the roadmap**

In `docs/superpowers/ROADMAP.md`:
- Set the **Live status** table: `Current phase` → Phase 2 — Redesign; `Phase 2 state` → COMPLETE; `Next action` → Write the Phase 3 plan (writing-plans) against the finished code.
- In the phase table, set Phase 2 `State` → COMPLETE and `Plan` → `plans/2026-05-16-phase-2-redesign.md`; set Phase 3 `State` → NEXT — plan to be written.
- Append a **Phase 2 — Redesign** task log section listing Tasks 1–18 as `[x]`.
- Append to the **Decision log**: the three locked decisions from this plan's header (typography = Space Grotesk/Inter/JetBrains Mono overriding the spec's serif wording; dark theme as the default; flat grain canvas replacing the stock background-image system).

- [x] **Step 5: Commit**

```bash
git add docs/superpowers/ROADMAP.md docs/superpowers/plans/2026-05-16-phase-2-redesign.md
git commit -m "docs: mark Phase 2 complete in roadmap"
```

---

## Self-Review — spec coverage

Phase 2 scope from the spec (§2 design identity, §3 components, §4 build sequence), mapped to tasks:

- Near-black base + amber accent + light mode from shared tokens → Task 2
- Editorial display / sans / mono typography → Tasks 2, 3
- Dark default theme → Tasks 2, 3, 7
- Flat grain canvas, stock backgrounds removed → Task 4
- `Reveal` scroll-motion wrapper, `prefers-reduced-motion` respected → Task 5 (and reduced-motion guards in Tasks 6, 11)
- `Nav`, `Footer` redesigned → Tasks 8, 9
- `Hero`, `Skills`, project cards, editorial grid → Tasks 10, 11, 12
- `Pill`, `Icon` (amber gradient stops via tokens), `ThemeToggle`, `LangToggle` → Tasks 2, 6, 7
- Home, Work, About, project pages, 404 rebuilt → Tasks 13, 14, 15, 16, 17
- Dark/light themes verified across every page → Task 18

Explicitly **out of scope** for Phase 2 (deferred to their phases): `WorkFilter` tag filtering, `ContactForm` + Astro Actions, `BlogCard` + blog collection (all Phase 3); new/updated project and bio content (Phase 4). `Icon.astro` itself is not rewritten — its `gradient` prop already reads `--gradient-stop-1..3`, which Task 2 redefines to amber. `prose.astro` is unused by the rendered pages and is left as-is.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-16-phase-2-redesign.md`. Two execution options:

1. **Subagent-Driven (recommended)** — dispatch a fresh subagent per task, review between tasks, fast iteration. Honor `docs/prompts/subagents-directive.md` when delegating, and use each task's `haiku`/`sonnet` model tag.
2. **Inline Execution** — execute tasks in this session with checkpoints for review.

Which approach?

