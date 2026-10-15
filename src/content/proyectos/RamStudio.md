---
title: "RAM Studio: Landing y Portfolio para un Estudio de IA, Datos y Software"
publishDate: 2026-08-11 00:00:00
url: https://www.ramstudio.com.ar
img: /assets/ramstudio/1.webp
img_alt: Hero de la home de RAM Studio sobre fondo casi negro, con un titular violeta grande y un grafo de nodos animado a la derecha.
description: |
  El sitio de marketing de RAM, un estudio de Buenos Aires de IA, datos y software: un sitio estático en Astro 5 con narrativa que arranca por el problema, un hero con grafo de nodos en canvas, una capa de scroll con Lenis y GSAP, y una sección de portfolio guiada por contenido.
tags:
  - Design
  - Dev
  - Frontend
  - Branding
technologies:
  - name: Astro 5
    note: Salida estática desplegada en Vercel, con ruteo por archivos y una content collection para el portfolio.
  - name: TypeScript
    note: Módulos de cliente en vanilla para los efectos interactivos y la capa de animación por scroll.
  - name: CSS plano (custom properties)
    note: Una única hoja de estilos con tokens de marca (ink, paper, iris, violet, magenta), sin framework CSS.
  - name: Canvas 2D API
    note: Animación del grafo de nodos del hero, que se pausa fuera de pantalla y se desactiva con reduced motion.
  - name: Lenis
    note: Scroll suave en modo native-scroll, así los eventos de scroll siguen manejando el índice de secciones y los reveals.
  - name: GSAP + ScrollTrigger
    note: Capa de animación por scroll sincronizada con Lenis mediante un único ticker, registrada bajo una media query de reduced motion.
  - name: "@astrojs/sitemap"
    note: Genera el sitemap en el build.
  - name: Geist Sans y Geist Mono
    note: Tipografía de marca cargada desde Google Fonts.
  - name: Vercel
    note: Deploy automático en cada push, con el DNS del dominio administrado en Cloudflare.
screenshots:
  - /assets/ramstudio/2.webp
  - /assets/ramstudio/3.webp
  - /assets/ramstudio/4.webp
  - /assets/ramstudio/5.webp
  - /assets/ramstudio/6.webp
---

### Resumen del Proyecto

RAM ([ramstudio.com.ar](https://www.ramstudio.com.ar)) es un estudio de Buenos Aires que trabaja en IA, análisis de datos, automatización de procesos, integraciones y desarrollo web. El sitio es su cara pública: una landing de una sola página que arranca por el problema del cliente en vez de una lista de servicios, más una sección `/trabajos` que reúne el portfolio del estudio.

El desarrollo corre sobre Astro 5 sin framework CSS. El lenguaje visual sale del sistema de marca del estudio (superficie oscura, familia de acentos violetas y etiquetas monoespaciadas), y el código mantiene esos tokens como única fuente de verdad.

#### Objetivos

- **Narrativa que arranca por el problema** - Abrir con el trabajo manual y los sistemas desconectados que el prospecto ya reconoce, y después vincular cada uno con un servicio.
- **UI fiel a la marca y accesible** - Traducir la paleta y las reglas tipográficas de la marca a tokens CSS, manteniendo el contraste de texto dentro de WCAG AA sobre la superficie oscura.
- **Movimiento expresivo pero seguro** - Sumar efectos de scroll y canvas que nunca estorben la lectura ni a quienes prefieren reduced motion.
- **Un portfolio que escala** - Publicar proyectos como entradas Markdown, para que sumar uno nunca implique tocar código de páginas.

#### Flujo de Trabajo del Proyecto

- **Estructura de la página** - Armé la home en siete secciones numeradas (Intro, Diagnóstico, Servicios, Trabajos, Manifiesto, Proceso, Contacto) con un indicador de sección fijo que sigue a la que está a la vista. Los servicios, los pasos del proceso y los bloques de diagnóstico son arrays simples al inicio de la página y se renderizan desde ahí.
- **Sistema de diseño** - Reflejé la paleta de marca en tokens `:root` dentro de una sola hoja de estilos. El texto de énfasis usa el tono iris, y los tonos magenta y violet quedan para botones, glows y el isotipo porque no pasan el contraste como texto sobre el fondo oscuro. Geist no trae itálica, así que el énfasis se resuelve con color y no con una falsa itálica sintetizada.
- **Efectos interactivos** - Escribí los efectos en un solo módulo TypeScript: cursor propio con botones magnéticos, reveals por scroll manejados con un atributo `data-reveal`, rotación de palabras en el hero, una franja de estado en vivo, el grafo de nodos en canvas, el índice de secciones sticky y el menú mobile (hamburguesa a overlay).
- **Scroll suave y GSAP** - Sumé Lenis en modo native-scroll y un módulo aparte de GSAP y ScrollTrigger sincronizado con él, con el ticker de GSAP manejando a Lenis para que exista un solo loop de animación. Las animaciones nuevas se registran dentro de una media query de reduced motion, así se apagan solas.
- **Sección de portfolio** - Porté un portfolio guiado por contenido: una content collection validada con un schema de Zod, un índice filtrable con chips de tags y rutas de detalle dinámicas generadas desde los archivos Markdown. Los tokens de marca se retokenizaron uno a uno desde el CSS del portfolio original.
- **Assets de marca y styleguide** - Agregué un pipeline por script que genera los rasters del logo desde los SVG fuente, y una página de styleguide con plantillas sociales servida bajo `/brand`.
- **SEO y deploy** - Sumé metadatos Open Graph y un sitemap generado, y desplegué en Vercel con deploys automáticos en cada push.

#### Resultados e Impacto

- **Un sitio completo y desplegado** - La landing, el índice filtrable del portfolio y las páginas de detalle por proyecto están en vivo en ramstudio.com.ar.
- **Reduced motion por diseño** - El grafo en canvas, el scroll de Lenis y las animaciones de GSAP se desactivan cuando el usuario prefiere reduced motion, y además el grafo se pausa cuando sale del viewport.
- **Una única fuente de verdad para la marca** - Paleta, tipografía y reglas de contraste viven en tokens documentados, así que los cambios de marca se hacen en un solo lugar.
- **Actualizaciones de contenido sin fricción** - Los proyectos nuevos del portfolio se agregan como un archivo Markdown con frontmatter, y de ahí se generan el índice, los filtros y la ruta de detalle.
- **Superficie de dependencias chica** - Las dependencias de runtime son Astro, la integración de sitemap, GSAP y Lenis; todo lo demás es TypeScript y CSS escritos a mano.
