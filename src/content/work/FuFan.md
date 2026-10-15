---
title: "FuFan: Bilingual Talent Agency Site with Artist Registration"
publishDate: 2026-07-27 00:00:00
url: https://www.fufanexperience.com
img: /assets/fufan/1.webp
img_alt: FuFan homepage hero with the brand logo over a dark video of a man at a bar, the tagline "Seleccionamos talento. Creamos experiencias." and a gold contact button.
description: |
  A bilingual marketing site for FuFan, an entertainment talent agency for hotels, cruises and VIP experiences, with a pinned scroll-driven offerings section and a serverless artist registration flow that files applications straight into the client's Google Drive and Sheets.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Branding
technologies:
  - name: Astro 5
    note: Static-first pages with native i18n (Spanish default, English), prefixed routes for both languages.
  - name: Tailwind CSS 4
    note: Brand palette, type families and spacing declared once as theme tokens in a dark-first design system.
  - name: GSAP + Lenis
    note: Smooth scrolling and the pinned, crossfading offerings section, disabled under prefers-reduced-motion.
  - name: Vercel (serverless functions)
    note: Hosting plus the contact and artist registration endpoints, with Analytics and Speed Insights.
  - name: Resend
    note: Transactional email for the contact form and registration notifications, sent from the client's own domain.
  - name: Google APIs (Drive + Sheets)
    note: Service account that creates a folder per applicant and appends a row to the client's own spreadsheet.
  - name: Playwright
    note: Mobile layout regression suite covering states that desktop dev browsers never enter.
screenshots:
  - /assets/fufan/2.webp
  - /assets/fufan/3.webp
  - /assets/fufan/4.webp
  - /assets/fufan/5.webp
  - /assets/fufan/6.webp
---

### Project Overview

FuFan ([fufanexperience.com](https://www.fufanexperience.com)) is an entertainment talent agency that curates live acts (magic, acrobatics, music, dance, comedy) for hotels, cruises and VIP experiences. The brand is a homage to two names of Argentine magic, and its identity is dark-first with a single gold accent. The site has two jobs: sell shows to venues, and let performers apply to join the roster.

**I built it end to end**, from the design system to the backend, working from the client's brand book and a frozen scope.

#### Objectives

- **Sell to venues** - Present what FuFan offers and how it works, with a clear contact path from every screen.
- **Recruit performers** - Let artists register with photos and a CV, without the agency handling files by hand.
- **Two languages, one source** - Keep Spanish and English in sync without duplicating markup.
- **Respect the brand** - Translate the brand book (palette, type, corner-frame signature) into reusable tokens and components.
- **Client owns the data** - Keep applications in the client's Google account, not in a database they cannot access.

#### Project Workflow

- **Design system from the brand book** - Declared the palette (black, ivory, gold and its variants) and three type families (Big Shoulders, Archivo, IBM Plex Mono) as Tailwind 4 theme tokens, and rebuilt the brand's corner-frame signature as a reusable component.
- **Bilingual architecture** - Used Astro's native i18n with prefixed routes, and moved every user-facing string into a single `site-config.json` with `es` and `en` keys, so client copy changes never touch markup.
- **Pinned offerings section** - Wrote a scroll-driven section that pins in place and crossfades between offerings with a progress indicator, only arming while the section fills the viewport and skipped entirely for reduced-motion users.
- **Contact flow** - Built a contact form endpoint on Resend with a honeypot field and a minimum-elapsed-time check, plus an expandable floating contact button that keeps the WhatsApp call to action reachable.
- **Artist registration** - Built a multipart endpoint that validates and then creates a dated Drive folder per applicant, uploads the files, appends a Sheets row and notifies by email. Limits are enforced twice, client-side compression to WebP and server-side re-validation (3 images, 1 MB each, 2 MB CV, about 4.3 MB total) to stay under Vercel's request cap.
- **Mobile hardening** - Added a mobile hamburger menu (the phone previously had no navigation), handled the iOS low-power case where the hero video cannot autoplay, and wrote a Playwright suite for mobile layout states.
- **SEO and discoverability** - Added a sitemap with locale alternates, Service and FAQ structured data, an OG card, a favicon set and manifest, `llms.txt` generated from the same copy file, and a consent banner that gates GA4 until the visitor accepts.
- **Domain and email** - Migrated to the production domain and wired a sending subdomain in Resend.

#### Results and Impact

- **One copy file for both languages** - ES and EN live side by side in a single config, so adding or editing text is a data change.
- **Applications land where the client already works** - Each registration becomes a Drive folder and a Sheets row in the client's own account, with failures surfaced as a localized error rather than a silent partial save.
- **Bot protection without a third-party widget** - Honeypot and timing checks guard both forms.
- **Motion that respects the user** - The scroll effects switch off for reduced-motion, and the hero video falls back cleanly where the device will not play it.
- **A tested mobile experience** - A dedicated regression suite covers mobile states that ordinary desktop development never exercises.
