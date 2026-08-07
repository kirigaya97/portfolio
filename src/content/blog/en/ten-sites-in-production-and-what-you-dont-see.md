---
title: "Ten sites in production and what you don't see"
description: "Portfolios show launches. The actual work is DNS, SSL, backups, and the Tuesday a site gets hacked."
publishDate: 2026-06-16
tags: ["Operations", "Hosting", "WordPress"]
---

A portfolio is a record of launches. It shows the day a site went live and nothing about the years afterwards, which is where most of the real work happens.

I keep more than ten live properties running. Hosting, SSL, backups, security, monthly updates, across DigitalOcean, WP Engine, Hostinger and plain cPanel boxes. None of it appears on a case study page and all of it is what clients are actually paying for.

## Launching is the easy part

Building a site is a bounded problem. You know when it is done. Keeping one alive is unbounded, and it fails in ways nobody scheduled.

Certificates expire. A plugin update takes down a checkout on a Saturday. A registrar sends a renewal notice to an inbox somebody stopped reading in 2021. A host deprecates a PHP version. None of these are interesting, all of them are urgent, and each one is the difference between a business trading and not trading.

The skill is not heroic. It is noticing before the client does.

## What the toolset is actually for

I use Cloudflare for DNS, CDN, caching and SSL, cPanel and WHM for host-level administration, WP-CLI for anything I would rather not do through a browser, and NGINX and Apache configuration when the problem is below WordPress. Linux over SSH.

WP-CLI is the one worth singling out. A plugin conflict on a site you cannot load in a browser is unsolvable through wp-admin, by definition. Over SSH you deactivate plugins one at a time, watch the site come back, and know exactly which one it was. Ten minutes instead of an afternoon of guessing.

## The failure that teaches the most

Recovering a hacked WordPress install teaches you more than building ten clean ones.

You learn quickly that cleaning the visible damage is not the job. Finding the way in is the job, because a site cleaned without closing the entry point is a site that gets reinfected within the week, and now the client has watched you fail twice. The order is: contain, find the vector, close it, clean, verify, then harden so the same class of thing does not work again.

It is unglamorous and it is genuinely diagnostic work. Reading logs, isolating plugin and theme conflicts, tracing PHP fatal errors, working out what changed and when.

## Migrations are where the details bite

Moving a site host to host is not copying files. It is files, database, users, mail, DNS cutover, SSL reissue, and then verifying every one of those actually landed.

Mail is the one people forget. The site moves fine, the DNS updates fine, and three days later the client mentions nobody has received a contact form message since Tuesday. Nothing looked broken. That is why the checklist exists and why verification is a step rather than a feeling.

## Why I put this on a portfolio at all

Because "I built this" and "I have kept this running for four years" are different claims, and the second one is harder.

Anyone can hand over a site that works on the day it launches. Far fewer people are still answering the phone about it three years later, and that is the thing a client is actually buying when they hire someone.
