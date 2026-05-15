# Portfolio Redesign — Roadmap & Live Status

**This is the orchestration hub.** Any agent (including a contextless one) picking up
this project reads this file first. It holds the whole picture and the current state.

---

## Live status

| Field | Value |
|---|---|
| Current phase | **Phase 1 — Foundation** |
| Phase 1 plan | `docs/superpowers/plans/2026-05-15-phase-1-foundation.md` |
| Phase 1 state | **IN PROGRESS** — Tasks 1–11 done (upgrades + i18n module), Tasks 12–16 remaining |
| Next action | Phase 1, Task 12 |
| Working branch | `redesign` (active; `phase1-upgrade` merged in) |
| Last updated | 2026-05-15 |

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
| **1 — Foundation** | Astro 4→6, Vercel adapter, Tailwind 3→4, Content Layer API, i18n refactor (kill `es/` duplication), token infrastructure. No visual redesign. | `plans/2026-05-15-phase-1-foundation.md` | NOT STARTED |
| **2 — Redesign** | Rebuild every page/component in the "Sleight of hand" identity: layouts, Nav, Footer, Hero, Skills, project pages, About, 404, the `Reveal` motion wrapper, dark/light themes, editorial grid. | _not yet written_ | BLOCKED on Phase 1 |
| **3 — Features** | Work tag-filtering island, contact form (Astro Actions + Resend), blog collection + `/blog` pages. | _not yet written_ | BLOCKED on Phase 2 |
| **4 — Content** | Add new projects, rewritten bio/About, update existing 8 projects. Depends on Rodrigo supplying material. | _not yet written_ | BLOCKED on Phase 3 + content from Rodrigo |

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
- [ ] Task 12 — Delete 6 byte-identical ES components `(haiku)`
- [ ] Task 13 — Make shared components locale-aware `(sonnet)`
- [ ] Task 14 — Unify layouts `(sonnet)`
- [ ] Task 15 — Extract page bodies into shared components `(sonnet)`
- [ ] Task 16 — Delete ES tree + final verification `(haiku)`

_Phases 2–4 task logs are appended here when their plans are written._

---

## Key references

| Document | Path |
|---|---|
| Design spec (full vision + decisions) | `docs/superpowers/specs/2026-05-15-portfolio-redesign-design.md` |
| Phase 1 plan | `docs/superpowers/plans/2026-05-15-phase-1-foundation.md` |
| i18n structure audit (complete EN/ES string tables) | `docs/agents-logs/2026-05-15-i18n-structure-audit.md` |
| Subagents delegation directive | `docs/prompts/subagents-directive.md` |

---

## Decision log

Append-only record of choices that shape the project. Newest last.

- **2026-05-15** — Execution approach: phased rebuild on the `redesign` branch; one plan per phase, written interleaved (plan → execute → plan).
- **2026-05-15** — Design direction: "Sleight of hand" (dark editorial + amber accent + reveal motion). Rejected: "Studio minimal", "Playful brutalist".
- **2026-05-15** — i18n: keep EN + ES but unify to one component set + translation dictionaries; delete the duplicated `src/components/es/` tree.
- **2026-05-15** — Upgrade target: Astro 6.3.x (current stable; Astro 7 only in alpha).
- **2026-05-15** — Contact form: Astro Actions + Resend (built in Phase 3).
- **2026-05-15** — New features: project tag-filtering, working contact form, blog. (Magician angle expressed through the design language, not a separate feature.)
