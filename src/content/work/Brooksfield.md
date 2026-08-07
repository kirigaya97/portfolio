---
title: "Brooksfield: Fashion Retail Storefront"
publishDate: 2023-06-01 00:00:00
img: /assets/brooksfield/1.webp
img_alt: Brooksfield homepage with the Autumn/Winter season campaign hero.
description: |
  An editorial-led PrestaShop storefront for Brooksfield Argentina, the Italian menswear and womenswear label, covering seasonal campaign layouts, a large category tree, and localised checkout messaging, delivered as part of a development team.
tags:
  - Dev
  - Frontend
  - Design
technologies:
  - name: PrestaShop
    note: E-commerce platform behind the catalogue, cart, and checkout.
  - name: IqitElementor
    note: Visual page builder used for the campaign and landing layouts on top of PrestaShop.
  - name: Custom PrestaShop theme
    note: A dedicated brooksfield theme rather than a stock template, with compiled asset bundles.
  - name: IQIT module suite
    note: Mega menu, live search, extended product pages, and link management across the storefront.
  - name: HTML, CSS, JavaScript
    note: Template and styling work inside the theme layer, including the campaign grid compositions.
screenshots:
  - /assets/brooksfield/2.webp
  - /assets/brooksfield/3.webp
  - /assets/brooksfield/4.webp
  - /assets/brooksfield/5.webp
---

### Project Overview

Brooksfield ([brooksfieldstore.com](https://www.brooksfieldstore.com/)) is an Italian apparel label with a dedicated Argentine online store. The site has to work as two things at once: a seasonal campaign showcase where photography carries the brand, and a functional catalogue deep enough to handle a full menswear and womenswear range across dozens of categories.

**This was a team build.** I worked as part of the development team on the project, not as the sole developer.

Worth noting on the stack: this is a **PrestaShop** storefront, not WordPress. The page builder is IqitElementor, a PrestaShop module, which is a different product from the WordPress plugin of a similar name.

#### Objectives

- **Campaign-led presentation** - Let seasonal photography lead the homepage without turning the store into a lookbook that can't sell.
- **Navigable depth** - Make a large category tree browsable, across men's, women's, and accessories lines.
- **Localised commerce messaging** - Surface the Argentine market's decisive purchase factors (instalments, free shipping thresholds, same-day delivery) where they influence the decision.
- **Consistent brand system** - Keep typography, spacing, and image treatment coherent as seasonal content gets swapped in and out.

#### Project Workflow

- **Theme layer** - Worked in a dedicated `brooksfield` PrestaShop theme with compiled CSS and JS bundles, rather than customising a stock template through the admin.
- **Campaign compositions** - Built the homepage as stacked editorial blocks: a full-bleed season hero, then split and mosaic grids labelled by category (Jackets, Sweaters, Pantalones, Buzos, Especial Abrigos), all using IqitElementor so the marketing team can reshuffle a season without a deploy.
- **Catalogue navigation** - Configured the IQIT mega menu and live search across the category structure, with category landing pages carrying their own hero treatment.
- **Product listing behaviour** - Set up the listing grid with variant handling, stock and sale badging, and pagination sized for the catalogue depth.
- **Commercial messaging** - Placed the instalment plans (3/6/9 cuotas sin interés, Visa–Amex–Mastercard), free shipping threshold, and Same Day / Next Day CABA–GBA delivery in the persistent header strip.
- **Tracking integration** - Wired up conversion tracking for paid campaign attribution.

#### Results and Impact

- **Editorial storefront that still functions as a catalogue** - Campaign photography leads the experience while the full range stays two clicks away.
- **Marketing autonomy** - Season changeovers happen through the page builder, so campaign turnaround doesn't depend on developer availability.
- **Platform range** - Demonstrates e-commerce delivery on PrestaShop, alongside the WooCommerce work elsewhere in this portfolio.
- **Team delivery** - Built collaboratively within an existing codebase and an established brand system.
