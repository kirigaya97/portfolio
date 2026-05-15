# Phase 1 — Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Orchestration hub:** `docs/superpowers/ROADMAP.md` holds the live status across all 4 phases. After completing each task below, check its boxes here **and** update the Live status table + Task progress log in the roadmap, then commit. At the end of this plan, stop — do not start Phase 2; its plan is written separately against the finished code.

**Goal:** Modernize the portfolio's technical base — upgrade Astro 4→6, migrate Tailwind 3→4 and the Vercel adapter, move to the Content Layer API, and refactor the i18n system from a fully-duplicated `es/` tree to one unified component set driven by translation dictionaries — without changing the visual design.

**Architecture:** Work happens on a long-lived `redesign` branch. Upgrades land first (Astro core, adapter, Tailwind, Content Layer) with `pnpm astro check` + `pnpm build` as the verification gate, since the project has no test suite. Then the i18n refactor: a `src/i18n/` module (typed dictionaries + pure utility functions, unit-tested with Vitest under TDD) replaces all hardcoded strings; the 14 `src/components/es/` files and duplicated page bodies are deleted in favor of one component set that takes a `lang` prop. Per-locale page files remain as thin routing entrypoints (Astro maps files to routes) but their content moves into shared, `lang`-aware components — eliminating ~95% of the duplication.

**Tech Stack:** Astro 6.3.x, `@astrojs/vercel` 6.x, Tailwind CSS 4 (`@tailwindcss/vite`), Content Layer API (`glob()` loader), Vitest, TypeScript, pnpm.

**Source references:**
- Spec: `docs/superpowers/specs/2026-05-15-portfolio-redesign-design.md`
- i18n audit (complete EN/ES string tables): `docs/agents-logs/2026-05-15-i18n-structure-audit.md`

**Model tags:** Each task is tagged `haiku` (mechanical, low-judgment) or `sonnet` (design/logic judgment) for multi-agent execution.

**Verification note:** There is no existing test suite. Upgrade tasks (1–9) verify with `pnpm astro check` and `pnpm build`. Only the i18n pure-utility functions (Task 12) are unit-tested with Vitest under TDD — they are pure logic and the redesign depends heavily on them.

---

## Task 1: Create branch and capture baseline

**Model:** haiku

**Files:** none (git + environment only)

- [ ] **Step 1: Confirm Node.js version**

Run: `node --version`
Expected: `v22.12.0` or higher. Astro 6 requires Node 22.12.0+. If lower, stop and tell the user to upgrade Node before continuing.

- [ ] **Step 2: Create the working branch**

Run: `git checkout -b redesign`
Expected: `Switched to a new branch 'redesign'`

- [ ] **Step 3: Capture a baseline build**

Run: `pnpm install && pnpm build`
Expected: build succeeds. If it fails, record the error — the baseline is broken and that must be understood before upgrading.

- [ ] **Step 4: Commit the baseline checkpoint**

```bash
git commit --allow-empty -m "chore: start Phase 1 foundation work on redesign branch"
```

---

## Task 2: Upgrade Astro core and the Vercel adapter to v6

**Model:** sonnet

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Update dependency versions in `package.json`**

Set these versions in `dependencies` (leave `name`/`type`/`version`/`scripts` as-is):

```json
"dependencies": {
  "@astrojs/vercel": "^8.0.0",
  "@vercel/analytics": "^1.4.1",
  "@vercel/speed-insights": "^1.1.0",
  "astro": "^6.3.3"
}
```

Remove `@astrojs/tailwind` and `tailwindcss` from `dependencies` — they are replaced in Task 5. Leave `@tailwindcss/typography` in `devDependencies` for now (re-pinned in Task 5).

- [ ] **Step 2: Install and let the resolver pick the matching adapter**

Run: `pnpm install`
Expected: install completes. `@astrojs/vercel` resolves to the version compatible with Astro 6. If pnpm reports a peer-dependency conflict on `@astrojs/vercel`, run `pnpm view @astrojs/vercel versions --json | tail -5`, pick the highest version whose peer range includes `astro@6`, set that exact version, and re-install.

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: upgrade astro to v6 and bump vercel adapter"
```

Note: the build will not pass yet — config and content changes in Tasks 3–5 are required first. Do not run `pnpm build` here.

---

## Task 3: Update the Vercel adapter import and Astro config

**Model:** haiku

**Files:**
- Modify: `astro.config.mjs`

- [ ] **Step 1: Rewrite `astro.config.mjs`**

The v6 adapter import path drops the `/serverless` subpath. Replace the entire file with:

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

The `tailwind()` integration is intentionally gone — it is re-added as a Vite plugin in Task 5. `integrations: []` is omitted because it is now empty.

- [ ] **Step 2: Commit**

```bash
git add astro.config.mjs
git commit -m "chore: update vercel adapter import path for astro v6"
```

---

## Task 4: Migrate content collections to the Content Layer API

**Model:** sonnet

**Files:**
- Create: `src/content.config.ts`
- Delete: `src/content/config.ts`
- Delete: `src/env.d.ts`
- Modify: `tsconfig.json`
- Modify: `src/pages/work/[...slug].astro`
- Modify: `src/pages/es/proyectos/[...slug].astro`
- Modify: `src/content/work/Portfolio.md` (invalid date fix)

**Context:** Astro 6 removed automatic legacy collections. The current `src/content/config.ts` registers only `work`; the `proyectos/` folder works today only via removed auto-detection. Both collections must be explicitly registered with a `glob()` loader.

- [ ] **Step 1: Create `src/content.config.ts`**

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

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

const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/work' }),
  schema: projectSchema,
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/proyectos' }),
  schema: projectSchema,
});

export const collections = { work, proyectos };
```

- [ ] **Step 2: Delete the old config and `env.d.ts`**

```bash
git rm src/content/config.ts src/env.d.ts
```

`src/env.d.ts` is no longer auto-generated or required in Astro 6; types come from `.astro/types.d.ts` via `tsconfig.json`.

- [ ] **Step 3: Update `tsconfig.json`**

Replace the file contents with:

```json
{
  "extends": "astro/tsconfigs/base",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

- [ ] **Step 4: Fix the invalid date in `src/content/work/Portfolio.md`**

The frontmatter has `publishDate: 2024-29-10 00:00:00` — month `29` is invalid and produces an `Invalid Date`. Change that line to:

```yaml
publishDate: 2024-10-29 00:00:00
```

Then check the matching ES file `src/content/proyectos/Portfolio.md` for the same error and apply the identical fix if present.

- [ ] **Step 5: Update `src/pages/work/[...slug].astro` for the Content Layer API**

In Astro 6, `entry.slug` becomes `entry.id` and `entry.render()` becomes `render(entry)`. Apply these changes:
- Add `render` to the `astro:content` import: `import { getCollection, render } from 'astro:content';`
- In `getStaticPaths`, change `params: { slug: entry.slug }` to `params: { slug: entry.id }`.
- Change `const { Content } = await entry.render();` to `const { Content } = await render(entry);`.

Open the file first to confirm the exact current lines, then apply each replacement.

- [ ] **Step 6: Apply the identical changes to `src/pages/es/proyectos/[...slug].astro`**

Same three changes as Step 5, on the ES project-detail route.

- [ ] **Step 7: Verify content types compile**

Run: `pnpm astro sync && pnpm astro check`
Expected: no content-collection errors. If `astro check` reports unrelated component type errors, that is acceptable at this stage — only collection/schema errors block this task.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: migrate content collections to Content Layer API"
```

---

## Task 5: Migrate Tailwind CSS 3 → 4

**Model:** sonnet

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs`
- Delete: `tailwind.config.mjs`
- Create: `src/styles/tailwind.css`
- Modify: `src/layouts/BaseLayout.astro` and `src/layouts/es/BaseLayout.astro` (CSS import)

**Context:** The `@astrojs/tailwind` integration is deprecated. Tailwind 4 uses the `@tailwindcss/vite` plugin and CSS-first config. The project uses very few Tailwind utility classes directly (layout uses custom `.stack`/`.gap-*` utilities in `global.css`); the main Tailwind consumer is `@tailwindcss/typography` via `prose.astro`.

- [ ] **Step 1: Update `package.json` dependencies**

Add to `dependencies`:

```json
"tailwindcss": "^4.0.0",
"@tailwindcss/vite": "^4.0.0"
```

Set `@tailwindcss/typography` in `devDependencies` to `^0.5.16` (the v4-compatible release).

Run: `pnpm install`

- [ ] **Step 2: Add the Tailwind Vite plugin to `astro.config.mjs`**

Add the import and a `vite.plugins` entry:

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

- [ ] **Step 3: Create `src/styles/tailwind.css`**

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

- [ ] **Step 4: Delete the JavaScript Tailwind config**

```bash
git rm tailwind.config.mjs
```

Tailwind 4 no longer auto-detects `tailwind.config.*`; content scanning is automatic.

- [ ] **Step 5: Import the Tailwind stylesheet in both layouts**

In `src/layouts/BaseLayout.astro` and `src/layouts/es/BaseLayout.astro`, add an import for `../styles/tailwind.css` alongside the existing `global.css` import (open each file to confirm the exact existing import line and path depth — `es/BaseLayout.astro` is one directory deeper, so it uses `../../styles/tailwind.css`).

- [ ] **Step 6: Verify the build**

Run: `pnpm build`
Expected: build succeeds. Then run `pnpm preview` and confirm a project-detail page (which uses `prose.astro`) still renders typography styles. If `prose` classes are unstyled, confirm the `@plugin` line in Step 3 and that the layout imports `tailwind.css`.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: migrate to Tailwind CSS v4 with the vite plugin"
```

---

## Task 6: Upgrade verification checkpoint

**Model:** haiku

**Files:** none

- [ ] **Step 1: Type-check**

Run: `pnpm astro check`
Expected: 0 errors. Record any remaining errors.

- [ ] **Step 2: Production build**

Run: `pnpm build`
Expected: build succeeds with no errors.

- [ ] **Step 3: Dev smoke test**

Run: `pnpm dev`, then visit `/`, `/work/`, `/about/`, `/es/`, `/es/proyectos/`, `/es/about/`, and one project-detail page in each language. Confirm every page renders without console errors. Stop the dev server.

- [ ] **Step 4: Commit the checkpoint**

```bash
git commit --allow-empty -m "chore: Phase 1 upgrade checkpoint — astro 6, tailwind 4, content layer green"
```

If any step fails, fix it before proceeding — the i18n refactor assumes a green build.

---

## Task 7: Set up Vitest for i18n utility testing

**Model:** haiku

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`

- [ ] **Step 1: Add Vitest**

Add `"vitest": "^3.0.0"` to `devDependencies` and a script `"test": "vitest run"` to `scripts` in `package.json`. Run: `pnpm install`

- [ ] **Step 2: Create `vitest.config.ts`**

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'node',
  },
});
```

- [ ] **Step 3: Verify the runner works**

Run: `pnpm test`
Expected: `No test files found` (acceptable — tests are added in Task 12).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: add vitest for i18n utility tests"
```

---

## Task 8: Create the i18n configuration module

**Model:** sonnet

**Files:**
- Create: `src/i18n/ui.ts`

- [ ] **Step 1: Create `src/i18n/ui.ts`**

```ts
export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang: Lang = 'en';

export type Lang = keyof typeof languages;

/**
 * Route slugs per locale. The slug for a logical page differs per language
 * (e.g. the work index is /work in EN but /proyectos in ES).
 * Blog and contact routes are added in Phase 3.
 */
export const routes = {
  home: { en: '', es: '' },
  work: { en: 'work', es: 'proyectos' },
  about: { en: 'about', es: 'about' },
} as const;

export type RouteKey = keyof typeof routes;
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n/ui.ts
git commit -m "feat: add i18n language and route configuration"
```

---

## Task 9: Create the translation dictionaries

**Model:** sonnet

**Files:**
- Create: `src/i18n/en.ts`
- Create: `src/i18n/es.ts`

**Context:** Every EN string and its ES equivalent is listed in `docs/agents-logs/2026-05-15-i18n-structure-audit.md` section 2. Transcribe **all** strings from that table into the dictionaries below. The structure and key-naming scheme are fixed here; the engineer fills in every entry from the audit table — do not leave any audit string unmapped.

- [ ] **Step 1: Create `src/i18n/en.ts`**

Use dotted keys grouped by surface (`nav.*`, `footer.*`, `skills.*`, `contactCta.*`, `meta.*`, `home.*`, `about.*`, `work.*`, `project.*`, `lang.*`). Starter structure — extend with every remaining string from audit section 2:

```ts
export const en = {
  // Nav (audit §2 Nav.astro)
  'nav.home': 'Home',
  'nav.work': 'Work',
  'nav.about': 'About',
  'nav.menu': 'Menu',
  // Footer (audit §2 Footer.astro)
  'footer.credit': 'Designed & Developed in Buenos Aires with Astro',
  // Skills (audit §2 Skills.astro — 3 cards, h2 + p each)
  'skills.card1.title': 'Wordpress development',
  'skills.card1.body': 'With 3+ years of experience, I develop unique Wordpress online experiences.',
  'skills.card2.title': 'Design and Marketing',
  'skills.card2.body':
    'Having a keen eye for desing and out of the box marketing strategies have led many of my projects to success.',
  'skills.card3.title': 'Strategy-Minded',
  'skills.card3.body':
    'Driven by a strategic vision, I excel in aligning short-term actions with long-term objectives.',
  // Contact CTA (audit §2 ContactCTA.astro)
  'contactCta.heading': 'Interested in working together?',
  'contactCta.button': 'Shoot Me a Message',
  // Default meta (audit §2 MainHead.astro)
  'meta.defaultTitle': 'Rodrigo Camino: Web developer',
  'meta.defaultDescription':
    '3+ years of experience in web design and development. I develop unique Web experiences.',
  // Home page (audit §2 index.astro)
  'home.hero.title': 'Hello! my name is Rodrigo Camino :)',
  'home.hero.tagline': "I'm a Creative Web Developer, now based in Buenos Aires, Argentina.",
  'home.pill.developer': 'Developer',
  'home.pill.creative': 'Creative',
  'home.pill.illusionist': 'Ilusionist',
  'home.portrait.alt': 'Rodrigo Camino smiling against a blue and purple gradient background.',
  'home.work.heading': 'Selected Work',
  'home.work.body':
    'Take a look below at some of my featured work for clients from the past few years.',
  'home.work.viewAll': 'View All',
  // About page (audit §2 about.astro) — transcribe title, description, hero,
  // Background paragraph, Education items, Skills items verbatim.
  // Work index page (audit §2 work.astro)
  'work.meta.title': 'My Work | Rodrigo Camino',
  'work.meta.description': "Learn about Rodrigo Camino's most recent projects",
  'work.hero.title': 'My Work',
  'work.hero.tagline':
    'See my most recent projects below to get an idea of my past experience.',
  // Project detail back-link (audit §2 work/[...slug].astro)
  'project.back': 'Work',
  // Language toggle (audit §2 LangToggle.astro)
  'lang.switch': 'Switch Language',
} as const;

export type UIDict = typeof en;
export type UIKey = keyof UIDict;
```

- [ ] **Step 2: Create `src/i18n/es.ts`**

Mirror **every** key from `en.ts` with the Spanish value from the audit table. Typing it as `Record<UIKey, string>` forces the key sets to match — a missing key is a compile error.

```ts
import type { UIKey } from './en';

export const es: Record<UIKey, string> = {
  'nav.home': 'Inicio',
  'nav.work': 'Proyectos',
  'nav.about': 'Sobre mí',
  'nav.menu': 'Menú',
  'footer.credit': 'Diseñado y Desarrollado en Buenos Aires con Astro',
  // ... transcribe every remaining ES string from audit §2
};
```

- [ ] **Step 3: Verify key parity**

Run: `pnpm astro check`
Expected: no errors in `src/i18n/`. A `Property 'x' is missing` error means `es.ts` is missing a key — add it.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/en.ts src/i18n/es.ts
git commit -m "feat: add EN and ES translation dictionaries"
```

---

## Task 10: Create i18n utility functions — write failing tests

**Model:** sonnet

**Files:**
- Create: `src/i18n/utils.test.ts`

- [ ] **Step 1: Write the failing test file**

```ts
import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations, localizePath, getRoutePath } from './utils';

describe('getLangFromUrl', () => {
  it('returns "en" for a root path', () => {
    expect(getLangFromUrl(new URL('https://x.com/'))).toBe('en');
  });
  it('returns "en" for a non-prefixed path', () => {
    expect(getLangFromUrl(new URL('https://x.com/work/'))).toBe('en');
  });
  it('returns "es" for an /es-prefixed path', () => {
    expect(getLangFromUrl(new URL('https://x.com/es/proyectos/'))).toBe('es');
  });
  it('returns "es" for the bare /es path', () => {
    expect(getLangFromUrl(new URL('https://x.com/es'))).toBe('es');
  });
});

describe('useTranslations', () => {
  it('returns the EN string for the en locale', () => {
    const t = useTranslations('en');
    expect(t('nav.home')).toBe('Home');
  });
  it('returns the ES string for the es locale', () => {
    const t = useTranslations('es');
    expect(t('nav.home')).toBe('Inicio');
  });
});

describe('localizePath', () => {
  it('leaves an EN path unprefixed', () => {
    expect(localizePath('/about', 'en')).toBe('/about');
  });
  it('prefixes an ES path with /es', () => {
    expect(localizePath('/about', 'es')).toBe('/es/about');
  });
  it('maps the ES root to /es', () => {
    expect(localizePath('/', 'es')).toBe('/es');
  });
  it('maps the EN root to /', () => {
    expect(localizePath('/', 'en')).toBe('/');
  });
});

describe('getRoutePath', () => {
  it('builds the EN work route', () => {
    expect(getRoutePath('work', 'en')).toBe('/work');
  });
  it('builds the ES work route with the proyectos slug', () => {
    expect(getRoutePath('work', 'es')).toBe('/es/proyectos');
  });
  it('builds the EN home route', () => {
    expect(getRoutePath('home', 'en')).toBe('/');
  });
  it('builds the ES home route', () => {
    expect(getRoutePath('home', 'es')).toBe('/es');
  });
});
```

- [ ] **Step 2: Run the tests to confirm they fail**

Run: `pnpm test`
Expected: FAIL — `Failed to resolve import "./utils"` (the module does not exist yet).

- [ ] **Step 3: Commit the failing tests**

```bash
git add src/i18n/utils.test.ts
git commit -m "test: add failing tests for i18n utilities"
```

---

## Task 11: Implement the i18n utility functions

**Model:** sonnet

**Files:**
- Create: `src/i18n/utils.ts`

- [ ] **Step 1: Implement `src/i18n/utils.ts`**

```ts
import { defaultLang, routes, type Lang, type RouteKey } from './ui';
import { en, type UIKey } from './en';
import { es } from './es';

const dictionaries = { en, es } as const;

/** Detect the active locale from a request URL by its first path segment. */
export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split('/')[1];
  return segment === 'es' ? 'es' : defaultLang;
}

/** Return a translator bound to a locale, falling back to the default language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return dictionaries[lang][key] ?? dictionaries[defaultLang][key];
  };
}

/** Prefix a site-absolute path with the locale segment (no prefix for the default locale). */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/es' : `/es${clean}`;
}

/** Build the localized path for a known route key, honoring per-locale slugs. */
export function getRoutePath(key: RouteKey, lang: Lang): string {
  return localizePath('/' + routes[key][lang], lang);
}
```

- [ ] **Step 2: Run the tests to confirm they pass**

Run: `pnpm test`
Expected: PASS — all 14 tests green.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/utils.ts
git commit -m "feat: implement i18n utility functions"
```

---

## Task 12: Consolidate the 6 fully-identical duplicated components

**Model:** haiku

**Files:**
- Delete: `src/components/es/Hero.astro`, `src/components/es/CallToAction.astro`, `src/components/es/Grid.astro`, `src/components/es/Pill.astro`, `src/components/es/Icon.astro`, `src/components/es/prose.astro`, `src/components/es/IconPaths.ts`

**Context:** Audit §1 confirms these 6 components (plus `IconPaths.ts`) are byte-identical to their `src/components/` counterparts. They can be deleted now; importers are repointed in Tasks 13–15.

- [ ] **Step 1: Delete the identical ES component files**

```bash
git rm src/components/es/Hero.astro src/components/es/CallToAction.astro \
  src/components/es/Grid.astro src/components/es/Pill.astro \
  src/components/es/Icon.astro src/components/es/prose.astro \
  src/components/es/IconPaths.ts
```

- [ ] **Step 2: Commit**

```bash
git commit -m "refactor: delete 6 byte-identical duplicated ES components"
```

Note: the build is intentionally broken until Tasks 13–15 repoint imports. Do not build here.

---

## Task 13: Make the shared components locale-aware

**Model:** sonnet

**Files:**
- Modify: `src/components/Nav.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/components/Skills.astro`
- Modify: `src/components/ContactCTA.astro`
- Modify: `src/components/MainHead.astro`
- Modify: `src/components/PortfolioPreview.astro`
- Modify: `src/components/LangToggle.astro`

**Context:** Each component gains a `lang: Lang` prop and pulls text via `useTranslations`. The ES counterparts are deleted in Task 16. Audit §2 lists every string; audit §3 lists the structural (route/href) differences each component must now resolve dynamically.

- [ ] **Step 1: Refactor `Nav.astro`**

Add to the frontmatter:

```ts
import type { Lang } from '../i18n/ui';
import { useTranslations, getRoutePath } from '../i18n/utils';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);

const textLinks = [
  { label: t('nav.home'), href: getRoutePath('home', lang) },
  { label: t('nav.work'), href: getRoutePath('work', lang) },
  { label: t('nav.about'), href: getRoutePath('about', lang) },
];
```

Replace the hardcoded `textLinks` array and the menu-button `sr-only` text (`"Menu"`) with `t('nav.menu')`. Fix the bug noted in audit §3: `LangToggle` must be imported from `./LangToggle` (same directory). Pass `lang` to `<LangToggle lang={lang} />` and `<ThemeToggle />`.

- [ ] **Step 2: Refactor `Footer.astro`**

Add the `lang` prop and `t` translator (same import pattern as Step 1, with `../i18n/...` path). Replace the credit text with `t('footer.credit')`. Social links (`X`, `GitHub`, `Instagram`, `LinkedIn`) and the copyright name stay hardcoded — audit §2 confirms they are language-neutral.

- [ ] **Step 3: Refactor `Skills.astro`**

Add the `lang` prop and `t` translator. Replace the 3 card `<h2>`/`<p>` pairs with `t('skills.card1.title')` / `t('skills.card1.body')` … `card3`. Delete the dead commented-out block (audit §3.minor).

- [ ] **Step 4: Refactor `ContactCTA.astro`**

Add the `lang` prop and `t` translator. Replace the `<h2>` with `t('contactCta.heading')` and the button text with `t('contactCta.button')`.

- [ ] **Step 5: Refactor `MainHead.astro`**

Add `lang` to `Props`. Replace the hardcoded default `title`/`description` with `t('meta.defaultTitle')` / `t('meta.defaultDescription')`. Set `<html lang={lang}>` is handled in the layout — here ensure the `<meta>` description uses the prop. Add the missing `import SpeedInsights` / `<SpeedInsights />` so ES pages get analytics parity (audit §3 bug).

- [ ] **Step 6: Refactor `PortfolioPreview.astro`**

Add `lang` to `Props`. Replace the hardcoded href template: build it as `` `${getRoutePath('work', lang)}/${project.id}` `` so EN renders `/work/<id>` and ES renders `/es/proyectos/<id>` (audit §3 structural difference). Use `project.id`, not `project.slug`.

- [ ] **Step 7: Refactor `LangToggle.astro`**

Add the `lang` prop. Replace the `sr-only` label with `t('lang.switch')`. Replace the client-side `/work`↔`/proyectos` string-replace logic: the toggle target is the other locale — compute it from `lang` and the route map rather than hardcoded path surgery. The button shows the *other* language's name from `languages` in `ui.ts`.

- [ ] **Step 8: Commit**

```bash
git add src/components/
git commit -m "refactor: make shared components locale-aware via i18n module"
```

---

## Task 14: Unify the layouts

**Model:** sonnet

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Delete: `src/layouts/es/BaseLayout.astro`

- [ ] **Step 1: Make `BaseLayout.astro` locale-aware**

Open `src/layouts/BaseLayout.astro`. Derive the locale once at the top of the frontmatter and keep the existing optional `title`/`description` props:

```ts
import { getLangFromUrl } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

interface Props {
  title?: string;
  description?: string;
}
const { title, description } = Astro.props;
const lang: Lang = getLangFromUrl(Astro.url);
```

Set `<html lang={lang}>`. Pass `lang`, `title`, and `description` to `<MainHead lang={lang} title={title} description={description} />` (MainHead from Task 13 already falls back to the default meta strings when `title`/`description` are undefined). Pass `lang` to `<Nav lang={lang} />` and `<Footer lang={lang} />`. Confirm both `global.css` and `styles/tailwind.css` are imported (from Task 5).

- [ ] **Step 2: Delete the ES layout**

```bash
git rm src/layouts/es/BaseLayout.astro
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "refactor: unify BaseLayout into one locale-aware layout"
```

---

## Task 15: Convert page content into shared, locale-aware sections

**Model:** sonnet

**Files:**
- Create: `src/components/pages/HomeContent.astro`
- Create: `src/components/pages/WorkIndexContent.astro`
- Create: `src/components/pages/AboutContent.astro`
- Create: `src/components/pages/ProjectDetailContent.astro`
- Create: `src/components/pages/NotFoundContent.astro`
- Modify: all 10 page files under `src/pages/` and `src/pages/es/`

**Context:** Astro maps files to routes, so per-locale page files must remain — but their bodies become thin. Each page's content moves into a shared `*Content.astro` component that takes `lang` (and, where needed, collection data). EN and ES page files then both render the same component with their locale.

- [ ] **Step 1: Create `src/components/pages/HomeContent.astro`**

Move the body of the current `src/pages/index.astro` into this component. Add `interface Props { lang: Lang }`, accept `lang`, build `t = useTranslations(lang)`. Replace every hardcoded string (audit §2 index.astro) with `t(...)` calls. Fetch projects from the locale-correct collection: `getCollection(lang === 'es' ? 'proyectos' : 'work')`. Pass `lang` to `<Skills>`, `<PortfolioPreview>`, `<ContactCTA>`, and `<CallToAction href={getRoutePath('work', lang)}>`.

- [ ] **Step 2: Create `src/components/pages/WorkIndexContent.astro`**

Move the body of `src/pages/work.astro`. Same `lang` prop pattern; strings from audit §2 work.astro; collection chosen by `lang`.

- [ ] **Step 3: Create `src/components/pages/AboutContent.astro`**

Move the body of `src/pages/about.astro`. Same pattern; strings from audit §2 about.astro (Background, Education, Skills sections — every item).

- [ ] **Step 4: Create `src/components/pages/ProjectDetailContent.astro`**

Move the shared body of the project-detail pages. Props: `{ lang: Lang; entry: CollectionEntry<'work' | 'proyectos'> }`. Render `render(entry)`'s `<Content />`. Build the back-link with `t('project.back')` and `getRoutePath('work', lang)`.

- [ ] **Step 5: Create `src/components/pages/NotFoundContent.astro`**

Move the body of `src/pages/404.astro`. Same `lang` pattern. This fixes the audit §3 bug where the ES 404 imported EN components.

- [ ] **Step 6: Rewrite the EN page files as thin entrypoints**

Each thin page passes its locale-specific `<meta>` title/description to `BaseLayout` (computed via `t`), then renders the shared content component. The home page omits `title`/`description` to use the defaults.

`src/pages/index.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import HomeContent from '../components/pages/HomeContent.astro';
---
<BaseLayout>
  <HomeContent lang="en" />
</BaseLayout>
```

`src/pages/work.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import WorkIndexContent from '../components/pages/WorkIndexContent.astro';
import { useTranslations } from '../i18n/utils';
const t = useTranslations('en');
---
<BaseLayout title={t('work.meta.title')} description={t('work.meta.description')}>
  <WorkIndexContent lang="en" />
</BaseLayout>
```

Apply the same pattern to `src/pages/about.astro` (using `about.meta.title` / `about.meta.description` keys — add these keys to the dictionaries in Task 9 if not already present) and `src/pages/404.astro` (no `title`/`description` — defaults are fine). For `src/pages/work/[...slug].astro`, keep `getStaticPaths` returning the `work` collection (`params.slug = entry.id`), and pass `title={entry.data.title}` to `BaseLayout` while rendering `<ProjectDetailContent lang="en" entry={entry} />`.

- [ ] **Step 7: Rewrite the ES page files as thin entrypoints**

Same pattern with `lang="es"` and `useTranslations('es')`: `src/pages/es/index.astro`, `src/pages/es/proyectos.astro`, `src/pages/es/about.astro`, `src/pages/es/404.astro`, and `src/pages/es/proyectos/[...slug].astro` (its `getStaticPaths` uses the `proyectos` collection, `title={entry.data.title}`).

- [ ] **Step 8: Build and verify**

Run: `pnpm build`
Expected: build succeeds. Run `pnpm preview` and confirm all 10 routes render correctly in both languages with correct translated text.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "refactor: extract page bodies into shared locale-aware components"
```

---

## Task 16: Delete the remaining ES component tree and final verification

**Model:** haiku

**Files:**
- Delete: `src/components/es/` (remaining files: `Nav.astro`, `Footer.astro`, `Skills.astro`, `ContactCTA.astro`, `MainHead.astro`, `PortfolioPreview.astro`)

- [ ] **Step 1: Confirm nothing imports from `src/components/es/`**

Run: `grep -rn "components/es" src/`
Expected: no output. If any import remains, fix it to point at the unified component before deleting.

- [ ] **Step 2: Delete the ES component directory**

```bash
git rm -r src/components/es
```

- [ ] **Step 3: Full verification**

Run: `pnpm astro check && pnpm test && pnpm build`
Expected: 0 type errors, all i18n tests pass, build succeeds.

- [ ] **Step 4: Dev smoke test**

Run `pnpm dev` and verify all 10 routes in both languages, the language toggle switches correctly between matched pages, the theme toggle works, and the browser console is clean. Stop the server.

- [ ] **Step 5: Commit**

```bash
git commit -m "refactor: remove duplicated ES component tree — i18n unified"
```

---

## Self-Review — spec coverage

Phase 1 scope from the spec, mapped to tasks:

- Astro 6.3.x upgrade → Task 2, 3
- Vercel adapter import path update → Task 3
- Tailwind 4 via `@tailwindcss/vite` → Task 5
- Content Layer `glob()` migration + register all collections → Task 4
- i18n refactor: delete `es/` duplication → Tasks 12, 14, 16
- i18n dictionaries (`en.ts`/`es.ts`) + `useTranslations` → Tasks 8, 9, 10, 11
- Unified components / pages → Tasks 13, 14, 15
- Design-token infrastructure → Task 5 (Tailwind 4 `@tailwindcss/vite` + `src/styles/tailwind.css` establish the `@theme`-capable base; actual token *values* are Phase 2)
- Audit bug fixes (ES 404, missing SpeedInsights, Nav import path) → Tasks 13, 15

No visual redesign occurs in Phase 1 — that is Phase 2, which gets its own plan once this lands.
