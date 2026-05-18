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
