---
title: "Lineal: Sitio Logístico Bilingüe con Pipeline de Contacto Serverless"
publishDate: 2026-10-14 00:00:00
url: https://linealsoluciones.com
img: /assets/lineal/1.webp
img_alt: Hero de la home de Lineal con una foto de puerto de contenedores, el título "Comercio exterior resuelto de punta a punta" y las tres entradas de servicio Trade, Transporte y Aduana.
description: |
  Un sitio estático bilingüe (ES/EN) para Lineal Soluciones Logísticas, empresa argentina de comercio exterior y logística, hecho con Astro y publicado en Cloudflare Pages, con un formulario de contacto serverless que envía el email y registra cada consulta en Google Sheets.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
technologies:
  - name: Astro
    note: Salida totalmente estática y bilingüe, con una vista por página que recibe el idioma, más sitemap, hreflang, canonical y etiquetas Open Graph.
  - name: TypeScript
    note: Config del sitio, diccionarios de i18n y límites del formulario tipados, compartidos entre el navegador y el servidor.
  - name: Cloudflare Pages Functions
    note: Un único endpoint POST /api/contact se encarga del antispam, el envío de email y el guardado de la consulta.
  - name: Google Workspace (SMTP) y Google Sheets API
    note: Cada consulta se envía por email al equipo y se agrega como fila a una planilla, autenticada con una cuenta de servicio.
  - name: GitHub Actions y Wrangler
    note: Cada push a main compila el sitio y lo publica en Cloudflare Pages.
  - name: Fontsource (Inter, Inter Tight, IBM Plex Mono)
    note: Tipografías auto-hospedadas para títulos, texto y etiquetas monoespaciadas.
  - name: Analítica con consentimiento
    note: Tags de GA4, GTM, Meta Pixel y LinkedIn detrás de Google Consent Mode v2, que cargan solo si están configurados.
screenshots:
  - /assets/lineal/2.webp
  - /assets/lineal/3.webp
  - /assets/lineal/4.webp
  - /assets/lineal/5.webp
---

### Resumen del Proyecto

Lineal Soluciones Logísticas ([linealsoluciones.com](https://linealsoluciones.com)) es una empresa de comercio exterior y logística de Buenos Aires con tres unidades de negocio: Trade (importación y exportación), Transporte (aéreo, marítimo, terrestre y courier) y Aduana. El sitio anterior era un conjunto de páginas de la era PHP, así que el trabajo fue una reconstrucción completa: un sitio estático, rápido y bilingüe que presenta los tres servicios como una oferta integrada y convierte visitas en consultas.

Lo construí de punta a punta, desde la arquitectura de información y el diseño visual hasta el backend del formulario y el pipeline de deploy.

#### Objetivos

- **Una oferta integrada** - Presentar Trade, Transporte y Aduana como un único proveedor de punta a punta, cada uno con su propia página.
- **Bilingüe desde el diseño** - Servir español e inglés con rutas propias y metadatos correctos para buscadores.
- **Captura de consultas confiable** - Asegurar que una consulta nunca se pierda en silencio y que el spam no llegue al equipo.
- **Hosting de bajo mantenimiento** - Salida estática en Cloudflare Pages, con textos y datos de contacto editables en dos lugares.
- **Medición respetuosa de la privacidad** - Soportar analítica y tags publicitarios sin cargar nada antes del consentimiento.

#### Flujo de Trabajo del Proyecto

- **Contenido y estructura** - Retrabajé el contenido del sitio anterior y del folleto de agroalimentos en ocho rutas por idioma (inicio, empresa, servicios, tres páginas de servicio, agroalimentos, contacto), corrigiendo errores de tipeo y quitando el portal de clientes discontinuado. No se agregaron clientes, cifras ni testimonios inventados.
- **Sistema de diseño** - Definí una paleta tinta, papel y naranja como tokens CSS, con Inter Tight para títulos, Inter para texto e IBM Plex Mono para etiquetas y numeración. Los tres cuadrados del logo se repiten en el sitio como motivo de las tres unidades.
- **Arquitectura bilingüe** - Dejé todos los textos en dos diccionarios tipados (`es.ts`, `en.ts`) y todos los datos de contacto y mapas de rutas en un solo archivo de config. Cada página solo llama a una vista compartida con su idioma, así que ES y EN no pueden divergir en estructura. Incluye `hreflang`, URLs canonical, datos JSON-LD de Organization, sitemap y 404.
- **Hero e intro** - Armé un video de hero en loop (cortes de escritorio y mobile, sin audio) que aparece con fundido desde un cuadro fijo equivalente, más un loader animado del logo, una vez por sesión y hecho en CSS puro, que no aparece si no hay JavaScript o cookies.
- **Pipeline de contacto** - Escribí una Cloudflare Pages Function que valida el header de origen, un campo honeypot, el tiempo de llenado (entre 3 segundos y 7 días) y la cantidad de links. El spam recibe una respuesta de éxito falsa para que los bots no aprendan nada. Las consultas válidas se envían por email con SMTP de Google Workspace (con Gmail API como alternativa) y se agregan a Google Sheets como texto crudo, así un `=` tipeado nunca se ejecuta como fórmula. El pedido es exitoso si al menos un destino funcionó.
- **Consentimiento y analítica** - Implementé Google Consent Mode v2 con banner de cookies, puse en cola los eventos de Meta y LinkedIn hasta la aceptación, y un único helper `lslTrack` que dispara eventos de lead, clic en email y descarga de folleto. Los parámetros de campaña y la página de entrada viajan con el formulario al email y a la planilla.
- **Pipeline de deploy** - Configuré GitHub Actions con Wrangler Direct Upload a Cloudflare Pages en cada push a main, más redirecciones de las URLs `.php` viejas y de `www` al dominio sin www.
- **Handoff** - Escribí un documento de traspaso con variables de entorno, DNS, configuración de Google, el flujo del formulario y un modo de falla conocido, para que el cliente pueda operar el sitio sin mí.

#### Resultados e Impacto

- **Una única fuente de verdad por idioma** - Todos los textos viven en dos diccionarios y todos los datos de contacto en un archivo de config, así que cambiar contenido nunca toca el código de maquetación.
- **Formulario sin punto único de falla** - Email y planilla son destinos independientes, y la planilla registra si el email salió.
- **Antispam sin terceros** - Las reglas de origen, honeypot, tiempo y links se aplican sin CAPTCHA, y los límites se comparten entre el `maxlength` del navegador y la validación del servidor desde un solo archivo.
- **Consentimiento respetado por defecto** - Sin IDs de analítica configurados, no se carga ningún script de terceros ni aparece el banner.
- **Continuidad para buscadores** - Las URLs PHP viejas se mapean a las rutas nuevas con redirecciones permanentes, y cada página sale con hreflang y datos estructurados.
- **Deploys sin intervención manual** - Hacer push a main compila y publica el sitio en Cloudflare Pages.
