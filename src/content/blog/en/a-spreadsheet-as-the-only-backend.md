---
title: "A spreadsheet as the only backend"
description: "SADA runs a political electoral registry on Google Sheets. That was the right call, and here is why."
publishDate: 2026-07-22
tags: ["Next.js", "Architecture", "Constraints"]
---

SADA is an internal web application for managing the political electoral registry of a party in San Antonio de Areco. Multi-user, thirty-four fields per record, analytics, exports, a bulk address review workflow. Next.js on the front.

There is no database. The backend is a Google Sheet.

Every instinct I have says to fix that. I did not, and I would make the same decision again.

## Start from where the data lives

The registry already existed in a spreadsheet. It had lived there for years. The people maintaining it knew how to use it, trusted it, and could open it on a phone at a meeting without anyone's permission.

Migrating to Postgres would have been technically cleaner and practically worse. It would have taken the one tool the client fully controlled and replaced it with one they could only reach through software I wrote. If my app broke, or I disappeared, or the hosting lapsed, their registry would have become unreachable. That is not a hypothetical risk for a small political organisation, it is the normal course of events.

Keeping Sheets meant the data outlived the application. That is a feature, and it was worth real engineering cost.

## What the cost actually was

Sheets is a spreadsheet API pretending to be a data layer, and you pay for the pretence.

**Columns move.** Someone inserts a column and every hardcoded index in your code silently points at the wrong field. This is the failure mode, and it is quiet, which makes it the dangerous one. So nothing addresses columns by position. There is a column-map abstraction between the app and the sheet, and it is the single most important piece of code in the project.

**There are no constraints.** No types, no foreign keys, no uniqueness. Anything the spreadsheet will not enforce, the application has to, which means validation is not a convenience layer, it is the only layer.

**Deletion is dangerous.** Rows are not rows in the database sense, and removing one shifts everything under it. So deletion is logical, not physical: a status field flips to inactive and the record stays. Nothing is destroyed by a click.

**Writes are narrow on purpose.** The bulk address correction workflow writes only the specific columns it owns and never touches read-only fields, because a broad write against a live shared sheet is how you lose an afternoon of somebody else's work.

## The general lesson

The interesting constraint on most real projects is not technical. It is the shape of the client's existing life, and the correct architecture is often the one that respects it rather than the one that would look best in a diagram.

I could have argued for a database, and I would have won the argument, because I would have been right on the technical merits and wrong about the outcome. Getting to be right is not the job.
