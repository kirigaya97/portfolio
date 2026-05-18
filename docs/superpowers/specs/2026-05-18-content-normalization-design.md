# Project Content Normalization + Technology Badges — Design Spec

**Date:** 2026-05-18 · **Branch:** `redesign` · **Status:** approved, ready for planning

## Goal

Every project case study (`src/content/work/` and `src/content/proyectos/`) currently
uses a different markdown structure — mixed heading levels, inline `<b>` HTML, stray
`###` separator lines, inconsistent "Technologies Used" formatting, and an occasional
extra section. Normalize all 40 files to one canonical, readable, Markdown-native
structure, and upgrade the technology list from free-form body prose into a
structured frontmatter field rendered as an accessible badge strip.

This is **reformatting, not rewriting** — existing prose content is preserved; only
its structure, markup, and the location of the technology list change.

## Scope

- **40 content files**: 20 in `work/` (EN), 20 in `proyectos/` (ES).
  - 8 EN + 8 ES "old" files (CAPFA, Larry, Lena, Michel, Portfolio, RobertoMansilla,
    SDI, Santiago) need full restructuring.
  - 12 EN + 12 ES "new" files need the lighter pass: `<b>`→`**`, heading levels,
    drop `###` separators, extract technologies to frontmatter.
- **3 code files**: `src/content.config.ts`, `src/components/pages/ProjectDetailContent.astro`,
  and a new `src/components/TechBadges.astro`.
- **2 i18n dictionaries**: `src/i18n/en.ts`, `src/i18n/es.ts`.

## Non-goals

- No prose rewriting, translation, or fact-checking of case-study content.
- No change to `blog` content or the project card / work index.
- The unused `.article blockquote` CSS in `ProjectDetailContent.astro` may be left
  in place; cleaning it is optional and out of scope.

## 1. Canonical body structure

Every `.md` body has exactly four sections, in this order:

| Logical section | EN heading | ES heading | Level |
|---|---|---|---|
| Overview | `Project Overview` | `Resumen del Proyecto` | `###` |
| Objectives | `Objectives` | `Objetivos` | `####` |
| Workflow | `Project Workflow` | `Flujo de Trabajo del Proyecto` | `####` |
| Results | `Results and Impact` | `Resultados e Impacto` | `####` |

Formatting rules:

- `###` for Overview, `####` for the other three. Proper consecutive levels — no
  skipping to `#####`. Renders Overview large, the other three as accent headings.
- A blank line **after** every heading and **between** every block.
- Markdown `**bold**` only — never `<b>`/`</b>` HTML tags.
- Bullet items use the form `- **Label** — text` (bold label, em dash `—`, then text).
  The em dash and following text are outside the bold span.
- No standalone `###` separator lines.
- No bold-wrapped headings (`### **Overview**` → `### Overview`).
- Heading text is Title Case.
- Extra/non-canonical sections are merged into the nearest canonical section. Known
  case: CAPFA's "Design and Development" / "Diseño y Desarrollo" bullets merge into
  Project Workflow.
- The "Technologies Used" / "Tecnologías Utilizadas" body section is **removed** —
  its content moves to frontmatter (§2).

Canonical body example (EN):

```markdown
### Project Overview

Prose paragraph describing the project — preserved verbatim, only reflowed.

#### Objectives

- **Digital presence** — Position the brand as a category leader.
- **Conversion** — Optimize the landing page for social traffic.

#### Project Workflow

- **Discovery** — Brand identity, palette, and wireframes.
- **Testing** — Usability and performance passes before launch.

#### Results and Impact

- **Performance** — Lighthouse 45 → 94.
```

## 2. Frontmatter + schema

Canonical frontmatter field order:

```
title, publishDate, img, img_alt, description, tags, technologies, screenshots, video?
```

- `screenshots` is normalized from the inline `[ ... ]` flow array to a block YAML
  list (one `- /assets/...` per line). No trailing commas.
- `video` stays optional, present only where a file already has it.
- New `technologies` field: an ordered array of `{ name, note }` objects.

```yaml
technologies:
  - name: Astro 6
    note: Static-first framework, zero JS by default.
  - name: Resend
    note: Transactional email delivery for the contact form.
```

Each `note` is **one concise sentence**, extracted from the current per-technology
rationale. Verbose existing rationales are trimmed to a single clause.

Schema change in `src/content.config.ts` — `projectSchema` gains:

```ts
technologies: z.array(
  z.object({
    name: z.string(),
    note: z.string(),
  }),
),
```

The field is **required** (every project lists its stack; all 40 files are migrated
in the same change, so the build stays green).

## 3. TechBadges component

New component `src/components/TechBadges.astro`.

**Props:**

```ts
interface Props {
  technologies: { name: string; note: string }[];
  heading: string; // localized label, passed by the caller
}
```

**Markup & behavior:**

- A labeled block: a monospace kicker (`heading`, e.g. "Technologies") above a
  flex-wrapped row of badges.
- Each badge shows the tech `name`. The `note` is delivered as an accessible tooltip:
  - The badge element is focusable (`tabindex="0"`).
  - The `note` lives in a sibling element referenced by `aria-describedby`, so
    screen readers announce it.
  - The tooltip is shown via CSS on `:hover` and on `:focus` within the badge — so
    mouse, keyboard, and touch (tap → focus) all reveal it. `:focus` (not
    `:focus-visible`) is used so a touch tap also triggers it.
- Styled distinct from the hero's category `tags` Pills: monospace text, subtle
  border, `cursor: help`. Uses existing design tokens (`--surface`, `--border`,
  `--font-mono`, `--text-xs`, etc.).
- Respects `prefers-reduced-motion` for any tooltip transition.

**Placement:** rendered by `ProjectDetailContent.astro` as a labeled block at the top
of `.project-main`, **below the header** and above the lead image. It is **not**
placed inside the hero `.details` next to the category tags.

`ProjectDetailContent.astro` serves both `work/` and `proyectos/` (it is
locale-aware), so this single change covers EN and ES. It passes
`technologies={entry.data.technologies}` and `heading={t('project.tech.heading')}`.

## 4. i18n

Add one key to both dictionaries (`src/i18n/en.ts` is the `UIKey` source of truth;
`src/i18n/es.ts` is typed `Record<UIKey, string>`, so both must gain the key):

```ts
'project.tech.heading': 'Technologies'   // en.ts
'project.tech.heading': 'Tecnologías'    // es.ts
```

## Verification

Static only, consistent with Phase 2/3 execution:

- `pnpm astro check` — 0 errors, 0 warnings. Proves all 40 files parse against the
  new schema (a missing/malformed `technologies` field fails the build).
- `pnpm test` — existing 32 tests still pass (no test logic changes expected).
- `pnpm build` — succeeds; all project detail pages render.
- `grep -rL "technologies:" src/content/work src/content/proyectos` — empty output
  (every file has the field).
- `grep -rn "<b>" src/content/work src/content/proyectos` — empty output (no HTML
  bold remains).

## File-touch summary

| Area | Files | Change |
|---|---|---|
| Schema | `src/content.config.ts` | Add `technologies` to `projectSchema` |
| Component | `src/components/TechBadges.astro` | New — badge strip with accessible tooltips |
| Component | `src/components/pages/ProjectDetailContent.astro` | Render `TechBadges` below the header |
| i18n | `src/i18n/en.ts`, `src/i18n/es.ts` | Add `project.tech.heading` |
| Content | 20 × `src/content/work/*.md` | Normalize body + frontmatter |
| Content | 20 × `src/content/proyectos/*.md` | Normalize body + frontmatter |
