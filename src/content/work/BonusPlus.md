---
title: "Bonus+: Landing for a Senior Care Coordination App"
publishDate: 2026-05-29 00:00:00
url: https://bonus.nub3.com.ar
img: /assets/bonusplus/1.webp
img_alt: Bonus+ landing hero with the headline "Todo el cuidado de tus padres, en un solo lugar" next to a phone mockup showing the app home screen with an emergency button.
description: |
  The public landing page for Bonus+, a Nub3 product that helps families coordinate the care of their elderly parents: a twelve-section static site built with Astro and Tailwind, with structured data for search and contact paths that need no backend.
tags:
  - Design
  - Dev
  - Frontend
  - Marketing
technologies:
  - name: Astro 6
    note: Static output with one component per page section, composed in a single index page.
  - name: Tailwind CSS 4
    note: Wired through the Vite plugin, alongside a hand-written token layer in plain CSS.
  - name: TypeScript
    note: Strict project config checked with @astrojs/check.
  - name: CSS Custom Properties
    note: Palette, fluid type scale, spacing and motion tokens mirrored from the Bonus+ brand identity manual.
  - name: DM Sans
    note: Single typeface family used across the whole site, as defined by the brand identity.
  - name: JSON-LD (Organization, FAQPage)
    note: Structured data injected in the head so search engines can read the company and the FAQ.
  - name: "@astrojs/sitemap"
    note: Sitemap generated at build time.
  - name: Vercel
    note: Static hosting, served on a custom subdomain of nub3.com.ar.
screenshots:
  - /assets/bonusplus/2.webp
  - /assets/bonusplus/3.webp
  - /assets/bonusplus/4.webp
  - /assets/bonusplus/5.webp
  - /assets/bonusplus/6.webp
---

### Project Overview

Bonus+ ([bonus.nub3.com.ar](https://bonus.nub3.com.ar)) is an app for families who coordinate the care of older parents from a distance: a family dashboard, caregivers, home professional services, products and electronic prescriptions in one place. It is a product under Nub3, the software studio I work with. This entry covers its public landing page.

The site started as a landing for a teleassistance product and was realigned mid-build to a coordination positioning, with partners (Atempo for 24/7 teleassistance, RCTA for prescriptions and clinical records) stated openly instead of presented as in-house technology.

#### Objectives

- **Say what it is, fast** - Explain in the hero that this is about coordinating the whole care of a parent in one place, with a phone mockup of the actual app.
- **Two audiences, two paths** - Serve families directly and offer a separate entry point for institutions.
- **Honest about partners** - Give Atempo and RCTA their own section, plus a protection section for caregiver insurance and home cover.
- **No backend** - Keep contact to a `mailto:` link and a WhatsApp link, with no form, database or tracking to maintain.
- **Findable** - Ship metadata and structured data so the site reads well in search.

#### Project Workflow

- **Spec-first build** - Wrote the design spec and a task-by-task implementation plan before coding, then executed it with subagents in waves. The repo keeps the spec, the plan, the execution prompts and the verification logs under `docs/`.
- **Brand tokens** - Translated the Bonus+ identity manual into CSS custom properties: teal primary (`#0d7b6b`), warm neutrals, an orange reserved for emergency, and a fluid type scale in DM Sans.
- **Twelve-section page** - One Astro component per section (hero, problem, how it works, services, protection, partners, institutions, how to start, FAQ, final call to action), plus nav and footer. A shared `Reveal` component handles scroll-in animation with `IntersectionObserver` and respects `prefers-reduced-motion`.
- **The pivot** - Rewrote the hero, security, health and FAQ copy to the coordination positioning, consolidated partners into one section and removed prices.
- **Mobile pass** - Fixed the hero mockup frame radius and bottom padding on small screens, added a fixed bottom call-to-action bar, and trimmed vertical spacing between sections by 40%.
- **SEO** - Set `lang` to `es-AR`, added Organization and FAQPage JSON-LD, Open Graph assets and a generated sitemap.

#### Results and Impact

- **Shipped in four days** - The repository history runs from 2026-05-26 to 2026-05-29 across 49 commits, including the positioning pivot.
- **Zero-backend contact** - All conversion paths are static links (email, WhatsApp, a separate institutional email), so there is nothing to host or secure beyond the site itself.
- **Structured data for search** - Organization and FAQPage JSON-LD are generated from the same content the page renders.
- **A small, consistent codebase** - Ten section components, a shared layout and one token file account for the whole design, so a new section follows the existing pattern.
- **Live on a Nub3 subdomain** - The site is served at bonus.nub3.com.ar and links the product back to the studio.
