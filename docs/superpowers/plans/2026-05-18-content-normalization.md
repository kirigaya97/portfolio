# Project Content Normalization + Technology Badges — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **This project ships with a dedicated execution prompt** — `docs/prompts/content-normalization-execution-prompt.txt` — which orchestrates the plan **inline** with manual wave-based parallelization and does **not** use the subagent-driven-development / executing-plans skills. If you were handed that prompt, follow it; it overrides the line above.

**Goal:** Normalize all 40 project case-study `.md` files to one canonical Markdown-native structure, and move each project's technology list out of body prose into a structured frontmatter field rendered as an accessible badge strip.

**Architecture:** Three slices. (1) **Content** — 40 `.md` files (`work/` EN + `proyectos/` ES) are reformatted to a fixed 4-section body and a canonical frontmatter, with technologies extracted into a new `technologies` array. (2) **Schema** — `projectSchema` gains a required `technologies` field. (3) **Render** — a new `TechBadges.astro` component renders the array as a labeled, tooltip-equipped badge strip; `ProjectDetailContent.astro` mounts it below the header. Content is normalized **before** the schema makes the field required, so every checkpoint stays green (Zod silently strips the unknown key until the schema knows it).

**Tech Stack:** Astro 6.3.x, Astro content collections (`glob()` loader, Zod schema), Tailwind CSS 4, scoped Astro `<style>`, CSS custom properties, accessible CSS-only tooltips (`aria-describedby` + `role="tooltip"`), pnpm. No JavaScript is added.

**Source spec:** `docs/superpowers/specs/2026-05-18-content-normalization-design.md`.

**Verification is static only** — no browser, no `pnpm dev`. Each checkpoint is `pnpm astro check`, `pnpm build`, `pnpm test`, and `grep`.

**Model tags:** each task is tagged `haiku` (mechanical transcription of content shown verbatim in this plan) or `sonnet` (per-file transformation requiring judgement). Tasks marked **orchestrator** are run directly by the orchestrator.

---

## Normalization Rules (reference — used by Tasks 4–8)

Every project `.md` file is transformed to match the canonical form below. **Prose is preserved** — only structure, markup, and the location of the technology list change. Never invent, translate, or rewrite case-study content.

### Canonical frontmatter

Field order, exactly: `title`, `publishDate`, `img`, `img_alt`, `description`, `tags`, `technologies`, `screenshots`, `video`. Omit `img_alt`/`screenshots`/`video` only if the source file lacks them.

- `screenshots` is rewritten from any inline `[ ... ]` flow array to a block list — one `- /assets/...` per line, no trailing commas.
- `tags` stays a block list, unchanged values.
- `technologies` is **new** — a block list of `{ name, note }` objects (see extraction rules below).
- `title`, `publishDate`, `img`, `img_alt`, `description`, `video` keep their existing values verbatim.

```yaml
---
title: Example Project
publishDate: 2024-01-01 00:00:00
img: /assets/example/1.png
img_alt: Screenshot of the Example project.
description: |
  One-line existing description, preserved verbatim.
tags:
  - Dev
  - Design
technologies:
  - name: Astro 6
    note: Static-first framework, zero JS by default.
  - name: Resend
    note: Transactional email for the contact form.
screenshots:
  - /assets/example/2.png
  - /assets/example/3.png
---
```

### Canonical body — exactly four sections, in this order

| Section | EN heading | ES heading | Level |
|---|---|---|---|
| Overview | `Project Overview` | `Resumen del Proyecto` | `###` |
| Objectives | `Objectives` | `Objetivos` | `####` |
| Workflow | `Project Workflow` | `Flujo de Trabajo del Proyecto` | `####` |
| Results | `Results and Impact` | `Resultados e Impacto` | `####` |

Body formatting rules:

1. Overview heading is `###`; the other three are `####`. No other levels, no skipping.
2. Heading text is Title Case, **never** wrapped in `**...**`.
3. Exactly one blank line after every heading and between every block (paragraph, list).
4. No blank lines **between** consecutive bullets in the same list.
5. Bullets use the form `- **Label** — text` — bold label, space, em dash `—`, space, then text. The em dash and text are **outside** the bold span. A label with a trailing colon (`**Label:**`) loses the colon.
6. Convert every `<b>...</b>` / `<strong>...</strong>` to Markdown `**...**`. No raw HTML remains.
7. Delete every standalone `###` separator line.
8. Delete the entire "Technologies Used" / "Tecnologías Utilizadas" body section — its content moves to frontmatter `technologies`.
9. Any non-canonical section is merged into the nearest canonical section. Its heading is removed; its bullets are appended to that section's list. (Known case: CAPFA's `Design and Development` / `Diseño y Desarrollo` → merge into `Project Workflow` / `Flujo de Trabajo del Proyecto`.)
10. Overview content stays as one prose paragraph (no bullets). If a source Overview is a single sentence, keep it a single sentence.

### Technology extraction rules

From the source file's "Technologies Used" section, produce the `technologies` frontmatter array:

- One `{ name, note }` object per technology, **in source order**.
- `name` — the technology name only (the bolded lead text, minus any trailing colon). E.g. `Next.js 16 (App Router)`, `Tailwind CSS v4`, `WordPress`.
- `note` — **one concise sentence**, ≤ ~16 words, describing the role/reason. Take the source rationale and trim filler ("Chosen for", "Used to", "Selected as") so it reads as a crisp clause. Keep the source language (English for `work/`, Spanish for `proyectos/`). Preserve meaning; do not invent.
- A note containing a colon, comma, or `#` is fine as a plain YAML scalar; if it contains a leading special char or a `: ` sequence, quote it with double quotes.

### Worked example (old EN file)

Source (`work/Santiago.md`, abridged):

```markdown
#### Technologies Used
- **WordPress**: For efficient content management and easy updates.
- **DIVI Builder**: Enabled a modular design and customizable layout for enhanced engagement.
- **HTML/CSS/JavaScript**: Applied custom code for interactive elements, minimizing plugin load for better performance.

#### Results and Impact
- **Increased Bookings**: The optimized landing page effectively drives engagement...
```

Result — frontmatter gains:

```yaml
technologies:
  - name: WordPress
    note: Content management with easy client updates.
  - name: DIVI Builder
    note: Modular, customizable layout for richer engagement.
  - name: HTML/CSS/JavaScript
    note: Custom interactive elements with minimal plugin load.
```

Result — body section becomes (note `####`, em-dash bullets, no "Technologies Used"):

```markdown
#### Results and Impact

- **Increased bookings** — The optimized landing page converts social-media visitors into clients.
```

### Worked example (new EN file)

Source (`work/BlukiStudio.md`, abridged):

```markdown
##### Technologies Used
>Next.js 16 (App Router): Framework chosen for its server/client component model and `next/dynamic` for safe Three.js SSR exclusion.
###
>React Three Fiber v9: React binding for Three.js; enables scene composition with hooks.
```

Result — frontmatter gains:

```yaml
technologies:
  - name: Next.js 16 (App Router)
    note: Server/client component model with safe Three.js SSR exclusion.
  - name: React Three Fiber v9
    note: React binding for Three.js — scene composition with hooks.
```

The `>` blockquote block and its `###` separators are deleted; `##### Objectives` etc. become `#### Objectives`; `- <b>Label:</b> text` bullets become `- **Label** — text`.

---

## Task 1: Kickoff — confirm a green baseline

**Model:** haiku — **orchestrator runs this directly.**

- [x] **Step 1: Confirm the branch**

Run: `git branch --show-current`
Expected: `redesign`. If not, `git checkout redesign`.

- [x] **Step 2: Confirm a green baseline**

Run: `pnpm astro check && pnpm test && pnpm build`
Expected: 0 errors, 32 tests pass, build succeeds. If anything fails, stop — this plan assumes a green tree.

---

## Task 2: Create the `TechBadges` component

**Model:** haiku (transcribe the file shown verbatim)

**Files:**
- Create: `src/components/TechBadges.astro`

**Context:** A labeled badge strip. Each badge shows a technology name; its `note` is a CSS-only tooltip shown on **hover and focus**. The note element is always in the accessibility tree (hidden with `opacity` only, never `display:none`/`visibility:hidden`) and linked via `aria-describedby` + `role="tooltip"`, so screen readers announce it and a keyboard/touch tap reveals it. No JavaScript.

- [x] **Step 1: Create `src/components/TechBadges.astro`**

```astro
---
interface Props {
	/** Ordered technology list from a project's frontmatter. */
	technologies: { name: string; note: string }[];
	/** Localized section label, e.g. "Technologies". */
	heading: string;
}

const { technologies, heading } = Astro.props;
---

<section class="tech" aria-label={heading}>
	<p class="tech-label">{heading}</p>
	<ul class="tech-list">
		{
			technologies.map((tech, i) => (
				<li class="badge" tabindex="0" aria-describedby={`tech-note-${i}`}>
					<span class="badge-name">{tech.name}</span>
					<span id={`tech-note-${i}`} role="tooltip" class="badge-note">
						{tech.note}
					</span>
				</li>
			))
		}
	</ul>
</section>

<style>
	.tech {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.tech-label {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-dim);
	}

	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.badge {
		position: relative;
		display: inline-flex;
		align-items: center;
		padding: 0.4rem 0.85rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-strong);
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		cursor: help;
		transition: border-color var(--dur-quick) var(--ease-quick);
	}
	.badge:hover,
	.badge:focus-visible {
		border-color: var(--accent);
		outline: none;
	}

	/* Hidden with opacity only — stays in the a11y tree for aria-describedby. */
	.badge-note {
		position: absolute;
		bottom: calc(100% + 0.5rem);
		left: 0;
		z-index: 5;
		width: max-content;
		max-width: 16rem;
		padding: 0.5rem 0.75rem;
		font-family: var(--font-body);
		font-size: var(--text-xs);
		line-height: 1.4;
		text-transform: none;
		letter-spacing: normal;
		color: var(--text);
		background: var(--surface-2);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-sm);
		opacity: 0;
		pointer-events: none;
		transition: opacity var(--dur-quick) var(--ease-quick);
	}

	.badge:hover .badge-note,
	.badge:focus .badge-note {
		opacity: 1;
	}

	@media (prefers-reduced-motion: reduce) {
		.badge,
		.badge-note {
			transition: none;
		}
	}
</style>
```

- [x] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/components/TechBadges.astro
git commit -m "feat: add TechBadges component"
```

---

## Task 3: Add the `project.tech.heading` i18n key

**Model:** haiku (transcribe)

**Files:**
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/es.ts`

**Context:** One new key in each dictionary. `en.ts` is the `UIKey` source of truth; `es.ts` is typed `Record<UIKey, string>`, so both must gain the key or the build fails. Insert it immediately after the existing `'project.back'` key in each file.

- [x] **Step 1: In `src/i18n/en.ts`, replace this line**

```ts
  'project.back': 'Work',
```

with:

```ts
  'project.back': 'Work',
  'project.tech.heading': 'Technologies',
```

- [x] **Step 2: In `src/i18n/es.ts`, replace this line**

```ts
  'project.back': 'Proyectos',
```

with:

```ts
  'project.back': 'Proyectos',
  'project.tech.heading': 'Tecnologías',
```

- [x] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/i18n/en.ts src/i18n/es.ts
git commit -m "feat: add project.tech.heading i18n key"
```

---

## Task 4: Content batch A — old projects (CAPFA, Lena, RobertoMansilla, SDI)

**Model:** sonnet

**Files (8):**
- `src/content/work/CAPFA.md`, `src/content/proyectos/CAPFA.md`
- `src/content/work/Lena.md`, `src/content/proyectos/Lena.md`
- `src/content/work/RobertoMansilla.md`, `src/content/proyectos/RobertoMansilla.md`
- `src/content/work/SDI.md`, `src/content/proyectos/SDI.md`

**Context:** Apply the **Normalization Rules** above to each file. These four projects carry the most quirks — read each file first, then transform. Per-file notes:

- **CAPFA** (EN + ES) — has an extra section (`Design and Development` / `Diseño y Desarrollo`). Per rule 9, drop that heading and append its bullets to `Project Workflow` / `Flujo de Trabajo del Proyecto`. Its "Technologies Used" uses `><b>Name:</b>` blockquotes.
- **Lena** (EN + ES) — headings are bold-wrapped (`### **Project Overview**`); unbold them (rule 2). Workflow uses a numbered list — convert to `- **Label** — text` bullets. Technologies are plain `- **Name**: desc` bullets.
- **RobertoMansilla** (EN + ES) — all headings are `###` and bold-wrapped; fix levels (rule 1) and unbold (rule 2).
- **SDI** (EN + ES) — mixed heading levels and blank lines between bullets (rule 4 removes them). "Technologies Used" uses `><b>Name:</b>` blockquotes with `###` separators.

- [x] **Step 1: Normalize the 4 `work/` (EN) files** — apply the Normalization Rules to `CAPFA.md`, `Lena.md`, `RobertoMansilla.md`, `SDI.md` in `src/content/work/`. English `note` text.

- [x] **Step 2: Normalize the 4 `proyectos/` (ES) files** — apply the Normalization Rules to the same four filenames in `src/content/proyectos/`. Spanish headings (see the section table) and Spanish `note` text.

- [x] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/content/work/CAPFA.md src/content/work/Lena.md src/content/work/RobertoMansilla.md src/content/work/SDI.md src/content/proyectos/CAPFA.md src/content/proyectos/Lena.md src/content/proyectos/RobertoMansilla.md src/content/proyectos/SDI.md
git commit -m "content: normalize structure of CAPFA, Lena, RobertoMansilla, SDI (EN/ES)"
```

---

## Task 5: Content batch B — old projects (Larry, Michel, Portfolio, Santiago)

**Model:** sonnet

**Files (8):**
- `src/content/work/Larry.md`, `src/content/proyectos/Larry.md`
- `src/content/work/Michel.md`, `src/content/proyectos/Michel.md`
- `src/content/work/Portfolio.md`, `src/content/proyectos/Portfolio.md`
- `src/content/work/Santiago.md`, `src/content/proyectos/Santiago.md`

**Context:** Apply the **Normalization Rules** to each file. Per-file notes:

- **Larry** (EN + ES) — Overview is `###`, subsections are `####` (already correct levels). Main work: em-dash bullets, technologies extraction, frontmatter order, `screenshots` block list.
- **Michel** (EN + ES) — subsections are `#####`; drop to `####`. "Technologies Used" uses `>Name: desc` blockquotes.
- **Portfolio** (EN + ES) — every heading is `###`; Overview stays `###`, the other three become `####` (rule 1).
- **Santiago** (EN + ES) — Overview `###` + subsections `####` already; plain `- **Name**: desc` technology bullets; has a `video` frontmatter field — keep it (last, per canonical order). `screenshots` is an inline array with a trailing comma — rewrite as a clean block list.

- [x] **Step 1: Normalize the 4 `work/` (EN) files** — `Larry.md`, `Michel.md`, `Portfolio.md`, `Santiago.md` in `src/content/work/`.

- [x] **Step 2: Normalize the 4 `proyectos/` (ES) files** — same four filenames in `src/content/proyectos/`.

- [x] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/content/work/Larry.md src/content/work/Michel.md src/content/work/Portfolio.md src/content/work/Santiago.md src/content/proyectos/Larry.md src/content/proyectos/Michel.md src/content/proyectos/Portfolio.md src/content/proyectos/Santiago.md
git commit -m "content: normalize structure of Larry, Michel, Portfolio, Santiago (EN/ES)"
```

---

## Task 6: Content batch C — new projects (BlukiStudio, ChapMagic, EcoLanding, Gaudiano)

**Model:** sonnet

**Files (8):**
- `src/content/work/BlukiStudio.md`, `src/content/proyectos/BlukiStudio.md`
- `src/content/work/ChapMagic.md`, `src/content/proyectos/ChapMagic.md`
- `src/content/work/EcoLanding.md`, `src/content/proyectos/EcoLanding.md`
- `src/content/work/Gaudiano.md`, `src/content/proyectos/Gaudiano.md`

**Context:** Apply the **Normalization Rules**. These "new" files share one shape: Overview `###` + subsections `#####` (→ `####`), `- <b>Label:</b> text` bullets (→ `- **Label** — text`), and a "Technologies Used" section of `>Name: desc` blockquotes separated by standalone `###` lines (→ extract to `technologies`, delete the block). Notes are often verbose multi-clause sentences — trim each to one concise clause per the extraction rules.

- [x] **Step 1: Normalize the 4 `work/` (EN) files** in `src/content/work/`.

- [x] **Step 2: Normalize the 4 `proyectos/` (ES) files** in `src/content/proyectos/`.

- [x] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/content/work/BlukiStudio.md src/content/work/ChapMagic.md src/content/work/EcoLanding.md src/content/work/Gaudiano.md src/content/proyectos/BlukiStudio.md src/content/proyectos/ChapMagic.md src/content/proyectos/EcoLanding.md src/content/proyectos/Gaudiano.md
git commit -m "content: normalize structure of BlukiStudio, ChapMagic, EcoLanding, Gaudiano (EN/ES)"
```

---

## Task 7: Content batch D — new projects (Hubbard, Ilusionista, Logistica, MagiaYBurbujas)

**Model:** sonnet

**Files (8):**
- `src/content/work/Hubbard.md`, `src/content/proyectos/Hubbard.md`
- `src/content/work/Ilusionista.md`, `src/content/proyectos/Ilusionista.md`
- `src/content/work/Logistica.md`, `src/content/proyectos/Logistica.md`
- `src/content/work/MagiaYBurbujas.md`, `src/content/proyectos/MagiaYBurbujas.md`

**Context:** Same "new" file shape as Task 6 — Overview `###` + subsections `#####` (→ `####`), `<b>` bullets (→ `**`), `>Name: desc` technology blockquotes with `###` separators (→ extract, delete). Apply the Normalization Rules; trim verbose notes.

- [x] **Step 1: Normalize the 4 `work/` (EN) files** in `src/content/work/`.

- [x] **Step 2: Normalize the 4 `proyectos/` (ES) files** in `src/content/proyectos/`.

- [x] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/content/work/Hubbard.md src/content/work/Ilusionista.md src/content/work/Logistica.md src/content/work/MagiaYBurbujas.md src/content/proyectos/Hubbard.md src/content/proyectos/Ilusionista.md src/content/proyectos/Logistica.md src/content/proyectos/MagiaYBurbujas.md
git commit -m "content: normalize structure of Hubbard, Ilusionista, Logistica, MagiaYBurbujas (EN/ES)"
```

---

## Task 8: Content batch E — new projects (Nub3, Producciones8888, SADA, Vazquez)

**Model:** sonnet

**Files (8):**
- `src/content/work/Nub3.md`, `src/content/proyectos/Nub3.md`
- `src/content/work/Producciones8888.md`, `src/content/proyectos/Producciones8888.md`
- `src/content/work/SADA.md`, `src/content/proyectos/SADA.md`
- `src/content/work/Vazquez.md`, `src/content/proyectos/Vazquez.md`

**Context:** Same "new" file shape as Task 6. Apply the Normalization Rules; trim verbose notes.

- [x] **Step 1: Normalize the 4 `work/` (EN) files** in `src/content/work/`.

- [x] **Step 2: Normalize the 4 `proyectos/` (ES) files** in `src/content/proyectos/`.

- [x] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/content/work/Nub3.md src/content/work/Producciones8888.md src/content/work/SADA.md src/content/work/Vazquez.md src/content/proyectos/Nub3.md src/content/proyectos/Producciones8888.md src/content/proyectos/SADA.md src/content/proyectos/Vazquez.md
git commit -m "content: normalize structure of Nub3, Producciones8888, SADA, Vazquez (EN/ES)"
```

---

## Task 9: Add `technologies` to the project schema

**Model:** haiku (transcribe)

**Files:**
- Modify: `src/content.config.ts`

**Context:** `projectSchema` gains a required `technologies` array. This runs **after** Tasks 4–8, so every `.md` file already carries the field — making it required keeps the build green. (Run before the content is migrated and the build would fail.)

- [x] **Step 1: In `src/content.config.ts`, replace this block**

```ts
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()),
  img: z.string(),
  img_alt: z.string().optional(),
  screenshots: z.array(z.string()).optional(),
  video: z.string().optional(),
});
```

with:

```ts
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.coerce.date(),
  tags: z.array(z.string()),
  technologies: z.array(
    z.object({
      name: z.string(),
      note: z.string(),
    }),
  ),
  img: z.string(),
  img_alt: z.string().optional(),
  screenshots: z.array(z.string()).optional(),
  video: z.string().optional(),
});
```

- [x] **Step 2: Commit** (orchestrator, after the wave)

```bash
git add src/content.config.ts
git commit -m "feat: add technologies field to the project schema"
```

---

## Task 10: Render `TechBadges` on the project detail page

**Model:** haiku (transcribe)

**Files:**
- Modify: `src/components/pages/ProjectDetailContent.astro`

**Context:** Import `TechBadges` and render it as the first block inside `.project-main`, below the header and above the lead image. It is wrapped in `Reveal` for motion consistency, and only renders when the project has technologies.

- [x] **Step 1: Add the import** — in `src/components/pages/ProjectDetailContent.astro`, replace this line

```astro
import Reveal from '../Reveal.astro';
```

with:

```astro
import Reveal from '../Reveal.astro';
import TechBadges from '../TechBadges.astro';
```

- [x] **Step 2: Render the badge strip** — in the same file, replace this block

```astro
	<main class="wrapper project-main">
		{
			entry.data.img && (
				<Reveal>
					<img class="lead" src={entry.data.img} alt={entry.data.img_alt || ''} />
				</Reveal>
			)
		}
```

with:

```astro
	<main class="wrapper project-main">
		{
			entry.data.technologies.length > 0 && (
				<Reveal>
					<TechBadges
						technologies={entry.data.technologies}
						heading={t('project.tech.heading')}
					/>
				</Reveal>
			)
		}

		{
			entry.data.img && (
				<Reveal>
					<img class="lead" src={entry.data.img} alt={entry.data.img_alt || ''} />
				</Reveal>
			)
		}
```

- [x] **Step 3: Commit** (orchestrator, after the wave)

```bash
git add src/components/pages/ProjectDetailContent.astro
git commit -m "feat: render the technology badge strip on project pages"
```

---

## Task 11: Final verification and roadmap note

**Model:** haiku — **orchestrator runs this directly.**

**Files:**
- Modify: `docs/superpowers/ROADMAP.md`

- [x] **Step 1: Static verification**

Run: `pnpm astro check`
Expected: 0 errors, 0 warnings.

Run: `pnpm test`
Expected: 32 tests pass (no test logic changed).

Run: `pnpm build`
Expected: build succeeds — all 40 project detail pages render against the new schema.

- [x] **Step 2: Sanity greps**

Run: `grep -rL "technologies:" src/content/work src/content/proyectos`
Expected: **no output** — every file has the field.

Run: `grep -rn "<b>\|</b>" src/content/work src/content/proyectos`
Expected: **no output** — no raw HTML bold remains.

Run: `grep -rni "technologies used\|tecnolog.as utilizadas" src/content/work src/content/proyectos`
Expected: **no output** — the body section is gone everywhere.

Run: `grep -rn "^>" src/content/work src/content/proyectos`
Expected: **no output** — no blockquote technology lists remain.

- [x] **Step 3: Append a Decision-log entry to `docs/superpowers/ROADMAP.md`**

Add this line to the end of the **Decision log** section (newest last):

```
- **2026-05-18** — Project content normalized: all 40 case-study `.md` files unified to one Markdown-native structure (4 body sections, `###`/`####` levels, `**bold**`, em-dash bullets). Technologies moved from body prose into a `technologies: [{name, note}]` frontmatter field, rendered as an accessible badge strip (`TechBadges.astro`) on project detail pages. Spec: `docs/superpowers/specs/2026-05-18-content-normalization-design.md`.
```

- [x] **Step 4: Commit**

```bash
git add docs/superpowers/ROADMAP.md
git commit -m "docs: record the content-normalization work in the roadmap"
```

---

## Dependency & wave summary

- Tasks 2, 3, 4, 5, 6, 7, 8 are mutually independent — disjoint file sets, and the schema does not yet require `technologies`, so Zod silently strips it. They run in **one parallel wave**.
- Task 9 (schema → required) must run **after** Tasks 4–8: every file must already carry `technologies`.
- Task 10 depends on Task 2 (`TechBadges`), Task 3 (`project.tech.heading`), and Task 9 (the typed `technologies` field).
- Task 11 runs last.

The execution prompt `docs/prompts/content-normalization-execution-prompt.txt` maps these to four waves.

## Self-review

- **Spec coverage:** §1 canonical body → Tasks 4–8 + Normalization Rules. §2 frontmatter/schema → Normalization Rules (frontmatter) + Task 9 (schema). §3 TechBadges + placement → Tasks 2 and 10. §4 i18n + ES headings → Task 3 + the EN/ES heading table. Migration scope (40 files + 3 code + 2 i18n) → Tasks 2–10. Verification → Task 11. No gaps.
- **Placeholders:** none — every code/transcription task carries verbatim content; content tasks carry exact rules + two worked before/after examples + per-file quirk notes.
- **Type consistency:** `technologies: { name: string; note: string }[]` is identical across the schema (Task 9), the `TechBadges` `Props` (Task 2), and the `ProjectDetailContent` call site (Task 10). The i18n key `project.tech.heading` is defined in Task 3 and consumed in Task 10.
