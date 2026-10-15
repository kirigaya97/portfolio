---
title: "JC Consultora: Real Estate Site with Custom PHP Filtering"
publishDate: 2025-06-01 00:00:00
url: https://jcconsultora.com.ar
img: /assets/jcconsultora/1.webp
img_alt: JC Consultora homepage with the custom city and neighbourhood property filter over the hero.
description: |
  A real estate site for JC Consultores Inmobiliarios, built solo on WordPress with Divi and ACF as the foundation for two custom PHP features: a hand-built property filter and a context-aware WhatsApp button that composes its message from the page it sits on.
tags:
  - Dev
  - Backend
  - Frontend
  - Design
technologies:
  - name: WordPress
    note: Property listings maintained by the agency without developer involvement.
  - name: Divi (child theme)
    note: Layout foundation, extended through a child theme where the custom PHP lives.
  - name: ACF
    note: Structured property fields (city, neighbourhood, operation type, specs) that the custom code queries against.
  - name: Custom PHP property filter
    note: Hand-built filtering over the property post type instead of a filtering plugin.
  - name: Custom PHP context-aware WhatsApp button
    note: Composes the outgoing message from the current property, so the conversation opens with the visitor's actual interest.
  - name: Scroll sequence
    note: Pinned scroll-driven hero sequence on the landing view.
screenshots:
  - /assets/jcconsultora/2.webp
  - /assets/jcconsultora/3.webp
  - /assets/jcconsultora/4.webp
  - /assets/jcconsultora/5.webp
---

### Project Overview

JC Consultores Inmobiliarios ([jcconsultora.com.ar](https://jcconsultora.com.ar/)) is a Buenos Aires real estate consultancy run by a licensed broker and public auctioneer, handling temporary rentals, sales and purchase operations, and residential development projects. The site is a property catalogue that has to answer one question fast (*is there something here for me?*) and then get the visitor into a conversation.

**This one I built solo**, and it's the entry that shows Divi and ACF used as a foundation for real custom development rather than page assembly. Two pieces are written in PHP, not configured through plugins.

#### Objectives

- **Filter, don't scroll** - Let a visitor narrow the catalogue by location before browsing anything.
- **Structured property data** - Model properties as real records with queryable fields, not as free-text pages.
- **Contact with context intact** - Make the enquiry carry the property the visitor was looking at.
- **Agency-maintainable** - Let the agency publish and edit properties without touching code.

#### Project Workflow

- **Data modelling with ACF** - Defined the property record (city, neighbourhood, operation type, specifications, imagery) as structured ACF fields on a dedicated post type, so every listing is queryable data rather than prose in a page.
- **Custom PHP filter system** - Built the filtering layer by hand against those fields rather than installing a filtering plugin. The control sits directly in the hero: **Ciudad** and **Barrio** selects with a *Filtrar* action, so the first thing a visitor sees is the way into the catalogue. Neighbourhood entry points (Almagro, San Telmo, Caballito, Belgrano) run through the same query layer.
- **Context-aware WhatsApp button** - Wrote a PHP-driven contact button that composes its own outgoing message from the page context. On a property page it pre-fills the conversation with the visitor's interest already stated, carrying the property URL and its title, instead of opening on a blank *"Hi"*. The message is generated per property, so it stays correct as the catalogue changes and never needs to be maintained by hand.
- **Divi child theme** - Kept all custom PHP in a child theme so Divi updates don't overwrite the work.
- **Property page templates** - Built the development and listing templates around the ACF fields, with galleries, location context, and a downloadable brochure path.
- **Landing sequence** - Implemented a pinned scroll-driven hero sequence on the homepage, with the filter persistently available over it.
- **Service structure** - Laid out the three business lines (temporary rentals, real estate operations, and development projects) as distinct paths.

#### Results and Impact

- **Filtering without plugin overhead** - The catalogue is narrowed by a purpose-built query layer, avoiding a general-purpose filtering plugin and the weight it brings.
- **Enquiries that arrive pre-qualified** - Because the WhatsApp message is composed from page context, the agency receives the property reference with the first message rather than having to ask what the enquiry is about.
- **A maintainable content model** - Properties are structured records, so new listings inherit filtering, templating, and contact behaviour automatically on publish.
- **Divi and ACF as a development foundation** - The visual builder handles presentation while the custom PHP handles behaviour, which is where the actual engineering in this project lives.
