---
title: "The AI agent nobody asked for"
description: "I built a RAG agent at United because a task was boring. It gave the team back a fifth of its capacity."
publishDate: 2026-08-06
tags: ["AI", "Python", "Automation"]
---

The best thing I shipped at United Airlines was not on any roadmap. Nobody assigned it. I built it because I was bored, and boredom is a signal worth listening to.

I was a technical content producer on *Hemispheres*, United's in-flight publication, working inside SDL Tridion, an enterprise CMS. The work was real engineering: HTML, CSS and JavaScript inside a component-based system, interactive maps, text-to-speech audio, REST integrations. But a meaningful slice of every week was repetitive CMS and validation work. Check the same fields. Confirm the same rules. Move on.

Repetition is not just tedious. It is expensive, and it is where mistakes live.

## Why an agent, and not a script

A script would have covered the deterministic half. The problem was that the rules were not fully deterministic. Plenty of the checks were judgement calls expressed in prose in a style guide, the kind of thing a person applies correctly and a regex does not.

That is the shape of problem retrieval-augmented generation is actually good at. Not "write me some text", but "here is a body of rules, here is a specific case, apply one to the other and tell me what you find". I built it in Python with LangChain, pointed it at the material it needed to reason over, and kept the scope narrow on purpose.

## The number, and the honest version of it

It gave the team back about twenty percent of its capacity.

The honest framing matters more than the figure. It did not replace anyone, and it did not do the interesting part of the job. It absorbed the mechanical layer so the humans could spend their attention on editorial judgement, which is the part that actually needed humans. Capacity freed, not headcount saved.

## What I actually learned

**Propose things.** The gap between noticing a problem and being asked to solve it is where most of the value sits, and it is usually unoccupied. No one was going to file a ticket titled "this is tedious".

**Narrow scope survives contact with production.** I did not build a general assistant. I built something that did one unglamorous job reliably. General assistants demo well and break quietly.

**Automate the part you understand completely.** I had done the manual work for months before automating it. That is not wasted time, it is the specification.

The follow-on mattered as much as the agent itself. Once it existed, the question inside VML stopped being whether this was worth doing and became who else could do it, which turned into training the whole technology department on n8n, Flowise and LangChain. That is a separate post.

The lesson I keep returning to: if a task is boring enough that you resent it, you probably understand it well enough to automate it.
