---
title: Magia y Burbujas — Sitio de Landing para Mago de Calle Argentino
publishDate: 2026-05-06 00:00:00
img: /assets/magiayburbujas/1.webp
img_alt: Captura del sitio Magia y Burbujas — fondo negro profundo con tipografía dorada y una sección hero con burbujas animadas.
description: |
  Una landing de scroll único, con animaciones cinematográficas, para Gonza Martini — mago y artista de burbujas argentino radicado en Barcelona.
tags:
  - Dev
  - Design
  - Frontend
technologies:
  - name: Astro 6
    note: Framework de sitios estáticos con cero JS en el cliente por defecto — ideal para landing de marketing enfocada en performance.
  - name: Tailwind CSS v4
    note: Sistema de tokens de diseño vía `@theme` para la paleta completa tinta/oro/violeta/crema.
  - name: GSAP + ScrollTrigger
    note: Potencia la sección Shows pinneada, las transiciones entre slides y la coreografía de la mascota-burbuja.
  - name: Lenis
    note: Scroll suave integrado en un único loop RAF compartido con GSAP; respeta `prefers-reduced-motion`.
  - name: Canvas API (vanilla)
    note: Sistema de partículas de burbujas y estrellas hecho a medida — sin dependencias externas para mantener el bundle liviano.
  - name: Fontsource (self-hosted)
    note: Cinzel Decorative, Pinyon Script, Cormorant Garamond Variable y Young Heart woff2 custom — sin Google Fonts CDN.
  - name: Vercel + @astrojs/vercel
    note: Despliegue con adaptador y edge caching; DNS enrutado por Cloudflare.
  - name: Vitest + jsdom
    note: Tests unitarios para toda la lógica de animación en el cliente sin necesidad de un browser.
screenshots:
  - /assets/magiayburbujas/2.webp
  - /assets/magiayburbujas/3.webp
  - /assets/magiayburbujas/4.webp
  - /assets/magiayburbujas/5.webp
  - /assets/magiayburbujas/6.webp
  - /assets/magiayburbujas/7.webp
---

### Resumen del Proyecto

Magia y Burbujas es el sitio web de Gonza Martini, mago de calle y artista del show de burbujas radicado en Barcelona. La landing de scroll único funciona como portfolio y herramienta de conversión para contrataciones — con un tono cálido y cercano, como una conversación, no como un folleto. La estética está inspirada en los carteles de feria mágica: fondos en tinta oscura, tipografía dorada con efecto foil, acentos violetas y burbujas iridiscentes por toda la página.

#### Objetivos

- **Conversión a contratación** — Impulsar consultas por WhatsApp con copy en español rioplatense que invita a charlar y coordinar fechas.
- **Vitrina de shows** — Presentar los cuatro formatos de show de Gonza (magia de cerca, show central, corporativo y la experiencia BURBUJAS) con tratamiento visual full-bleed.
- **Primera impresión inmersiva** — Construir una secuencia de entrada cinematográfica — loader personalizado, fade del retrato, título animado y una mascota-burbuja que crece de la boca del retrato y acompaña al usuario a lo largo de toda la página.
- **Mobile-first** — Optimizado para 390px de ancho, ya que el sitio se comparte principalmente por WhatsApp.

#### Flujo de Trabajo del Proyecto

- **Fundación** — Scaffolding de Astro 6 con tokens de diseño custom en Tailwind v4 (`@theme` con paleta tinta/oro/violeta/crema), cuatro familias tipográficas self-hosted (Cinzel Decorative, Pinyon Script, Cormorant Garamond, Young Heart) y scroll suave con Lenis — todo establecido en la primera sesión.
- **Construcción del Hero** — Un hero tipo "cartel vivo" con retrato de dos capas (lit/dark con crossfade animado por el scroll), un sistema de partículas canvas (~80–150 burbujas en escritorio, 40–60 en mobile) con deriva sinusoidal y renderizado de borde iridiscente, y una banda marquee inferior que recorre los taglines del show.
- **Coreografía de scroll** — Orquestación GSAP ScrollTrigger de 706 líneas — sección Shows pinneada (4 slides × 100vh), mascota-burbuja que sigue una trayectoria Bézier por cada sección, una gallery strip horizontal pinneada, y una fase de scroll libre con curva de escala por keyframes desde Bio hasta Contacto.
- **Secciones de contenido** — Gallery con 8 fotos reales del cliente procesadas con Sharp a webp q82 y efecto duotone-oro en hover; Reviews con 4 tarjetas de testimonios y fade-in por IntersectionObserver; Contacto rediseñado en layout de 2 columnas con la mascota parqueada como acompañante visual.
- **Gating de performance** — El loader de tiempo fijo fue reemplazado por una barra de progreso híbrida — rampa sintética + monitoreo real de carga de assets críticos — de modo que el CTA solo aparece cuando el retrato y el video de la mascota están listos.
- **Tests** — 21 tests unitarios Vitest sobre física de burbujas, interpolación Catmull-Rom de la mascota, traslación del strip de galería y curva de escala del free-path — todos en verde.

#### Resultados e Impacto

- **Sistema de animación entregado** — Coreografía de scroll multifase que abarca la entrada, shows pinneados, galería horizontal y secciones de scroll libre — con una mascota persistente que interpola waypoints Bézier en toda la página.
- **Assets reales de galería** — Ocho fotos de shows procesadas y servidas por el pipeline de imágenes de Astro con srcsets responsivos y efecto duotone-oro en hover.
- **Build orientado a performance** — Bundle JS del Hero de ~116KB raw (~35KB gzip estimado); el gating de assets críticos en el loader evita que el CTA aparezca antes de que el retrato y el video de la mascota hayan cargado.
- **Baseline de accesibilidad** — Skip-link, `prefers-reduced-motion` respetado globalmente (Lenis desactivado, canvas ocultos, secciones desancladas, animaciones a 0.001ms) y outline gold en focus-visible en todo el sitio.
- **Arquitectura lista para contenido** — Secciones con placeholders bien documentados (copy de Bio, reel de Media, número de WhatsApp real, testimonios definitivos) — la estructura del sitio está completa y aguarda el contenido final del cliente para salir a producción.
