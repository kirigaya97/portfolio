---
title: "Santiago Fernández: WordPress to Astro Migration"
publishDate: 2026-10-14 00:00:00
url: https://magosantiago.com
img: /assets/santi/1.webp
img_alt: Homepage hero of the Santiago Fernández site on a near-black background, the magician fanning playing cards, SANTIAGO in white and FERNÁNDEZ in red capitals, the subtitle Ilusionista & Mentalista, a red WhatsApp button and a Tickets button in the menu.
description: |
  Migration of the site of Santiago Fernández, an illusionist and mentalist in Madrid, from WordPress and Divi to Astro, with the whole site in Spanish and English and a show schedule that updates itself from Dinaticket.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Marketing
technologies:
  - name: Astro 5
    note: Static pages with a single server route, the contact endpoint.
  - name: Tailwind CSS v4
    note: Design tokens declared in `@theme` (warm charcoal, working red, warm paper).
  - name: Lenis
    note: Smooth scroll, with vanilla JS and IntersectionObserver reveals instead of an animation framework.
  - name: Resend
    note: Delivers contact form enquiries to the client's inbox from the `/api/contact` route.
  - name: Vercel + @astrojs/vercel
    note: Adapter-based hosting, with DNS managed separately in Cloudflare.
  - name: astro-dinaticket-ticketing
    note: Shared kit that scrapes Dinaticket and feeds the `/entradas` page and one landing per show.
  - name: GitHub Actions
    note: A scheduled workflow, every 3 hours, refreshes the schedule and commits only when something changed.
  - name: Fontsource (self-hosted)
    note: Montserrat Variable for headlines and Inter Variable for body text, no third-party font CDN.
  - name: Playwright
    note: Scripts for screenshots, mobile scroll, swipe, SEO and tracking checks.
screenshots:
  - /assets/santi/2.webp
  - /assets/santi/3.webp
  - /assets/santi/4.webp
  - /assets/santi/5.webp
video: /assets/santi/1.mp4
---

### Project Overview

Santiago Fernández ([magosantiago.com](https://magosantiago.com)) is an illusionist and mentalist based in Madrid who performs at corporate and private events and in theatres. His site started as a WordPress build with the Divi page builder. This project moves it to Astro, keeping the red, black and white identity of the original and adding what the old setup could not do: a show schedule that nobody has to type in.

The site is written for a Spanish audience and exists in full in Spanish and in English under `/en/`.

#### Objectives

- **Keep the identity** - Same red, black and white palette and the client's section order, rebuilt on a static Astro base.
- **Tickets without manual work** - Publish dates, prices and posters of his shows automatically instead of editing pages by hand.
- **A landing per show** - Give each show its own page that can be used in ads, and keep it alive after the last date.
- **Bilingual** - Serve the whole site in Castilian Spanish and in English, with the right `lang` and `hreflang`.
- **Findable** - Handle SEO and LLM-readable metadata from the start, and keep analytics behind consent.

#### Project Workflow

- **Foundation and palette** - Scaffolded Astro 5 with Tailwind v4 tokens. The original brand red is tempered so it does not vibrate on black: a warm charcoal base, a working red for fills and calls to action, a lighter red for small text and a warm white for copy. Montserrat and Inter are self-hosted.
- **Home in the client's order** - Hero with a single WhatsApp call to action, contact form right after it, a rail of three vertical videos, a gallery that snaps as a carousel on mobile and becomes an editorial mosaic on desktop, services, "About me", client logos and reviews.
- **Tickets from Dinaticket** - Integrated the shared `astro-dinaticket-ticketing` kit. A scraper reads Dinaticket, stores shows, dates and prices as data and downloads posters into the repo, and the site builds `/entradas` and `/shows/<slug>` from it. Shows and performances are kept apart: the show is editorial content, the dates change on their own.
- **Scraped by default, hand-written when it pays** - A new show is published with its real listing. Optional overrides let the copy be rewritten in the client's voice, for SEO and for the sales hook, without touching anything else.
- **Automated schedule** - A GitHub Actions workflow runs every 3 hours, and if something changed it builds, passes the checks and commits, which triggers the Vercel deploy. Vercel Cron was ruled out because it cannot write to the repository.
- **Bilingual site** - Every page exists under `/en/`, including a blog with five articles per language aimed at the questions of someone hiring a magician. A `check:castellano` script guards the Spanish copy.
- **Contact and analytics** - WhatsApp, email and a form handled by one SSR route with a honeypot, a required timestamp, length limits and an Origin check. GA4 and the Meta pixel sit behind a consent banner.
- **SEO and LLMO** - Title, description, canonical, Open Graph and JSON-LD on every page, an `llms.txt` summary, a generated sitemap and a `/brand` page.
- **Client hand-over** - A guide written for Santiago, inside the README, explains how to add a theatre or a date by editing one JSON file, how to hide an event, how to force an update and what to do if something fails.

#### Results and Impact

- **A schedule that maintains itself** - A new date created on Dinaticket reaches the site within three hours, with no one editing pages.
- **Safe to edit** - A mistake in the config file makes the workflow fail instead of publishing a broken version, and an empty schedule is never published.
- **Shows that outlive their dates** - Once a show runs out of dates, its page stays up and offers to ask for dates over WhatsApp, so old ads and links do not end in an error.
- **Nearly all static** - Everything is prerendered except `/api/contact`, which keeps the site light and the attack surface small.
- **A guard against publishing internal files** - A `check:rutas` script fails the build if anything internal reaches the output, and a scanned PDF that was being served from `public/` was removed.
- **Pending items documented** - 301 redirects from the old WordPress URLs, replacing low-resolution photos inherited from the old site and the move to a paid hosting plan are listed as open items.
