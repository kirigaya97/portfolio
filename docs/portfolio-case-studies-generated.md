# Generated Portfolio Case Studies — Backup

> **Provenance:** Generated 2026-05-15 by crawling Rodrigo Camino's GitHub (`kirigaya97`)
> against the portfolio. A Sonnet agent swarm crawled each repo and produced a bilingual
> case study (English + Argentine Spanish) matching the portfolio content schema.
>
> **Why this file exists:** The portfolio `src/content/` is being edited concurrently by
> another agent. This file is a durable backup of the generated case studies so they are
> not lost. Each section below is the verbatim content of a generated `.md` file.
>
> **Restore targets:**
> - English → `src/content/work/<Name>.md`
> - Spanish → `src/content/proyectos/<Name>.md`
>
> **Status legend:** ✅ ready · ⚠️ needs real client copy/details · 🛑 hold (proof-of-concept)
>
> | Project | Grade | Status |
> |---|---|---|
> | Vazquez | A | ✅ ready |
> | ChapMagic | A | ✅ ready |
> | Gaudiano | A− | ✅ ready |
> | SADA | A− | ✅ ready |
> | Producciones8888 | 9/10 | ✅ ready (artist names placeholder) |
> | Hubbard | High | ✅ ready |
> | Nub3 | 8/10 | ✅ ready |
> | Logistica | B+ | ✅ ready (functional MVP) |
> | EcoLanding | B+ | ⚠️ placeholder contact details |
> | Ilusionista | B+ | ⚠️ body copy still Lorem Ipsum |
> | MagiaYBurbujas | B+ | ⚠️ Bio/Media/testimonials pending |
> | BlukiStudio | C+ | 🛑 proof-of-concept, hold |
>
> **All projects:** screenshot paths point at empty `public/assets/<name>/` dirs — add real images before publishing.


---

# Vazquez

## English — restore to `src/content/work/Vazquez.md`

````markdown
---
title: Vázquez Ilusionista — Landing Page Development
publishDate: 2026-02-11 00:00:00
img: /assets/vazquez/1.png
img_alt: Screenshot of Vázquez Ilusionista website hero section.
description: |
  A premium cinematic landing page for Fernando Vázquez, Argentine magician and mentalist, built to convert social traffic into show bookings.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/vazquez/2.png,
  /assets/vazquez/3.png,
  /assets/vazquez/4.png,
  /assets/vazquez/5.png
]
---

### Project Overview
Vázquez Ilusionista is the official promotional site for Fernando Vázquez, a professional magician and mentalist based in Argentina. The site functions as a high-conversion landing page targeting corporate event planners, private party organizers, and theater audiences. Every design and engineering decision was made to match the prestige and mystery of the live performance experience.

##### Objectives
- <b>Brand Experience:</b> Deliver a premium, cinematic digital presence that mirrors the atmosphere of Fernando's live shows.
- <b>Conversion Focus:</b> Drive inquiries and bookings across three distinct show formats — close-up magic, private events, and corporate engagements.
- <b>Performance Architecture:</b> Build with Astro's static generation to achieve fast load times while supporting serverless contact-form delivery.
- <b>Mobile-First Engagement:</b> Provide a tailored mobile experience with TikTok-style vertical video snap-scroll separate from the desktop triptych layout.

##### Project Workflow
- <b>Discovery & Brand Alignment:</b> Established a dark, refined design system with a deep purple accent palette (`#9582D9`), Playfair Display headings, and Inter body type, all grounded in the existing brand identity.
- <b>Component Architecture:</b> Built a flat single-page layout with independently animated sections — Hero, Shows, VideoTriptych, JuryFeedback, JuryVIP Reviews, AboutMe, and Contact — each driven by GSAP ScrollTrigger.
- <b>Cinematic Animations:</b> Implemented a GSAP-powered hero with a 105-image crossfade grid, procedural SVG noise background, 3D-orbiting magic-star element, and a session-persisted intro reveal overlay with audio unlock.
- <b>Responsive Video Experience:</b> Desktop renders an interactive three-column triptych with B&W-to-color hover transitions and spatial audio unmuting; mobile delivers a snap-scrolling vertical reel feed with a social-overlay UI.
- <b>Serverless Contact:</b> Integrated the Resend API via an Astro server endpoint (`/api/send-email`) for reliable form delivery without a backend.

##### Technologies Used
>Astro v5: Chosen for its static-site output with optional SSR, enabling fast page delivery and clean serverless API routes.
###
>Tailwind CSS v4: New Vite-based engine used with a custom `@theme` block for centralized design tokens across the entire project.
###
>GSAP + ScrollTrigger: Core animation engine driving the hero presentation grid, scroll-pinned review section, cursor magnetism, and all reveal transitions.
###
>Lenis: Smooth-scroll library providing the inertia foundation required for GSAP ScrollTrigger to perform correctly.
###
>Resend: Transactional email provider wired to the contact form's serverless endpoint for guaranteed delivery to the client's business inbox.
###
>Sharp: Used via Astro's built-in image optimization pipeline to serve correctly sized WebP assets.

##### Results and Impact
- <b>Cinematic Delivery:</b> The site ships with a fully animated, production-ready experience — intro overlay, hero crossfade grid, scroll-pinned reviews, and adaptive video reels — with zero third-party CMS dependencies.
- <b>Segment Coverage:</b> All three booking segments (close-up reception, private events, corporate marketing) are represented with dedicated show cards and optimized copy in Argentine Spanish.
- <b>Vercel Deployment:</b> The project is deployed and live at `vazquez-v2.vercel.app`, taking advantage of Astro's Vercel adapter for edge-optimized delivery.
- <b>Maintainable Content:</b> All site copy, show data, colors, and navigation labels are centralized in a single `site-config.json`, making future content updates straightforward without touching component code.
````

## Spanish — restore to `src/content/proyectos/Vazquez.md`

````markdown
---
title: Vázquez Ilusionista — Desarrollo de Landing Page
publishDate: 2026-02-11 00:00:00
img: /assets/vazquez/1.png
img_alt: Captura de pantalla de la sección hero del sitio Vázquez Ilusionista.
description: |
  Una landing page cinematográfica premium para Fernando Vázquez, mago y mentalista argentino, diseñada para convertir tráfico de redes en reservas de shows.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/vazquez/2.png,
  /assets/vazquez/3.png,
  /assets/vazquez/4.png,
  /assets/vazquez/5.png
]
---

### Descripción del Proyecto
Vázquez Ilusionista es el sitio promocional oficial de Fernando Vázquez, mago y mentalista profesional radicado en Argentina. El sitio funciona como una landing page de alta conversión orientada a organizadores de eventos corporativos, fiestas privadas y espectáculos teatrales. Cada decisión de diseño e ingeniería fue tomada para reflejar el prestigio y el misterio de la experiencia en vivo.

##### Objetivos
- <b>Experiencia de Marca:</b> Crear una presencia digital premium y cinematográfica que replique la atmósfera de los shows en vivo de Fernando.
- <b>Foco en Conversión:</b> Generar consultas y reservas para tres formatos de show diferenciados: magia de cerca, eventos privados y eventos corporativos.
- <b>Arquitectura Performante:</b> Desarrollar con la generación estática de Astro para lograr tiempos de carga rápidos, manteniendo soporte para el envío de formularios vía endpoints serverless.
- <b>Experiencia Mobile:</b> Proveer una experiencia mobile adaptada con scroll vertical estilo TikTok, independiente del tríptico de escritorio.

##### Flujo de Trabajo
- <b>Definición de Marca:</b> Se estableció un sistema de diseño oscuro y refinado con una paleta de acento en violeta profundo (`#9582D9`), tipografía Playfair Display para títulos e Inter para cuerpo de texto, alineado con la identidad visual preexistente.
- <b>Arquitectura de Componentes:</b> Se construyó un layout de página única con secciones animadas de forma independiente — Hero, Espectáculos, VideoTríptico, JuryFeedback, Reseñas JuryVIP, Sobre Fer y Contacto — cada una accionada por GSAP ScrollTrigger.
- <b>Animaciones Cinematográficas:</b> Se implementó un hero con grilla de crossfade de 105 imágenes, fondo de ruido procedural con filtro SVG, elemento de estrella mágica en órbita 3D y una cortina de intro persistida por sesión con desbloqueo de audio.
- <b>Experiencia de Video Adaptativa:</b> En escritorio se renderiza un tríptico interactivo de tres columnas con transiciones B&N-a-color y desactivación espacial del mute; en mobile se presenta un feed vertical con scroll por snap y superposición de UI de redes sociales.
- <b>Contacto Serverless:</b> Se integró la API de Resend mediante un endpoint de servidor de Astro (`/api/send-email`) para la entrega confiable del formulario sin necesidad de un backend dedicado.

##### Tecnologías Utilizadas
>Astro v5: Elegido por su salida estática con SSR opcional, lo que permite entregas de página rápidas y rutas de API serverless limpias.
###
>Tailwind CSS v4: Motor basado en Vite utilizado con un bloque `@theme` personalizado para centralizar los tokens de diseño en todo el proyecto.
###
>GSAP + ScrollTrigger: Motor principal de animación que impulsa la grilla de presentación del hero, la sección de reseñas con pin de scroll, el cursor magnético y todas las transiciones de reveal.
###
>Lenis: Librería de scroll suave que provee la base de inercia necesaria para el correcto funcionamiento de GSAP ScrollTrigger.
###
>Resend: Proveedor de email transaccional conectado al endpoint serverless del formulario de contacto para garantizar la entrega en el inbox del cliente.
###
>Sharp: Utilizado a través del pipeline de optimización de imágenes incorporado en Astro para servir assets en WebP con el tamaño correcto.

##### Resultados e Impacto
- <b>Entrega Cinematográfica:</b> El sitio se despliega con una experiencia completamente animada y lista para producción — cortina de intro, grilla de crossfade en el hero, reseñas con pin de scroll y reels de video adaptativos — sin dependencias de CMS de terceros.
- <b>Cobertura de Segmentos:</b> Los tres segmentos de reserva (magia de recepción, eventos privados, marketing corporativo) están representados con tarjetas de show dedicadas y copy optimizado en español rioplatense.
- <b>Deploy en Vercel:</b> El proyecto está desplegado y disponible en `vazquez-v2.vercel.app`, aprovechando el adaptador de Vercel de Astro para una entrega optimizada en el edge.
- <b>Contenido Mantenible:</b> Todo el copy del sitio, los datos de shows, colores y etiquetas de navegación están centralizados en un único `site-config.json`, lo que simplifica futuras actualizaciones de contenido sin tocar el código de los componentes.
````

---

# ChapMagic

## English — restore to `src/content/work/ChapMagic.md`

````markdown
---
title: ChapMagic — Magician & Mentalist Landing Page
publishDate: 2026-02-11 00:00:00
img: /assets/chapmagic/1.png
img_alt: Screenshot of the ChapMagic landing page hero section.
description: |
  A premium, high-performance bilingual landing page for ChapMagic — magician and mentalist — built with cinematic animations, a production-ready contact form, and a gold-and-obsidian design system.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/chapmagic/2.png,
  /assets/chapmagic/3.png,
  /assets/chapmagic/4.png,
  /assets/chapmagic/5.png
]
---

### Project Overview
ChapMagic is a premium landing page for Chap, a professional magician and mentalist who has performed across 14+ countries and accumulated 2,000+ shows and 40,000+ spectators — including appearances on Spain's Got Talent where judges praised him live on stage. The site serves as a conversion-focused showcase for his corporate events, reception magic, theatrical shows, and intimate Speak Easy experiences, driving bookings through a polished bilingual interface.

##### Objectives
- <b>Brand Elevation:</b> Translate ChapMagic's premium, mysterious stage persona into a cohesive gold-and-obsidian digital identity.
- <b>Bilingual Reach:</b> Serve both Spanish and English-speaking markets through Astro's native i18n routing.
- <b>Lead Generation:</b> Provide a secure, production-ready contact form that filters spam while converting visitors into booking inquiries.
- <b>Performance & Animation:</b> Deliver cinematic, scroll-driven experiences without sacrificing page load speed.
##### Project Workflow
- <b>Design System:</b> Established a dark luxury palette — Gold (`#D4AF37`), Obsidian (`#0A0A0A`), Ivory (`#F5F0E8`) — with Playfair Display headings and Inter body text, all defined as Tailwind 4 `@theme` tokens.
- <b>Animation Architecture:</b> Implemented custom GSAP timelines for the Hero section, ScrollTrigger-based parallax and staggered reveals, and a bespoke "magnetic" golden cursor for desktop.
- <b>Hybrid Mobile UX:</b> Designed show cards with auto-reveal behavior on mobile (via ScrollTrigger) and hover interactions on desktop, adapting seamlessly to each context.
- <b>i18n Implementation:</b> Built fully localized Spanish and English versions using Astro's dynamic `[lang]` routing with a centralized `site-config.json` as the single source of truth for all translations and content.
- <b>Contact Form & Anti-Spam:</b> Developed a server-side API endpoint (SSR via Vercel) integrating Resend for reliable email delivery, protected by an invisible honeypot field and a timestamp-based bot detection guard.
- <b>Smooth Navigation:</b> Integrated Lenis smooth scrolling and a custom "Liquid" mobile menu for a premium feel throughout.
##### Technologies Used
>Astro v5: Chosen for its hybrid SSG + SSR model — static pages with a live server-side API route for the contact form.
###
>Tailwind CSS v4: Adopted the new Vite-based engine with `@theme` tokens for a consistent, maintainable design system.
###
>GSAP (ScrollTrigger + Timeline): Powers all cinematic animations, from hero reveals to scroll-based parallax on every section.
###
>Lenis: Provides butter-smooth scroll behavior that elevates the overall premium feel of the site.
###
>Resend: Handles transactional email delivery from the contact form with high reliability.
###
>Vercel: Deployment platform enabling the hybrid SSR mode required for the server-side contact form API.
###
>TypeScript: Used throughout for type-safe component props, API handlers, and site config.

##### Results and Impact
- <b>Complete Bilingual Site:</b> Fully localized ES/EN experience delivered via Astro's i18n routing, expanding ChapMagic's reach to English-speaking markets.
- <b>Cinematic Animation System:</b> GSAP-powered hero, scroll-triggered section reveals, and a magnetic cursor create a distinctive, high-end user experience consistent with the artist's stage presence.
- <b>Spam-Resistant Contact Form:</b> Dual-layer protection (honeypot + timestamp guard) ensures genuine inquiries reach the client without manual filtering.
- <b>Performance-Oriented Architecture:</b> Static-first Astro build with SSR only where needed minimizes bundle size and time-to-interactive.
- <b>Centralized Content Management:</b> All translations, show descriptions, stats, and links live in a single `site-config.json`, making future content updates straightforward without touching component code.
````

## Spanish — restore to `src/content/proyectos/ChapMagic.md`

````markdown
---
title: ChapMagic — Landing Page de Mago y Mentalista
publishDate: 2026-02-11 00:00:00
img: /assets/chapmagic/1.png
img_alt: Captura de pantalla de la sección hero de la landing page de ChapMagic.
description: |
  Una landing page bilingüe premium y de alto rendimiento para ChapMagic — mago y mentalista — construida con animaciones cinematográficas, un formulario de contacto listo para producción y un sistema de diseño en oro y obsidiana.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/chapmagic/2.png,
  /assets/chapmagic/3.png,
  /assets/chapmagic/4.png,
  /assets/chapmagic/5.png
]
---

### Resumen del proyecto
ChapMagic es una landing page premium para Chap, mago y mentalista profesional que actuó en más de 14 países, acumuló más de 2.000 shows y más de 40.000 espectadores — incluyendo participaciones en Got Talent España, donde los jueces lo elogiaron en vivo. El sitio funciona como un escaparate orientado a la conversión para sus espectáculos corporativos, magia de recepción, shows teatrales y experiencias íntimas en sala Speak Easy, impulsando reservas a través de una interfaz bilingüe de alto nivel.

##### Objetivos
- <b>Elevación de marca:</b> Trasladar la personalidad premium y misteriosa de ChapMagic a una identidad digital coherente en oro y obsidiana.
- <b>Alcance bilingüe:</b> Atender a mercados de habla hispana e inglesa mediante el enrutamiento i18n nativo de Astro.
- <b>Generación de leads:</b> Ofrecer un formulario de contacto seguro y listo para producción que filtre spam mientras convierte visitas en consultas de reserva.
- <b>Rendimiento y animación:</b> Entregar experiencias cinematográficas basadas en scroll sin sacrificar la velocidad de carga.
##### Flujo de trabajo del proyecto
- <b>Sistema de diseño:</b> Se estableció una paleta oscura de lujo — Oro (`#D4AF37`), Obsidiana (`#0A0A0A`), Marfil (`#F5F0E8`) — con tipografía Playfair Display en títulos e Inter en cuerpo de texto, definidas como tokens `@theme` de Tailwind 4.
- <b>Arquitectura de animaciones:</b> Se implementaron timelines personalizados de GSAP para la sección Hero, parallax y reveals escalonados basados en ScrollTrigger, y un cursor dorado "magnético" a medida para escritorio.
- <b>UX híbrida en mobile:</b> Las cards de espectáculos se diseñaron con auto-reveal en mobile (vía ScrollTrigger) e interacciones hover en escritorio, adaptándose fluidamente a cada contexto.
- <b>Implementación de i18n:</b> Se construyeron versiones completamente localizadas en español e inglés usando el enrutamiento dinámico `[lang]` de Astro, con un `site-config.json` centralizado como única fuente de verdad para todas las traducciones y contenidos.
- <b>Formulario de contacto y anti-spam:</b> Se desarrolló un endpoint API del lado del servidor (SSR vía Vercel) que integra Resend para entrega de correo confiable, protegido por un campo honeypot invisible y una guardia de detección de bots basada en timestamp.
- <b>Navegación fluida:</b> Se integró Lenis smooth scrolling y un menú mobile "Liquid" personalizado para una sensación premium en toda la experiencia.
##### Tecnologías utilizadas
>Astro v5: Elegido por su modelo híbrido SSG + SSR — páginas estáticas con una ruta API del lado del servidor activa para el formulario de contacto.
###
>Tailwind CSS v4: Se adoptó el nuevo motor basado en Vite con tokens `@theme` para un sistema de diseño consistente y mantenible.
###
>GSAP (ScrollTrigger + Timeline): Potencia todas las animaciones cinematográficas, desde los reveals del hero hasta el parallax basado en scroll en cada sección.
###
>Lenis: Proporciona un comportamiento de scroll ultra fluido que eleva la sensación premium del sitio.
###
>Resend: Gestiona la entrega de correo transaccional desde el formulario de contacto con alta confiabilidad.
###
>Vercel: Plataforma de despliegue que habilita el modo SSR híbrido necesario para la API de contacto del lado del servidor.
###
>TypeScript: Utilizado en todo el proyecto para props de componentes, handlers de API y configuración del sitio con tipado seguro.

##### Resultados e impacto
- <b>Sitio bilingüe completo:</b> Experiencia ES/EN completamente localizada entregada vía i18n de Astro, ampliando el alcance de ChapMagic a mercados de habla inglesa.
- <b>Sistema de animaciones cinematográfico:</b> El hero potenciado por GSAP, los reveals de secciones activados por scroll y el cursor magnético crean una experiencia de usuario distintiva y de alta gama, coherente con la presencia escénica del artista.
- <b>Formulario de contacto resistente al spam:</b> La protección de doble capa (honeypot + guardia de timestamp) garantiza que las consultas genuinas lleguen al cliente sin filtrado manual.
- <b>Arquitectura orientada al rendimiento:</b> Build estático de Astro con SSR solo donde se necesita, minimizando el tamaño del bundle y el tiempo de interactividad.
- <b>Gestión de contenido centralizada:</b> Todas las traducciones, descripciones de shows, estadísticas y enlaces viven en un único `site-config.json`, haciendo que las actualizaciones de contenido futuras sean directas sin tocar el código de los componentes.
````

---

# Gaudiano

## English — restore to `src/content/work/Gaudiano.md`

````markdown
---
title: Romina Gaudiano — Trading Mind Landing Page
publishDate: 2026-03-18 00:00:00
img: /assets/gaudiano/1.png
img_alt: Screenshot of Romina Gaudiano's Trading Mind landing page.
description: |
  A high-polish conversion landing page for a mental reprogramming mentor targeting traders and high-risk investors.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/gaudiano/2.png,
  /assets/gaudiano/3.png,
  /assets/gaudiano/4.png,
  /assets/gaudiano/5.png
]
---

### Project Overview
Romina Gaudiano is an Argentine specialist in applied neuroscience-based mental reprogramming for traders and high-risk investors. The project is a single-page conversion landing at [mentoria.rominagaudiano.com](https://mentoria.rominagaudiano.com), promoting her 1:1 mentorship program and CryptoMind Pro Elite offering. The design went through multiple prototyped options before landing on "Option 6" — a dark, editorial aesthetic that reflects the gravity and precision of the trading world.

##### Objectives
- <b>Brand Identity:</b> Communicate premium positioning through a refined navy, cream, and cashmere palette paired with Playfair Display and Lora serif typography.
- <b>Lead Generation:</b> Drive qualified applications via a contact form and a fixed WhatsApp floating button with a pre-filled message.
- <b>Performance-first Build:</b> Deliver fast, responsive pages with zero client-side JavaScript frameworks and self-hosted fonts.
- <b>Spam Protection:</b> Implement a double-honeypot strategy (Web3Forms native + a custom hidden field) to filter bot submissions without CAPTCHA friction.
##### Project Workflow
- <b>Prototyping:</b> Designed and built multiple landing variants (options 1–6) to explore tone, layout, and visual direction before committing to a final.
- <b>Design System:</b> Established a strict CSS custom-property palette (`--navy`, `--cream`, `--cashm`) applied consistently across all sections, interactions, and animations.
- <b>Animation without Libraries:</b> Implemented all entrance reveals using CSS `animation-timeline: view()` scroll-driven animations and `IntersectionObserver` — no GSAP or third-party libraries.
- <b>Interactive Polish:</b> Added a custom two-element cursor (dot + ring), CSS `:has()`-powered section background transitions on the Pilares block, hero image clip-path reveal, and a full-screen hamburger overlay.
- <b>Contact & Comms:</b> Integrated Web3Forms (zero DNS dependency) as the active form backend, with a pre-built Resend serverless endpoint preserved in `src/pages/api/contact.ts` for future migration once DNS leaves Wix.
- <b>Deployment:</b> Auto-deployed to Vercel on every push to `master`, with Vercel Analytics and Speed Insights wired into `BaseLayout.astro`.
##### Technologies Used
>Astro 6: Chosen as the static-site framework with the `@astrojs/vercel` adapter for serverless output and zero-JS-by-default pages.
###
>Tailwind CSS 4: Used via `@tailwindcss/vite` for utility-first styling; all design tokens expressed as CSS custom properties for dynamic theming.
###
>Web3Forms: Selected as the form backend because it requires no DNS configuration, unblocking the contact form while domain DNS is still managed by Wix.
###
>Fontsource (Playfair Display + Lora): Self-hosted editorial serif fonts loaded with latin-only subsets and specific weights to avoid Google Fonts CDN latency.
###
>Vercel Analytics + Speed Insights: Instrumented at the layout level to track performance and visitor behaviour in production.
###
>Resend (inactive fallback): A serverless endpoint is preserved in the codebase and will be activated once the sender domain is verified after DNS migration.
##### Results and Impact
- <b>Multi-option Exploration Delivered:</b> Six distinct landing prototypes were built and evaluated, resulting in a final design that precisely matched the client's premium positioning.
- <b>Zero-dependency Animations:</b> All scroll reveals, cursor effects, and section transitions are achieved with native CSS and the scroll-driven animations API — keeping the bundle lean and rendering smooth.
- <b>Responsive Image Optimization:</b> Hero images served through Astro's `<Image />` with responsive `srcset`, achieving significant file-size reduction (documented as ~512kB → ~40kB at display sizes in project docs).
- <b>Resilient Contact Flow:</b> The Web3Forms integration unblocked form delivery despite DNS constraints, with a Resend fallback ready to activate without a rewrite.
- <b>Production-ready Infrastructure:</b> Continuous deployment on Vercel, auto-generated sitemap, robots.txt, and analytics instrumentation all in place from day one.
````

## Spanish — restore to `src/content/proyectos/Gaudiano.md`

````markdown
---
title: Romina Gaudiano — Landing Page Trading Mind
publishDate: 2026-03-18 00:00:00
img: /assets/gaudiano/1.png
img_alt: Screenshot de la landing page Trading Mind de Romina Gaudiano.
description: |
  Una landing page de conversión con alto nivel de refinamiento visual para una mentora de reprogramación mental dirigida a traders e inversores de alto riesgo.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/gaudiano/2.png,
  /assets/gaudiano/3.png,
  /assets/gaudiano/4.png,
  /assets/gaudiano/5.png
]
---

### Resumen del Proyecto
Romina Gaudiano es una especialista argentina en reprogramación mental aplicada desde la neurociencia, orientada a traders e inversores de alto riesgo. El proyecto es una landing page de página única en [mentoria.rominagaudiano.com](https://mentoria.rominagaudiano.com), diseñada para promover su mentoría 1:1 y el programa CryptoMind Pro Elite. El diseño pasó por múltiples variantes prototipadas antes de consolidarse en la "Opción 6" — una estética editorial oscura que refleja la gravedad y la precisión del mundo del trading.

##### Objetivos
- <b>Identidad de Marca:</b> Comunicar un posicionamiento premium mediante una paleta de navy, crema y cashmere combinada con tipografía serif Playfair Display y Lora.
- <b>Generación de Leads:</b> Impulsar aplicaciones calificadas a través de un formulario de contacto y un botón flotante de WhatsApp con mensaje prefijado.
- <b>Build Orientado al Rendimiento:</b> Entregar páginas rápidas y responsivas sin frameworks JavaScript del lado del cliente y con fuentes autoalojadas.
- <b>Protección contra Spam:</b> Implementar una estrategia de doble honeypot (nativo de Web3Forms + campo oculto personalizado) para filtrar bots sin fricción de CAPTCHA.
##### Flujo de Trabajo del Proyecto
- <b>Prototipado:</b> Se diseñaron y desarrollaron múltiples variantes de landing (opciones 1–6) para explorar el tono, la composición y la dirección visual antes de comprometerse con una versión final.
- <b>Sistema de Diseño:</b> Se estableció una paleta estricta en propiedades CSS personalizadas (`--navy`, `--cream`, `--cashm`) aplicada de forma consistente en todas las secciones, interacciones y animaciones.
- <b>Animaciones sin Librerías:</b> Todas las revelaciones de entrada se implementaron con animaciones CSS scroll-driven (`animation-timeline: view()`) e `IntersectionObserver` — sin GSAP ni librerías de terceros.
- <b>Pulido Interactivo:</b> Se incorporó un cursor personalizado de dos elementos (punto + anillo), transiciones de fondo de sección basadas en CSS `:has()` en el bloque de Pilares, revelación del hero con `clip-path` y un overlay de menú hamburguesa a pantalla completa.
- <b>Contacto y Comunicación:</b> Se integró Web3Forms (sin dependencia de DNS) como backend de formulario activo, con un endpoint serverless de Resend preservado en `src/pages/api/contact.ts` para migración futura una vez que el DNS salga de Wix.
- <b>Despliegue:</b> Deploy automático en Vercel en cada push a `master`, con Vercel Analytics y Speed Insights integrados en `BaseLayout.astro`.
##### Tecnologías Utilizadas
>Astro 6: Elegido como framework de sitio estático con el adaptador `@astrojs/vercel` para salida serverless y páginas sin JavaScript por defecto.
###
>Tailwind CSS 4: Utilizado vía `@tailwindcss/vite` para estilos utility-first; todos los tokens de diseño expresados como propiedades CSS personalizadas para theming dinámico.
###
>Web3Forms: Seleccionado como backend de formulario por no requerir configuración de DNS, desbloqueando el formulario de contacto mientras el DNS del dominio sigue gestionado por Wix.
###
>Fontsource (Playfair Display + Lora): Fuentes serif editoriales autoalojadas con subconjuntos solo-latin y pesos específicos para evitar la latencia del CDN de Google Fonts.
###
>Vercel Analytics + Speed Insights: Instrumentados a nivel de layout para monitorear rendimiento y comportamiento de visitantes en producción.
###
>Resend (fallback inactivo): Un endpoint serverless está preservado en el código y se activará una vez que el dominio remitente sea verificado tras la migración de DNS.
##### Resultados e Impacto
- <b>Exploración Multi-opción Entregada:</b> Se construyeron y evaluaron seis prototipos de landing distintos, resultando en un diseño final que refleja con precisión el posicionamiento premium de la cliente.
- <b>Animaciones sin Dependencias:</b> Todas las revelaciones en scroll, efectos de cursor y transiciones de sección se logran con CSS nativo y la API de scroll-driven animations, manteniendo el bundle liviano y el renderizado fluido.
- <b>Optimización Responsiva de Imágenes:</b> Las imágenes del hero se sirven a través del componente `<Image />` de Astro con `srcset` responsivo, logrando una reducción significativa de tamaño de archivo (documentada como ~512kB → ~40kB en los tamaños de visualización).
- <b>Flujo de Contacto Resiliente:</b> La integración de Web3Forms desbloqueó la entrega de formularios pese a las restricciones de DNS, con el fallback de Resend listo para activarse sin reescribir el código.
- <b>Infraestructura Lista para Producción:</b> Deploy continuo en Vercel, sitemap autogenerado, robots.txt y analítica instrumentada desde el primer día.
````

---

# Ilusionista

## English — restore to `src/content/work/Ilusionista.md`

````markdown
---
title: Guillermo Flores — Ilusionista Website Redesign
publishDate: 2026-04-27 00:00:00
img: /assets/ilusionista/1.png
img_alt: Screenshot of the Guillermo Flores Ilusionista landing page.
description: |
  A full-bleed, single-scroll landing page crafted to feel like a theatrical object — atmosphere-first, template-free.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/ilusionista/2.png,
  /assets/ilusionista/3.png,
  /assets/ilusionista/4.png,
  /assets/ilusionista/5.png
]
---

### Project Overview
A greenfield redesign of the existing ilusionista.com.ar, built for Guillermo Flores — an Argentine illusionist and mentalist based in Buenos Aires. The site is a single-scroll landing page intended to replace a generic predecessor with something that feels like a curated performance object: loaded with atmosphere, cinematic motion, and typographic character that evoke a live stage show. The aesthetic direction deliberately fuses Old West / woodtype fairground prints, Edgar Allan Poe gothic claroscuro, Tarantino-style oversized type, and Art Nouveau ornamental linework.

##### Objectives
- <b>Brand Statement:</b> Replace a generic web presence with a distinctive, personality-driven landing that mirrors the drama of a live performance.
- <b>Conversion:</b> Drive bookings via a direct WhatsApp and email contact section targeted at corporate events, private events, close-up magic, and theater runs.
- <b>Performance Budget:</b> Deliver the experience within a strict LCP < 2.5s, CLS < 0.1, and < 100KB of first-load JavaScript to keep the atmosphere from costing page speed.
- <b>Accessibility:</b> Maintain WCAG AA contrast on textured dark backgrounds and respect `prefers-reduced-motion` across every animation.
##### Project Workflow
- <b>Direction & Spec:</b> Defined aesthetic direction from 14 curated visual reference images before touching a single component, establishing a four-world hybrid palette (ink, bone, blood, brass) and a typographic system built around Bodoni Moda, Cormorant Garamond, and Inter — all self-hosted.
- <b>Component Architecture:</b> Built as an Astro static site with isolated React islands only where genuinely interactive; each page section (Hero, Bio, Services, Testimonios, Contacto) is its own `.astro` component with scoped styles.
- <b>Cinematic Services Section:</b> Implemented a scroll-pinned, full-viewport cinematic slider for four service categories (Corporate Mentalism, Private Events, Close-Up Magic, Theater) driven entirely by a custom scroll-progress engine in vanilla TypeScript — no GSAP license needed.
- <b>Motion System:</b> All animations (hero word-reveal stagger, Ken Burns photo drift, brass filete draw, stamp pop, section fade-up reveals, parallax chapter numerals, photo curtain reveal) respect `prefers-reduced-motion` and use `will-change` annotations to stay on the compositor thread.
- <b>Transition Choreography:</b> A custom brass-to-ink dot transition connects the Services section to the Testimonios section — the watermark period scales from a typographic ornament into a full-viewport ink wash, eliminating hard section cuts.
##### Technologies Used
>Astro 6: Static-first framework chosen for near-zero JS by default; only interactive islands ship runtime code.
###
>Tailwind CSS v4: Utility-first styling with a fully custom design-token theme (colors, fonts, spacing) rather than stock defaults.
###
>Motion (Motion One): Lightweight animation library used for hero word-reveal stagger sequences with precise spring easing.
###
>Lenis: Smooth-scroll engine that feeds scroll position to the custom services-scroll and parallax engines via a shared event bus.
###
>Bodoni Moda + Cormorant Garamond + Inter (Fontsource): Self-hosted variable fonts — no external CDN dependency, no layout shift from web font load.
###
>Vercel adapter: Zero-config edge deployment via `@astrojs/vercel`.

##### Results and Impact
- <b>Fully Delivered Sections:</b> Hero, Bio, Services (4 categories with cinematic scroll), Testimonios, and Contacto are all implemented and production-ready; the complete user journey from landing to booking CTA is functional.
- <b>Motion Without Excess:</b> Every transition is compositor-thread only (opacity + transform), respects reduced-motion preferences, and stays within the sub-100KB JS budget — visual richness does not come at a performance cost.
- <b>Distinctive Visual Identity:</b> The four-world aesthetic direction (gothic, western, theatrical, art nouveau) is consistently expressed across color palette, ornamental components (DoubleFrame, CornerFlourish, SectionDivider, ChapterNumeral, DropCap), and typographic hierarchy — a clear departure from generic AI-era landing templates.
- <b>Scalable Component System:</b> Ornament components are parameterized and reusable, making it straightforward to extend the site with new sections (demos video, press gallery) without visual inconsistency.
````

## Spanish — restore to `src/content/proyectos/Ilusionista.md`

````markdown
---
title: Guillermo Flores — Ilusionista, Rediseño Web
publishDate: 2026-04-27 00:00:00
img: /assets/ilusionista/1.png
img_alt: Captura de pantalla del sitio de Guillermo Flores, ilusionista.
description: |
  Una landing de scroll único pensada para sentirse como un objeto teatral — atmósfera primero, sin plantillas genéricas.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/ilusionista/2.png,
  /assets/ilusionista/3.png,
  /assets/ilusionista/4.png,
  /assets/ilusionista/5.png
]
---

### Descripción del proyecto
Rediseño completo de ilusionista.com.ar para Guillermo Flores, ilusionista y mentalista argentino con base en Buenos Aires. El sitio es una landing de scroll único que reemplaza una web genérica con algo que se siente como una pieza curada de espectáculo: cargada de atmósfera, con movimiento cinematográfico y tipografía que evocan un show en vivo. La dirección estética fusiona de forma deliberada carteles woodtype del Old West, el claroscuro gótico de Edgar Allan Poe, la tipografía sobredimensionada de Tarantino y el ornamentalismo del Art Nouveau.

##### Objetivos
- <b>Declaración de marca:</b> Reemplazar una presencia web genérica con una landing distintiva y cargada de personalidad que espeje el drama de una actuación en vivo.
- <b>Conversión:</b> Impulsar contrataciones mediante una sección de contacto directo por WhatsApp y email, orientada a eventos corporativos, privados, magia de cerca y temporadas de teatro.
- <b>Presupuesto de performance:</b> Entregar la experiencia con LCP < 2,5 s, CLS < 0,1 y menos de 100 KB de JavaScript en la primera carga — la atmósfera no puede costar velocidad de página.
- <b>Accesibilidad:</b> Mantener contraste WCAG AA sobre fondos oscuros texturados y respetar `prefers-reduced-motion` en cada animación.
##### Flujo de trabajo
- <b>Dirección y especificación:</b> Se definió la dirección estética a partir de 14 imágenes de referencia antes de escribir un solo componente, estableciendo una paleta de cuatro mundos (ink, bone, blood, brass) y un sistema tipográfico construido sobre Bodoni Moda, Cormorant Garamond e Inter — todas self-hosted.
- <b>Arquitectura de componentes:</b> Sitio estático en Astro con islas React solo donde la interactividad es real; cada sección de la página (Hero, Bio, Services, Testimonios, Contacto) es su propio componente `.astro` con estilos con scope.
- <b>Sección de espectáculos cinematográfica:</b> Se implementó un slider de pantalla completa anclado al scroll para cuatro categorías de servicio (Mentalismo Corporativo, Eventos Privados, Magia de Cerca, Teatro), impulsado por un motor de scroll personalizado en TypeScript vanilla — sin necesidad de licencia de GSAP.
- <b>Sistema de movimiento:</b> Todas las animaciones (stagger de palabras en el hero, Ken Burns en la foto, dibujo del filete brass, pop del sello, fade-up de secciones, numerales de capítulo con paralaje, reveal cortina de la foto) respetan `prefers-reduced-motion` y usan anotaciones `will-change` para mantenerse en el compositor.
- <b>Coreografía de transiciones:</b> Una transición personalizada de punto brass a punto ink conecta la sección de espectáculos con Testimonios — el punto del numeral marca crece desde un ornamento tipográfico hasta cubrir el viewport en tinta, eliminando los cortes abruptos entre secciones.
##### Tecnologías utilizadas
>Astro 6: Framework estático-first elegido por su cero-JS por defecto; solo las islas interactivas envían código en runtime.
###
>Tailwind CSS v4: Estilos utility-first con un tema de design tokens completamente personalizado (colores, fuentes, espaciado) en lugar de los defaults de stock.
###
>Motion (Motion One): Librería de animación ligera usada para las secuencias de stagger del reveal de palabras en el hero con easing spring preciso.
###
>Lenis: Motor de scroll suave que alimenta con la posición de scroll a los motores de services-scroll y paralaje mediante un event bus compartido.
###
>Bodoni Moda + Cormorant Garamond + Inter (Fontsource): Fuentes variables self-hosted — sin dependencia de CDN externo, sin layout shift por carga de web fonts.
###
>Adapter de Vercel: Deploy en edge sin configuración via `@astrojs/vercel`.

##### Resultados e impacto
- <b>Secciones completamente entregadas:</b> Hero, Bio, Espectáculos (4 categorías con scroll cinematográfico), Testimonios y Contacto están implementados y listos para producción; el recorrido completo del usuario desde la llegada hasta el CTA de contratación es funcional.
- <b>Movimiento sin excesos:</b> Cada transición opera solo en opacidad y transform en el compositor, respeta las preferencias de movimiento reducido y se mantiene dentro del presupuesto de menos de 100 KB de JS — la riqueza visual no tiene costo de performance.
- <b>Identidad visual distintiva:</b> La dirección estética de cuatro mundos (gótico, western, teatral, art nouveau) se expresa de forma consistente en la paleta de color, los componentes ornamentales (DoubleFrame, CornerFlourish, SectionDivider, ChapterNumeral, DropCap) y la jerarquía tipográfica — una ruptura clara con las plantillas genéricas de la era de la IA.
- <b>Sistema de componentes escalable:</b> Los componentes de ornamento son parametrizables y reutilizables, lo que facilita extender el sitio con nuevas secciones (video de demos, galería de prensa) sin inconsistencia visual.
````

---

# Producciones8888

## English — restore to `src/content/work/Producciones8888.md`

````markdown
---
title: 8888 Producciones Landing Page
publishDate: 2026-05-05 00:00:00
img: /assets/producciones8888/1.png
img_alt: Screenshot of 8888 Producciones landing page featuring the acid green brutalist design.
description: |
  A high-impact single-page landing built for an audiovisual production company, recording studio, and artist management house in Buenos Aires — fusing Multimodal Brutalism with Future-Pop aesthetics.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/producciones8888/2.png,
  /assets/producciones8888/3.png,
  /assets/producciones8888/4.png,
  /assets/producciones8888/5.png
]
---

### Project Overview
8888 Producciones is a Buenos Aires-based audiovisual production company, recording studio, and artist management house operating at the intersection of technology and pure creative expression. The landing page was built to present four core service verticals — Audiovisual Production, Recording Studio, Artist Roster, and Events & Live — under a single, opinionated visual identity defined by the brand's own design guidelines: Multimodal Brutalism meets Future-Pop. The site is deployed as a fully static Astro 6 MPA on Vercel, with a public "under construction" index that directs prospects to book sessions, and a complete `/preview` route containing the full experience.

##### Objectives
- <b>Brand Translation:</b> Faithfully implement the client's documented brand identity — Acid Green (`#B6F700`), Deep Black, zero-radius (brutalist) shapes, and a three-font editorial system (Newsreader, Space Grotesk, Inter).
- <b>Animated First Impression:</b> Create a cinematic page-load sequence that counts `0000 → 8888`, grows an acid-green progress bar, flashes the screen, then sweeps away — running only once per browser session via `sessionStorage`.
- <b>Section Architecture:</b> Deliver all five content sections (Manifesto, Servicios, Roster, Reel, Estudio) with a numbered editorial navigation and a fully functional contact form with project-type checkboxes.
- <b>Interaction Polish:</b> Layer Motion One scroll-reveals, word-by-word hero stagger, an infinite CSS marquee, and a custom acid-green cursor with `mix-blend-mode: difference` that scales on hover.

##### Project Workflow
- <b>Design System First:</b> Translated the client's brand guidelines into Tailwind CSS v4 design tokens (`@theme`) — palette, spacing, radii, and named typography utilities — before writing a single component.
- <b>Component Decomposition:</b> Split the page into 13 focused Astro components (Loader, Hero, Manifesto, Servicios, Roster, Reel, Estudio, Contacto, Marquee, Header, Footer, Cursor, GrainOverlay), each responsible for a single visual concern.
- <b>Animation Strategy:</b> Used Motion One's `inView` hook for `[data-reveal]` and `[data-stagger]` elements, keeping all scroll-driven animation under ~3.8 KB; CSS `@keyframes` handle the loader counter, marquee, and grain overlay independently.
- <b>Performance & Accessibility:</b> Static output via Astro's default SSG mode, lazy-loaded images, `prefers-reduced-motion` guard on all animations, and `aria-hidden` on every decorative element.
- <b>Smooth Scroll Integration:</b> Lenis was wired at the layout level to provide momentum scrolling alongside a Lenis-synchronized acid-green scroll-progress bar in the header.

##### Technologies Used
>Astro 6: Static MPA framework chosen for zero-JS-by-default output, component isolation, and fast Vercel deployment.
###
>Tailwind CSS v4: Used via the Vite plugin with `@theme` tokens to enforce the brand system without a config file.
###
>Motion One: Lightweight scroll-reveal and micro-animation library (~3.8 KB) for `inView`-driven stagger effects.
###
>Lenis: Smooth-scroll library providing momentum scrolling synchronized with the header progress indicator.

##### Results and Impact
- <b>Complete Brand Implementation:</b> The Acid Green / Deep Black palette, sharp brutalist radii, and editorial typeface trio are applied consistently across every component, directly from the client's `lineamientos.html` guidelines.
- <b>Cinematic Load Experience:</b> The `0000 → 8888` loader with eased counter, growing acid bar, and flash-sweep exit runs once per session, establishing an immediate and memorable brand impression.
- <b>Four Service Verticals Delivered:</b> Audiovisual Production, Recording Studio (Genelec 8351B / SSL Origin 32 / Neve · API · UA specs), Artist Roster (6 acts displayed in a grayscale-to-color hover grid), and Events & Live are all fully structured and navigable.
- <b>Interaction Depth:</b> Custom cursor, grain overlay, scroll-linked progress bar, word-split hero reveal, and a CSS marquee strip combine to produce a polished, production-grade UI without any JavaScript framework overhead.
- <b>Mobile-First Responsive:</b> Adaptive layout with `clamp()`-based fluid type, hidden sound-bar SVGs on small screens, and a full-screen mobile menu triggered from a brutalist "MENU" button.
````

## Spanish — restore to `src/content/proyectos/Producciones8888.md`

````markdown
---
title: Landing Page de 8888 Producciones
publishDate: 2026-05-05 00:00:00
img: /assets/producciones8888/1.png
img_alt: Captura de pantalla de la landing page de 8888 Producciones con el diseño brutalista en verde ácido.
description: |
  Una landing de alto impacto construida para una productora audiovisual, estudio de grabación y casa de management de artistas en Buenos Aires — fusionando Brutalismo Multimodal con estética Future-Pop.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/producciones8888/2.png,
  /assets/producciones8888/3.png,
  /assets/producciones8888/4.png,
  /assets/producciones8888/5.png
]
---

### Descripción del Proyecto
8888 Producciones es una productora audiovisual, estudio de grabación y casa de management de artistas con base en Buenos Aires, que opera en la intersección entre tecnología y expresión creativa pura. La landing fue construida para presentar cuatro verticales de servicio — Producción Audiovisual, Estudio de Grabación, Roster de Artistas y Eventos & Live — bajo una identidad visual propia y opinionada, definida por los lineamientos de la marca: Brutalismo Multimodal con estética Future-Pop. El sitio se despliega como una MPA estática con Astro 6 en Vercel, con un índice público "en construcción" que dirige a los prospectos a reservar sesiones, y una ruta `/preview` que contiene la experiencia completa.

##### Objetivos
- <b>Traducción de Marca:</b> Implementar fielmente la identidad visual documentada por el cliente — Verde Ácido (`#B6F700`), Negro Profundo, radios cero (brutalismo) y un sistema tipográfico de tres fuentes editoriales (Newsreader, Space Grotesk, Inter).
- <b>Primera Impresión Animada:</b> Crear una secuencia de carga cinematográfica que cuente `0000 → 8888`, haga crecer una barra de progreso ácida, flashee la pantalla y luego se vaya con un barrido — ejecutándose solo una vez por sesión del navegador mediante `sessionStorage`.
- <b>Arquitectura de Secciones:</b> Entregar las cinco secciones de contenido (Manifiesto, Servicios, Roster, Reel, Estudio) con navegación editorial numerada y un formulario de contacto completamente funcional con checkboxes por tipo de proyecto.
- <b>Pulido de Interacción:</b> Incorporar scroll-reveals con Motion One, stagger palabra por palabra en el hero, un marquee CSS infinito y un cursor personalizado en verde ácido con `mix-blend-mode: difference` que escala al hacer hover.

##### Flujo de Trabajo
- <b>Sistema de Diseño Primero:</b> Los lineamientos de marca del cliente se tradujeron a tokens de diseño en Tailwind CSS v4 (`@theme`) — paleta, espaciado, radios y utilidades tipográficas nombradas — antes de escribir un solo componente.
- <b>Descomposición en Componentes:</b> La página se dividió en 13 componentes Astro enfocados (Loader, Hero, Manifiesto, Servicios, Roster, Reel, Estudio, Contacto, Marquee, Header, Footer, Cursor, GrainOverlay), cada uno responsable de una sola preocupación visual.
- <b>Estrategia de Animación:</b> Se usó el hook `inView` de Motion One para los elementos `[data-reveal]` y `[data-stagger]`, manteniendo toda la animación orientada al scroll por debajo de ~3.8 KB; los `@keyframes` de CSS manejan de forma independiente el contador del loader, el marquee y el overlay de grano.
- <b>Performance y Accesibilidad:</b> Salida estática con el modo SSG por defecto de Astro, imágenes con carga diferida, guarda `prefers-reduced-motion` en todas las animaciones y `aria-hidden` en cada elemento decorativo.
- <b>Integración de Smooth Scroll:</b> Lenis se integró a nivel de layout para proporcionar scroll con inercia, sincronizado con una barra de progreso verde ácido en el header.

##### Tecnologías Utilizadas
>Astro 6: Framework MPA estático elegido por su salida sin JavaScript por defecto, aislamiento de componentes y despliegue rápido en Vercel.
###
>Tailwind CSS v4: Usado mediante el plugin de Vite con tokens `@theme` para aplicar el sistema de marca sin archivo de configuración.
###
>Motion One: Librería ligera de scroll-reveal y micro-animaciones (~3.8 KB) para efectos de stagger activados con `inView`.
###
>Lenis: Librería de smooth-scroll que provee desplazamiento con inercia sincronizado con el indicador de progreso del header.

##### Resultados e Impacto
- <b>Implementación Completa de Marca:</b> La paleta Verde Ácido / Negro Profundo, los radios brutalistas en cero y el trío de tipografías editoriales se aplican de forma consistente en cada componente, directamente desde el archivo `lineamientos.html` del cliente.
- <b>Experiencia de Carga Cinematográfica:</b> El loader `0000 → 8888` con contador suavizado, barra ácida en crecimiento y salida con flash-barrido se ejecuta una vez por sesión, estableciendo una impresión de marca inmediata y memorable.
- <b>Cuatro Verticales de Servicio Entregadas:</b> Producción Audiovisual, Estudio de Grabación (con specs de Genelec 8351B / SSL Origin 32 / Neve · API · UA), Roster de Artistas (6 artistas en grilla de hover escala de grises a color) y Eventos & Live, todas completamente estructuradas y navegables.
- <b>Profundidad de Interacción:</b> Cursor personalizado, overlay de grano, barra de progreso sincronizada al scroll, reveal del hero con stagger por palabra y strip de marquee CSS combinan para producir una UI pulida y lista para producción sin overhead de ningún framework JavaScript.
- <b>Responsive Mobile-First:</b> Layout adaptativo con tipografía fluida basada en `clamp()`, SVGs de barras de sonido ocultos en pantallas pequeñas y menú móvil a pantalla completa activado desde un botón brutalista "MENU".
````

---

# MagiaYBurbujas

## English — restore to `src/content/work/MagiaYBurbujas.md`

````markdown
---
title: Magia y Burbujas — Landing Site for Argentine Street Magician
publishDate: 2026-05-06 00:00:00
img: /assets/magiayburbujas/1.png
img_alt: Screenshot of Magia y Burbujas website — dark background with gold typography and a bubble-driven hero section.
description: |
  A heavily animated single-scroll landing for Gonza Martini, an Argentine street magician performing in Barcelona — built to feel like a living magic poster.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/magiayburbujas/2.png,
  /assets/magiayburbujas/3.png,
  /assets/magiayburbujas/4.png,
  /assets/magiayburbujas/5.png
]
---

### Project Overview
Magia y Burbujas is the promotional website for Gonza Martini, an Argentine street magician and bubble-show artist based in Barcelona. The site is a single-scroll landing designed to function as both a portfolio and a booking conversion tool — communicating the warmth and spectacle of his shows in a tone that feels like a conversation rather than a brochure. The aesthetic is inspired by ornate fairground signage: dark ink backgrounds, gold typographic foil, violet accents, and iridescent bubbles throughout.

##### Objectives
- <b>Booking conversion:</b> Drive inquiries via WhatsApp CTA with warm, inviting copy in Argentine Spanish.
- <b>Showcase shows:</b> Present Gonza's four distinct show formats (close-up magic, main stage, corporate, and the signature bubble experience) with full-bleed visual treatment.
- <b>Immersive first impression:</b> Deliver a cinematic entrance sequence — a custom loader, portrait fade-in, animated title, and a bubble mascot that grows from the hero portrait and persists throughout the page as a scroll companion.
- <b>Mobile-first reach:</b> Optimized for the 390px viewport, since the site is primarily shared via WhatsApp.

##### Project Workflow
- <b>Foundation:</b> Scaffolded Astro 6 with Tailwind v4 custom design tokens (`@theme` palette of ink, gold, violet, cream), four self-hosted font families (Cinzel Decorative, Pinyon Script, Cormorant Garamond, Young Heart), and Lenis smooth scroll — all established in the first session.
- <b>Hero construction:</b> Built a symmetric "living poster" hero with a dual-layer portrait (lit/dark crossfade driven by scroll progress), a canvas-based bubble particle system (~80–150 bubbles on desktop, 40–60 on mobile) with sinusoidal drift and iridescent rim rendering, and a marquee bottom band looping the show's taglines.
- <b>Scroll choreography:</b> Designed and implemented a 706-line GSAP ScrollTrigger orchestration — pinned Shows section (4 slides × 100vh), a Bézier-path bubble mascot that follows the scroll through every section, a horizontal pinned Gallery strip, and a free-scroll phase with keyframe-sampled mascot scale changes across Bio → Media → Contacto.
- <b>Content sections:</b> Built Gallery (8 real client photos processed via Sharp to webp at q82, displayed with duotone-gold hover treatment), Reviews (4 testimonial cards with SectionReveal fade-in), and a rebuilt Contacto section with a 2-column layout and the mascot parked as a visual companion.
- <b>Performance gating:</b> Replaced a fixed-duration loader with a hybrid progress bar — synthetic ramp + real asset load tracking on critical images and the mascot video — so the CTA only appears once essential content is ready.
- <b>Testing:</b> 21 Vitest unit tests covering bubble physics, Catmull-Rom mascot path interpolation, gallery strip translation, and free-path scale curve sampling — all green.

##### Technologies Used
>Astro 6: Static-site framework enabling component-based architecture with zero client-side JS by default — ideal for a performance-sensitive marketing landing.
###
>Tailwind CSS v4: Custom design token system via `@theme` for the full ink/gold/violet/cream palette, eliminating the need for a separate CSS variables layer.
###
>GSAP + ScrollTrigger: Powers the pinned Shows section, slide transitions, and the scroll-driven bubble mascot choreography — chosen for its precise scrub control and robust pin behavior.
###
>Lenis: Smooth scroll with 1.6s cubic easing, integrated into a single RAF loop shared with GSAP; respects `prefers-reduced-motion`.
###
>Canvas API (vanilla): Custom bubble particle system and twinkling star particles — kept dependency-free to avoid bundle overhead from particle libraries.
###
>Fontsource (self-hosted): Cinzel Decorative, Pinyon Script, Cormorant Garamond Variable, and a custom Young Heart woff2 — no Google Fonts CDN in production.
###
>Vercel + @astrojs/vercel: Adapter-based deployment with edge caching; DNS routed through Cloudflare.
###
>Vitest + jsdom: Unit testing for all client-side animation logic, ensuring math correctness without a browser.

##### Results and Impact
- <b>Animation system delivered:</b> A multi-phase scroll choreography spanning entrance, pinned shows, horizontal gallery, and free-scroll sections — with a persistent scroll-companion mascot interpolating Bézier waypoints across the entire page.
- <b>Real gallery assets:</b> Eight show photos processed and delivered via the Astro image pipeline with responsive srcsets and duotone-gold hover effects.
- <b>Performance-conscious build:</b> Hero JS bundle at ~116KB raw (~35KB gzip estimated); critical asset gating on loader prevents CTA from appearing before portrait and mascot video are loaded.
- <b>Accessibility baseline:</b> Skip-link, `prefers-reduced-motion` respected globally (Lenis disabled, all canvas hidden, pinned sections unpinned, animations set to 0.001ms), and focus-visible gold outline throughout.
- <b>Architecture readiness:</b> Placeholder-ready sections (Bio copy, Media reel, WhatsApp number, real testimonials) with clearly documented pending items — the site structure is complete and awaiting final client content to go live.
````

## Spanish — restore to `src/content/proyectos/MagiaYBurbujas.md`

````markdown
---
title: Magia y Burbujas — Sitio de Landing para Mago de Calle Argentino
publishDate: 2026-05-06 00:00:00
img: /assets/magiayburbujas/1.png
img_alt: Captura del sitio Magia y Burbujas — fondo negro profundo con tipografía dorada y una sección hero con burbujas animadas.
description: |
  Una landing de scroll único, con animaciones cinematográficas, para Gonza Martini — mago y artista de burbujas argentino radicado en Barcelona.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/magiayburbujas/2.png,
  /assets/magiayburbujas/3.png,
  /assets/magiayburbujas/4.png,
  /assets/magiayburbujas/5.png
]
---

### Descripción del Proyecto
Magia y Burbujas es el sitio web de Gonza Martini, mago de calle y artista del show de burbujas radicado en Barcelona. La landing de scroll único funciona como portfolio y herramienta de conversión para contrataciones — con un tono cálido y cercano, como una conversación, no como un folleto. La estética está inspirada en los carteles de feria mágica: fondos en tinta oscura, tipografía dorada con efecto foil, acentos violetas y burbujas iridiscentes por toda la página.

##### Objetivos
- <b>Conversión a contratación:</b> Impulsar consultas por WhatsApp con copy en español rioplatense que invita a charlar y coordinar fechas.
- <b>Vitrina de shows:</b> Presentar los cuatro formatos de show de Gonza (magia de cerca, show central, corporativo y la experiencia BURBUJAS) con tratamiento visual full-bleed.
- <b>Primera impresión inmersiva:</b> Construir una secuencia de entrada cinematográfica — loader personalizado, fade del retrato, título animado y una mascota-burbuja que crece de la boca del retrato y acompaña al usuario a lo largo de toda la página.
- <b>Mobile-first:</b> Optimizado para 390px de ancho, ya que el sitio se comparte principalmente por WhatsApp.

##### Flujo de Trabajo
- <b>Fundación:</b> Scaffolding de Astro 6 con tokens de diseño custom en Tailwind v4 (`@theme` con paleta tinta/oro/violeta/crema), cuatro familias tipográficas self-hosted (Cinzel Decorative, Pinyon Script, Cormorant Garamond, Young Heart) y scroll suave con Lenis — todo establecido en la primera sesión.
- <b>Construcción del Hero:</b> Un hero tipo "cartel vivo" con retrato de dos capas (lit/dark con crossfade animado por el scroll), un sistema de partículas canvas (~80–150 burbujas en escritorio, 40–60 en mobile) con deriva sinusoidal y renderizado de borde iridiscente, y una banda marquee inferior que recorre los taglines del show.
- <b>Coreografía de scroll:</b> Orquestación GSAP ScrollTrigger de 706 líneas — sección Shows pinneada (4 slides × 100vh), mascota-burbuja que sigue una trayectoria Bézier por cada sección, una gallery strip horizontal pinneada, y una fase de scroll libre con curva de escala por keyframes desde Bio hasta Contacto.
- <b>Secciones de contenido:</b> Gallery con 8 fotos reales del cliente procesadas con Sharp a webp q82 y efecto duotone-oro en hover; Reviews con 4 tarjetas de testimonios y fade-in por IntersectionObserver; Contacto rediseñado en layout de 2 columnas con la mascota parqueada como acompañante visual.
- <b>Gating de performance:</b> El loader de tiempo fijo fue reemplazado por una barra de progreso híbrida — rampa sintética + monitoreo real de carga de assets críticos — de modo que el CTA solo aparece cuando el retrato y el video de la mascota están listos.
- <b>Tests:</b> 21 tests unitarios Vitest sobre física de burbujas, interpolación Catmull-Rom de la mascota, traslación del strip de galería y curva de escala del free-path — todos en verde.

##### Tecnologías Utilizadas
>Astro 6: Framework de sitios estáticos que permite arquitectura por componentes con cero JS en el cliente por defecto — ideal para una landing de marketing enfocada en performance.
###
>Tailwind CSS v4: Sistema de tokens de diseño vía `@theme` para la paleta completa tinta/oro/violeta/crema, sin necesidad de una capa extra de variables CSS.
###
>GSAP + ScrollTrigger: Potencia la sección Shows pinneada, las transiciones entre slides y la coreografía de la mascota-burbuja por scroll — elegido por su control preciso de scrub y comportamiento robusto de pin.
###
>Lenis: Scroll suave con easing cúbico de 1.6s, integrado en un único loop RAF compartido con GSAP; respeta `prefers-reduced-motion`.
###
>Canvas API (vanilla): Sistema de partículas de burbujas y estrellas titilantes hecho a medida — sin dependencias externas para mantener el bundle liviano.
###
>Fontsource (self-hosted): Cinzel Decorative, Pinyon Script, Cormorant Garamond Variable y Young Heart en woff2 custom — sin Google Fonts CDN en producción.
###
>Vercel + @astrojs/vercel: Despliegue con adaptador y edge caching; DNS enrutado por Cloudflare.
###
>Vitest + jsdom: Tests unitarios para toda la lógica de animación en el cliente, garantizando la corrección matemática sin necesidad de un browser.

##### Resultados e Impacto
- <b>Sistema de animación entregado:</b> Coreografía de scroll multifase que abarca la entrada, shows pinneados, galería horizontal y secciones de scroll libre — con una mascota persistente que interpola waypoints Bézier en toda la página.
- <b>Assets reales de galería:</b> Ocho fotos de shows procesadas y servidas por el pipeline de imágenes de Astro con srcsets responsivos y efecto duotone-oro en hover.
- <b>Build orientado a performance:</b> Bundle JS del Hero de ~116KB raw (~35KB gzip estimado); el gating de assets críticos en el loader evita que el CTA aparezca antes de que el retrato y el video de la mascota hayan cargado.
- <b>Baseline de accesibilidad:</b> Skip-link, `prefers-reduced-motion` respetado globalmente (Lenis desactivado, canvas ocultos, secciones desancladas, animaciones a 0.001ms) y outline gold en focus-visible en todo el sitio.
- <b>Arquitectura lista para contenido:</b> Secciones con placeholders bien documentados (copy de Bio, reel de Media, número de WhatsApp real, testimonios definitivos) — la estructura del sitio está completa y aguarda el contenido final del cliente para salir a producción.
````

---

# EcoLanding

## English — restore to `src/content/work/EcoLanding.md`

````markdown
---
title: EcoExport Landing Page
publishDate: 2026-05-11 00:00:00
img: /assets/ecolanding/1.png
img_alt: Screenshot of the EcoExport landing page showing the hero section with a green-toned design and scrap metal export messaging.
description: |
  A conversion-focused landing page for an Argentine scrap metal export company, built with Astro and Tailwind CSS v4.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/ecolanding/2.png,
  /assets/ecolanding/3.png,
  /assets/ecolanding/4.png,
  /assets/ecolanding/5.png
]
---

### Project Overview

EcoExport is a landing page built for an Argentine company that purchases and exports non-ferrous and ferrous scrap metal — copper, bronze, aluminum, and stainless steel — to industrial buyers across Asia, Europe, and the Americas. The page positions EcoExport as a full-service export partner: from on-site pickup and classification through customs documentation and final shipment. The site is live at [eco-landing-pearl.vercel.app](https://eco-landing-pearl.vercel.app).

##### Objectives
- <b>Present the service clearly:</b> Communicate a complex logistics chain (pickup → classification → export) in a way that non-technical sellers — industry owners, demolition contractors, and individuals — can immediately understand and trust.
- <b>Drive quote requests:</b> Funnel visitors toward a contact form with material type pre-selection, reducing friction for first-time inquiries.
- <b>Reinforce environmental credibility:</b> Surface sustainability messaging (circular economy, CO₂ avoided) alongside the commercial pitch, supporting both regulatory positioning and brand differentiation.

##### Project Workflow
- <b>Single-page architecture:</b> All content lives on one scrollable page (`index.astro`) composed of eight purpose-built components — Header, Hero, Marquee, Service, Materials, Process, About, Contact, and Footer — each corresponding to a distinct conversion step.
- <b>Component-driven build:</b> Each section is an isolated `.astro` component, keeping markup and logic co-located and making future content updates straightforward.
- <b>Custom design system:</b> A `leaf` color palette (11 steps, from `leaf-50` to `leaf-950`) and a `bark` accent were defined as CSS custom properties via Tailwind v4's `@theme` block, eliminating the need for a separate config file.
- <b>Reveal-on-scroll UX:</b> An `IntersectionObserver` in the layout script progressively reveals sections as the user scrolls, adding perceived polish without a JavaScript framework.
- <b>Deployed to Vercel:</b> Static output via `astro build`, deployed on Vercel's edge network with no server-side runtime.

##### Technologies Used
>Astro 6: Chosen for zero-JS-by-default static output — the page ships minimal JavaScript, keeping load times fast for the target audience on variable mobile connections.
###
>Tailwind CSS v4 (Vite plugin): The `@tailwindcss/vite` integration and the new `@theme` block replaced the traditional `tailwind.config.js`, enabling a fully custom color palette and font scale with no extra config overhead.
###
>Inter + Fraunces (Google Fonts): Inter handles body copy readability; Fraunces (an optical-size serif) provides display headings with a natural, grounded feel that matches the environmental brand direction.
###
>Vanilla JavaScript (IntersectionObserver + mobile nav): A lightweight scroll-reveal system and mobile hamburger nav were implemented without any framework dependency, keeping the bundle size minimal.
###
>Vercel: Static hosting with automatic preview deployments on every push, providing the client a live preview URL for feedback rounds.

##### Results and Impact
- <b>Full single-page coverage:</b> The landing covers the complete conversion funnel — value proposition, service detail, materials catalog, four-step process, company background, and contact form — in a single cohesive scroll.
- <b>No external runtime dependencies:</b> The final build ships zero frontend framework JavaScript; all interactivity is handled by ~30 lines of vanilla JS in the layout.
- <b>Accessible and mobile-ready:</b> Responsive grid layouts, a collapsible mobile nav, and `aria-hidden` decorative SVGs are built in from the start.
````

## Spanish — restore to `src/content/proyectos/EcoLanding.md`

````markdown
---
title: Landing Page EcoExport
publishDate: 2026-05-11 00:00:00
img: /assets/ecolanding/1.png
img_alt: Captura de pantalla de la landing page de EcoExport mostrando la sección hero con diseño en tonos verdes y mensajes sobre exportación de chatarra metálica.
description: |
  Una landing page orientada a la conversión para una empresa argentina de compra y exportación de chatarra metálica, construida con Astro y Tailwind CSS v4.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/ecolanding/2.png,
  /assets/ecolanding/3.png,
  /assets/ecolanding/4.png,
  /assets/ecolanding/5.png
]
---

### Descripción del Proyecto

EcoExport es una landing page desarrollada para una empresa argentina que compra y exporta chatarra metálica no ferrosa y ferrosa — cobre, bronce, aluminio y acero inoxidable — a compradores industriales en Asia, Europa y América. La página posiciona a EcoExport como un socio integral de exportación: desde el retiro en planta y la clasificación del material hasta la documentación aduanera y el embarque final. El sitio está disponible en [eco-landing-pearl.vercel.app](https://eco-landing-pearl.vercel.app).

##### Objetivos
- <b>Comunicar el servicio con claridad:</b> Transmitir una cadena logística compleja (retiro → clasificación → exportación) de forma que vendedores no técnicos — dueños de industrias, demoledores y particulares — puedan entenderla y confiar en ella de inmediato.
- <b>Generar consultas de cotización:</b> Dirigir a los visitantes hacia un formulario de contacto con selección previa del tipo de material, reduciendo la fricción para quienes consultan por primera vez.
- <b>Reforzar la credibilidad ambiental:</b> Integrar mensajes de sustentabilidad (economía circular, CO₂ evitado) junto al argumento comercial, apoyando el posicionamiento regulatorio y la diferenciación de marca.

##### Flujo de Trabajo
- <b>Arquitectura de página única:</b> Todo el contenido vive en una sola página scrolleable (`index.astro`) compuesta por ocho componentes — Header, Hero, Marquee, Service, Materials, Process, About, Contact y Footer — cada uno correspondiente a un paso distinto del embudo de conversión.
- <b>Build orientado a componentes:</b> Cada sección es un componente `.astro` aislado, con markup y lógica ubicados juntos, facilitando las actualizaciones de contenido a futuro.
- <b>Sistema de diseño propio:</b> Una paleta de color `leaf` (11 pasos, de `leaf-50` a `leaf-950`) y un acento `bark` se definieron como propiedades CSS personalizadas mediante el bloque `@theme` de Tailwind v4, eliminando la necesidad de un archivo de configuración separado.
- <b>Reveal al scroll:</b> Un `IntersectionObserver` en el layout revela progresivamente cada sección a medida que el usuario baja la página, aportando prolijidad visual sin necesidad de un framework JavaScript.
- <b>Deploy en Vercel:</b> Salida estática generada con `astro build`, desplegada en la red edge de Vercel sin runtime del lado del servidor.

##### Tecnologías Utilizadas
>Astro 6: Elegido por su salida estática con cero JS por defecto — la página entrega JavaScript mínimo, manteniendo tiempos de carga rápidos para la audiencia objetivo en conexiones móviles variables.
###
>Tailwind CSS v4 (plugin de Vite): La integración con `@tailwindcss/vite` y el nuevo bloque `@theme` reemplazaron el tradicional `tailwind.config.js`, permitiendo una paleta de colores y una escala tipográfica totalmente personalizadas sin configuración adicional.
###
>Inter + Fraunces (Google Fonts): Inter garantiza la legibilidad del cuerpo del texto; Fraunces (una serif de tamaño óptico) aporta los títulos de display con un carácter natural y arraigado que se alinea con la dirección de marca ambiental.
###
>JavaScript Vanilla (IntersectionObserver + nav mobile): El sistema de reveal al scroll y el menú hamburguesa para móvil se implementaron sin ninguna dependencia de framework, manteniendo el bundle al mínimo.
###
>Vercel: Hosting estático con previews automáticos en cada push, brindando al cliente una URL de vista previa en vivo para las rondas de feedback.

##### Resultados e Impacto
- <b>Embudo completo en una sola página:</b> La landing cubre todo el flujo de conversión — propuesta de valor, detalle del servicio, catálogo de materiales, proceso en cuatro pasos, presentación de la empresa y formulario de contacto — en un único scroll cohesivo.
- <b>Sin dependencias de runtime externas:</b> El build final no envía JavaScript de ningún framework frontend; toda la interactividad está resuelta en aproximadamente 30 líneas de JS vanilla en el layout.
- <b>Accesible y optimizada para mobile:</b> Grillas responsivas, nav colapsable para móvil y SVGs decorativos con `aria-hidden` están incorporados desde el inicio.
````

---

# Hubbard

## English — restore to `src/content/work/Hubbard.md`

````markdown
---
title: HCA Argentina — Professional Training Website
publishDate: 2026-05-14 00:00:00
img: /assets/hubbard/1.png
img_alt: Screenshot of the HCA Argentina demo website homepage.
description: |
  A full-featured demo site built to pitch a complete digital remake for HCA Argentina — a Hubbard-methodology business training institute.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/hubbard/2.png,
  /assets/hubbard/3.png,
  /assets/hubbard/4.png,
  /assets/hubbard/5.png
]
---

### Project Overview
HCA Argentina is the local branch of the global Hubbard College of Administration network, offering professional business training based on the Hubbard management methodology — a system applied by over 270,000 companies worldwide across 50+ campuses. The existing website was built on an aging WordPress theme that limited the institute's ability to present its catalog and convert visitors. This project is a complete end-to-end demo site built from scratch to showcase a modern alternative: eight public-facing routes, a free business diagnostic tool, three detailed workshop pages, a 27-course catalog with filterable browsing, and a testimonials section — all built in a single focused sprint and ready for Vercel deployment.

##### Objectives
- <b>Modern Remake Pitch:</b> Deliver a fully navigable demo that replaces the original WordPress site, giving the client a concrete vision of the redesigned experience before committing to production.
- <b>Lead Generation:</b> Convert visitors through a guided "Test Empresarial" (free business diagnostic) that recommends training programs based on user answers, with server-side form handling and email notification via Resend.
- <b>Catalog Accessibility:</b> Present the full course and workshop catalog with client-side area filtering, individual detail pages per course, and structured content collections managed through Markdown files.
- <b>Performance and SEO:</b> Serve a statically generated site with structured JSON-LD data, Open Graph tags, sitemap, security headers, and immutable asset caching — all configured for Vercel deployment out of the box.
##### Project Workflow
- <b>Discovery and Architecture:</b> Audited the original hcaargentina.com.ar site to map existing routes, content, and visual identity. Defined a component-driven architecture in Astro 6 with a server output mode and Vercel adapter to support both static pages and server API endpoints.
- <b>Content Scraping and Migration:</b> Extracted course descriptions, objectives, and program structures from the original WordPress site (which hides content in CSS/JS-controlled accordions) using custom Python scripts, then migrated them into typed Astro content collections with Zod-validated frontmatter.
- <b>UI Design and Implementation:</b> Built a full design system from scratch using Tailwind v4 — navy/gold/off-white palette, Geist Variable typography, dual-layer card shadows, and a complete set of reusable UI primitives (Button, Badge, Section, Heading, Eyebrow, Icon, Container).
- <b>Polish and Interactions:</b> Added a branded site loader (navy with radial gold gradient, progress bar, sessionStorage gating), scroll-triggered reveal animations via a single IntersectionObserver, and a WhatsApp floating action button. All motion respects `prefers-reduced-motion`.
- <b>Forms and API:</b> Implemented three server-side API endpoints (workshop lead, contact, business test) with Zod validation, honeypot + timing-based anti-spam, and `escapeHtml` sanitization in email templates.
##### Technologies Used
>Astro 6: Chosen for its hybrid output model — static pre-rendering for all content pages plus server endpoints for form handling, with zero client-side JavaScript overhead.
###
>Tailwind CSS v4: Used via the Vite plugin with `@theme` tokens for a single source of truth on palette, typography, and spacing — no config file required.
###
>TypeScript (strict): Applied throughout layouts, components, lib utilities, and Zod schemas to catch integration errors at build time.
###
>Zod: Used for runtime validation of all form submissions on both client (HTML5) and server, ensuring data integrity before email dispatch.
###
>Vercel (with @astrojs/vercel adapter): Deployment target with custom `vercel.json` for security headers and immutable cache on hashed assets. Sitemap and robots.txt generated at build time.

##### Results and Impact
- <b>Complete Demo Delivered:</b> Eight public routes (home, three workshops, course index, course detail pages, testimonials, contact, business test) plus three API endpoints, all building cleanly with no warnings.
- <b>Content Fidelity:</b> 27 courses and 3 workshops migrated from the original site with structured descriptions, objectives, program breakdowns, and pricing — ready for client review and final approval.
- <b>Production-Ready Foundation:</b> One environment variable (`RESEND_API_KEY`) away from live email delivery; the rest of the infrastructure — hosting, CDN caching, SEO metadata, and redirects from legacy URLs — is already configured.
````

## Spanish — restore to `src/content/proyectos/Hubbard.md`

````markdown
---
title: HCA Argentina — Sitio Web de Formación Profesional
publishDate: 2026-05-14 00:00:00
img: /assets/hubbard/1.png
img_alt: Captura de pantalla de la página de inicio del sitio demo de HCA Argentina.
description: |
  Un sitio demo completo construido para presentar la renovación digital de HCA Argentina, un instituto de formación empresarial basado en la metodología Hubbard.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/hubbard/2.png,
  /assets/hubbard/3.png,
  /assets/hubbard/4.png,
  /assets/hubbard/5.png
]
---

### Descripción del proyecto
HCA Argentina es la sede local de la red global Hubbard College of Administration, dedicada a la formación profesional en administración y dirección de empresas basada en la metodología Hubbard — un sistema aplicado por más de 270.000 empresas en más de 50 sedes en el mundo. El sitio web existente estaba construido sobre un tema de WordPress desactualizado que limitaba la presentación del catálogo y la conversión de visitantes. Este proyecto es un sitio demo completo construido desde cero para mostrar una alternativa moderna: ocho rutas públicas, una herramienta gratuita de diagnóstico empresarial, tres páginas de talleres detalladas, un catálogo de 27 cursos con filtrado, y una sección de testimonios — todo desarrollado en un sprint enfocado y listo para desplegar en Vercel.

##### Objetivos
- <b>Pitch de renovación digital:</b> Entregar un demo navegable de punta a punta que reemplace el sitio WordPress original, dándole al cliente una visión concreta de la experiencia rediseñada antes de comprometerse con producción.
- <b>Generación de leads:</b> Convertir visitantes mediante un "Test Empresarial" gratuito que recomienda programas de formación según las respuestas del usuario, con manejo de formularios en servidor y notificación por email a través de Resend.
- <b>Accesibilidad del catálogo:</b> Presentar el catálogo completo de cursos y talleres con filtrado por área en el cliente, páginas de detalle individuales por curso, y colecciones de contenido estructuradas y gestionadas mediante archivos Markdown.
- <b>Performance y SEO:</b> Servir un sitio generado estáticamente con datos JSON-LD estructurados, etiquetas Open Graph, sitemap, cabeceras de seguridad y caché inmutable de assets — todo configurado para despliegue en Vercel sin trabajo adicional.
##### Flujo de trabajo del proyecto
- <b>Relevamiento y arquitectura:</b> Auditoría del sitio original hcaargentina.com.ar para mapear rutas existentes, contenidos e identidad visual. Definición de una arquitectura orientada a componentes en Astro 6 con modo de salida servidor y adaptador de Vercel para soportar tanto páginas estáticas como endpoints API en el servidor.
- <b>Scraping y migración de contenido:</b> Extracción de descripciones de cursos, objetivos y estructuras de programa del sitio WordPress original (que oculta el contenido en acordeones controlados por CSS/JS) mediante scripts Python personalizados, y posterior migración a colecciones de contenido de Astro con frontmatter validado por Zod.
- <b>Diseño de interfaz e implementación:</b> Construcción de un sistema de diseño completo desde cero con Tailwind v4 — paleta navy/dorado/off-white, tipografía Geist Variable, sombras de card de doble capa, y un conjunto completo de primitivas de interfaz reutilizables (Button, Badge, Section, Heading, Eyebrow, Icon, Container).
- <b>Polish e interacciones:</b> Incorporación de un loader de marca (navy con gradiente radial dorado, barra de progreso, control con sessionStorage), animaciones de reveal al hacer scroll mediante un único IntersectionObserver, y un botón flotante de WhatsApp. Todo el movimiento respeta `prefers-reduced-motion`.
- <b>Formularios y API:</b> Implementación de tres endpoints API en el servidor (lead de talleres, contacto, test empresarial) con validación Zod, anti-spam mediante honeypot y control de tiempo, y sanitización con `escapeHtml` en los templates de email.
##### Tecnologías utilizadas
>Astro 6: Elegido por su modelo de salida híbrido — pre-renderizado estático para todas las páginas de contenido más endpoints de servidor para el manejo de formularios, con cero overhead de JavaScript en el cliente.
###
>Tailwind CSS v4: Utilizado vía el plugin de Vite con tokens `@theme` como única fuente de verdad para paleta, tipografía y espaciado — sin necesidad de archivo de configuración.
###
>TypeScript (strict): Aplicado en layouts, componentes, utilidades de librería y schemas de Zod para detectar errores de integración en tiempo de compilación.
###
>Zod: Utilizado para validación en tiempo de ejecución de todos los envíos de formulario tanto en cliente (HTML5) como en servidor, garantizando integridad de datos antes del envío de emails.
###
>Vercel (con adaptador @astrojs/vercel): Destino de despliegue con `vercel.json` personalizado para cabeceras de seguridad y caché inmutable de assets con hash. Sitemap y robots.txt generados en tiempo de build.

##### Resultados e impacto
- <b>Demo completo entregado:</b> Ocho rutas públicas (home, tres talleres, índice de cursos, páginas de detalle de cursos, testimonios, contacto, test empresarial) más tres endpoints API, todo compilando limpiamente sin warnings.
- <b>Fidelidad de contenido:</b> 27 cursos y 3 talleres migrados desde el sitio original con descripciones estructuradas, objetivos, desglose de programa y precios — listos para revisión y aprobación del cliente.
- <b>Base lista para producción:</b> A una variable de entorno (`RESEND_API_KEY`) de tener envío de emails en vivo; el resto de la infraestructura — hosting, caché CDN, metadata SEO y redirecciones desde URLs anteriores — ya está configurada.
````

---

# SADA

## English — restore to `src/content/work/SADA.md`

````markdown
---
title: SADA — Political Electoral Registry Web App
publishDate: 2026-03-26 00:00:00
img: /assets/sada/1.png
img_alt: Screenshot of the SADA electoral registry dashboard.
description: |
  A full-stack internal web application for managing the political-electoral registry of a party in San Antonio de Areco, Argentina — built on Next.js 14 with Google Sheets as the sole backend.
tags:
  - Dev
  - Frontend
  - Backend
screenshots: [
  /assets/sada/2.png,
  /assets/sada/3.png,
  /assets/sada/4.png,
  /assets/sada/5.png
]
---

### Project Overview
SADA is a purpose-built internal CRUD web application for managing the political-electoral registry (padrón) of a political party in San Antonio de Areco, Buenos Aires province. It replaces manual spreadsheet workflows with a secure, multi-user dashboard that reads and writes directly to a Google Sheets backend — no traditional database required. The system handles voter records across 34 data fields, supports political classification (MDF vs. OTRO), tracks party membership, and provides analytics, export tools, and a bulk address review workflow.

##### Objectives
- <b>Centralized Registry Management:</b> Provide a single, access-controlled source of truth for voter and affiliate data replacing fragmented spreadsheet operations.
- <b>Political Classification:</b> Surface and manage the key AFINIDAD field (MDF | OTRO) across all views to support internal campaign decisions.
- <b>Data Quality:</b> Implement a structured address-review workflow (VALIDA / REVISION / ERROR) to clean and verify existing registry addresses.
- <b>Export & Reporting:</b> Enable one-click exports of the full registry, birthday lists, address reports, individual member profiles, and analytics — in both XLSX and PDF formats.
- <b>Secure Multi-user Access:</b> Authenticate users via Google SSO with a whitelist maintained in the same Google Sheet, tracking which internal contact contributed each record.

##### Project Workflow
- <b>Design System First:</b> Visual identity was defined upfront using an editorial design language inspired by Argentine Peronist political graphics — bold typography (Space Grotesk + Inter), high-contrast primary blue (#0253cd), and a strict no-border rule using color layering and whitespace instead.
- <b>Schema Design:</b> A 34-column Google Sheets schema (BASE tab) was designed and versioned (v2 → v2.1) with column-map abstraction in code to prevent index drift across migrations.
- <b>Next.js App Router Architecture:</b> All protected routes live under a single authenticated layout. Server Components handle initial data fetching; URL Search Params persist filter state across navigation.
- <b>API Layer:</b> REST-style route handlers manage the full CRUD lifecycle — list with filtering and pagination, create, full-record update, logical soft-delete (ESTADO → INACTIVO), and a dedicated address-correction endpoint that writes only specific columns without touching read-only fields.
- <b>Analytics Panel:</b> A dedicated /analytics view aggregates totals and breakdowns by circuit, age range, gender, and affiliation year, reusing the same filtered dataset and powering PDF report generation.
- <b>Mobile Responsiveness:</b> Iterative fixes addressed overflow, bottom navigation clipping, and layout breaks across the entire protected area.
- <b>Audit Logging:</b> Edits are logged to a LOGS sheet with timestamp and user email, providing a traceable record of who changed what.

##### Technologies Used
>Next.js 14 (App Router): Framework of choice for its React Server Components model, built-in API routes, and full-stack capability within a single deployment.
###
>TypeScript 5 (strict mode): Enforced throughout with no `any`, full strict flags, and domain types derived from the schema.
###
>Google Sheets API (googleapis): Sole backend — reads and writes to a shared spreadsheet using a Service Account, with a column-map abstraction layer to avoid hardcoded indices.
###
>NextAuth v5 (beta): Handles Google OAuth SSO with a custom sign-in callback that validates users against the Usuarios sheet whitelist.
###
>Zod + React Hook Form: Schema-validated forms on both client and server, with live duplicate-DNI detection and dependent dropdowns (barrio dependent on localidad).
###
>Tailwind CSS + shadcn/ui + Radix UI: Component library and utility-first styling implementing the custom "Digital Manifesto" design system.
###
>Recharts: Powers the analytics dashboard charts (circuit breakdown, age ranges, gender donut, affiliation by year).
###
>ExcelJS + @react-pdf/renderer: Generates XLSX and PDF exports for registry, birthdays, addresses, individual member profiles, and analytics reports.

##### Results and Impact
- <b>Functional Internal Tool:</b> The application was developed from zero to a feature-complete internal tool in a single day of intense iteration, reaching 39 commits covering CRUD, auth, analytics, exports, address review, and mobile fixes.
- <b>Data Integrity:</b> The schema versioning approach and column-map abstraction eliminated index-drift bugs that would have silently corrupted records in a direct-index implementation.
- <b>Audit Trail:</b> Every edit is attributable to a specific internal user, giving the party organization visibility into data provenance.
- <b>Export Flexibility:</b> Staff can export any filtered view of the registry to XLSX or PDF without technical assistance, reducing operational bottlenecks.
````

## Spanish — restore to `src/content/proyectos/SADA.md`

````markdown
---
title: SADA — Aplicación Web de Gestión del Padrón Electoral
publishDate: 2026-03-26 00:00:00
img: /assets/sada/1.png
img_alt: Captura del dashboard principal del sistema electoral SADA.
description: |
  Una aplicación web interna full-stack para gestionar el padrón político-electoral de un partido en San Antonio de Areco — construida con Next.js 14 y Google Sheets como único backend.
tags:
  - Dev
  - Frontend
  - Backend
screenshots: [
  /assets/sada/2.png,
  /assets/sada/3.png,
  /assets/sada/4.png,
  /assets/sada/5.png
]
---

### Descripción del Proyecto
SADA es una aplicación web CRUD interna diseñada a medida para gestionar el padrón político-electoral de un partido de San Antonio de Areco, provincia de Buenos Aires. Reemplaza flujos de trabajo manuales en planillas con un dashboard seguro y multiusuario que lee y escribe directamente sobre un backend de Google Sheets, sin base de datos tradicional. El sistema administra registros de electores con 34 campos de datos, admite clasificación política (MDF vs. OTRO), registra afiliación partidaria, y ofrece herramientas de analítica, exportación y revisión masiva de domicilios.

##### Objetivos
- <b>Gestión centralizada del padrón:</b> Proveer una única fuente de verdad con control de acceso, reemplazando operaciones fragmentadas en planillas.
- <b>Clasificación política:</b> Exponer y gestionar el campo clave AFINIDAD (MDF | OTRO) en todas las vistas para apoyar decisiones internas de campaña.
- <b>Calidad del dato:</b> Implementar un flujo estructurado de revisión de domicilios (VALIDA / REVISION / ERROR) para limpiar y verificar las direcciones del padrón existente.
- <b>Exportación e informes:</b> Habilitar exportaciones con un clic del padrón completo, listas de cumpleaños, informes de domicilios, fichas individuales y analíticas — tanto en XLSX como en PDF.
- <b>Acceso seguro multiusuario:</b> Autenticar usuarios vía Google SSO con una whitelist mantenida en la misma planilla, registrando qué contacto interno aportó cada registro.

##### Flujo de Trabajo
- <b>Identidad visual primero:</b> Se definió el sistema de diseño desde el inicio con un lenguaje editorial inspirado en la gráfica política peronista argentina — tipografía de alto impacto (Space Grotesk + Inter), azul primario de alto contraste (#0253cd) y una regla estricta de "sin bordes" basada en capas de color y espacio negativo.
- <b>Diseño del esquema:</b> Se diseñó y versionó un esquema de 34 columnas en Google Sheets (pestaña BASE, v2 → v2.1) con una capa de abstracción del mapa de columnas en el código para evitar drift de índices en migraciones.
- <b>Arquitectura App Router de Next.js:</b> Todas las rutas protegidas viven bajo un único layout autenticado. Los Server Components manejan el fetching inicial; los URL Search Params persisten el estado de los filtros entre navegaciones.
- <b>Capa de API:</b> Route handlers al estilo REST gestionan el ciclo CRUD completo: listado con filtros y paginación, alta, actualización completa, baja lógica (ESTADO → INACTIVO) y un endpoint específico de corrección de domicilio que escribe solo columnas puntuales sin tocar campos de solo lectura.
- <b>Panel de analíticas:</b> Una vista dedicada /analytics agrega totales y desgloses por circuito, rango etario, género y año de afiliación, reutilizando el mismo dataset filtrado y alimentando la generación de reportes PDF.
- <b>Responsive mobile:</b> Correcciones iterativas resolvieron overflow, recorte de la navegación inferior y quiebres de layout en toda el área protegida.
- <b>Log de auditoría:</b> Las ediciones se registran en una hoja LOGS con timestamp y email del usuario, proveyendo trazabilidad de quién modificó qué.

##### Tecnologías Utilizadas
>Next.js 14 (App Router): Framework elegido por su modelo de React Server Components, API routes integradas y capacidad full-stack en un único deploy.
###
>TypeScript 5 (modo estricto): Aplicado en todo el proyecto sin `any`, con flags strict completas y tipos de dominio derivados del esquema.
###
>Google Sheets API (googleapis): Único backend — lee y escribe en una planilla compartida mediante una Service Account, con una capa de abstracción del mapa de columnas para evitar índices hardcodeados.
###
>NextAuth v5 (beta): Maneja Google OAuth SSO con un callback de sign-in personalizado que valida usuarios contra la whitelist de la hoja Usuarios.
###
>Zod + React Hook Form: Formularios con validación de esquema en cliente y servidor, detección en vivo de DNI duplicado y dropdowns dependientes (barrio condicionado por localidad).
###
>Tailwind CSS + shadcn/ui + Radix UI: Biblioteca de componentes y estilos utilitarios que implementan el sistema de diseño "Manifiesto Digital" personalizado.
###
>Recharts: Alimenta los gráficos del dashboard de analíticas (desglose por circuito, rangos etarios, donut de género, afiliaciones por año).
###
>ExcelJS + @react-pdf/renderer: Genera exportaciones XLSX y PDF del padrón, cumpleaños, domicilios, fichas individuales de afiliados e informes de analíticas.

##### Resultados e Impacto
- <b>Herramienta interna funcional:</b> La aplicación fue desarrollada de cero hasta una herramienta interna con todas las funcionalidades en un único día de iteración intensa, alcanzando 39 commits que cubren CRUD, autenticación, analíticas, exportaciones, revisión de domicilios y correcciones mobile.
- <b>Integridad del dato:</b> El versionado del esquema y la abstracción del mapa de columnas eliminaron bugs de drift de índices que habrían corrompido silenciosamente registros en una implementación con índices directos.
- <b>Trazabilidad:</b> Cada edición es atribuible a un usuario interno específico, dando a la organización partidaria visibilidad sobre la procedencia de los datos.
- <b>Flexibilidad de exportación:</b> El personal puede exportar cualquier vista filtrada del padrón a XLSX o PDF sin asistencia técnica, reduciendo cuellos de botella operativos.
````

---

# Nub3

## English — restore to `src/content/work/Nub3.md`

````markdown
---
title: Nub3 Landing Page Development
publishDate: 2026-04-14 00:00:00
img: /assets/nub3/1.png
img_alt: Screenshot of the Nub3 landing page hero section with animated node graph.
description: |
  A conversion-focused landing page for Nub3, an Argentine software engineering studio specializing in AI, data analytics, automation, and integrations.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/nub3/2.png,
  /assets/nub3/3.png,
  /assets/nub3/4.png,
  /assets/nub3/5.png
]
---

### Project Overview
Nub3 (nub3.com.ar) is a Buenos Aires-based software engineering studio that builds AI, data, automation, and integration solutions for Argentine and Latin American companies. The landing page needed to communicate technical depth and credibility while remaining approachable — a single-page site covering services, a company manifesto, a four-step engagement process, and a direct contact section.

##### Objectives
- <b>Brand positioning:</b> Establish Nub3 as a focused engineering studio, not a generic technology vendor, through intentional editorial copy and a distinctive visual language.
- <b>Service clarity:</b> Present four core capabilities (AI, Data Analytics, Process Automation, Integrations & APIs) in a scannable, structured format that helps prospects self-qualify.
- <b>Conversion path:</b> Drive visitors toward a direct email or calendar booking with a minimal, friction-free CTA section.
- <b>Technical credibility:</b> Reinforce competence with a live-updating system status strip and an animated node-graph visualization in the hero.
##### Project Workflow
- <b>Architecture & stack selection:</b> Chose Astro 5 for its zero-JavaScript-by-default output and first-class static performance, with TypeScript for the interactive effects layer.
- <b>Design system:</b> Built a custom CSS design system using CSS custom properties — dark warm-neutral palette (--ink, --bone), acid-green accent (--acid: #d4ff3a), and a variable type scale mixing Fraunces serif display, Inter Tight body, and JetBrains Mono for code/labels.
- <b>Interactive effects:</b> Implemented six canvas/DOM effects in a single TypeScript module: custom magnetic cursor, IntersectionObserver scroll reveals, cycling hero word-swap, animated counter strip, WebGL-free node-graph canvas animation with hub nodes and traveling data packets, and a scroll-driven section index indicator.
- <b>Responsive refinement:</b> Iterated mobile layout across multiple commits, tightening typography spacing, ticker loop continuity, and canvas boundary constraints.
- <b>Performance considerations:</b> All animations respect `prefers-reduced-motion` and pause via `IntersectionObserver` and `visibilitychange` when off-screen, preventing unnecessary computation.
##### Technologies Used
>Astro 5: Chosen for zero-JS static output by default, giving fast initial load with opt-in interactivity only where needed.
###
>TypeScript: Used for the effects module to ensure type-safe canvas and DOM manipulation across six distinct interactive behaviors.
###
>CSS Custom Properties: Powered the entire design system — palette, typography scale, and layout tokens — without a CSS framework.
###
>Canvas 2D API: Drives the hero node-graph animation with hub nodes, drifting data packets, dot-grid background, and mouse-reactive physics.
###
>Google Fonts (Fraunces, JetBrains Mono, Inter Tight): Selected to balance editorial serif display headlines with clean body copy and monospaced UI labels, reinforcing the studio's technical-yet-refined identity.

##### Results and Impact
- <b>Complete, deployed product:</b> The site shipped to production on Vercel at nub3-landing.vercel.app with a custom domain configured to nub3.com.ar within a single day of development.
- <b>Polished interactive experience:</b> Six distinct animated effects create a premium, technically expressive feel that aligns with the studio's engineering positioning without sacrificing accessibility.
- <b>Lean codebase:</b> The entire site lives in a single page component, one layout, one CSS file, and one TypeScript effects module — deliberately minimal for long-term maintainability.
````

## Spanish — restore to `src/content/proyectos/Nub3.md`

````markdown
---
title: Desarrollo de Landing Page para Nub3
publishDate: 2026-04-14 00:00:00
img: /assets/nub3/1.png
img_alt: Captura del hero de la landing page de Nub3 con el grafo de nodos animado.
description: |
  Una landing page orientada a la conversión para Nub3, un estudio de ingeniería de software argentino especializado en IA, análisis de datos, automatización e integraciones.
tags:
  - Design
  - Dev
  - Frontend
screenshots: [
  /assets/nub3/2.png,
  /assets/nub3/3.png,
  /assets/nub3/4.png,
  /assets/nub3/5.png
]
---

### Descripción del proyecto
Nub3 (nub3.com.ar) es un estudio de ingeniería de software con sede en Buenos Aires que construye soluciones de IA, datos, automatización e integraciones para empresas de Argentina y LATAM. La landing page debía comunicar profundidad técnica y credibilidad sin perder accesibilidad — un sitio de página única que cubre servicios, un manifiesto de la empresa, un proceso de cuatro pasos y una sección de contacto directo.

##### Objetivos
- <b>Posicionamiento de marca:</b> Establecer a Nub3 como un estudio de ingeniería enfocado, no como un proveedor tecnológico genérico, mediante una redacción editorial cuidada y un lenguaje visual distintivo.
- <b>Claridad de servicios:</b> Presentar las cuatro capacidades principales (IA, Análisis de Datos, Automatización de Procesos, Integraciones & APIs) en un formato escaneable y estructurado que ayude a los potenciales clientes a autoclasificarse.
- <b>Embudo de conversión:</b> Llevar a los visitantes hacia un mail directo o una reserva de llamada con una sección de CTA mínima y sin fricción.
- <b>Credibilidad técnica:</b> Reforzar la competencia del estudio con una franja de estado del sistema actualizada en tiempo real y una visualización animada de grafo de nodos en el hero.
##### Flujo de trabajo del proyecto
- <b>Arquitectura y selección de stack:</b> Se eligió Astro 5 por su salida zero-JavaScript por defecto y su rendimiento estático de primer nivel, con TypeScript para la capa de efectos interactivos.
- <b>Sistema de diseño:</b> Se construyó un sistema de diseño CSS personalizado usando propiedades CSS — paleta cálida oscura (--ink, --bone), acento verde ácido (--acid: #d4ff3a) y una escala tipográfica variable que combina Fraunces serif para títulos, Inter Tight para el cuerpo y JetBrains Mono para código y etiquetas.
- <b>Efectos interactivos:</b> Se implementaron seis efectos de canvas/DOM en un único módulo TypeScript: cursor magnético personalizado, scroll reveals con IntersectionObserver, word-swap cíclico en el hero, franja de contadores animados, animación de grafo de nodos en canvas (sin WebGL) con nodos hub y paquetes de datos en tránsito, e indicador de sección con seguimiento de scroll.
- <b>Refinamiento responsive:</b> Se iteró el layout mobile en varios commits, ajustando el espaciado tipográfico, la continuidad del ticker y las restricciones de bordes del canvas.
- <b>Consideraciones de rendimiento:</b> Todas las animaciones respetan `prefers-reduced-motion` y se pausan mediante `IntersectionObserver` y `visibilitychange` cuando están fuera de pantalla, evitando cómputo innecesario.
##### Tecnologías utilizadas
>Astro 5: Elegido por su salida estática zero-JS por defecto, que garantiza una carga inicial rápida con interactividad opt-in solo donde es necesaria.
###
>TypeScript: Utilizado en el módulo de efectos para garantizar la manipulación type-safe del canvas y el DOM en seis comportamientos interactivos distintos.
###
>CSS Custom Properties: Sostiene todo el sistema de diseño — paleta, escala tipográfica y tokens de layout — sin necesidad de un framework CSS.
###
>Canvas 2D API: Maneja la animación del grafo de nodos en el hero con nodos hub, paquetes de datos flotantes, fondo de puntos en grilla y física reactiva al mouse.
###
>Google Fonts (Fraunces, JetBrains Mono, Inter Tight): Seleccionadas para equilibrar títulos editoriales en serif con cuerpo de texto limpio y etiquetas de UI en monoespaciado, reforzando la identidad técnica y refinada del estudio.

##### Resultados e impacto
- <b>Producto completo y deployado:</b> El sitio se publicó en producción en Vercel (nub3-landing.vercel.app) con dominio personalizado apuntando a nub3.com.ar en el mismo día de desarrollo.
- <b>Experiencia interactiva pulida:</b> Seis efectos animados distintos generan una sensación premium y técnicamente expresiva que alinea con el posicionamiento de ingeniería del estudio sin sacrificar accesibilidad.
- <b>Codebase minimalista:</b> El sitio completo vive en un único componente de página, un layout, un archivo CSS y un módulo TypeScript de efectos — deliberadamente simple para facilitar el mantenimiento a largo plazo.
````

---

# BlukiStudio

## English — restore to `src/content/work/BlukiStudio.md`

````markdown
---
title: Bluki Studio — 3D Creative Agency Portfolio
publishDate: 2026-03-20 00:00:00
img: /assets/blukistudio/1.png
img_alt: Screenshot of Bluki Studio 3D portfolio — abstract core model rotating on a dark background.
description: |
  A scroll-driven 3D portfolio for a creative digital agency, built with React Three Fiber and Lenis smooth scroll.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/blukistudio/2.png,
  /assets/blukistudio/3.png,
  /assets/blukistudio/4.png,
  /assets/blukistudio/5.png
]
---

### Project Overview
Bluki Studio is a creative digital agency portfolio built as a technical proof-of-concept for immersive 3D web experiences. The site centers on a single abstract 3D model — a petal-and-core sculpture — that reacts to scroll position in real time, rotating through three full turns and shifting across the screen as the user scrolls. The project explores a dual-layer rendering architecture where a fixed WebGL canvas sits behind a standard scrollable DOM layer, with both layers communicating through a shared mutable scroll state.

##### Objectives
- <b>3D Scroll Experience:</b> Demonstrate a scroll-driven 3D animation where object position, rotation, tilt, and scale all interpolate smoothly across three keyframe sections.
- <b>Performance-First Rendering:</b> Keep the WebGL canvas at a stable 60 FPS using ACES filmic tone mapping, a capped pixel ratio of 2x, and ACESFilmic tone mapping configured directly on the renderer.
- <b>Clean Architecture:</b> Separate canvas and DOM concerns into distinct layers so future content sections can be added without touching 3D code.
- <b>SSR Safety:</b> Load all Three.js components via `next/dynamic` with `ssr: false` to prevent hydration errors in the Next.js App Router.

##### Project Workflow
- <b>Scaffold and Config:</b> Started from `create-next-app` with TypeScript and Tailwind CSS, then added `raw-loader` webpack rules for GLSL shader imports and configured `next.config.ts` accordingly.
- <b>Lenis + GSAP Sync:</b> Integrated Lenis smooth scroll with GSAP's ticker to ensure `ScrollTrigger.update()` fires on every animation frame, preventing scroll-driven animations from drifting.
- <b>Shared Scroll State:</b> Created a lightweight mutable object (`scrollState`) updated by both the Lenis callback and a native scroll fallback, readable inside `useFrame` without causing React re-renders.
- <b>3D Scene Assembly:</b> Loaded a custom Draco-compressed GLB model (`abstract_core.glb`), auto-scaled it to a normalized bounding box, and remapped its materials by name — dark matte blue-grey petals and a glowing emissive core.
- <b>Camera Rig:</b> Added a `CameraRig` component that pans the camera on the X axis opposite to the model's lateral movement, doubling the perceived depth shift per section.
- <b>Lighting:</b> Used a multi-directional soft light setup (hemisphere + three directional lights) to avoid specular hot spots on the metallic materials.
- <b>Error Boundary:</b> Wrapped the entire canvas in a React `CanvasErrorBoundary` so WebGL failures degrade silently rather than crashing the page.

##### Technologies Used
>Next.js 16 (App Router): Framework chosen for its server/client component model and `next/dynamic` for safe Three.js SSR exclusion.
###
>React Three Fiber v9: React binding for Three.js; enables scene composition with hooks and integrates naturally with the React lifecycle.
###
>@react-three/drei: Provides `useGLTF` for model loading and `Preload` for asset prefetching.
###
>Three.js r183: Core 3D engine; used directly for math utilities, color construction, and renderer configuration.
###
>GSAP + ScrollTrigger: Animation library synchronized with Lenis via the GSAP ticker for frame-accurate scroll animations.
###
>Lenis: Smooth scroll library with a custom easing curve (exponential decay) that drives the shared scroll progress value.
###
>Tailwind CSS v4: Utility-first styles for the minimal DOM overlay (wordmark, tagline, scroll hint).

##### Results and Impact
- <b>Technical Foundation:</b> Establishes a proven architecture pattern — fixed canvas + scrollable DOM + shared mutable state — that can be extended with additional sections, shaders, or post-processing effects.
- <b>Smooth Animation:</b> Scroll progress is independently lerped in both the model and the camera rig at different lag rates, producing a parallax-like depth effect without any additional geometry.
- <b>Cross-Browser Stability:</b> ACES filmic tone mapping and Intel/ANGLE-specific renderer flags resolve white blowout and color flickering observed on integrated GPU hardware.
````

## Spanish — restore to `src/content/proyectos/BlukiStudio.md`

````markdown
---
title: Bluki Studio — Portfolio 3D para Agencia Creativa
publishDate: 2026-03-20 00:00:00
img: /assets/blukistudio/1.png
img_alt: Captura de pantalla del portfolio 3D de Bluki Studio — modelo abstracto rotando sobre fondo oscuro.
description: |
  Un portfolio 3D impulsado por scroll para una agencia creativa digital, construido con React Three Fiber y Lenis smooth scroll.
tags:
  - Dev
  - Design
  - Frontend
screenshots: [
  /assets/blukistudio/2.png,
  /assets/blukistudio/3.png,
  /assets/blukistudio/4.png,
  /assets/blukistudio/5.png
]
---

### Descripción del Proyecto
Bluki Studio es un portfolio para agencia creativa digital construido como prueba de concepto técnica para experiencias web 3D inmersivas. El sitio está centrado en un único modelo 3D abstracto — una escultura de pétalos y núcleo — que reacciona a la posición del scroll en tiempo real: rota tres vueltas completas y se desplaza lateralmente por la pantalla mientras el usuario hace scroll. El proyecto explora una arquitectura de doble capa donde un canvas WebGL fijo se ubica detrás de una capa DOM estándar desplazable, comunicándose a través de un estado de scroll compartido.

##### Objetivos
- <b>Experiencia 3D por Scroll:</b> Demostrar una animación 3D impulsada por scroll donde la posición, rotación, inclinación y escala del objeto se interpolan suavemente a través de tres secciones con keyframes definidos.
- <b>Renderizado Orientado al Rendimiento:</b> Mantener el canvas WebGL a 60 FPS estables utilizando tone mapping ACES filmic, una proporción de píxeles limitada a 2x y configuración directa del renderer.
- <b>Arquitectura Limpia:</b> Separar las responsabilidades del canvas y del DOM en capas independientes para que futuras secciones de contenido puedan agregarse sin tocar el código 3D.
- <b>Seguridad en SSR:</b> Cargar todos los componentes de Three.js mediante `next/dynamic` con `ssr: false` para prevenir errores de hidratación en el App Router de Next.js.

##### Flujo de Trabajo
- <b>Scaffold y Configuración:</b> Se partió de `create-next-app` con TypeScript y Tailwind CSS, luego se agregaron reglas webpack con `raw-loader` para importar shaders GLSL y se configuró `next.config.ts` en consecuencia.
- <b>Sincronización Lenis + GSAP:</b> Se integró Lenis smooth scroll con el ticker de GSAP para asegurar que `ScrollTrigger.update()` se ejecute en cada frame de animación, evitando que las animaciones basadas en scroll pierdan sincronía.
- <b>Estado de Scroll Compartido:</b> Se creó un objeto mutable liviano (`scrollState`) actualizado tanto por el callback de Lenis como por un listener nativo de scroll como fallback, legible dentro de `useFrame` sin generar re-renders en React.
- <b>Armado de la Escena 3D:</b> Se cargó un modelo GLB personalizado comprimido con Draco (`abstract_core.glb`), se autoescaló a un bounding box normalizado y se remapearon sus materiales por nombre — pétalos mate azul-gris oscuro y un núcleo emisivo brillante.
- <b>Camera Rig:</b> Se agregó un componente `CameraRig` que desplaza la cámara en el eje X en sentido opuesto al movimiento lateral del modelo, duplicando el efecto de profundidad percibido por sección.
- <b>Iluminación:</b> Se usó un esquema de iluminación suave multidireccional (hemisferio + tres luces direccionales) para evitar puntos especulares en los materiales metálicos.
- <b>Error Boundary:</b> Se envolvió el canvas completo en un `CanvasErrorBoundary` de React para que los fallos de WebGL degraden silenciosamente en lugar de romper la página.

##### Tecnologías Utilizadas
>Next.js 16 (App Router): Framework elegido por su modelo de componentes servidor/cliente y `next/dynamic` para excluir Three.js del SSR de forma segura.
###
>React Three Fiber v9: Binding de React para Three.js; permite componer la escena con hooks e integra naturalmente con el ciclo de vida de React.
###
>@react-three/drei: Provee `useGLTF` para carga de modelos y `Preload` para prefetch de assets.
###
>Three.js r183: Motor 3D principal; utilizado directamente para utilidades matemáticas, construcción de colores y configuración del renderer.
###
>GSAP + ScrollTrigger: Biblioteca de animación sincronizada con Lenis a través del ticker de GSAP para animaciones de scroll con precisión de frame.
###
>Lenis: Biblioteca de smooth scroll con curva de easing personalizada (decaimiento exponencial) que alimenta el valor de progreso de scroll compartido.
###
>Tailwind CSS v4: Estilos utilitarios para el overlay DOM mínimo (wordmark, tagline, indicador de scroll).

##### Resultados e Impacto
- <b>Base Técnica Sólida:</b> Establece un patrón de arquitectura comprobado — canvas fijo + DOM desplazable + estado mutable compartido — que puede extenderse con secciones adicionales, shaders o efectos de post-procesamiento.
- <b>Animación Fluida:</b> El progreso del scroll se interpola de forma independiente en el modelo y en el camera rig con diferentes tasas de lag, generando un efecto de paralaje sin geometría adicional.
- <b>Estabilidad Cross-Browser:</b> El tone mapping ACES filmic y los flags específicos para Intel/ANGLE resuelven el blowout blanco y el flickering de colores observados en hardware de GPU integrada.
````

---

# Logistica

## English — restore to `src/content/work/Logistica.md`

````markdown
---
title: International Logistics Management System
publishDate: 2026-02-24 00:00:00
img: /assets/logistica/1.png
img_alt: Screenshot of the international logistics management system dashboard.
description: |
  A full-stack web application for managing international shipping containers across three warehouses in Hong Kong, China, and the United States.
tags:
  - Dev
  - Frontend
  - Backend
screenshots: [
  /assets/logistica/2.png,
  /assets/logistica/3.png,
  /assets/logistica/4.png,
  /assets/logistica/5.png
]
---

### Project Overview
This is a full-stack internal tool built to manage international logistics operations across three origin warehouses: Hong Kong, China, and the United States. The system tracks shipping containers through their full lifecycle — from depot storage through customs clearance to finalization — and provides operational tools for cost estimation, volumetric planning, and packing list management. It was built for real-world import operations and deployed on Vercel with Supabase as the backend.

##### Objectives
- <b>Container Lifecycle Tracking:</b> Enable full CRUD management of shipping containers with status progression through four states: depot, transit, customs, and finalized.
- <b>Import Cost Simulation:</b> Provide an accurate, configurable cost calculator covering CIF components, customs duties, taxes, and operational expenses, with multi-exchange-rate support via a live Argentine dollar rates API.
- <b>Volumetric Planning:</b> Allow operators to calculate how many boxes fit in a 40' HC or 40' Standard container by volume and weight capacity before loading.
- <b>Packing List Import:</b> Support Excel file upload with flexible column mapping to import item lists directly into a container's packing list.
- <b>Client Management:</b> Maintain a client directory linked to containers and shipments.
- <b>Data Export:</b> Export container listings and cost reports to Excel for reporting purposes.
##### Project Workflow
- <b>Architecture Planning:</b> Defined the feature roadmap using a JIT Context Assembly system — a directory-based context layer designed to guide AI-assisted development with structured implementation plans per feature.
- <b>Auth & Foundations (F1):</b> Implemented Supabase authentication with SSR cookie handling via `@supabase/ssr` and Next.js middleware redirects to protect all routes.
- <b>Container CRUD (F2.1):</b> Built full create/read/update/delete flows for containers, including origin warehouse selection (HK, China, USA), container type, ETA, and status tracking.
- <b>Packing List Import (F2.2):</b> Developed an Excel parsing pipeline using `xlsx` and `exceljs` with an interactive column mapper for flexible CSV/XLSX ingestion.
- <b>Volumetric Calculator (F3.1):</b> Built a pure calculation engine that computes boxes-per-container by dimension and weight, with utilization percentage output.
- <b>Cost Calculator (F3.2):</b> Implemented a multi-stage cost engine (FOB → CIF → duties → taxes → operational expenses → total landed cost) with configurable cost matrix templates and live exchange rate selection.
- <b>Excel Exports (F7):</b> Added export functionality for containers and simulation results using `exceljs`.
- <b>Mobile Responsiveness (F9):</b> Implemented a responsive sidebar with hamburger menu and mobile-first layout adjustments.
##### Technologies Used
>Next.js 16 (App Router): Server components and server actions used throughout for data fetching and mutations without a separate API layer.
###
>Supabase (PostgreSQL): Provides the relational database, authentication, and real-time-ready infrastructure for containers, clients, packing lists, and cost templates.
###
>Tailwind CSS v4: Used for utility-first styling with a clean, admin-panel aesthetic.
###
>ExcelJS / XLSX: Handles both Excel import (packing lists) and export (container reports, cost simulations).
###
>dolarapi.com: Proxied through a Next.js API route to fetch live Argentine dollar exchange rates for cost calculations.
###
>Zod: Schema validation for form inputs and server action payloads.
###
>TanStack Table: Powers the interactive, sortable packing list table with column visibility controls.
###
>Vercel: Hosting platform with edge middleware for auth-based route protection.

##### Results and Impact
- <b>Operational Coverage:</b> The system covers the full container management workflow end-to-end, from creation to finalization, across three international origin points.
- <b>Cost Accuracy:</b> The configurable cost matrix allows operators to model different import scenarios with live exchange rate inputs, replacing manual spreadsheet calculations.
- <b>Time Savings on Packing Lists:</b> The Excel import flow with dynamic column mapping eliminates manual data entry for item-level logistics data.
- <b>Mobile Access:</b> The responsive layout allows logistics personnel to check container status and transit timelines from mobile devices.
````

## Spanish — restore to `src/content/proyectos/Logistica.md`

````markdown
---
title: Sistema de Gestión de Logística Internacional
publishDate: 2026-02-24 00:00:00
img: /assets/logistica/1.png
img_alt: Captura de pantalla del panel de control del sistema de gestión logística internacional.
description: |
  Aplicación web full-stack para gestionar contenedores de carga internacional en tres depósitos: Hong Kong, China y Estados Unidos.
tags:
  - Dev
  - Frontend
  - Backend
screenshots: [
  /assets/logistica/2.png,
  /assets/logistica/3.png,
  /assets/logistica/4.png,
  /assets/logistica/5.png
]
---

### Descripción del Proyecto
Sistema interno full-stack construido para gestionar operaciones de logística internacional en tres depósitos de origen: Hong Kong, China y Estados Unidos. La aplicación rastrea contenedores de carga a lo largo de todo su ciclo de vida — desde el depósito hasta el despacho de aduana y la finalización — y ofrece herramientas operativas para estimación de costos, planificación volumétrica y gestión de packing lists. Fue desarrollada para operaciones reales de importación y desplegada en Vercel con Supabase como backend.

##### Objetivos
- <b>Seguimiento del ciclo de vida del contenedor:</b> Habilitar la gestión completa (CRUD) de contenedores con progresión de estado a través de cuatro etapas: depósito, tránsito, aduana y finalizado.
- <b>Simulación de costos de importación:</b> Proporcionar una calculadora de costos configurable y precisa que cubra componentes CIF, derechos aduaneros, impuestos y gastos operativos, con soporte para múltiples tipos de cambio del dólar argentino vía API en tiempo real.
- <b>Planificación volumétrica:</b> Permitir a los operadores calcular cuántas cajas entran en un contenedor de 40' HC o 40' Standard por volumen y capacidad de peso antes de la carga.
- <b>Importación de packing lists:</b> Soportar la carga de archivos Excel con mapeo flexible de columnas para importar listas de ítems directamente al packing list de un contenedor.
- <b>Gestión de clientes:</b> Mantener un directorio de clientes vinculado a contenedores y envíos.
- <b>Exportación de datos:</b> Exportar listados de contenedores e informes de costos a Excel para reporting.
##### Flujo de Trabajo del Proyecto
- <b>Planificación de arquitectura:</b> Se definió el roadmap de funcionalidades usando un sistema de JIT Context Assembly — una capa de contexto por directorio diseñada para guiar el desarrollo asistido por IA con planes de implementación estructurados por feature.
- <b>Auth y fundaciones (F1):</b> Se implementó autenticación con Supabase usando manejo de cookies SSR vía `@supabase/ssr` y redirects de middleware en Next.js para proteger todas las rutas.
- <b>CRUD de contenedores (F2.1):</b> Se construyeron flujos completos de creación, lectura, actualización y eliminación de contenedores, incluyendo selección de depósito de origen (HK, China, USA), tipo de contenedor, ETA y seguimiento de estado.
- <b>Importación de packing list (F2.2):</b> Se desarrolló un pipeline de parseo de Excel con `xlsx` y `exceljs` y un mapeador interactivo de columnas para ingesta flexible de CSV/XLSX.
- <b>Calculadora volumétrica (F3.1):</b> Motor de cálculo puro que computa la cantidad de cajas por contenedor en función de dimensiones y peso, con salida de porcentaje de utilización.
- <b>Calculadora de costos (F3.2):</b> Motor de costos multi-etapa (FOB → CIF → derechos → impuestos → gastos operativos → costo de aterrizaje total) con plantillas de matriz de costos configurables y selección de tipo de cambio en tiempo real.
- <b>Exportaciones a Excel (F7):</b> Se agregó funcionalidad de exportación para contenedores y resultados de simulación usando `exceljs`.
- <b>Responsividad mobile (F9):</b> Se implementó un sidebar responsive con menú hamburguesa y ajustes de layout mobile-first.
##### Tecnologías Utilizadas
>Next.js 16 (App Router): Server components y server actions usados en toda la app para fetch de datos y mutaciones sin una capa de API separada.
###
>Supabase (PostgreSQL): Provee la base de datos relacional, autenticación e infraestructura para contenedores, clientes, packing lists y plantillas de costos.
###
>Tailwind CSS v4: Estilos utility-first con una estética limpia de panel administrativo.
###
>ExcelJS / XLSX: Manejo de importación (packing lists) y exportación (reportes de contenedores, simulaciones de costos) en formato Excel.
###
>dolarapi.com: Proxy a través de una API route de Next.js para obtener tipos de cambio del dólar argentino en tiempo real para los cálculos de costos.
###
>Zod: Validación de esquemas para inputs de formularios y payloads de server actions.
###
>TanStack Table: Potencia la tabla interactiva y ordenable del packing list con controles de visibilidad de columnas.
###
>Vercel: Plataforma de hosting con middleware en el edge para protección de rutas basada en autenticación.

##### Resultados e Impacto
- <b>Cobertura operativa:</b> El sistema cubre el flujo de gestión de contenedores de punta a punta, desde la creación hasta la finalización, en tres puntos de origen internacionales.
- <b>Precisión en costos:</b> La matriz de costos configurable permite a los operadores modelar distintos escenarios de importación con tipos de cambio en tiempo real, reemplazando cálculos manuales en planillas.
- <b>Ahorro de tiempo en packing lists:</b> El flujo de importación Excel con mapeo dinámico de columnas elimina la carga manual de datos a nivel de ítem logístico.
- <b>Acceso mobile:</b> El layout responsive permite al personal de logística consultar el estado de contenedores y fechas estimadas de tránsito desde dispositivos móviles.
````
