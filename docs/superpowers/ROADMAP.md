# Portfolio Redesign — Roadmap & Live Status

**This is the orchestration hub.** Any agent (including a contextless one) picking up
this project reads this file first. It holds the whole picture and the current state.

---

## Live status

| Field | Value |
|---|---|
| Current phase | **Phases 1–3 + content-normalization complete** — Phase 4 (content) is next, blocked on Rodrigo |
| Phase 1 plan | `docs/superpowers/plans/2026-05-15-phase-1-foundation.md` |
| Phase 1 state | **COMPLETE** — 16 tasks done, code-reviewed, verification green (astro check 0 errors, 14 tests, build OK) |
| Phase 2 plan | `docs/superpowers/plans/2026-05-16-phase-2-redesign.md` |
| Phase 2 state | **COMPLETE** — 18 tasks done, code-reviewed, verification green (astro check 0 errors, 14 tests, build OK) |
| Phase 3 plan | `docs/superpowers/plans/2026-05-16-phase-3-features.md` |
| Phase 3 state | **COMPLETE** — 18 tasks done, final code review passed, verification green (astro check 0 errors/0 warnings, 32 tests, build OK) |
| Content normalization | plan `docs/superpowers/plans/2026-05-18-content-normalization.md` · spec `docs/superpowers/specs/2026-05-18-content-normalization-design.md` |
| Content normalization state | **COMPLETE** — all 11 tasks shipped (commits `c6f9080`…`a7d34ad`): `TechBadges`, `technologies` schema field, 40 files normalized, badge strip rendering. |
| Next action | Phase 4 (content) — **blocked on Rodrigo** supplying material. Meanwhile, **12 projects still 404 on their thumbnail** (image folders are placeholders): BlukiStudio, ChapMagic, EcoLanding, Gaudiano, Hubbard, Ilusionista, Logistica, MagiaYBurbujas, Nub3, Producciones8888, SADA, Vazquez. |
| Working branch | `redesign` (active; `phase1-upgrade` merged in) |
| Last updated | 2026-06-05 |

> Orchestrator: update this table and the Task progress log below after **every** task.

---

## Vision

Transform Rodrigo Camino's portfolio from a lightly-customized stock Astro template
into a distinctive, modern, well-maintained site. The design language is
**"Sleight of hand"** — dark editorial canvas, amber accent, deliberate reveal-style
motion — leaning into Rodrigo's dual identity as a Creative Web Developer and an
illusionist. Full detail in the spec:
`docs/superpowers/specs/2026-05-15-portfolio-redesign-design.md`.

---

## The four phases

Each phase produces a working, deployable site and is its own plan → execute cycle.
**Plans are written one at a time**, just before their phase starts, so each plan
references real interfaces from the finished phase rather than guesses.

| Phase | Scope | Plan | State |
|---|---|---|---|
| **1 — Foundation** | Astro 4→6, Vercel adapter, Tailwind 3→4, Content Layer API, i18n refactor (kill `es/` duplication), token infrastructure. No visual redesign. | `plans/2026-05-15-phase-1-foundation.md` | COMPLETE |
| **2 — Redesign** | Rebuild every page/component in the "Sleight of hand" identity: layouts, Nav, Footer, Hero, Skills, project pages, About, 404, the `Reveal` motion wrapper, dark/light themes, editorial grid. | `plans/2026-05-16-phase-2-redesign.md` | COMPLETE |
| **3 — Features** | Work tag-filtering island, contact form (Astro Actions + Resend), blog collection + `/blog` pages. | `plans/2026-05-16-phase-3-features.md` | COMPLETE |
| **4 — Content** | Add new projects, rewritten bio/About, update existing 8 projects. Depends on Rodrigo supplying material. | _not yet written_ | BLOCKED on content from Rodrigo |

---

## Side track — content normalization

Not a redesign phase. A standalone mini-project, planned 2026-05-18, that unifies all
40 project case-study `.md` files (`work/` + `proyectos/`) to one canonical
Markdown-native structure and moves each project's technology list into a
`technologies` frontmatter field rendered as an accessible badge strip.

- Spec: `docs/superpowers/specs/2026-05-18-content-normalization-design.md`
- Plan: `docs/superpowers/plans/2026-05-18-content-normalization.md` (11 tasks)
- Execution: `docs/prompts/content-normalization-execution-prompt.txt` — inline,
  4-wave manual orchestration; does **not** use the agent-driven-dev skills.

Status: **PLANNED**, ready to execute. Independent of Phase 4.

---

## How to resume (contextless agent)

1. Read this file — note `Current phase` and `Next action`.
2. Read the spec: `docs/superpowers/specs/2026-05-15-portfolio-redesign-design.md`.
3. Read the current phase's plan file (see the phase table).
4. Read `docs/prompts/subagents-directive.md` if you will delegate to subagents.
5. Confirm the working branch is `redesign` (`git branch --show-current`).
6. Execute the next unchecked task. Each task is tagged `haiku` or `sonnet` — use that model.
7. After the task: check its boxes in the plan file, update the **Live status** table
   and the **Task progress log** below, and commit.
8. At a phase boundary: do not invent the next plan. Stop and signal that the next
   phase's plan must be written (writing-plans skill) against the now-real code.

---

## Task progress log

### Phase 1 — Foundation
- [x] Task 1 — Branch + baseline + Node check `(haiku)`
- [x] Task 2 — Upgrade Astro core + Vercel adapter to v6 `(sonnet)`
- [x] Task 3 — Update adapter import + Astro config `(haiku)`
- [x] Task 4 — Migrate to Content Layer API `(sonnet)`
- [x] Task 5 — Migrate Tailwind 3 → 4 `(sonnet)`
- [x] Task 6 — Upgrade verification checkpoint `(haiku)`
- [x] Task 7 — Set up Vitest `(haiku)`
- [x] Task 8 — i18n config module `(sonnet)`
- [x] Task 9 — Translation dictionaries `(sonnet)`
- [x] Task 10 — i18n utilities: failing tests `(sonnet)`
- [x] Task 11 — i18n utilities: implementation `(sonnet)`
- [x] Task 12 — Delete 6 byte-identical ES components `(haiku)`
- [x] Task 13 — Make shared components locale-aware `(sonnet)`
- [x] Task 14 — Unify layouts `(sonnet)`
- [x] Task 15 — Extract page bodies into shared components `(sonnet)`
- [x] Task 16 — Delete ES tree + final verification `(haiku)`

### Phase 2 — Redesign
- [x] Task 1 — Phase 2 kickoff checkpoint `(haiku)`
- [x] Task 2 — Build the design-token system in `global.css` `(sonnet)`
- [x] Task 3 — Load new fonts, default to dark, bridge tokens to Tailwind `(sonnet)`
- [x] Task 4 — Strip stock background system, add film grain in `BaseLayout` `(sonnet)`
- [x] Task 5 — Build the `Reveal` scroll-motion wrapper `(sonnet)`
- [x] Task 6 — Redesign the `Pill` and `CallToAction` primitives `(sonnet)`
- [x] Task 7 — Redesign the `ThemeToggle` and `LangToggle` `(sonnet)`
- [x] Task 8 — Redesign the `Nav` `(sonnet)`
- [x] Task 9 — Redesign the `Footer` `(sonnet)`
- [x] Task 10 — Redesign the `Hero` `(sonnet)`
- [x] Task 11 — Redesign the `Grid` and project card `(sonnet)`
- [x] Task 12 — Redesign the `Skills` and `ContactCTA` `(sonnet)`
- [x] Task 13 — Rebuild `HomeContent` `(sonnet)`
- [x] Task 14 — Rebuild `WorkIndexContent` `(sonnet)`
- [x] Task 15 — Rebuild `AboutContent` `(sonnet)`
- [x] Task 16 — Rebuild `ProjectDetailContent` and article styling `(sonnet)`
- [x] Task 17 — Rebuild `NotFoundContent` (404) `(haiku)`
- [x] Task 18 — Final verification and roadmap update `(haiku)`

### Phase 3 — Features
- [x] Task 1 — Phase 3 kickoff: install Resend, confirm baseline `(haiku)`
- [x] Task 2 — Register the blog collection, contact env schema, and routes `(haiku)`
- [x] Task 3 — Add Phase 3 i18n keys `(haiku)`
- [x] Task 4 — Add placeholder blog posts `(haiku)`
- [x] Task 5 — Project tag utilities `(sonnet)`
- [x] Task 6 — Blog collection helpers `(sonnet)`
- [x] Task 7 — Contact form server action `(sonnet)`
- [x] Task 8 — ContactForm component `(sonnet)`
- [x] Task 9 — WorkFilter tag-filtering island `(sonnet)`
- [x] Task 10 — BlogCard component `(sonnet)`
- [x] Task 11 — Contact page content `(sonnet)`
- [x] Task 12 — Blog index content `(sonnet)`
- [x] Task 13 — Blog post content `(sonnet)`
- [x] Task 14 — Wire tag filtering into the work index `(sonnet)`
- [x] Task 15 — Add a blog teaser to the home page `(sonnet)`
- [x] Task 16 — Add Blog and Contact links to the nav `(haiku)`
- [x] Task 17 — Blog and contact route pages `(haiku)`
- [x] Task 18 — Final verification and roadmap update `(haiku)`

### Content normalization (side track) — COMPLETE
- [x] Task 1 — Kickoff: confirm a green baseline `(haiku)`
- [x] Task 2 — Create the `TechBadges` component `(haiku)`
- [x] Task 3 — Add the `project.tech.heading` i18n key `(haiku)`
- [x] Task 4 — Content batch A: CAPFA, Lena, RobertoMansilla, SDI `(sonnet)`
- [x] Task 5 — Content batch B: Larry, Michel, Portfolio, Santiago `(sonnet)`
- [x] Task 6 — Content batch C: BlukiStudio, ChapMagic, EcoLanding, Gaudiano `(sonnet)`
- [x] Task 7 — Content batch D: Hubbard, Ilusionista, Logistica, MagiaYBurbujas `(sonnet)`
- [x] Task 8 — Content batch E: Nub3, Producciones8888, SADA, Vazquez `(sonnet)`
- [x] Task 9 — Add `technologies` to the project schema `(haiku)`
- [x] Task 10 — Render `TechBadges` on the project detail page `(haiku)`
- [x] Task 11 — Final verification and roadmap note `(haiku)`

_Phase 4 task log is appended here when its plan is written._

---

## Key references

| Document | Path |
|---|---|
| Design spec (full vision + decisions) | `docs/superpowers/specs/2026-05-15-portfolio-redesign-design.md` |
| Phase 1 plan | `docs/superpowers/plans/2026-05-15-phase-1-foundation.md` |
| i18n structure audit (complete EN/ES string tables) | `docs/agents-logs/2026-05-15-i18n-structure-audit.md` |
| Subagents delegation directive | `docs/prompts/subagents-directive.md` |
| Content-normalization spec | `docs/superpowers/specs/2026-05-18-content-normalization-design.md` |
| Content-normalization plan | `docs/superpowers/plans/2026-05-18-content-normalization.md` |
| Content-normalization execution prompt | `docs/prompts/content-normalization-execution-prompt.txt` |

---

## Decision log

Append-only record of choices that shape the project. Newest last.

- **2026-05-15** — Execution approach: phased rebuild on the `redesign` branch; one plan per phase, written interleaved (plan → execute → plan).
- **2026-05-15** — Design direction: "Sleight of hand" (dark editorial + amber accent + reveal motion). Rejected: "Studio minimal", "Playful brutalist".
- **2026-05-15** — i18n: keep EN + ES but unify to one component set + translation dictionaries; delete the duplicated `src/components/es/` tree.
- **2026-05-15** — Upgrade target: Astro 6.3.x (current stable; Astro 7 only in alpha).
- **2026-05-15** — Contact form: Astro Actions + Resend (built in Phase 3).
- **2026-05-15** — New features: project tag-filtering, working contact form, blog. (Magician angle expressed through the design language, not a separate feature.)
- **2026-05-16** — Typography: Space Grotesk (headings/display), Inter (body), JetBrains Mono (metadata/tags/dates). Deliberate override of the spec's "editorial display face / serif" wording — chose the geometric sans Space Grotesk for a modern-editorial rather than magazine-serif feel.
- **2026-05-16** — Default theme: dark, always, on first visit (the designed canvas). `:root` holds the dark tokens; `.theme-light` is the opt-in override, reached via the toggle and persisted in `localStorage`. Inverts Phase 1's `.theme-dark`-on-light-default scheme.
- **2026-05-16** — Canvas: flat near-black (`#0a0a0b`) plus a faint CSS film-grain overlay. The stock template's background-image system (curve SVGs, gradient JPGs, lazy-loaded subtle backgrounds) is removed entirely.
- **2026-05-18** — 12 new bilingual project case studies committed ahead of Phase 4 (generated 2026-05-15, backup in `docs/portfolio-case-studies-generated.md`). Asset folders are `.gitkeep` placeholders — screenshots still pending, so thumbnails 404 until images land. Several entries flagged incomplete; `BlukiStudio` flagged "hold". Phase 3 execution proceeds in parallel.
- **2026-05-16** — Contact form: Astro Actions + Resend, configured via `astro:env`. Spam defence is a hidden honeypot field plus a 30s in-memory per-IP throttle. `RESEND_API_KEY` is a Vercel/`.env` secret; `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` have defaults.
- **2026-05-16** — `ContactCTA` keeps its direct WhatsApp link; the new `/contact` page is reached via the nav, not via the CTA (Rodrigo's choice).
- **2026-05-16** — Work tag filtering: server-side `?tag=` filtering plus a vanilla custom-element progressive enhancement (`<work-filter>`). No UI framework was added — consistent with the `menu-button`/`Reveal` pattern.
- **2026-05-16** — Blog: a single `blog` content collection with `en/` and `es/` subfolders (ids carry the locale prefix). Phase 3 ships placeholder posts; Phase 4 replaces them with real writing.
- **2026-05-18** — Content normalization (side track, planned): all 40 project `.md` files to be unified to one Markdown-native structure (4 body sections, `###`/`####` levels, `**bold**`, em-dash bullets). Technologies move from body prose into a `technologies: [{name, note}]` frontmatter field, rendered as an accessible tooltip badge strip (`TechBadges.astro`). Rejected: a flat all-`###` hierarchy; keeping the AI-generated `<b>`/`>`-blockquote source. See the Side track section + `specs/2026-05-18-content-normalization-design.md`.
- **2026-05-18** — Project content normalized: all 40 case-study `.md` files unified to one Markdown-native structure (4 body sections, `###`/`####` levels, `**bold**`, em-dash bullets). Technologies moved from body prose into a `technologies: [{name, note}]` frontmatter field, rendered as an accessible badge strip (`TechBadges.astro`) on project detail pages. Spec: `docs/superpowers/specs/2026-05-18-content-normalization-design.md`.
