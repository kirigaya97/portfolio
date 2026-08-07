---
title: "INPOSDOM: Dominican Postal Institute"
publishDate: 2024-06-01 00:00:00
img: /assets/inposdom/1.webp
img_alt: INPOSDOM homepage with the international shipping destinations hero slider.
description: |
  A public-sector WordPress build for INPOSDOM, the Dominican Republic's national postal service, covering package tracking, postal-code lookup, service catalogue, and institutional transparency sections, delivered as part of a development team.
tags:
  - Dev
  - Frontend
technologies:
  - name: WordPress
    note: Content managed directly by the institute's own communications staff.
  - name: Elementor Pro
    note: Template and theme-builder system behind the page layouts and reusable sections.
  - name: Hello Elementor
    note: Deliberately minimal base theme, so the styling weight lives in the builder rather than in theme overrides.
  - name: Custom plugins
    note: Postal-code lookup and country-availability modules running as separate purpose-built plugins.
screenshots:
  - /assets/inposdom/2.webp
  - /assets/inposdom/3.webp
  - /assets/inposdom/4.webp
  - /assets/inposdom/5.webp
---

### Project Overview

INPOSDOM (Instituto Postal Dominicano, [inposdom.gob.do](https://inposdom.gob.do/)) is the Dominican Republic's national postal operator. The site is a government service portal: citizens arrive to track a package, find a postal code, check whether a country is currently reachable, or read institutional information the state is legally required to publish.

**This was a team build.** I worked as part of the development team on the project, not as the sole developer.

#### Objectives

- **Service-first homepage** - Put the things people actually come for (tracking, postal codes, shipping destinations) above everything institutional.
- **Self-service tooling** - Give citizens direct answers on the site instead of routing them to a phone line or a branch.
- **Institutional transparency** - Host the public-accountability sections a government body is required to maintain, without letting them crowd out the service tools.
- **Staff-maintainable content** - Leave the institute able to update destinations, news, and service copy without a developer.

#### Project Workflow

- **Information architecture** - Structured the homepage around the primary citizen tasks, with the service catalogue (EMS, Correo Empresarial, Encomienda Postal, Correo Certificado) as the second tier and institutional content below it.
- **Template system** - Built the layouts with Elementor Pro's theme builder on top of Hello Elementor, keeping the base theme minimal so styling stays in one place rather than split between theme and builder.
- **Postal-code lookup** - Integrated a dedicated search interface where a visitor enters an address, sector, or postal code and gets a direct answer inline.
- **Country availability module** - Built out the destinations section as a filterable directory of countries by region (América, Asia, Europa, Resto del mundo) with per-country availability status, so the list reflects operational reality rather than a static page that goes stale.
- **Tracking entry points** - Surfaced national, international, and Cuba-specific tracking as separate labelled paths, since each routes to a different backend platform.
- **Institutional sections** - Implemented the transparency portal, officials directory, forum, and document-library areas alongside the service tooling.

#### Results and Impact

- **Consolidated service portal** - Tracking, postal-code lookup, service catalogue, and destination availability all live on one site instead of being scattered across separate platforms.
- **Reduced support load by design** - The self-service tools answer the highest-volume citizen questions directly on the page.
- **Independent content management** - Institute staff maintain destinations, news, and service copy themselves through WordPress.
- **Public-sector delivery experience** - Working within a government client's review, accessibility, and transparency requirements, as part of a team rather than solo.
