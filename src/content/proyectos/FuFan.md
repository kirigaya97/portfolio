---
title: "FuFan: Sitio Bilingüe de Agencia de Talento con Registro de Artistas"
publishDate: 2026-07-27 00:00:00
url: https://www.fufanexperience.com
img: /assets/fufan/1.webp
img_alt: Hero de la home de FuFan con el logo de la marca sobre un video oscuro de un hombre en un bar, el lema "Seleccionamos talento. Creamos experiencias." y un botón dorado de contacto.
description: |
  Un sitio de marketing bilingüe para FuFan, agencia de talento de entretenimiento para hoteles, cruceros y experiencias VIP, con una sección de servicios fija guiada por scroll y un flujo serverless de registro de artistas que archiva cada postulación directamente en el Drive y el Sheets del cliente.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Branding
technologies:
  - name: Astro 5
    note: Páginas estáticas por defecto con i18n nativo (español por defecto, inglés), con rutas prefijadas para ambos idiomas.
  - name: Tailwind CSS 4
    note: Paleta, familias tipográficas y espaciados declarados una sola vez como tokens de tema en un sistema de diseño dark-first.
  - name: GSAP + Lenis
    note: Scroll suave y la sección de servicios fija con crossfade, desactivados con prefers-reduced-motion.
  - name: Vercel (funciones serverless)
    note: Hosting y los endpoints de contacto y registro de artistas, con Analytics y Speed Insights.
  - name: Resend
    note: Email transaccional para el formulario de contacto y las notificaciones de registro, enviado desde el dominio del cliente.
  - name: Google APIs (Drive + Sheets)
    note: Service account que crea una carpeta por postulante y agrega una fila a la planilla del cliente.
  - name: Playwright
    note: Suite de regresión de layout mobile que cubre estados que los navegadores de desarrollo en desktop nunca ven.
screenshots:
  - /assets/fufan/2.webp
  - /assets/fufan/3.webp
  - /assets/fufan/4.webp
  - /assets/fufan/5.webp
  - /assets/fufan/6.webp
---

### Resumen del Proyecto

FuFan ([fufanexperience.com](https://www.fufanexperience.com)) es una agencia de talento de entretenimiento que cura espectáculos en vivo (magia, acrobacia, música, danza, humor) para hoteles, cruceros y experiencias VIP. La marca es un homenaje a dos nombres de la magia argentina, y su identidad es dark-first con un único acento dorado. El sitio tiene dos trabajos: venderles shows a los locales y dejar que los artistas se postulen para sumarse al elenco.

**Lo hice de punta a punta**, desde el sistema de diseño hasta el backend, partiendo del manual de marca del cliente y de un alcance cerrado.

#### Objetivos

- **Vender a los locales** - Presentar qué ofrece FuFan y cómo funciona, con un camino de contacto claro desde cada pantalla.
- **Reclutar artistas** - Que los artistas se registren con fotos y CV, sin que la agencia maneje archivos a mano.
- **Dos idiomas, una sola fuente** - Mantener español e inglés sincronizados sin duplicar markup.
- **Respetar la marca** - Traducir el manual de marca (paleta, tipografía, firma de marco en esquinas) a tokens y componentes reutilizables.
- **Los datos son del cliente** - Dejar las postulaciones en la cuenta de Google del cliente, no en una base de datos a la que no pueda acceder.

#### Flujo de Trabajo del Proyecto

- **Sistema de diseño desde el manual de marca** - Declaré la paleta (negro, marfil, oro y sus variantes) y tres familias tipográficas (Big Shoulders, Archivo, IBM Plex Mono) como tokens de tema de Tailwind 4, y reconstruí la firma de marco en esquinas de la marca como componente reutilizable.
- **Arquitectura bilingüe** - Usé el i18n nativo de Astro con rutas prefijadas, y moví cada texto visible a un único `site-config.json` con claves `es` y `en`, así los cambios de copy del cliente nunca tocan el markup.
- **Sección de servicios fija** - Escribí una sección guiada por scroll que se fija en pantalla y hace crossfade entre servicios con un indicador de progreso, que se activa solo cuando la sección ocupa el viewport y se omite por completo para quienes piden reducir el movimiento.
- **Flujo de contacto** - Armé un endpoint de formulario de contacto sobre Resend con campo honeypot y chequeo de tiempo mínimo, más un botón flotante de contacto expandible que mantiene al alcance el llamado a la acción de WhatsApp.
- **Registro de artistas** - Construí un endpoint multipart que valida y después crea una carpeta de Drive con fecha por postulante, sube los archivos, agrega una fila en Sheets y notifica por email. Los límites se aplican dos veces, compresión a WebP en el cliente y revalidación en el servidor (3 imágenes de hasta 1 MB, CV de hasta 2 MB, unos 4,3 MB en total), para quedar debajo del tope de requests de Vercel.
- **Refuerzo mobile** - Agregué un menú hamburguesa (en el celular antes no había navegación), resolví el caso de bajo consumo en iOS donde el video del hero no puede reproducirse solo, y escribí una suite de Playwright para los estados de layout mobile.
- **SEO y descubribilidad** - Sumé sitemap con alternates por idioma, datos estructurados de Service y FAQ, una tarjeta OG, set de favicons y manifest, un `llms.txt` generado desde el mismo archivo de copy, y un banner de consentimiento que bloquea GA4 hasta que el visitante acepta.
- **Dominio y email** - Migré al dominio de producción y configuré un subdominio de envío en Resend.

#### Resultados e Impacto

- **Un solo archivo de copy para ambos idiomas** - ES y EN conviven lado a lado en una única config, así que agregar o editar texto es un cambio de datos.
- **Las postulaciones llegan a donde el cliente ya trabaja** - Cada registro se vuelve una carpeta de Drive y una fila de Sheets en la cuenta del cliente, y las fallas se muestran como un error localizado en lugar de un guardado parcial silencioso.
- **Protección anti-bots sin widgets de terceros** - Honeypot y chequeos de tiempo protegen ambos formularios.
- **Movimiento que respeta al usuario** - Los efectos de scroll se apagan con reduced-motion, y el video del hero degrada bien donde el dispositivo no puede reproducirlo.
- **Una experiencia mobile testeada** - Una suite de regresión dedicada cubre estados mobile que el desarrollo normal en desktop nunca ejercita.
