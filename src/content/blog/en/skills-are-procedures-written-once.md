---
title: "Skills are procedures written once"
description: "How I run repeatable client work through Claude Code skills: the model does the judgement, scripts do the deterministic part, and nothing ships without a GO."
publishDate: 2026-09-09
tags: ["AI", "Claude Code", "Workflow"]
---

A few months ago I wrote about keeping AI inside a local loop, useful where I can judge the answer and nowhere else. That is still the rule. What changed is the unit of work. I stopped prompting for tasks and started writing procedures.

In Claude Code that procedure is a **skill**: a folder with a `SKILL.md`, the scripts it calls and the reference files it reads. The frontmatter says when the skill applies. The body says what to do, in what order, and where to stop.

## Why a procedure beats a good prompt

A good prompt solves today. A skill solves the tenth time.

Most of my work repeats with small variations. Review a built WordPress site against the client's intake. Decide the global colours and fonts. Edit copy that drifted from the brief. Replace images that do not fit the brand. Each of those has a right order, a set of traps I have already fallen into, and a definition of done. Writing that down once means the next run starts from everything the previous ten learned, instead of from my memory on a tired afternoon.

For one of my current projects that became a chain of seven skills: one orchestrator that sequences a full site build, four stage skills (site review, brand decisions, content edit, image generation), a shared tool that turns decided globals into an importable Elementor kit, and a separate research skill that the build never calls.

## Deterministic where possible

The most useful design rule I have found: **let the model decide only what needs deciding.**

Linting a template, building a patch payload, verifying a readback, rendering a report: those are scripts. They give the same answer every time and they can be tested. The model's job is the part that needs judgement, which slot a heading really is, what a placeholder should be called, whether a section is a review block that must not be generated.

A skill that asks the model to do arithmetic it could have delegated to Python is a skill that will eventually be wrong in a way that is hard to see.

## One hard stop

Every skill that writes to something real has exactly one stop: an approval table, and the word GO from me. One GO covers one site. Plans, dry runs and lints happen freely before it. Nothing touches a live site after it without going through the skill's own push and verify step.

That is not distrust of the tool. It is the same rule I would give a junior developer: prepare everything, show me, then ship.

## The map before the territory

The other half is context. Every directory in the project has a short `_context.md`: what is here, why, what is the source of truth, what to watch out for. An index at the root points to all of them, and a script rebuilds it so it cannot quietly go stale.

The agent reads the map before it opens files. That alone removed most of the confident mistakes, the ones where it found a file that looked authoritative and was actually an old draft.

Project rules live in `CLAUDE.md`. Preferences I keep repeating go into memory files. Subagents follow a written directive: long output goes to a log file, and the reply is a path and five bullets. The main conversation stays small and expensive tokens stay for decisions.

## What it costs

Writing a skill takes longer than doing the task once. Keeping it true takes discipline: when I find a new trap, the fix goes into the skill the same day, not into a note I will forget.

The return is that the work stops depending on how well I remember it. The procedure remembers, and I review.
