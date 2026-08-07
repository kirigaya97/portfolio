---
title: "Building WordPress with AI in the loop"
description: "I build client sites locally with AI coding tools in the loop, so nothing reaches production untested."
publishDate: 2026-06-05
tags: ["WordPress", "AI", "Workflow"]
---

A lot of WordPress work still happens directly on the live site. Someone edits a template in the admin, refreshes, and hopes. It works right up until it does not, and then it does not work in front of the client's customers.

I do not build that way. Every client site starts in a local environment, and AI coding tools sit inside that loop, drafting and testing layouts and custom code locally before anything touches production.

## Local first, for boring reasons

The case for local development is not sophistication. It is that you get to be wrong for free.

Locally I can break a theme completely, try three approaches to a query, install a plugin to see what it does and remove it without residue. On production every one of those experiments has an audience. The version of me that is willing to try the risky idea only exists when the cost of failure is zero, and that version writes better code.

Local also means a real editor, real version control, and real debugging, instead of a textarea in wp-admin with no undo.

## Where the AI actually helps

Not in generating whole sites. That produces something that looks finished and is a nightmare to maintain, and I have no interest in inheriting it.

It helps in the middle of the work, on specific things:

**Boilerplate that I know how to write and do not want to.** Field registrations, template scaffolding, the fourth variation of a loop. I know exactly what the output should be, which means I can spot a wrong answer instantly. That is the condition under which this is safe.

**A second opinion on an unfamiliar API.** Faster than searching, and I verify it against the docs regardless.

**Explaining code I did not write.** Inheriting a client's theme from a previous developer is a large part of this job, and having something read a thousand lines and tell me where the hooks are saves a genuine afternoon.

The pattern is consistent: it is useful where I can evaluate the answer, and dangerous where I cannot. When I do not know enough to judge the output, I go and learn the thing rather than shipping code I do not understand. That is not caution for its own sake. Unverified code in a client's production site is a liability with my name on it.

## What actually changed

The workflow did, more than the code.

I try more approaches, because trying is cheap now. I write more custom PHP and reach for fewer plugins, because the cost of writing something specific dropped enough to beat the cost of configuring something general. And I test locally by default rather than as a virtuous extra step, because the local environment is where the work already lives.

The client-facing outcome is unglamorous and the whole point: fewer things break in production, because fewer things reach production untested.
