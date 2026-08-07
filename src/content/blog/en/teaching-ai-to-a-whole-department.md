---
title: "Teaching AI to a whole department"
description: "I trained VML's entire technology department on n8n, Flowise and LangChain. The hard part was not the tools."
publishDate: 2026-07-14
tags: ["AI", "Teaching", "Automation"]
---

After the RAG agent went into use at United, the question inside VML changed. It stopped being whether this kind of automation was worth building and became who else could build it. That turned into hands-on AI and automation training for the entire technology department.

The tools were n8n, Flowise and LangChain. Those were the easy part.

## What people actually get stuck on

Almost nobody in that room struggled with the software. They were engineers. Give an engineer a node-based workflow tool and they will figure out the interface faster than you can explain it.

What they got stuck on was knowing which of their problems were shaped like an AI problem. That is the real skill, and it is not a tooling skill. Left alone, people split into two failure modes:

**Reaching for a model when a script would do.** If the rules are deterministic, write the rules. An LLM in that position is slower, more expensive, and occasionally wrong in ways a conditional never is.

**Not reaching for one when the rules live in prose.** This is the more common miss and the more costly one. When the logic is a paragraph in a style guide instead of a boolean, people assume it cannot be automated and keep doing it by hand forever.

Most of the training ended up being about telling those two apart.

## Teaching is a debugging exercise

I have taught before, as a museum guide, as a lecturer, and it produced the same lesson every time. You do not learn what someone misunderstood by asking if they followed. You learn it by watching where they stop.

So the sessions were hands-on. Not slides about agentic workflows, but people building something small and breaking it in front of me. Every place a room got stuck was a place my explanation had a hole in it, which made it a fairly efficient way to improve the explanation.

## The bit that surprised me

Explaining the RAG agent forced me to understand it better than building it had.

While I was writing it, plenty of decisions were instinct: this scope, not that one, this retrieval strategy, keep it narrow. Instinct is fine until someone asks why, and then you find out whether you had a reason or a habit. A few of my answers were habits. That was useful to discover.

## Why this matters beyond the room

There is a version of being the person who builds the automation that is quietly self-serving. You become necessary. The work routes through you, and that feels like security.

It is not. It caps you at the throughput of one person, and it makes you the bottleneck on the thing you claim to be advancing. Teaching the department to do it themselves was the higher-leverage move, and it cost me nothing I actually wanted to keep.

Being the only person who can do something is a worse position than being the person who taught everyone else to.
