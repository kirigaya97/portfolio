---
title: "Lineal: Bilingual Logistics Site with Serverless Contact Pipeline"
publishDate: 2026-10-14 00:00:00
url: https://linealsoluciones.com
img: /assets/lineal/1.webp
img_alt: Lineal homepage hero with a container port photo, the headline "Comercio exterior resuelto de punta a punta" and the three service entries Trade, Transporte and Aduana.
description: |
  A bilingual (ES/EN) static site for Lineal Soluciones Logísticas, an Argentine foreign trade and logistics company, built with Astro and deployed on Cloudflare Pages with a serverless contact form that sends email and logs every lead to Google Sheets.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
technologies:
  - name: Astro
    note: Fully static, bilingual output with one view per page that receives the language, plus sitemap, hreflang, canonical and Open Graph tags.
  - name: TypeScript
    note: Typed site config, i18n dictionaries and the shared form limits used by both the browser and the server.
  - name: Cloudflare Pages Functions
    note: A single POST /api/contact endpoint handles spam filtering, email delivery and lead storage.
  - name: Google Workspace (SMTP) and Google Sheets API
    note: Each enquiry is emailed to the team and appended as a row to a spreadsheet, authenticated with a service account.
  - name: GitHub Actions and Wrangler
    note: Every push to main builds the site and deploys it to Cloudflare Pages.
  - name: Fontsource (Inter, Inter Tight, IBM Plex Mono)
    note: Self-hosted typefaces for headings, body copy and monospaced labels.
  - name: Consent-aware analytics
    note: GA4, GTM, Meta Pixel and LinkedIn tags behind Google Consent Mode v2, loaded only when configured.
screenshots:
  - /assets/lineal/2.webp
  - /assets/lineal/3.webp
  - /assets/lineal/4.webp
  - /assets/lineal/5.webp
---

### Project Overview

Lineal Soluciones Logísticas ([linealsoluciones.com](https://linealsoluciones.com)) is a Buenos Aires foreign trade and logistics company with three business units: Trade (import and export), Transport (air, sea, land and courier) and Customs. The old site was a PHP-era page set, so the job was a full rebuild: a fast, bilingual, static site that presents the three services as one integrated offer and turns visitors into enquiries.

I built it end to end, from information architecture and visual design to the form backend and the deploy pipeline.

#### Objectives

- **One integrated offer** - Present Trade, Transport and Customs as a single end-to-end provider, each with its own page.
- **Bilingual by design** - Serve Spanish and English with their own routes and correct search metadata.
- **Reliable lead capture** - Make sure an enquiry is never lost silently and spam does not reach the team.
- **Low-maintenance hosting** - Static output on Cloudflare Pages, with copy and contact data editable in two places.
- **Privacy-aware measurement** - Support analytics and ad tags without loading anything before consent.

#### Project Workflow

- **Content and structure** - Reworked the content of the previous site and the agrifood brochure into eight routes per language (home, company, services, three service pages, agrifood, contact), with typos fixed and the discontinued client portal removed. No invented clients, figures or testimonials were added.
- **Design system** - Defined an ink, paper and orange palette as CSS tokens, with Inter Tight for headings, Inter for text and IBM Plex Mono for labels and numbering. The three squares of the logo repeat across the site as a motif for the three units.
- **Bilingual architecture** - Kept all copy in two typed dictionaries (`es.ts`, `en.ts`) and all contact data and route maps in one config file. Each page file only calls a shared view with its language, so ES and EN cannot drift structurally. Includes `hreflang`, canonical URLs, JSON-LD Organization data, a sitemap and a 404.
- **Hero and intro** - Built a looping hero video (desktop and mobile cuts, no audio) that fades from a matching still frame, plus a one-time-per-session animated logo loader done in pure CSS that never appears if JavaScript or cookies are unavailable.
- **Contact pipeline** - Wrote a Cloudflare Pages Function that validates the same-origin header, a honeypot field, fill time (between 3 seconds and 7 days) and link count. Spam gets a fake success response so bots learn nothing. Valid enquiries are emailed through Google Workspace SMTP (with a Gmail API alternative) and appended to Google Sheets as raw text, so a typed `=` can never run as a formula. The request succeeds if at least one destination worked.
- **Consent and analytics** - Implemented Google Consent Mode v2 with a cookie banner, queued Meta and LinkedIn events until acceptance, and a single `lslTrack` helper that fires lead, email click and brochure download events. Campaign parameters and the entry page travel with the form into the email and the spreadsheet.
- **Deploy pipeline** - Set up GitHub Actions with Wrangler Direct Upload to Cloudflare Pages on every push to main, plus legacy `.php` URL redirects and `www` to apex redirection.
- **Handoff** - Wrote a handoff document covering environment variables, DNS, Google setup, the form flow and a known failure mode, so the client can operate the site without me.

#### Results and Impact

- **A single source of truth per language** - All copy lives in two dictionaries and all contact data in one config file, so content changes never touch layout code.
- **Form with no single point of failure** - Email and spreadsheet are independent destinations, and the sheet records whether the email went out.
- **Antispam without third parties** - Origin, honeypot, timing and link rules are enforced with no CAPTCHA, and the limits are shared by the browser `maxlength` and the server validation from one file.
- **Consent respected by default** - With no analytics IDs configured, no third-party script loads and no banner appears.
- **Search continuity** - Old PHP URLs are mapped to the new routes with permanent redirects, and every page ships with hreflang and structured data.
- **Zero-touch deploys** - Pushing to main builds and publishes the site to Cloudflare Pages.
