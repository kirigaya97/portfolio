---
title: "Santiago Fernández: Migración de WordPress a Astro"
publishDate: 2026-10-14 00:00:00
url: https://magosantiago.com
img: /assets/santi/1.webp
img_alt: Hero del sitio de Santiago Fernández con fondo casi negro, el mago abriendo un abanico de cartas, SANTIAGO en blanco y FERNÁNDEZ en rojo en mayúsculas, el subtítulo Ilusionista & Mentalista, un botón rojo de WhatsApp y un botón Tickets en el menú.
description: |
  Migración del sitio de Santiago Fernández, ilusionista y mentalista en Madrid, de WordPress y Divi a Astro, con todo el sitio en castellano y en inglés y una cartelera que se actualiza sola desde Dinaticket.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Marketing
technologies:
  - name: Astro 5
    note: Páginas estáticas con una sola ruta de servidor, la del contacto.
  - name: Tailwind CSS v4
    note: Tokens de diseño declarados en `@theme` (carbón cálido, rojo de trabajo, blanco cálido).
  - name: Lenis
    note: Scroll suave, con JS vanilla e IntersectionObserver para las animaciones en lugar de un framework de animación.
  - name: Resend
    note: Entrega las consultas del formulario al correo del cliente desde la ruta `/api/contact`.
  - name: Vercel + @astrojs/vercel
    note: Hosting con adaptador, con el DNS manejado aparte en Cloudflare.
  - name: astro-dinaticket-ticketing
    note: Kit compartido que raspa Dinaticket y alimenta la página `/entradas` y una landing por espectáculo.
  - name: GitHub Actions
    note: Un workflow programado, cada 3 horas, actualiza la cartelera y commitea solo si algo cambió.
  - name: Fontsource (self-hosted)
    note: Montserrat Variable para titulares e Inter Variable para texto, sin CDN de fuentes de terceros.
  - name: Playwright
    note: Scripts de capturas, scroll móvil, swipe, SEO y verificación de tracking.
screenshots:
  - /assets/santi/2.webp
  - /assets/santi/3.webp
  - /assets/santi/4.webp
  - /assets/santi/5.webp
video: /assets/santi/1.mp4
---

### Resumen del Proyecto

Santiago Fernández ([magosantiago.com](https://magosantiago.com)) es un ilusionista y mentalista de Madrid que actúa en eventos corporativos, privados y teatros. Su sitio nació como un WordPress armado con el constructor Divi. Este proyecto lo migra a Astro, conserva la identidad en rojo, negro y blanco del original y suma lo que la base anterior no podía: una cartelera de funciones que nadie tiene que cargar a mano.

El sitio está pensado para un público español y existe completo en castellano y en inglés bajo `/en/`.

#### Objetivos

- **Mantener la identidad** - Misma paleta roja, negra y blanca y el orden de secciones del cliente, reconstruida sobre una base estática en Astro.
- **Entradas sin trabajo manual** - Publicar fechas, precios y carteles de sus shows de forma automática, sin editar páginas a mano.
- **Una landing por show** - Darle a cada espectáculo su propia página, usable en anuncios, y mantenerla viva cuando se acaban las fechas.
- **Bilingüe** - Servir todo el sitio en castellano y en inglés, con `lang` y `hreflang` correctos.
- **Encontrable** - Resolver desde el inicio el SEO y los metadatos legibles por LLMs, y dejar la analítica detrás de consentimiento.

#### Flujo de Trabajo del Proyecto

- **Base y paleta** - Armé Astro 5 con tokens de Tailwind v4. El rojo de marca original se templó para que no vibre sobre negro: base carbón cálido, un rojo de trabajo para rellenos y CTAs, un rojo más claro para texto chico y un blanco cálido para el copy. Montserrat e Inter van self-hosted.
- **Home en el orden del cliente** - Hero con un único CTA a WhatsApp, formulario de contacto justo después, un riel de tres videos verticales, una galería que en móvil es un carrusel con snap y en escritorio un mosaico editorial, servicios, "Sobre mí", logos de clientes y reseñas.
- **Entradas desde Dinaticket** - Integré el kit compartido `astro-dinaticket-ticketing`. Un raspador lee Dinaticket, guarda espectáculos, fechas y precios como datos y baja los carteles al repo, y el sitio arma `/entradas` y `/shows/<slug>` con eso. Espectáculo y función se mantienen separados: el espectáculo es contenido editorial, las fechas cambian solas.
- **Lo raspado manda, lo escrito a mano gana** - Un espectáculo nuevo se publica con su ficha real. Unos overrides opcionales permiten reescribir el texto con la voz del cliente, por SEO y por el gancho de venta, sin tocar nada más.
- **Cartelera automática** - Un workflow de GitHub Actions corre cada 3 horas y, si algo cambió, construye, pasa los chequeos y commitea, lo que dispara el deploy de Vercel. Vercel Cron se descartó porque no puede escribir en el repositorio.
- **Sitio bilingüe** - Todas las páginas existen bajo `/en/`, incluido un blog con cinco artículos por idioma pensados para las dudas de quien contrata a un mago. Un script `check:castellano` vigila el copy en castellano.
- **Contacto y analítica** - WhatsApp, email y un formulario resuelto con una sola ruta SSR, con honeypot, timestamp obligatorio, límites de longitud y chequeo de Origin. GA4 y el pixel de Meta quedan detrás de un banner de consentimiento.
- **SEO y LLMO** - Title, description, canonical, Open Graph y JSON-LD en cada página, un resumen `llms.txt`, sitemap generado y una página `/brand`.
- **Entrega al cliente** - Una guía escrita para Santiago dentro del README explica cómo sumar un teatro o una fecha editando un único JSON, cómo ocultar un evento, cómo forzar una actualización y qué hacer si algo falla.

#### Resultados e Impacto

- **Una cartelera que se mantiene sola** - Una fecha nueva creada en Dinaticket llega al sitio en un máximo de tres horas, sin que nadie edite páginas.
- **Seguro de editar** - Un error en el archivo de configuración hace que el workflow falle en lugar de publicar una versión rota, y nunca se publica una cartelera vacía.
- **Shows que sobreviven a sus fechas** - Cuando un show se queda sin fechas, su página sigue y ofrece consultarlas por WhatsApp, así que los anuncios y enlaces viejos no terminan en un error.
- **Casi todo estático** - Todo se prerenderiza salvo `/api/contact`, lo que mantiene el sitio liviano y la superficie de ataque chica.
- **Una guarda contra publicar archivos internos** - Un script `check:rutas` falla el build si algo interno llega a la salida, y se sacó de `public/` un PDF escaneado que se estaba sirviendo.
- **Pendientes documentados** - Los redirects 301 desde las URLs del WordPress, el reemplazo de fotos de baja resolución heredadas del sitio anterior y el pase a un plan de hosting pago figuran como pendientes.
