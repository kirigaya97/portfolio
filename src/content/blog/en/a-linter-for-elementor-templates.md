---
title: "A linter for Elementor templates"
description: "Lint, plan, dry run, GO, push over REST, verify. The pipeline I built to retag dozens of WordPress templates for UENI's AI generator without breaking any of them."
publishDate: 2026-10-09
tags: ["WordPress", "Automation", "Python"]
---

The previous post was about what a placeholder name means to an AI that fills templates. This one is about how you change hundreds of them across dozens of live WordPress sites without breaking anything.

The short version: you stop editing templates by hand.

## Why not just open Elementor

A template family at UENI is three WordPress sites, business, services and store, each with a few hundred Elementor widgets. Tagging one by hand means clicking into every widget, editing a control, saving, and hoping you did not miss one or mistype a name. Then doing it again on the two siblings.

Hand edits are also invisible. Afterwards nobody can say exactly what changed, and nobody can undo it cleanly.

## The pipeline

Every template goes through the same steps, run by a Claude Code skill with Python and JavaScript underneath.

**0. Backup.** A full Elementor export and a REST snapshot of every document, before anything else.

**1. Lint.** A Python linter reads the snapshot, never the rendered HTML, and checks it against the tagging standard. Sixty-one check codes in three tracks: the tags themselves (syntax, names from the vocabulary, sample length bands, image slots), the heading hierarchy (one h1, a sane outline), and design consistency (hard-coded colours and off-preset typography). Plus guards for sections that must never be generated, like reviews and statistics.

**2. Plan.** A plan file, row by row: rename, retag, add, copy, untag, change a heading level. Each row cites the findings that justify it. This is the part where judgement happens.

**3. Dry run.** The linter runs again against the snapshot with the plan applied in memory. No planned row may produce an error.

**4. Approval.** A table of every change. Nothing moves until I say GO, and one GO covers one site.

**5. Apply and push.** The plan compiles into a small patch payload, a few kilobytes, which is pushed through the WordPress REST API. Each patch carries the value it expects to find, so a widget someone edited in the meantime is refused instead of overwritten.

**6. Verify.** Re-fetch everything, compare against the plan, lint the result. Zero errors means verified. If anything failed, a rollback file already exists.

## What that bought

On the first pilot template, 129 changes were applied, 129 verified, and zero rolled back. Since then the same pipeline has been run across several families, each one ending with zero unplanned changes and a lint clean of errors.

It also scales sideways. The three variants of a family are REST clones, so element ids are shared. Plan the first variant fully, check each patch against the siblings' snapshots, and replay what matches. The family tools live in one shared folder, never copied per family, so a fix lands everywhere at once.

## What stays manual, on purpose

Spacing is audit-only. The linter reports it and I fix it by hand in Elementor, because a spacing change applied blindly is how layouts break on tablet. Colour and typography fixes can be applied, but only as bindings to the kit's global presets, and only when asked.

Some widgets refuse REST writes entirely. Those are listed for a hand edit and checked afterwards with the same verify step.

## The point

None of this is clever. It is the boring discipline of software, snapshots, diffs, dry runs, review, applied to a place where people usually click and hope.

Page builders are a fine way to design a page. They are a terrible way to change three hundred of them consistently. For that you want something that can tell you, before you ship, exactly what is about to change.
