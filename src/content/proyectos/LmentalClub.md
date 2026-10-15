---
title: "LMental Club: Club de Mentalismo en Vivo con Niveles de Membresía y Cobro a Medida"
publishDate: 2026-10-09 00:00:00
url: https://www.lmentalclub.com
img: /assets/lmentalclub/1.webp
img_alt: Hero de LMental Club sobre fondo violeta oscuro con el logo plateado y violeta, la frase "Un encuentro mensual donde el mentalismo sucede en tiempo real" y dos botones.
description: |
  El sitio de LMental Club, un club mensual de mentalismo en vivo (presencial y online) con tres niveles de membresía: una landing de una página en Astro, más un flujo de preventa propio, una pantalla de cobro en sala y las pantallas de escenario del evento de lanzamiento.
tags:
  - Design
  - Dev
  - Frontend
  - Backend
  - Branding
technologies:
  - name: Astro 7
    note: Landing estática más rutas de servidor, desplegada en Vercel con el adaptador de Vercel.
  - name: Tailwind CSS 4
    note: Capa de utilidades sobre un sistema de diseño con tokens y una paleta violeta y plata derivada del logo.
  - name: accessible-astro-components
    note: Base de accesibilidad (skip link, manejo del foco) heredada del accessible-astro-starter.
  - name: astro-seo
    note: Metadatos y tarjeta para compartir, con una imagen OG generada con los mismos tokens del sitio.
  - name: Google Sheets API (googleapis)
    note: La lista de espera y las ventas se escriben en planillas vía OAuth, así los datos viven en el Drive del dueño.
  - name: Links de pago de PayPal
    note: Links reutilizables por nivel, a los que se llega desde la preventa con el nivel ya elegido.
  - name: Resend
    note: Campañas de mail a la lista de espera, enviadas desde un script local.
  - name: Playwright y sharp
    note: Generación de la tarjeta para compartir y de las variantes de imagen.
screenshots:
  - /assets/lmentalclub/2.webp
  - /assets/lmentalclub/3.webp
  - /assets/lmentalclub/4.webp
  - /assets/lmentalclub/5.webp
  - /assets/lmentalclub/6.webp
---

### Resumen del Proyecto

LMental Club ([lmentalclub.com](https://www.lmentalclub.com)) es un club mensual de mentalismo que sucede en vivo, presencial y online, con tres niveles de membresía. El sitio es su puerta de entrada: tiene que explicar qué pasa adentro (el encuentro mensual, los conversatorios y los grupos de estudio), mostrar lo que ya tiene fecha y llevar al visitante al nivel indicado y al pago.

**Terminó siendo más que una landing.** Alrededor del evento de lanzamiento, el repo también contiene el flujo de preventa, una pantalla de cobro en sala con PIN, contadores públicos para la sala y las pantallas del escenario (apertura, diapositivas, timer), todo dentro del mismo proyecto Astro.

#### Objetivos

- **Un solo scroll claro** - Presentar el club, la agenda, los niveles y la lista de espera en una única página que se lee de arriba hacia abajo.
- **Del nivel al pago** - Que los botones de cada nivel lleven el plan elegido a la preventa y de ahí a PayPal.
- **Operar el lanzamiento desde el mismo código** - Cubrir el evento en vivo (cobros en sala, contadores de lugares, pantallas de escenario) sin herramientas aparte.
- **Accesible desde el inicio** - Mantener funcionando teclado, foco y reducción de movimiento desde el comienzo.

#### Flujo de Trabajo del Proyecto

- **Sistema de diseño guiado por la marca** - Armé los tokens, la base y las utilidades en una sola hoja de estilos, con una paleta violeta y plata tomada del logo. El favicon es un SVG dibujado a mano, porque el recorte del logo no se sostenía a 16px.
- **Landing de una página** - Dividí la página en componentes con un propósito cada uno (hero, manifiesto, qué pasa adentro, agenda, formato, niveles, lista de espera) sobre un único layout con SEO, skip link y revelado al scroll.
- **Lista de espera con doble validación** - El formulario se valida en el navegador y otra vez en la ruta del servidor, que escribe la fila en Google Sheets. Dos trampas antispam (un campo oculto y un chequeo de tiempo mínimo) responden `ok` sin guardar nada, para que el bot no aprenda nada.
- **Preventa y lógica de precios** - Construí `/fundadores` y las rutas `/api/cobro/*`: nivel, cantidad de meses, datos y PayPal. La fase de promo fundadora se decide con una fecha de cierre en `src/data/cobro.ts`, al construir y otra vez en el navegador, así la landing pasa a precios de lista después del corte.
- **Pantalla de cobro en sala** - Una pantalla `/cobro` protegida con PIN registra las ventas en una planilla, con endpoints de cotización y arqueo de efectivo, y un contador público en `/socios` para proyectar.
- **Pantallas de escenario** - `/apertura`, `/presentacion` (tema oscuro y claro) y `/timer`, todas manejadas con atajos de teclado, pensadas para proyector.
- **Campañas de mail** - Mails en HTML enviados a la lista de espera con un script local sobre Resend, con reporte de estado por envío.
- **Pipeline de imágenes** - Los recortes del logo, la tarjeta para compartir y las variantes de imagen se regeneran desde dos archivos fuente con sharp y Playwright.

#### Resultados e Impacto

- **Un proyecto, todo el lanzamiento** - Landing, lista de espera, preventa, cobros en sala, contadores públicos y pantallas de escenario conviven en un solo código Astro, con las rutas documentadas.
- **Datos en las herramientas del dueño** - La lista de espera y las ventas van a Google Sheets vía OAuth, sin base de datos que mantener.
- **Validación donde importa** - Cada formulario se revisa también en el servidor y no solo en el navegador, con trampas antispam que no se delatan.
- **Lógica de promo con un solo interruptor** - La fase fundadora cierra desde una constante, así el pase a precios de lista no requiere editar la página a mano.
