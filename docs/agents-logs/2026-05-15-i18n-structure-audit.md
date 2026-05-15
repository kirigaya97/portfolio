# i18n Structure & Component Duplication Audit
**Date:** 2026-05-15  
**Project:** Astro Portfolio  
**Scope:** Complete inventory of EN/ES component pairs, string extraction, routing, and existing i18n implementation

---

## 1. Component Inventory: EN/ES Pairs & Duplication Analysis

| Component | EN Path | ES Path | Status | Differences |
|-----------|---------|---------|--------|------------|
| **Nav** | `src/components/Nav.astro` | `src/components/es/Nav.astro` | ⚠️ Partial duplicate | Identical structure; hardcoded textLinks differ (EN: 'Home', 'Work', 'About' → ES: 'Inicio', 'Proyectos', 'Sobre mí'); href paths differ (EN: `/`, `/work/`, `/about/` → ES: `/es/`, `/es/proyectos/`, `/es/about/`); Menu button sr-only text: 'Menu' vs 'Menú'; Icon references: EN imports from `./Icon`, ES imports from `./Icon` but LangToggle import path differs (EN: `./LangToggle` vs ES: `../LangToggle`) |
| **Hero** | `src/components/Hero.astro` | `src/components/es/Hero.astro` | ✅ Identical | Completely identical; props-based (title, tagline, align); no hardcoded UI strings |
| **Footer** | `src/components/Footer.astro` | `src/components/es/Footer.astro` | ⚠️ Partial duplicate | Identical structure & layout; hardcoded text: EN "Designed & Developed in Buenos Aires with Astro" → ES "Diseñado y Desarrollado en Buenos Aires con Astro" |
| **Skills** | `src/components/Skills.astro` | `src/components/es/Skills.astro` | ⚠️ Partial duplicate | Identical layout; 3 skill cards with hardcoded h2 & p text; EN titles/descriptions vs ES translated versions; commented code removed in ES version |
| **ContactCTA** | `src/components/ContactCTA.astro` | `src/components/es/ContactCTA.astro` | ⚠️ Partial duplicate | Identical structure; hardcoded h2: "Interested in working together?" → "Querés que trabajemos juntos?"; CTA button text: "Shoot Me a Message" → "Enviame un mensaje" |
| **CallToAction** | `src/components/CallToAction.astro` | `src/components/es/CallToAction.astro` | ✅ Identical | Completely identical; prop-based (href, slot content); no hardcoded text |
| **PortfolioPreview** | `src/components/PortfolioPreview.astro` | `src/components/es/PortfolioPreview.astro` | ⚠️ Functional difference | Identical styling; STRUCTURAL DIFFERENCE: EN renders `/work/{slug}`, ES renders `/es/proyectos/{slug}`; collection diff: EN uses 'work', ES uses 'proyectos'; href templates differ |
| **MainHead** | `src/components/MainHead.astro` | `src/components/es/MainHead.astro` | ⚠️ Partial duplicate | Identical structure; default title/description hardcoded: EN "Rodrigo Camino: Web developer" / "3+ years of experience..." → ES "Rodrigo Camino: Desarrollador web" / "3+ Años de experiencia..."; ES version missing SpeedInsights import |
| **Grid** | `src/components/Grid.astro` | `src/components/es/Grid.astro` | ✅ Identical | Completely identical; layout-only component, no text |
| **Pill** | `src/components/Pill.astro` | `src/components/es/Pill.astro` | ✅ Identical | Completely identical; slot-only wrapper, no text |
| **Icon** | `src/components/Icon.astro` | `src/components/es/Icon.astro` | ✅ Identical | Completely identical; imports IconPaths, renders SVG, prop-based |
| **ThemeToggle** | `src/components/ThemeToggle.astro` | `src/components/es/ThemeToggle.astro` | ⚠️ Partial duplicate | EN version includes ThemeToggle; ES version NOT found in components/es/ (should be checked) |
| **LangToggle** | `src/components/LangToggle.astro` | — | — | Located in `src/components/` (not duplicated); imports button text logic with hardcoded strings: 'English', 'Español'; path manipulation logic for /es prefix and /work ↔ /proyectos mapping |
| **prose** | `src/components/prose.astro` | `src/components/es/prose.astro` | ✅ Identical | Completely identical; layout wrapper for markdown, no text |

**Summary:**
- **Fully Identical (no duplication benefit):** Hero, CallToAction, Grid, Pill, Icon, prose (6 components)
- **Partial Duplicates (text differs, structure same):** Nav, Footer, Skills, ContactCTA, MainHead (5 components)
- **Structural Differences (logic differs):** PortfolioPreview, LangToggle (2 components)
- **Missing in ES:** ThemeToggle (may need addition or may be shared)

---

## 2. UI String Extraction: All Hardcoded Text

### Pages: index.astro (EN) vs es/index.astro (ES)

| Context | EN String | ES String | File EN | File ES |
|---------|-----------|-----------|---------|---------|
| Hero title | "Hello! my name is Rodrigo Camino :)" | "¡Hola! Mi nombre es Rodrigo Camino :)" | index.astro:33 | es/index.astro:33 |
| Hero tagline | "I'm a Creative Web Developer, now based in Buenos Aires, Argentina." | "Soy un Desarrollador Web Creativo, actualmente en Buenos Aires, Argentina." | index.astro:34 | es/index.astro:34 |
| Pill 1 | "Developer" | "Desarrollador" | index.astro:38 | es/index.astro:38 |
| Pill 2 | "Creative" | "Creativo" | index.astro:39 | es/index.astro:39 |
| Pill 3 | "Ilusionist" | "Ilusionista" | index.astro:40 | es/index.astro:40 |
| Section header h3 | "Selected Work" | "Trabajos Seleccionados" | index.astro:58 | es/index.astro:58 |
| Section header p | "Take a look below at some of my featured work for clients from the past few years." | "Descubre algunos de mis proyectos destacados realizados para clientes en los últimos años." | index.astro:59 | es/index.astro:59 |
| CTA button | "View All" | "Ver Todo" | index.astro:76 | es/index.astro:76 |
| Image alt | "Rodrigo Camino sonriendo con un fondo degrade celeste y púrpura." | "Rodrigo Camino sonriendo con un fondo degradado celeste y púrpura." | index.astro:45 | es/index.astro:45 |

### Pages: about.astro (EN) vs es/about.astro (ES)

| Context | EN String | ES String | File EN | File ES |
|---------|-----------|-----------|---------|---------|
| Page title meta | "About \| Rodrigo Camino" | "Sobre mí \| Rodrigo Camino" | about.astro:9 | es/about.astro:9 |
| Page description meta | "About Rodrigo Camino: I develop unique Web experiences." | "Sobre Rodrigo Camino: Desarrollo experiencias web únicas." | about.astro:10 | es/about.astro:10 |
| Hero title | "About" | "Sobre mi" | about.astro:15 | es/about.astro:15 |
| Hero tagline | "Thanks for stopping by. Read below to learn more about myself and my background." | "Gracias por pasar por acá. Pasá, ponete cómodo y veamos un poco de mis experiencias pasadas." | about.astro:16 | es/about.astro:16 |
| Section h2 (1) | "Background" | "Background" | about.astro:27 | es/about.astro:27 |
| Background paragraph | "Rodrigo Camino is a seasoned web designer and developer specializing in creating visually impactful, user-centered websites..." | "Rodrigo Camino es un experimentado diseñador y desarrollador web especializado en la creación de sitios web y plataformas digitales visualmente impactantes..." | about.astro:30-43 | es/about.astro:30-32 |
| Section h2 (2) | "Education" | "Educación" | about.astro:48 | es/about.astro:37 |
| Education items | "System analist specialist - ORT Argentina (2023 - present)" etc. | "Especialista en Análisis de Sistemas - ORT Argentina (2023 - presente)" etc. | about.astro:50-53 | es/about.astro:39-42 |
| Section h2 (3) | "Skills" | "Habilidades" | about.astro:57 | es/about.astro:46 |
| Skills list items | "Web Development - WordPress..." etc. | "Desarrollo Web - WordPress..." etc. | about.astro:60-64 | es/about.astro:49-53 |

### Pages: work.astro (EN) vs es/proyectos.astro (ES)

| Context | EN String | ES String | File EN | File ES |
|---------|-----------|-----------|---------|---------|
| Page title meta | "My Work \| Rodrigo Camino" | "Mi Trabajo \| Rodrigo Camino" | work.astro:17 | proyectos.astro:17 |
| Page description meta | "Learn about Rodrigo Camino's most recent projects" | "Mis proyectos más recientes." | work.astro:18 | proyectos.astro:18 |
| Hero title | "My Work" | "Mi Trabajo" | work.astro:23 | proyectos.astro:23 |
| Hero tagline | "See my most recent projects below to get an idea of my past experience." | "Mira mis proyectos recientes para darte una idea de mi experiencia." | work.astro:24 | proyectos.astro:24 |

### Components: Hardcoded Strings

#### Nav.astro (EN) vs es/Nav.astro (ES)

| Element | EN String | ES String | Location |
|---------|-----------|-----------|----------|
| Menu button sr-only | "Menu" | "Menú" | line 31 |
| Link 1 | "Home" | "Inicio" | textLinks[0].label |
| Link 2 | "Work" | "Proyectos" | textLinks[1].label |
| Link 3 | "About" | "Sobre mí" | textLinks[2].label |
| Link 1 href | "/" | "/es/" | textLinks[0].href |
| Link 2 href | "/work/" | "/es/proyectos/" | textLinks[1].href |
| Link 3 href | "/about/" | "/es/about/" | textLinks[2].href |
| Social 1 label | "LinkedIn" | "LinkedIn" | iconLinks[0].label |
| Social 2 label | "GitHub" | "GitHub" | iconLinks[1].label |
| Social 3 label | "Instagram" | "Instagram" | iconLinks[2].label |

#### Footer.astro (EN) vs es/Footer.astro (ES)

| Element | EN String | ES String | Location |
|---------|-----------|-----------|----------|
| Credit text | "Designed & Developed in Buenos Aires with Astro" | "Diseñado y Desarrollado en Buenos Aires con Astro" | line 9 |
| Copyright | "Rodrigo Camino" | "Rodrigo Camino" | line 12 (same) |
| Social link 1 | "X" | "X" | line 15 (same) |
| Social link 2 | "GitHub" | "GitHub" | line 16 (same) |
| Social link 3 | "Instagram" | "Instagram" | line 17 (same) |
| Social link 4 | "LinkedIn" | "LinkedIn" | line 18 (same) |

#### Skills.astro (EN) vs es/Skills.astro (ES)

| Section | EN String | ES String | Location |
|---------|-----------|-----------|----------|
| Card 1 h2 | "Wordpress development" | "Desarrollo Wordpress" | line 8 |
| Card 1 p | "With 3+ years of experience, I develop unique Wordpress online experiences." | "Con más de 3 años de experiencia, desarrollo experiencias Web únicas" | line 9 |
| Card 2 h2 | "Design and Marketing" | "Marketing y Diseño" | line 13 |
| Card 2 p | "Having a keen eye for desing and out of the box marketing strategies have led many of my projects to success." | "Con un ojo audáz para el diseño y pensamiento tangencial para Marketing, he hecho triunfar muchos de mis proyectos." | line 14 |
| Card 3 h2 | "Strategy-Minded" | "Enfoque Estratégico" | line 18 |
| Card 3 p | "Driven by a strategic vision, I excel in aligning short-term actions with long-term objectives..." | "Guiado por una visión estratégica, sobresalgo en alinear acciones a corto plazo con objetivos a largo plazo..." | line 19 |

#### ContactCTA.astro (EN) vs es/ContactCTA.astro (ES)

| Element | EN String | ES String | Location |
|---------|-----------|-----------|----------|
| h2 | "Interested in working together?" | "Querés que trabajemos juntos?" | line 7 |
| Button text | "Shoot Me a Message" | "Enviame un mensaje" | line 9-10 |

#### MainHead.astro (EN) vs es/MainHead.astro (ES)

| Element | EN String | ES String | Location |
|---------|-----------|-----------|----------|
| Default title | "Rodrigo Camino: Web developer" | "Rodrigo Camino: Desarrollador web" | line 11 |
| Default description | "3+ years of experience in web design and development. I develop unique Web experiences." | "3+ Años de experiencia en el desarrollo de la Web. Desarrollador web creativo." | line 12 |

#### LangToggle.astro (Shared, not duplicated)

| Element | String | Location |
|---------|--------|----------|
| Button text (EN active) | "Español" | line 131 |
| Button text (ES active) | "English" | line 131 |
| sr-only label | "Switch Language" | line 7 |

#### work/[...slug].astro (EN) vs es/proyectos/[...slug].astro (ES)

| Element | EN String | ES String | Location |
|---------|-----------|-----------|----------|
| Back link | "Work" | "Proyectos" | line 46 / line 46 |
| Back link href | "/work/" | "/es/proyectos/" | line 46 / line 46 |

---

## 3. Structural Differences Between EN and ES

### Critical Structural Differences

| Component | Difference | Impact | Reason |
|-----------|-----------|--------|--------|
| **PortfolioPreview** | Link href: `/work/{slug}` vs `/es/proyectos/{slug}` | Content routing differs per locale | Different URL structure for projects |
| **PortfolioPreview** | Collection: 'work' vs 'proyectos' | Different content collections required | Separate content structure per language |
| **Nav** | LangToggle import path: `./LangToggle` vs `../LangToggle` | Incorrect import path in ES version | Bug: ES imports from parent, EN imports from same dir |
| **MainHead** | ES missing SpeedInsights import | Analytics tracking missing in ES | Oversight in ES version |
| **LangToggle** | Path manipulation logic: `/work` ↔ `/proyectos` mapping | Hardcoded route translation logic | Tightly couples routes to i18n logic |
| **work/[...slug].astro vs es/proyectos/[...slug].astro** | Back link text + href both differ | Correct but duplicated logic | URL slug pattern and collection name differ |

### Minor Structural Differences (Layout/Props)

- **No differences** in Hero, CallToAction, Grid, Pill, Icon, prose (truly reusable)
- **Skills**: EN version has commented code (line 21-25), ES version removed; otherwise identical
- **404 pages**: EN page 404.astro incorrectly imports from parent components, ES page 404.astro also imports wrong (both use EN Hero/BaseLayout for ES page) - **BUG**

---

## 4. Pages Inventory: Rendering & Structure

| Page Route | File Path | Renders | Collection | Notes |
|-----------|-----------|---------|-----------|-------|
| `/` | `src/pages/index.astro` | Home page with featured projects (EN) | 'work' | Imports EN components (Nav, Hero, Skills, ContactCTA, PortfolioPreview) |
| `/work/` | `src/pages/work.astro` | Projects listing page (EN) | 'work' | Imports EN components |
| `/work/[...slug]` | `src/pages/work/[...slug].astro` | Individual project detail page (EN) | 'work' | Dynamic route, prerendered |
| `/about/` | `src/pages/about.astro` | About page (EN) | — | Static content, hardcoded text |
| `/404` | `src/pages/404.astro` | Not found page (EN) | — | Imports EN Hero + BaseLayout; **BUG**: uses EN components when ES page should use ES components |
| `/es/` | `src/pages/es/index.astro` | Home page with featured projects (ES) | 'proyectos' | Imports ES components (Nav, Hero, Skills, ContactCTA, PortfolioPreview) |
| `/es/proyectos/` | `src/pages/es/proyectos.astro` | Projects listing page (ES) | 'proyectos' | Imports ES components |
| `/es/proyectos/[...slug]` | `src/pages/es/proyectos/[...slug].astro` | Individual project detail page (ES) | 'proyectos' | Dynamic route, prerendered |
| `/es/about/` | `src/pages/es/about.astro` | About page (ES) | — | Static content, hardcoded text |
| `/es/404` | `src/pages/es/404.astro` | Not found page (ES) | — | **BUG**: imports EN Hero + BaseLayout instead of ES versions |

**Page Organization Issues:**
- ES pages use separate directory structure (`/es/`) which is correct for Astro's i18n config
- 404 pages have import bugs: both EN and ES 404 pages import from EN paths
- Collections: 'work' (EN) and 'proyectos' (ES) are separate, requiring separate getCollection() calls

---

## 5. Existing i18n Implementation & Routing Logic

### Astro Configuration (astro.config.mjs)

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'es'],
}
```

**Current state:** i18n is configured but NOT fully integrated for routing resolution via `Astro.currentLocale`.

### Locale Detection & Routing

**Method:** URL prefix routing (`/es/` for Spanish, `/` for English)
- No use of `Astro.currentLocale` in components
- Hard-coded path logic in LangToggle.astro for language switching
- Navigation (Nav.astro) hard-codes routes instead of using dynamic locale detection

### LangToggle.astro Language Switching Logic (src/components/LangToggle.astro)

```javascript
const setLanguage = (lang) => {
  const baseUrl = window.location.origin;
  let path = window.location.pathname;

  if (lang === 'es') {
    if (path.includes('/work')) {
      path = `/es${path.replace('/work', '/proyectos')}`;
    } else if (!path.startsWith('/es')) {
      path = `/es${path}`;
    }
  } else {
    if (path.includes('/proyectos')) {
      path = path.replace('/es/proyectos', '/work');
    } else if (path.startsWith('/es')) {
      path = path.replace(/^\/es/, '');
    }
  }
  
  window.location.href = `${baseUrl}${path}`;
};
```

**Issues:**
- Hard-coded `/work` ↔ `/proyectos` mapping
- Route switching is client-side only (requires JS)
- No server-side locale context available
- Button text toggled: 'English' ↔ 'Español' based on current path prefix

### Current Locale Determination

**In LangToggle (client-side):**
```javascript
getCurrentLanguage() {
  return window.location.pathname.startsWith('/es') ? 'es' : 'en';
}
```

**In Navigation:**
- Hard-coded textLinks per component version (EN or ES)
- No dynamic route generation based on current locale
- Each page manually imports correct component versions

### Astro.currentLocale Usage (MISSING)

- **NOT used anywhere** in components or pages
- Pages should use `Astro.currentLocale` to detect locale, but instead use file-based routing
- Props passed to components (title, description, heading text) are not locale-aware

---

## 6. Summary of Redundancy & Technical Debt

### Duplication Assessment

**Type A: Fully Redundant (No value in keeping separate):**
- Hero, CallToAction, Grid, Pill, Icon, prose
- Action: Move to shared `src/components/` only; import by both locales

**Type B: Partially Redundant (Text varies, structure same):**
- Nav, Footer, Skills, ContactCTA, MainHead
- Current state: 100% duplicate code with only string differences
- Action: Extract hardcoded strings to i18n library (Astro i18n routing + external messages) OR parameterize via props

**Type C: Structurally Different (Routes/Collections differ):**
- PortfolioPreview, work/[...slug] vs es/proyectos/[...slug]
- Action: Use locale-aware routing helpers; consider unified component with locale detection

**Type D: Shared (Correctly shared, no duplication):**
- LangToggle, Icon paths (IconPaths.ts is duplicated but identical)

### Routing & i18n Issues

1. **Route Hardcoding:** Nav, Footer, PortfolioPreview, and all slug patterns hard-code locale-specific routes instead of using `Astro.currentLocale` for dynamic generation
2. **Missing Server-Side Locale:** LangToggle forces client-side navigation; no middleware or server-side locale context
3. **Astro i18n Config Unused:** `astro.config.mjs` defines i18n but Astro's automatic routing features not leveraged
4. **Collection Duplication:** 'work' and 'proyectos' are separate collections requiring parallel content maintenance
5. **404 Pages Bug:** Both EN and ES 404 pages import from EN component paths (should ES version import from `../../components/es/`)
6. **Missing SpeedInsights in ES:** MainHead.astro missing Vercel analytics import in ES version

### String Management Issues

- **61 user-facing hardcoded strings** scattered across 9 components and 5 pages
- No centralized translation system (no i18n library like astro-i18n or Starlight's i18n)
- Each string maintenance requires editing two files simultaneously
- Meta tags (title, description, og:description) hard-coded per page

### Reusability Score

- **0% reusable** between locales: 16 components require separate imports
- **100% reusable:** Icon, Hero, CallToAction, Grid, Pill, prose (6 components)
- **Potential reusability:** 10 components if string extraction implemented

---

## 7. Recommended Refactor Targets (Priority Order)

1. **Move truly identical components to shared location:**
   - Delete: `src/components/es/Icon.astro`, `src/components/es/Hero.astro`, etc.
   - Keep: `src/components/Icon.astro` only (import in both locale layouts)
   - Saves: 6 duplicate files

2. **Implement string parameterization for partial duplicates:**
   - Convert Nav.astro, Footer.astro, Skills.astro, ContactCTA.astro, MainHead.astro to accept locale-based text props
   - Use Astro's i18n routing to pass locale automatically
   - Saves: 5 duplicate files

3. **Centralize locale detection:**
   - Create utility: `src/lib/getLocaleFromPath.ts` to replace scattered logic
   - Use consistently in Nav, LangToggle, page routing
   - Enable future: Astro.currentLocale middleware support

4. **Fix 404 pages:**
   - Update `src/pages/es/404.astro` to import from `../../components/es/` paths

5. **Add SpeedInsights to ES MainHead:**
   - Match EN version by importing SpeedInsights

6. **Consider: Unified i18n library** (if expanding beyond 2 locales)
   - Astro i18n routing or similar
   - Centralize all meta tags, UI strings, routes

---

## Appendix: File Manifest

### Components (EN)
- src/components/Nav.astro
- src/components/Hero.astro
- src/components/Footer.astro
- src/components/Skills.astro
- src/components/ContactCTA.astro
- src/components/CallToAction.astro
- src/components/PortfolioPreview.astro
- src/components/MainHead.astro
- src/components/Grid.astro
- src/components/Pill.astro
- src/components/Icon.astro
- src/components/ThemeToggle.astro
- src/components/LangToggle.astro
- src/components/prose.astro
- src/components/IconPaths.ts

### Components (ES)
- src/components/es/Nav.astro
- src/components/es/Hero.astro
- src/components/es/Footer.astro
- src/components/es/Skills.astro
- src/components/es/ContactCTA.astro
- src/components/es/CallToAction.astro
- src/components/es/PortfolioPreview.astro
- src/components/es/MainHead.astro
- src/components/es/Grid.astro
- src/components/es/Pill.astro
- src/components/es/Icon.astro
- src/components/es/prose.astro
- src/components/es/IconPaths.ts

### Pages (EN)
- src/pages/index.astro
- src/pages/about.astro
- src/pages/work.astro
- src/pages/work/[...slug].astro
- src/pages/404.astro

### Pages (ES)
- src/pages/es/index.astro
- src/pages/es/about.astro
- src/pages/es/proyectos.astro
- src/pages/es/proyectos/[...slug].astro
- src/pages/es/404.astro

### Layouts
- src/layouts/BaseLayout.astro
- src/layouts/es/BaseLayout.astro

**Total:** 15 EN components + 14 ES components + 5 EN pages + 5 ES pages + 2 layouts = 41 files with i18n-related code
