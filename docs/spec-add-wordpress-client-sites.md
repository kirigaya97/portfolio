# Spec: add the WordPress client sites to the portfolio

**Goal.** The portfolio currently shows mostly custom-code work (Astro, Next.js, React Three Fiber). Four real WordPress client sites are missing, and one existing entry is incomplete. WordPress, Elementor Pro, Divi, ACF, and WooCommerce are a large part of what Rodrigo is actually hired for, and right now there is no linkable proof of any of it on the site. Fix that.

## What to do

**1. Add four new projects** to `src/content/work/` (EN) and `src/content/proyectos/` (ES), one `.md` per project per locale, same filename in both. Follow the existing entries exactly: `projectSchema` in `src/content.config.ts`, the frontmatter shape of `CAPFA.md`, and the section structure of the body (Project Overview, Objectives, Project Workflow, Results and Impact).

**2. Update the existing `CAPFA.md`** (both locales): the stack is **Divi + ACF**, and ACF is currently missing from `technologies`. Add it. Leave the rest alone.

## The projects

| File | Client | URL | Stack | Rodrigo's role |
|---|---|---|---|---|
| `Inposdom.md` | INPOSDOM, Dominican Republic postal service (government) | https://inposdom.gob.do/ | WordPress, Elementor | **Part of the team** |
| `Brooksfield.md` | Brooksfield, fashion retail | https://www.brooksfieldstore.com/ | WordPress, Elementor Pro, WooCommerce | **Part of the team** |
| `DorianArgentina.md` | Dorian Argentina | https://dorianargentina.com/ | WordPress, Elementor Pro, WooCommerce | **Part of the team** |
| `JCConsultora.md` | JC Consultora | https://jcconsultora.com.ar/ | WordPress, Divi, ACF, **custom PHP** | Sole build |
| `CAPFA.md` *(exists)* | CAPFA Constructora | https://capfaconstructora.com | WordPress, **Divi, ACF** | Sole build |

### JC Consultora, the technically interesting one

Give this one the most depth. Two custom pieces, both PHP, both worth a `technologies` entry and a paragraph in the body:

- **Custom PHP filter system.** Hand-built filtering over the site's content rather than a filtering plugin.
- **Context-aware WhatsApp button.** A PHP-driven contact button that composes its message from the page context it sits on, so the conversation starts with the visitor's actual interest already stated instead of a blank "Hi".

This is the entry that shows Divi and ACF used as a foundation for real custom development, not just page assembly. Write it that way.

## Rules

- **Do not invent metrics, dates, or client outcomes.** Existing entries carry things like Lighthouse scores; only include a number if it is verifiable from the live site or already recorded in the repo. Describe what was built instead. No fabricated percentages.
- **State the team credit plainly** on INPOSDOM, Brooksfield, and Dorian Argentina. These were team builds and the copy must say so. Do not phrase them as solo work.
- **Verify the stack against the live site** before writing (view source: `elementor` / `elementor-pro`, `et_pb` for Divi, `woocommerce`). The table above was verified on 2026-08-05, but re-check rather than trusting it blind.
- **`publishDate`** must be a real date. If it is unknown, ask before guessing, since it drives ordering on the work index.
- **Tags** come from the set already in use: `Dev`, `Frontend`, `Design`, `Backend`, `Branding`, `Marketing`. Do not introduce new ones.
- **Screenshots** go in `public/assets/<slug>/`, referenced as `/assets/<slug>/1.webp`, plus one `img` hero image. If the screenshots do not exist yet, list what is needed at the end of your work rather than shipping broken paths.
- **ES entries are real translations**, not English text in a Spanish file. Match the tone of the existing `proyectos/` entries.

## One more thing to surface

Rodrigo has **limited LatePoint experience** (the WordPress appointment-booking plugin). It is real but shallow, so it does not deserve a project entry. If the site has a skills or stack listing, add it there and qualify it honestly as limited or familiar, never as a specialty. If there is no such listing, do nothing with it.

## Done when

- Five projects present and correct in both locales, `pnpm build` passes, and the schema validates.
- CAPFA lists ACF.
- Every live URL in the entries resolves.
- No invented numbers anywhere.
