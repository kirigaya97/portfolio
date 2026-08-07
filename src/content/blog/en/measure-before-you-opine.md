---
title: "Measure before you opine"
description: "A site I cannot measure is a site I cannot improve. Notes on GA4, GTM, and where SEO is heading."
publishDate: 2026-05-19
tags: ["Analytics", "SEO", "GA4"]
---

The sentence I repeat most often to clients: a site I cannot measure is a site I cannot improve.

It sounds obvious. It is routinely ignored, including by people who care a great deal about their website. A remarkable number of businesses have strong opinions about which page is working and no instrumentation capable of confirming or refuting a single one of them.

## Analytics is a design task, not an install

Dropping GA4 on a site and considering it done is the most common version of this mistake. Now you have pageviews. Pageviews tell you almost nothing, because the thing you care about is never a pageview, it is a person doing the thing the site exists for.

Which means deciding, before you touch any code, what counts as success. Form submitted. WhatsApp opened. Brochure downloaded. Checkout completed. Then designing a data layer that emits those as events, wiring them through Tag Manager, and defining them as conversions.

Then, and this is the step people skip, QA it. Tag Manager preview mode plus DevTools, walking every flow, confirming each event fires once with the payload you expect. Analytics that silently double-counts is worse than no analytics, because you will trust it and make decisions with it.

## What it changes in practice

Once conversions are real, arguments stop being about taste.

Nobody has to win a debate about whether the contact form should be higher on the page, because you can see how many people reach it and how many complete it. A section everyone loved turns out to be where sessions end. The instrumentation is not there to prove anyone right, it is there to end that category of conversation and get back to work.

This is also where a portfolio claim becomes verifiable. "I improved conversion" is a sentence. "Conversions were instrumented, here is the before, here is what changed, here is the after" is a result.

## Where this is going

Search is shifting, and the instrumentation question is shifting with it.

Classic SEO optimises to rank on a results page. But a growing share of queries are now answered directly by an AI system that read a set of pages and synthesised a response, and the user never arrives at any of them. Being cited in that answer is becoming its own objective, which is roughly what people mean by AEO, GEO and LLMO.

I am not going to pretend the measurement story here is solved. It is not. Attribution for "an LLM read my page and recommended us" is genuinely unclear right now, and anyone selling certainty about it is ahead of the evidence.

What does carry over is the discipline, and most of the underlying work is the same work: clear structure, unambiguous claims, real expertise, content that answers a question completely instead of teasing it. That was good practice when the goal was a human clicking a blue link, and it holds up now that the reader might not be human at all.

Decide what success is. Instrument it. Verify the instrument. Then have opinions.
