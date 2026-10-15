---
title: "Giving the agent hands, and rules for each one"
description: "Skills, MCP servers for GitHub, Vercel, Hostinger and Apify, a browser, live docs and a plugin that argues for less code. What I connect to Claude, and the limit I set on each."
publishDate: 2026-09-22
tags: ["AI", "Claude Code", "Tools"]
---

A model on its own can read and write files. That is already useful, and it is also where most people stop. The leverage starts when the agent can reach the systems the work actually lives in: the repository, the host, the deploy, the browser, the docs.

Each connection is also a new way to break something. So every tool I add comes with one rule about what it is allowed to do.

## Skills: the procedure

I wrote about these last week. A skill is a written procedure the agent follows: the order, the traps, the stop. Everything below is a tool a skill can use. The skill decides when.

## MCP servers: the hands

MCP, the Model Context Protocol, is the standard way to plug an external system into an agent as a set of tools. These are the ones that earn their place in my week.

**GitHub.** Issues, pull requests, branches, CI status. The agent can prepare a PR and read why a check failed. **Rule:** commit or push only when I ask, and never on `main` directly.

**Vercel.** Deployments, environment variables, build logs. Most of my Astro and Next.js work ships there, so being able to ask "why did this preview fail" and get the log instead of a guess saves real time. **Rule:** previews freely, production on request.

**Hostinger.** Several WordPress clients live there, and SSH access lets the agent look at logs, disk, PHP versions and what a plugin actually wrote to the database. **Rule:** diagnostic only. It never mutates production over SSH. Fixes are made locally and deployed the normal way.

**Apify.** Ready-made scrapers and crawlers, so when a project needs public data I run an existing actor instead of writing and maintaining a scraper of my own. **Rule:** public data, for the project at hand, nothing more.

**Live documentation.** A docs server that returns the current API for a library instead of whatever the model remembers. Frameworks I use change fast enough that "remembered" often means "one version ago". **Rule:** check the docs before writing against an API that matters.

## A browser, with one profile

Some systems only exist behind a login in a browser. Claude in Chrome lets the agent drive a real tab: open the admin, check a setting, take a screenshot of the result.

**Rule:** a dedicated browser profile per client, selected explicitly before every task. If the agent lands on a login page, it picked the wrong browser, and it stops instead of trying to sign in. That rule came from experience.

## Ponytail: an argument for less

Ponytail is a Claude Code plugin that makes the agent behave like a lazy senior developer. Before writing anything it has to ask whether the thing needs to exist, whether the codebase already has it, whether the platform already does it. The smallest complete change wins.

It also ends every answer with what it skipped and what it did not check. That last line is the most useful part. An agent that tells you where it did not look is far easier to trust than one that sounds sure about everything.

## Memory and context files

Two quieter pieces hold it together. `CLAUDE.md` holds the project's hard rules, and memory files hold the preferences I would otherwise repeat every session. Neither is clever. Both mean the agent starts each session already knowing what it must not do.

## The pattern

Read access is cheap and I hand it out generously. Write access is narrow, explicit and tied to a single target. Anything that touches production goes through a human GO.

That is not a rule I invented for AI. It is how you onboard any new developer to a client's infrastructure. The difference is that this one reads the onboarding document every single time.
