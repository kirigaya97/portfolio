---
title: "Kovalink: Sitio de Una Página para un Ilusionista Psicológico"
publishDate: 2026-10-13 00:00:00
url: https://kovalink.vercel.app
img: /assets/kovalink/1.webp
img_alt: Hero del sitio de Kovalink con fondo azul noche, el artista levantando una carta, FACUNDO KOVALINK en mayúsculas finas blancas y doradas, y un botón flotante de WhatsApp.
description: |
  Un sitio de una página para Facundo Kovalink, ilusionista psicológico de Buenos Aires, con propuestas fijadas al scroll, analítica detrás de consentimiento y un formulario que le avisa de dónde vino cada consulta.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Branding
technologies:
  - name: Astro 5
    note: Páginas estáticas con una sola ruta de servidor, la del contacto.
  - name: Tailwind CSS v4
    note: Tokens de diseño declarados en `@theme` (azul noche, un único acento dorado, blanco cálido).
  - name: Lenis
    note: Scroll suave, con los carruseles excluidos para que el arrastre táctil siga funcionando.
  - name: Resend
    note: Entrega las consultas del formulario al correo del cliente desde la ruta `/api/contact`.
  - name: Vercel + @astrojs/vercel
    note: Deploy con adaptador; la URL del sitio sale del deploy y no de un dominio escrito a mano.
  - name: Fontsource (self-hosted)
    note: Montserrat Variable para titulares e Inter Variable para texto, sin CDN de fuentes de terceros.
  - name: "@astrojs/sitemap"
    note: Sitemap generado en el build, junto a rutas generadas para `robots.txt` y `llms.txt`.
  - name: Playwright
    note: Scripts de capturas por sección y pruebas de scroll de la sección de propuestas fijada.
screenshots:
  - /assets/kovalink/2.webp
  - /assets/kovalink/3.webp
  - /assets/kovalink/4.webp
  - /assets/kovalink/5.webp
---

### Resumen del Proyecto

Facundo Kovalink ([kovalink.vercel.app](https://kovalink.vercel.app)) es un ilusionista psicológico de Buenos Aires que hace mentalismo y magia close-up en eventos privados y corporativos. El sitio es una sola página con un trabajo claro: mostrar primero el trabajo y después abrir una conversación. El brief pedía algo más cercano al *portfolio de un artista* que a la página comercial de un mago.

La base es el sistema que ya había armado para el sitio de otro mago, y que al cliente le gustó. Reutilicé la estructura y rehíce la identidad: un monograma nuevo, una paleta azul noche y una estética contenida.

#### Objetivos

- **Sensación de portfolio** - Tipografía grande, mucho aire, fotos a color y un solo color de acento, en lugar de una página de venta recargada.
- **CTAs suaves** - Una única acción en el hero ("Ver propuestas"), y la conversación se ofrece recién cuando el visitante ya conoció los shows.
- **Tres formatos bien contados** - Presentar Show Central, Close-Up y Shows Corporativos con los textos oficiales del cliente y un video por cada uno.
- **Consultas con contexto** - Saber de dónde llegó cada consulta, sin rastrear a quien no dio su consentimiento.
- **Contenido editable por el cliente** - Todo el texto en un único archivo de datos.

#### Flujo de Trabajo del Proyecto

- **Base e identidad** - Armé Astro 5 con tokens de Tailwind v4: base azul noche, un único acento dorado (`#cdb07a`) en dosis chicas y blanco cálido para el texto y el botón sólido. Montserrat en peso fino y mayúsculas para los titulares, nunca cursiva, como pidió el cliente.
- **Monograma y kit de marca** - Construí el logo FK como componente de Astro en dos variantes (una completa con marcos y otra compacta para tamaños chicos), y un script que renderiza favicons, la tarjeta al compartir y un kit de logos descargable desde el propio componente. Una página `/brand` lo documenta, con `noindex`.
- **Propuestas fijadas al scroll** - Los tres shows quedan fijados al scroll, y cada uno entra de costado con un video al lado. Solo corre, mudo, el video de la slide activa y solo mientras la sección está en pantalla. La sección queda fijada incluso con movimiento reducido, donde solo el deslizamiento pasa a corte seco. En móvil el video pasa a fondo de pantalla completa con un botón "Ver video".
- **Loader, galería y bio** - Un preloader de al menos 1.5s que traza el monograma, una galería en mosaico en escritorio que pasa a carrusel en móvil con lightbox, y una bio escrita por el cliente en tercera persona.
- **Contacto** - WhatsApp, email, Instagram y un formulario resuelto con una sola ruta SSR. El anti-spam combina honeypot, timestamp, chequeo de mismo origen y límites de longitud compartidos. Un botón flotante de WhatsApp se ve desde el hero.
- **Analítica con consentimiento** - GA4, conversiones de Google Ads y el pixel de Meta comparten una misma cola detrás de un banner de consentimiento. Los UTM, el `gclid` y el referrer viajan con el formulario y llegan al mail como un campo "Llegó desde".
- **Manejo de video e imagen** - Los videos usan `preload="none"` con póster y se transcodifican a 720x1280, 30fps antes de entrar al repo. Las fotos pasan por `astro:assets`.
- **Entrega** - Escribí un documento de entrega con la configuración de dominio, Resend, GA4, Google Ads, Meta y Search Console.

#### Resultados e Impacto

- **Un sistema reutilizable** - El contenido vive en un archivo de datos tipado (`site.ts`), así que textos, shows, datos de contacto y navegación alimentan la página, el JSON-LD y el `llms.txt` generado desde un solo lugar.
- **Una sola ruta dinámica** - Todo es estático salvo `/api/contact`, lo que mantiene el sitio liviano y la superficie de ataque chica.
- **Una guarda contra publicar archivos internos** - Astro convierte en página pública cualquier `.md` dentro de `src/pages/`, y eso ya filtró documentación interna una vez. Un script `check:rutas` ahora falla si algo interno llega al build, y la documentación interna se nombra `_README.md`.
- **Sin dominio escrito a mano** - La URL canónica, el sitemap, `robots.txt`, `llms.txt` y la tarjeta al compartir salen de la URL del deploy, así que conectar el dominio final no requiere cambios de código.
- **Accesibilidad y movimiento** - Las unidades son `svh`, se respetan los safe-area insets, el hero se apila por debajo de 1024px para que el titular no tape la cara, y se respeta la preferencia de movimiento reducido.
- **Pendientes documentados** - La conexión del dominio, las claves de Resend y de analítica y las reseñas de clientes figuran como pendientes en lugar de inventarse.
