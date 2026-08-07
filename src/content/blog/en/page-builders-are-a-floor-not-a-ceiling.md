---
title: "Page builders are a floor, not a ceiling"
description: "Divi and ACF get dismissed as drag-and-drop. On JC Consultora they were the base for two pieces of custom PHP."
publishDate: 2026-07-30
tags: ["WordPress", "PHP", "ACF"]
---

There is a reflex in this industry: hear "Divi" or "Elementor", assume the person assembles pages and does not write code. I understand where it comes from. I also think it is lazy, and JC Consultora is the site I point at to say so.

It is a Buenos Aires real estate consultancy. WordPress, a Divi child theme, ACF underneath. On the surface, an ordinary stack. Two things on it are written in PHP, and both exist because the plugin version of the answer was worse.

## Model the data first

Before any of the custom work, the properties had to stop being pages. A listing written as prose in a page body is not data, it is a document that happens to mention a neighbourhood. You cannot query it, filter it, or reuse it.

So the property became a record: city, neighbourhood, operation type, specifications, imagery, all structured ACF fields on a dedicated post type. Everything after this depends on that decision. It is the least visible work on the site and the reason the rest was possible.

## The filter

The site needed to let someone narrow the catalogue by location before browsing anything. The obvious move is a filtering plugin. I wrote the query layer by hand instead.

The reason is not purity. General-purpose filtering plugins are built to handle every schema anyone might have, which means they carry a lot of machinery you are not using, and they put a layer between you and your own queries. I had already defined the exact shape of the data. Querying it directly was less code than configuring a plugin to guess at it.

The control sits in the hero, city and neighbourhood, with a filter action. First thing a visitor sees is the way in.

## The WhatsApp button that knows where it is

This is the piece I like most, and it is about eight lines of thinking rather than eight hundred of code.

Most WhatsApp buttons open a blank conversation. The visitor has to explain who they are and what they were looking at, and a good share of them simply do not bother. The interest was there and the friction ate it.

So the button composes its own message from the page it sits on. On a property page it opens the conversation with the property URL and its title already written in. The visitor sends "Hi, I want more information about this property: [url] - [title]" without typing anything.

Two consequences. The visitor's cost of asking drops to one tap. And the agency receives the property reference in the first message instead of asking what the enquiry is about.

It is generated per property, so it stays correct as the catalogue changes and nobody maintains it by hand. You can open any listing on the live site and read the link.

## The actual point

The builder was never the constraint. Divi handled presentation, which is what it is good at, and freed me to spend the custom work where it changed the outcome. Refusing to touch a page builder is not a mark of engineering seriousness. Knowing which layer a problem belongs in is.
