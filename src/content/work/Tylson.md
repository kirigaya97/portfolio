---
title: "Tylson: Self-Managed Portfolio for a Music Video Director"
publishDate: 2026-10-02 00:00:00
url: https://tylson.com.ar
img: /assets/tylson/1.webp
img_alt: Tylson homepage hero with the wordmark in white and electric blue over a black background, a navigation bar, and a video player with a play button below.
description: |
  A single-page portfolio for Tylson, a creative director working on music videos and live sessions, built on Astro with a Git-based CMS so he can manage works, roster, bio and contact details himself, plus a small serverless endpoint for the contact form.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
technologies:
  - name: Astro 5
    note: Static output with a content collection of works, rendered as a single page.
  - name: TypeScript
    note: Vanilla scripts for the filter, lightbox, scroll reveals, loader and contact form.
  - name: Plain CSS
    note: Design tokens and every component style in a single stylesheet, no framework.
  - name: Sveltia CMS
    note: Admin panel at /admin that edits the JSON content and commits straight to the repo.
  - name: Cloudflare Workers
    note: Hosts the static site, the CMS OAuth proxy and the contact endpoint.
  - name: Resend
    note: Delivers the contact form messages from the site's own domain.
  - name: Google Fonts (Geist, Geist Mono) and Akira Expanded
    note: Geist for body and UI, a self-hosted wide display face for the wordmark.
screenshots:
  - /assets/tylson/2.webp
  - /assets/tylson/3.webp
  - /assets/tylson/4.webp
  - /assets/tylson/5.webp
---

### Project Overview

Tylson ([tylson.com.ar](https://tylson.com.ar)) is a creative director, camera operator and editor working in the Argentine music scene: music videos, live sessions and visualizers across trap, cumbia, rock and underground acts. The site replaces a Linktree with a single page that shows the work first and makes contact easy.

The brief was a portfolio with its own identity (dark, neon, underground) that the client can keep updating without a developer. So the interesting part is less the page itself and more what sits behind it: the content model, the CMS and the delivery pipeline.

#### Objectives

- **Work first** - Open on a playable video and a filterable grid of works, not on a link list.
- **Self-managed content** - Let Tylson add works, edit his bio, change contact details and curate the artist roster without touching code.
- **Its own look** - An underground, neon visual identity with a loader, wordmark and motion that fit a video director.
- **Real contact channel** - A contact form that actually delivers email from the site's own domain.

#### Project Workflow

- **Content model** - Modelled works as an Astro content collection of JSON files (title, artist, roles, format, genre, featured flag, order, YouTube or playlist ID), with the schema accepting free strings so the option lists are controlled by the client, not the code.
- **Self-administered taxonomies** - Roles, genres and formats live in a data file edited from the CMS, and the filter chips and the work selects read from it.
- **Single page, no detail routes** - Hero, animated roster, filterable works, about, behind-the-camera gallery and contact on one page, with videos played in a lightbox instead of separate pages. Featured works float to the top.
- **Animated roster** - A three-row, counter-scrolling band of artists, one row per genre, fed by a CMS-editable list.
- **Single source for contact data** - Instagram, email, phone and WhatsApp come from one config file and are consumed by the header, footer, contact section and floating WhatsApp button.
- **Interaction layer** - A timecode-style preloader, compact header on scroll, reveal-on-scroll and the filter and lightbox logic, all in one TypeScript file that respects `prefers-reduced-motion`.
- **CMS and auth** - Installed Sveltia CMS at `/admin` with a GitHub backend, and deployed a small Cloudflare Worker to handle the OAuth login.
- **Contact endpoint** - Wrote a Cloudflare Worker that validates the form payload, escapes the content, checks an origin allowlist and sends the email through Resend, with a honeypot field to drop bots.
- **Deploy** - Static build on Cloudflare Workers, connected to Git so a push (or a CMS edit, which is a commit) triggers a rebuild.

#### Results and Impact

- **A site the client can run himself** - Works are plain JSON entries in the repo, and most of the recent commits are CMS edits (create, update and delete of works), which is the editing flow working as designed.
- **Options controlled by data, not code** - Adding a role, genre or format is a CMS edit, with no schema change or code redeploy.
- **Light front end** - Static Astro output with no UI framework and no dependencies beyond Astro itself.
- **Contact without a backend to maintain** - The form posts to a single stateless Worker, with validation, an origin allowlist and a honeypot built in and no server of its own.
- **Handoff-ready** - Infrastructure, accounts, DNS, email and CMS access are documented in runbooks in the repo.
