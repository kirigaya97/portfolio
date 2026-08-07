---
title: "How I became the magicians' developer"
description: "Five magicians' sites later, an accidental niche turned out to teach me more about interfaces than most client work."
publishDate: 2026-06-25
tags: ["Design", "Niche", "Mentalism"]
---

At some point I noticed that a suspicious share of my portfolio was magicians. ChapMagic. Guillermo Flores. Vázquez. Magia y Burbujas. Santiago Fernández. Corporate mentalism, close-up, bubble shows, theatre.

None of it was strategy. I am a mentalist myself, so I knew people in that world, and one project became a referral became another. That is how most niches actually happen.

But it turned into a genuine specialisation, and it taught me things that transfer.

## The brief is always the same and never the same

Every one of these sites has the identical job: convince someone who has never seen this performer that an hour with them is worth paying for. That is a hard sell, because the product is an experience that cannot be sampled, and the only honest evidence is other people's reactions.

The variation is in tone, and the tone gap is enormous. Guillermo Flores needed gothic and theatrical, dark, ornate, closer to an Edgar Allan Poe print than a service page. Magia y Burbujas needed warm and open, a street performer doing bubble shows for families in Barcelona, where the same aesthetic would have been actively wrong.

Same conversion problem, opposite emotional register. Building both taught me more about tone as a functional requirement than any amount of theory.

## Atmosphere is a performance budget problem

Every one of these sites wants to feel like something. That pulls hard toward heavy imagery, video, elaborate motion, and straight into a slow first load.

Which is fatal, because a lot of the traffic arrives from a phone, from an Instagram link, on whatever connection the person has right now. A cinematic site that takes six seconds to arrive has already lost the argument it was making about production values.

So these projects are where I got strict. Self-hosted fonts instead of a CDN round trip. Motion restricted to opacity and transform so it stays on the compositor. Reduced-motion respected. On Ilusionista, an explicit budget: under 100KB of JavaScript on first load, with an aesthetic that looks like it should cost far more. The discipline came from this niche and now I apply it everywhere.

## What the performing actually gave me

The useful transfer is not visual. It is structural.

A magic act and a landing page have the same underlying job: control the order in which someone receives information. What they notice first, what you delay, what you let them conclude on their own. A trick that reveals in the wrong order is not a trick, it is a sequence of events. A page that reveals in the wrong order is not persuasive, it is a list of facts.

Both fail the same way. Both are fixed by asking what the person knows at each moment, and what they should be wondering next.

I did not plan the niche. But being the developer who already understands what the client does turns out to be worth more than being the developer with a broader tech list, and I would take that trade again.
