---
title: "From 45 to 94, and what actually moved it"
description: "A Lighthouse score is a symptom, not a goal. What the CAPFA rebuild changed underneath it."
publishDate: 2026-08-13
tags: ["Performance", "WordPress", "Lighthouse"]
---

CAPFA Constructora is a construction company whose site scored 45 on Lighthouse performance. After the rebuild it scored 94.

I want to use that number carefully, because a Lighthouse score is a symptom. Nobody visits a website to experience a good score. What actually changed was a set of specific decisions, and the score moved because of them.

## The score is not the goal

The trap with a performance number is that it is easy to game. You can chase 100 by deferring everything, lazy-loading content that should be immediate, and stripping the page until the metric is happy and the site is worse.

So the target was never 94. The target was a site that arrives quickly on the connection a real prospect has, and that the client can update without slowly destroying it. The score is how I checked, not what I aimed at.

## Where the 45 came from

The pattern is familiar to anyone who has inherited a WordPress site of a certain age. Nothing was catastrophically wrong. There were just many small costs, each individually defensible, that added up.

A plugin for a feature that was three lines of code. Another plugin whose only job was a contact button. Each one loading its own CSS and JavaScript on every page of the site, including the pages where the feature did not appear.

That is the real weight of a plugin, and it is invisible in the admin. You see one row in a list. The browser sees two more requests on every page load.

## What actually moved it

**Fewer plugins doing trivial jobs.** The WhatsApp contact button is the clearest case. It had been a plugin. It became a small piece of JavaScript in the theme, which does the same thing and costs nothing on pages that do not use it. When the feature is genuinely small, writing it is cheaper than installing it, and the difference compounds across a whole site.

**Custom PHP instead of configuration layers.** Several behaviours were being achieved by configuring something general to approximate what was needed. Writing the specific thing directly removed both the plugin and the guesswork.

**A component-driven structure.** Divi's modular tools plus custom PHP functions, so repeated elements were defined once. This is a maintainability decision more than a performance one, but the two are related: a site the client can update without breaking is a site that still scores 94 a year later.

**Structure that suited the content.** Templates for the pages that actually repeat, which is where a construction company's content lives.

## The part nobody measures

The score was validated with Lighthouse, Google Analytics and other testing tools, and it held.

But the outcome I would defend in an interview is not the 94. It is that CAPFA updates its own site now, and the performance work did not quietly undo itself the first time somebody added a page. A fast site that only stays fast while the developer is watching has not been fixed. It has been tuned, which is a different and much weaker thing.

Optimising a page once is a task. Leaving it in a state where the client cannot easily make it slow again is the actual job.
