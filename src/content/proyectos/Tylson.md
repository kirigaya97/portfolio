---
title: "Tylson: Portfolio Autogestionable para un Director de Videoclips"
publishDate: 2026-10-02 00:00:00
url: https://tylson.com.ar
img: /assets/tylson/1.webp
img_alt: Home de Tylson con el wordmark en blanco y azul eléctrico sobre fondo negro, una barra de navegación y un reproductor de video con botón de play debajo.
description: |
  Un portfolio de una sola página para Tylson, director creativo de videoclips y live sessions, desarrollado en Astro con un CMS basado en Git para que él mismo gestione trabajos, roster, bio y datos de contacto, más un pequeño endpoint serverless para el formulario de contacto.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
technologies:
  - name: Astro 5
    note: Salida estática con una colección de contenido de trabajos, renderizada en una sola página.
  - name: TypeScript
    note: Scripts sin framework para el filtro, el lightbox, los reveals de scroll, el loader y el formulario de contacto.
  - name: CSS plano
    note: Tokens de diseño y estilos de todos los componentes en una sola hoja, sin framework.
  - name: Sveltia CMS
    note: Panel de administración en /admin que edita el contenido JSON y commitea directo al repo.
  - name: Cloudflare Workers
    note: Aloja el sitio estático, el proxy OAuth del CMS y el endpoint de contacto.
  - name: Resend
    note: Entrega los mensajes del formulario de contacto desde el dominio propio del sitio.
  - name: Google Fonts (Geist, Geist Mono) y Akira Expanded
    note: Geist para cuerpo y UI, una tipografía display ancha self-hosteada para el wordmark.
screenshots:
  - /assets/tylson/2.webp
  - /assets/tylson/3.webp
  - /assets/tylson/4.webp
  - /assets/tylson/5.webp
---

### Resumen del Proyecto

Tylson ([tylson.com.ar](https://tylson.com.ar)) es director creativo, camarógrafo y editor de la escena musical argentina: videoclips, live sessions y visualizers de trap, cumbia, rock y under. El sitio reemplaza a un Linktree con una sola página que muestra primero el trabajo y facilita el contacto.

El pedido era un portfolio con identidad propia (oscuro, neón, underground) que el cliente pueda seguir actualizando sin un desarrollador. Por eso lo interesante no es tanto la página en sí sino lo que hay detrás: el modelo de contenido, el CMS y el pipeline de entrega.

#### Objetivos

- **El trabajo primero** - Abrir con un video reproducible y una grilla filtrable de trabajos, no con una lista de links.
- **Contenido autogestionado** - Que Tylson pueda sumar trabajos, editar su bio, cambiar los datos de contacto y armar el roster de artistas sin tocar código.
- **Una estética propia** - Una identidad visual underground y neón, con loader, wordmark y movimiento a tono con un director audiovisual.
- **Un canal de contacto real** - Un formulario que efectivamente entregue el mail desde el dominio propio del sitio.

#### Flujo de Trabajo del Proyecto

- **Modelo de contenido** - Modelé los trabajos como una colección de contenido de Astro con archivos JSON (título, artista, roles, formato, género, destacado, orden, ID de YouTube o de playlist), con un schema que acepta strings libres para que las listas de opciones las controle el cliente y no el código.
- **Taxonomías autoadministrables** - Roles, géneros y formatos viven en un archivo de datos editable desde el CMS, y tanto los chips del filtro como los selects de cada trabajo leen de ahí.
- **Una página, sin rutas de detalle** - Hero, roster animado, trabajos filtrables, sobre mí, galería de detrás de cámara y contacto en una sola página, con los videos en un lightbox en lugar de páginas aparte. Los trabajos destacados flotan arriba.
- **Roster animado** - Una banda de tres filas a contra-scroll con los artistas, una fila por género, alimentada por una lista editable desde el CMS.
- **Una única fuente para los datos de contacto** - Instagram, email, teléfono y WhatsApp salen de un solo archivo de configuración que consumen el header, el footer, la sección de contacto y el botón flotante de WhatsApp.
- **Capa de interacción** - Un preloader estilo timecode, header compacto al scrollear, reveal on scroll y la lógica de filtro y lightbox, todo en un solo archivo TypeScript que respeta `prefers-reduced-motion`.
- **CMS y autenticación** - Instalé Sveltia CMS en `/admin` con backend de GitHub, y desplegué un pequeño Cloudflare Worker que resuelve el login OAuth.
- **Endpoint de contacto** - Escribí un Cloudflare Worker que valida el payload del formulario, escapa el contenido, controla una lista de orígenes permitidos y manda el mail por Resend, con un campo honeypot para descartar bots.
- **Deploy** - Build estático en Cloudflare Workers conectado a Git, de modo que un push (o una edición por CMS, que es un commit) dispara el rebuild.

#### Resultados e Impacto

- **Un sitio que el cliente puede manejar solo** - Los trabajos son entradas JSON simples en el repo, y la mayoría de los commits recientes son ediciones desde el CMS (alta, modificación y baja de trabajos), que es el flujo de edición funcionando como se diseñó.
- **Opciones controladas por datos, no por código** - Sumar un rol, género o formato es una edición del CMS, sin cambiar el schema ni redeployar código.
- **Front end liviano** - Salida estática de Astro sin framework de UI y sin dependencias más allá de Astro.
- **Contacto sin un backend que mantener** - El formulario postea a un único Worker sin estado, con validación, lista de orígenes permitidos y honeypot incluidos, sin servidor propio.
- **Listo para el handoff** - La infraestructura, las cuentas, el DNS, el email y el acceso al CMS están documentados en runbooks dentro del repo.
