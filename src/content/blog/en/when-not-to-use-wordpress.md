---
title: "When not to use WordPress"
description: "I build WordPress sites for a living. Most of my recent work is not WordPress, and that is a judgement, not a trend."
publishDate: 2026-08-20
tags: ["Architecture", "WordPress", "Astro"]
---

I have built WordPress sites since 2018 and I still do. I also have a portfolio where most of the recent work is Astro or Next.js. Those two facts are not in tension, and the resolution is not that I changed teams.

WordPress is a content management system. The question is always whether the site in front of you has content that needs managing.

## The question that decides it

Not "is WordPress good", which is unanswerable, but: **who edits this, how often, and what happens if nobody ever does?**

That single question sorts almost every project I have taken.

A construction company adding project pages, a real estate agency publishing properties weekly, a postal service updating destinations and news: those are content operations. Somebody non-technical needs to change things on a Tuesday without calling me. That is precisely what a CMS is for, and reaching for anything else because it is more fashionable would be me solving my problem instead of theirs.

A single-page landing for a magician, with copy that changes twice a year and a show list that is basically fixed: that is not a content operation. It is a document. Putting a CMS behind it means installing a database, an admin, a login, an update treadmill and a security surface, all so that twice a year somebody could edit text they will actually ask me to edit anyway.

## What you pay for a CMS you do not need

The cost is not theoretical, and it is not really performance, although that is part of it.

It is that you have created a thing that must be maintained forever. Core updates, plugin updates, PHP version deprecations, a login page that gets probed continuously, backups that need to exist and be tested. I do that maintenance across more than ten live properties, so I am not describing it from the outside. It is worth it when the client is getting a content operation in return. It is pure overhead when they are not.

Meanwhile the same landing page as a static build has no database to compromise, no admin to brute force, and no update that can take it down at 3am. It also loads faster, but honestly that is the smaller half of the argument.

## Where the line actually falls

I do not think the split is "simple sites static, complex sites WordPress". The magician landings are not simple. Several are heavier engineering than the WordPress work, with custom scroll engines, canvas animation and strict performance budgets.

The split is about **who owns the content over time**.

- Content that changes on someone else's schedule, edited by someone who is not me: a CMS.
- Content that is essentially fixed, or that I will be editing anyway: a static build.
- A real application, with records and queries and users: neither of those, build the application.

That last one matters. SADA is a registry with thirty-four fields per record and a bulk correction workflow. Logística tracks containers through a lifecycle. Bending WordPress into those would have been possible and would have been a mistake, because they are applications wearing a website as a coat.

## Why this is a judgement and not a preference

The honest version is that I default to WordPress less than I did in 2020, and that is because I got better at asking the question rather than because I stopped liking the tool.

A developer who only knows one platform will find that every project needs it. That is not expertise, it is the shape of the toolbox. The useful skill is being able to say, in front of a client who came asking for a WordPress site, that they do not need one and here is what they need instead, and then being able to build either.
