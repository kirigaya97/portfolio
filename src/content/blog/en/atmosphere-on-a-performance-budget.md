---
title: "Atmosphere on a performance budget"
description: "A landing page that looks like a theatre poster does not have to load like one. The budget came first, and the design had to fit inside it."
publishDate: 2026-08-28
tags: ["Performance", "Design", "Astro"]
---

The usual trade is presented as a law of nature: you can have a site that feels like something, or a site that loads fast. Pick one.

The Guillermo Flores landing was a good place to test that, because the brief leaned hard toward feeling. An illusionist and mentalist, a stage persona, and an art direction that mixes four worlds at once: gothic claroscuro, Old West woodtype, theatre, and Art Nouveau linework. That is exactly the kind of brief that usually ends with a heavy animation library, a stack of effects and a Lighthouse report nobody wants to open.

## The budget came before the design

Before writing a component I wrote down three numbers: **LCP under 2.5 seconds, CLS under 0.1, and less than 100 KB of JavaScript on first load.**

That order matters. A budget you set after the design is a measurement. A budget you set before it is a constraint, and constraints are what shape decisions. Every effect after that point had to answer the same question: does this fit?

## What fitting inside it looked like

**No GSAP for the hard part.** The services section is a pinned, full-viewport cinematic slider across four categories. The reflex is to reach for GSAP and ScrollTrigger. I wrote a small scroll-progress engine in plain TypeScript instead, fed by Lenis. It does one job, it needs no licence, and it costs a fraction of the bytes.

**Only opacity and transform.** Every transition on the page, the word-by-word hero reveal, the slow photo drift, the brass line drawing itself, the parallax chapter numerals, animates only those two properties. They run on the compositor, so the browser does not recalculate layout or repaint on every frame. That one rule rules out a lot of tempting effects, and that is the point.

**Fonts that do not move the page.** Bodoni Moda, Cormorant Garamond and Inter are self-hosted. No third-party font request and no late swap pushing the layout around. Typography carries most of the atmosphere on this site, so it could not also be the thing that broke CLS.

**Islands only where something is actually interactive.** The site is Astro. Most sections ship as HTML and CSS and nothing else.

## Reduced motion is not an afterthought

A site built on motion has a responsibility to people who get sick from motion. Every animation respects `prefers-reduced-motion`. With it on, the page is still the same page: the same type, the same palette, the same ornaments. It just stops moving.

That was also a useful test of the design. If the atmosphere had disappeared when the animation stopped, the atmosphere was the animation, and that would have been a weaker design.

## What I take from it

The budget did not make the site plainer. It made it more deliberate. Effects I would have added because I could were cut because they did not fit, and the ones that stayed had to earn their bytes.

Core Web Vitals are not the goal of a site like this. The goal is that someone booking a corporate event from their phone sees the stage, not a spinner. The numbers are just how you know you did not trade one for the other.
