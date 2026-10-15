---
title: "LMental Club: Live Mentalism Club with Membership Tiers and Custom Checkout"
publishDate: 2026-10-09 00:00:00
url: https://www.lmentalclub.com
img: /assets/lmentalclub/1.webp
img_alt: LMental Club hero on a dark violet background with the silver and purple logo, the line "A monthly meeting where mentalism happens in real time" and two buttons.
description: |
  The site for LMental Club, a monthly live mentalism club (in person and online) with three membership tiers: a one-page landing in Astro, plus a custom pre-sale flow, an on-site payment screen and the stage screens for the launch event.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Branding
technologies:
  - name: Astro 7
    note: Static landing page plus server routes, deployed on Vercel through the Vercel adapter.
  - name: Tailwind CSS 4
    note: Utility layer over a token-based design system with a violet and silver palette derived from the logo.
  - name: accessible-astro-components
    note: Accessibility baseline (skip link, focus handling) inherited from the accessible-astro-starter.
  - name: astro-seo
    note: Metadata and share card, with an OG image generated from the same tokens as the site.
  - name: Google Sheets API (googleapis)
    note: Waitlist and sales records are written to spreadsheets through OAuth, so the data lives in the owner's Drive.
  - name: PayPal payment links
    note: Reusable links per tier, reached from the pre-sale page with the chosen tier preselected.
  - name: Resend
    note: Mail campaigns to the waitlist, sent from a local script.
  - name: Playwright and sharp
    note: Build-time generation of the share card and the image variants.
screenshots:
  - /assets/lmentalclub/2.webp
  - /assets/lmentalclub/3.webp
  - /assets/lmentalclub/4.webp
  - /assets/lmentalclub/5.webp
  - /assets/lmentalclub/6.webp
---

### Project Overview

LMental Club ([lmentalclub.com](https://www.lmentalclub.com)) is a monthly mentalism club that happens live, in person and online, with three membership levels. The site is its front door: it has to explain what happens inside (the monthly meeting, talks and study groups), show what already has a date, and take a visitor to the right level and to payment.

**It grew beyond a landing page.** Around the launch event the repo also holds the pre-sale flow, an on-site payment screen with PIN, public counters for the room and the stage screens (opening, slides, timer), all inside the same Astro project.

#### Objectives

- **One clear scroll** - Present the club, the agenda, the levels and the waitlist in a single page that reads top to bottom.
- **From level to payment** - Let the buttons on each level carry the chosen tier into the pre-sale page and on to PayPal.
- **Run the launch from the same codebase** - Cover the live event (payments in the room, seat counters, stage screens) without separate tools.
- **Accessible by default** - Keep keyboard, focus and reduced-motion behaviour working from the start.

#### Project Workflow

- **Brand-led design system** - Built the tokens, base styles and utilities in a single stylesheet, with a violet and silver palette taken from the logo. The favicon is a hand-drawn SVG, because the cropped logo did not hold up at 16px.
- **Single-page landing** - Split the page into focused components (hero, manifesto, what happens inside, agenda, format, levels, waitlist) over one layout with SEO, skip link and scroll reveal.
- **Waitlist with two validations** - The form is validated in the browser and again on the server route, which writes the row to Google Sheets. Two antispam traps (a hidden field and a minimum-time check) answer `ok` without saving anything, so bots learn nothing.
- **Pre-sale and pricing logic** - Built `/fundadores` and the `/api/cobro/*` routes: tier, number of months, data, then PayPal. The founder promo phase is decided by a closing date in `src/data/cobro.ts`, at build time and again in the browser, so the landing switches to list prices after the cut-off.
- **On-site payment screen** - A PIN-protected `/cobro` screen records sales in a spreadsheet, with exchange rate and cash reconciliation endpoints, and a public `/socios` counter for projection.
- **Stage screens** - `/apertura`, `/presentacion` (dark and light themes) and `/timer`, all driven by keyboard shortcuts, for use on a projector.
- **Mail campaigns** - HTML mails sent to the waitlist by a local script on Resend, with a status report per send.
- **Image pipeline** - Logo crops, share card and image variants regenerate from two source files with sharp and Playwright.

#### Results and Impact

- **One project, the whole launch** - Landing, waitlist, pre-sale, on-site payments, public counters and stage screens live in one Astro codebase with documented routes.
- **Data in the owner's tools** - Waitlist and sales go to Google Sheets through OAuth, with no database to maintain.
- **Validation where it counts** - Every form is checked on the server as well as in the browser, with antispam traps that do not reveal themselves.
- **Promo logic with a single switch** - The founder phase closes from one constant, so the cut-off to list prices does not need a manual edit of the page.
