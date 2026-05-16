# Portfolio Website

Personal portfolio site for **Rodrigo Camino** — Creative Web Developer. It showcases
selected web development and creative projects, in a fast, bilingual, easily-updatable site.

## Tech stack

- **Astro 6** — content-driven site, server-rendered on Vercel.
- **Tailwind CSS 4** — utility styling, alongside scoped component styles and a CSS
  custom-property design-token system.
- **TypeScript** — typed components, content schemas, and i18n.
- **Content Collections** — projects authored as Markdown in `src/content/`.
- **i18n (EN/ES)** — one component set driven by translation dictionaries in `src/i18n/`.
- **Vitest** — unit tests for the i18n utilities.
- **Vercel** — hosting and deployment.

## Getting started

The project uses **pnpm**.

1. Clone the repository:
   ```bash
   git clone https://github.com/kirigaya97/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the local development server. |
| `pnpm build` | Build the production site. |
| `pnpm astro check` | Type-check the project. |
| `pnpm test` | Run the Vitest test suite. |

## Project status

The site is undergoing a phased redesign into the "Sleight of hand" visual identity.
Active work happens on the `redesign` branch — see `docs/superpowers/ROADMAP.md` for the
current phase and live status.

## Contributions

Feel free to open issues or submit pull requests for improvements and suggestions!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Credits

Bootstrapped from an Astro.build starter template — thanks to the Astro team for the
framework and the head start. :)
