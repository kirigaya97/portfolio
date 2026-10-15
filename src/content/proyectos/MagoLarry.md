---
title: "MagoLarry: Landing Bilingüe para un Mentalista"
publishDate: 2026-10-13 00:00:00
url: https://larrymentalista.pages.dev
img: /assets/magolarry/1.webp
img_alt: Hero del sitio de Larry sobre fondo casi negro con tinte violeta, con un retrato del mentalista con micrófono de vincha, LARRY en mayúsculas blancas condensadas grandes, MENTALISTA en lila, dos botones y una fila de tres cifras abajo.
description: |
  Una landing bilingüe para Larry, mentalista, conferencista y creador argentino, con un video vertical del show, todas sus propuestas en un solo lugar y un formulario de contacto que registra desde qué idioma escribió cada persona.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Branding
technologies:
  - name: Astro 5
    note: Páginas estáticas con i18n integrado (castellano en la raíz, inglés bajo `/en/`) y una sola ruta de servidor, la del contacto.
  - name: Tailwind CSS v4
    note: Tokens de diseño declarados en `@theme` (negro tintado de violeta, un único acento lila, blanco cálido).
  - name: Cloudflare Pages + @astrojs/cloudflare
    note: Deploy con adaptador, imágenes optimizadas en el build y secretos leídos en runtime.
  - name: Lenis
    note: Scroll suave, con el carrusel de la galería excluido para que el arrastre táctil siga funcionando.
  - name: Resend
    note: Entrega las consultas del formulario al correo del cliente desde la ruta `/api/contact`.
  - name: Fontsource (self-hosted)
    note: Oswald Variable para titulares y el wordmark, Inter Variable para texto, sin CDN de fuentes de terceros.
  - name: "@astrojs/sitemap"
    note: Sitemap con alternativas en castellano e inglés, que deja afuera la página de privacidad con noindex.
  - name: Playwright
    note: Script que captura cada sección en escritorio y móvil.
screenshots:
  - /assets/magolarry/2.webp
  - /assets/magolarry/3.webp
  - /assets/magolarry/4.webp
  - /assets/magolarry/5.webp
  - /assets/magolarry/6.webp
---

### Resumen del Proyecto

Larry ([larrymentalista.pages.dev](https://larrymentalista.pages.dev)) es un mentalista, conferencista y creador de Buenos Aires que ofrece shows, conferencias, workshops, coaching y productos propios. El sitio es una sola página que presenta todo en un mismo lugar: el video del show, sus premios, lo que ofrece, una galería, el proyecto Lmental, su bio y una forma de contactarlo. El cliente pidió que lo presenten como *mentalista* y no como "el mago", así que la marca y los títulos siguen eso.

La base es el sistema del sitio de Kovalink, que adapté en lugar de empezar de cero. Mantuve el stack y las decisiones técnicas principales, saqué las propuestas fijadas al scroll (acá hay un solo video) y la sección de invitación, y rehíce la identidad.

#### Objetivos

- **Mentalista, no mago** - Marca, títulos y textos lo posicionan como mentalista, como pidió el cliente.
- **Un video primero** - Abrir con el video vertical del show, mudo al entrar en pantalla, con un botón de sonido.
- **Todo lo que ofrece, en un solo lugar** - Show, conferencias, workshops, coaching y creaciones, usando solo los textos del propio cliente.
- **Dos idiomas** - Castellano rioplatense en `/` e inglés en `/en/`, porque su público profesional es internacional.
- **Contenido editable por el cliente** - Todo el texto en un único archivo de datos.

#### Flujo de Trabajo del Proyecto

- **Base e identidad** - Reutilicé la base de Kovalink (Astro 5, Tailwind v4, Lenis, Resend) y rehíce la estética: base casi negra con tinte violeta, un único acento lila (`#b9a2ff`) tomado del violeta del proyecto Lmental del cliente y de los rótulos de su video, y blanco cálido para el texto y el botón sólido. Oswald, una tipografía condensada cercana a los afiches de teatro, reemplazó a Montserrat en los titulares.
- **Logo provisorio** - Armé un monograma provisorio como componente de Astro (un bloque con una L calada y un punto) en dos variantes, completa y compacta, y un script que renderiza los favicons y la tarjeta al compartir a partir de él.
- **Video del show** - Un único video vertical con `preload="none"` y póster, mudo al entrar en pantalla, y un botón de sonido que lo reinicia la primera vez que se usa.
- **Pedidos por rango para el video** - Cloudflare Pages entrega el archivo estático completo aunque se pida un rango, y Safari en iPhone no reproduce video sin una respuesta `206`. Agregué una ruta `/media/[name]` que lee el archivo del almacenamiento de assets y devuelve el tramo pedido, con el tamaño total generado por un script antes de cada build.
- **Secciones** - Hero con las cifras del cliente, trayectoria y premios, propuestas, una galería en mosaico en escritorio que pasa a carrusel con lightbox en móvil, Lmental y una bio.
- **Contenido bilingüe** - Todo el texto vive en `content.es` y `content.en` dentro de un único archivo tipado. El objeto en inglés toma el tipo del de castellano, así que una clave faltante no compila. El castellano manda y el inglés se traduce de ahí.
- **Contacto** - WhatsApp, email, Instagram y un formulario resuelto con una sola ruta SSR. El anti-spam combina honeypot, timestamp, chequeo de mismo origen y límites de longitud compartidos. El formulario envía el idioma de quien escribe, y el mail a Larry avisa cuando alguien escribió desde `/en/`.
- **Analítica con consentimiento** - Una cola detrás de un banner de consentimiento, como en el sitio de Kovalink.
- **Deploy en Cloudflare** - Pasé el deploy a Cloudflare Pages con `nodejs_compat` (sin eso el worker no compila por `sharp`) y lo documenté.

#### Resultados e Impacto

- **Una sola fuente para los textos** - Los textos en castellano e inglés, la navegación y los datos de contacto viven en `src/data/site.ts`, compartidos por las dos rutas de idioma a través de un único componente `Home`.
- **Una sola ruta dinámica además del video** - Todo es estático salvo `/api/contact` y el endpoint de rangos del video.
- **Video que se reproduce en iPhone** - El endpoint de rangos hace que el video del show funcione en Safari para iOS a pesar de la limitación de la plataforma.
- **Una guarda contra publicar archivos internos** - Un script `check:rutas` falla si algo interno llega al build, una lección heredada de Kovalink.
- **Accesibilidad y diseño** - Las unidades son `svh`, se respetan los safe-area insets y el hero se apila por debajo de 1024px.
- **Sin contenido inventado** - Las cifras "+25 años, +50 países, +150 ciudades" y los premios salen del documento del propio cliente. No hay testimonios ni logos de clientes porque no había material.
- **Pendientes documentados** - El dominio definitivo, un logo definitivo, las claves de Resend y GA4, las fotos de las creaciones y la revisión legal de la página de privacidad figuran como pendientes.
