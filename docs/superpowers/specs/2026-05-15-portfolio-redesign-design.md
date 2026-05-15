# Portfolio Redesign — Design Document

**Date:** 2026-05-15
**Owner:** Rodrigo Camino (`kirigaya97`)
**Project:** `~/web/portfolio` — Astro portfolio site, deployed on Vercel

## Goal

Take the current lightly-customized Astro portfolio template and turn it into a
distinctive, modern, well-maintained site. Four work areas, all in scope:
visual redesign, content updates, technical modernization, and new features.

## Execution approach

Phased rebuild on a branch. One design doc (this file), then a phased
implementation plan. Each phase is independently reviewable and leaves a
working, deployable site. The implementation plan tags every task with a
best-fit model (`haiku` for mechanical/low-judgment work, `sonnet` for
design/logic work).

## Current state

- Astro 4.16.7, `@astrojs/tailwind` 5.x, Tailwind 3.4, `@astrojs/vercel/serverless`.
- `output: 'server'`, Vercel adapter, Web Analytics + Speed Insights.
- i18n: `en` default + `es`, implemented by **fully duplicating** every
  component (`src/components/es/`) and page (`src/pages/es/`). Every change
  must currently be made twice.
- Content collections: `config.ts` defines only `work`; a `proyectos/` folder
  exists but is unregistered.
- 8 projects, present in both `work/` (EN) and `proyectos/` (ES).
- Visual style: the recognizable stock Astro portfolio template.

## Section 1 — Technical foundation

**Target stack:**
- **Astro 6.3.x** (current stable; Astro 7 only in alpha). Upgrade 4 → 6 via the
  official `@astrojs/upgrade` tool plus the 4→5 and 5→6 migration guides.
- **Tailwind CSS 4** via the `@tailwindcss/vite` plugin. The `@astrojs/tailwind`
  integration is deprecated. Tailwind 4 uses CSS-first config (`@theme`), which
  pairs well with a design-token system.
- **Vercel adapter** updated — import path is now `@astrojs/vercel`
  (the `/serverless` subpath was merged). Keep `output: 'server'`,
  Web Analytics, Speed Insights.
- **Content Layer API** — migrate collections to `glob()` loaders. Fix
  `config.ts` so all collections (`work`, `proyectos`, new `blog`) are registered
  with a unified schema.

**i18n refactor (key structural change):**
- Delete the entire `src/components/es/` tree and duplicated `src/pages/es/`
  page files.
- One set of components. All UI strings move to translation dictionaries
  (`src/i18n/en.ts`, `src/i18n/es.ts`) with a `useTranslations(lang)` helper.
- Astro's built-in i18n routing stays (`en` default, `es` prefixed). `/about`
  and `/es/about` render from the **same** page file.
- Project article content stays in parallel folders (`work/` EN,
  `proyectos/` ES) because article bodies genuinely differ per language — but
  the schema and rendering components are unified.
- Outcome: roughly half the ongoing maintenance; prerequisite for the redesign
  so styling is not done twice.

## Section 2 — Design identity

Direction: **"Sleight of hand."** The site's differentiator is that Rodrigo is
a Creative Web Developer *and* an illusionist. The design language uses that —
craft, reveal, deliberate misdirection — without becoming a gimmick.

- **Color:** near-black base (~`#0a0a0b`), off-white text, one warm **amber/gold**
  accent (stage-light warmth). A light mode is kept, derived from the same
  tokens.
- **Type:** an editorial display face for headings, a clean sans for body, a
  monospace for tags/dates/metadata.
- **Motion (the signature):** content *reveals* on scroll and interaction the
  way a card turn does — deliberate, smooth, never bouncy. Refined hero
  entrance; project cards have a tasteful hover reveal. All motion respects
  `prefers-reduced-motion`.
- **Layout:** asymmetric editorial grid, replacing the centered stock-template
  blocks.

Rejected alternatives: "Studio minimal" (timeless but generic, ignores the
magician angle); "Playful brutalist" (very distinctive but ages fast and risks
reading as gimmicky for a client-facing portfolio).

## Section 3 — Site structure & components

**Pages** (each renders EN at `/…` and ES at `/es/…` from one file):
- `/` — Home: hero, skills, featured work, blog teaser, contact CTA
- `/work` — Work index with tag filtering
- `/work/[slug]` — Project detail
- `/blog` — Writing index
- `/blog/[slug]` — Blog post
- `/about` — About / bio
- `/contact` — Contact page with the working form
- `404`

**Content collections** (Content Layer `glob()` loaders):
- `work` (EN articles) + `proyectos` (ES articles) — unified schema, parallel
  structure as today.
- `blog` — **new**: `blog/en/` and `blog/es/` subfolders, shared schema
  (title, description, publishDate, tags, optional cover image).

**Components** — one unified set, no `es/` duplication. Each takes `lang` and
pulls strings from the i18n dictionary. Core set:
`BaseLayout`, `Nav`, `Footer`, `Hero`, `Skills`, `ProjectCard`, `ProjectGrid`,
`WorkFilter`, `BlogCard`, `ContactForm`, `LangToggle`, `ThemeToggle`, `Icon`,
`Pill`, `Reveal` (scroll-reveal motion wrapper).

**Contact form** — built with **Astro Actions** (native, type-safe server
action API) calling **Resend** (free tier 3k emails/mo). Server-side validation
with `zod`, honeypot + basic rate-limiting for spam, inline success/error
states. Resend API key stored as a Vercel env var via `astro:env`.

**Work filtering** — a small client-side island (the only interactive component
on the page). Filters the rendered project list by tag with no reload; URL
updates with `?tag=` so filtered views are shareable. Works without JS as a
plain list (progressive enhancement).

## Section 4 — Build sequence

**Phase 1 — Foundation** (site stays live & working throughout)
Astro 4→6 upgrade, Vercel adapter update, Tailwind 4 migration, Content Layer
collection migration, the i18n refactor (delete `es/` duplication, build
`en.ts`/`es.ts` dictionaries + `useTranslations`), the design-token system.
No visual redesign yet.

**Phase 2 — Redesign**
Rebuild every page and component in direction A: layouts, `Nav`, `Footer`,
`Hero`, `Skills`, project pages, About, 404 — plus the `Reveal` motion wrapper,
dark/light themes from shared tokens, the editorial grid. End of phase = the
whole existing site, redesigned.

**Phase 3 — New features**
Work tag-filtering island, contact form (Astro Actions + Resend), and the blog
(collection + `/blog` index + post pages), wired into the redesigned shell.

**Phase 4 — Content**
Add new projects, drop in the rewritten bio/About, update the existing 8
projects. **Depends on Rodrigo supplying material** (new project
details/images, new bio text). Phases 1–3 do not block on it and use existing
content as placeholders.

## Constraints & notes

- Never mutate Hostinger production directly; this project deploys via Vercel.
- Keep Vercel Web Analytics and Speed Insights working across the upgrade.
- Maintain EN + ES parity for all UI; project/blog article bodies may differ
  per language by design.
- All motion must respect `prefers-reduced-motion`.
- Work filtering must degrade gracefully without JavaScript.

## Open dependency

Phase 4 content (new project material, rewritten bio) must be supplied by
Rodrigo before that phase can complete.
