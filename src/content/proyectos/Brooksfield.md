---
title: "Brooksfield: Tienda Online de Indumentaria"
publishDate: 2023-06-01 00:00:00
img: /assets/brooksfield/1.webp
img_alt: Home de Brooksfield con el hero de campaña de temporada Otoño/Invierno.
description: |
  Una tienda PrestaShop de impronta editorial para Brooksfield Argentina, la marca italiana de indumentaria masculina y femenina, con layouts de campaña por temporada, un árbol de categorías extenso y mensajes de compra localizados, entregada como parte de un equipo de desarrollo.
tags:
  - Dev
  - Frontend
  - Design
technologies:
  - name: PrestaShop
    note: Plataforma de e-commerce detrás del catálogo, el carrito y el checkout.
  - name: IqitElementor
    note: Constructor visual usado para los layouts de campaña y landings sobre PrestaShop.
  - name: Tema PrestaShop a medida
    note: Un tema brooksfield propio en lugar de una plantilla de stock, con bundles de assets compilados.
  - name: Suite de módulos IQIT
    note: Mega menú, búsqueda en vivo, fichas de producto extendidas y gestión de enlaces en toda la tienda.
  - name: HTML, CSS, JavaScript
    note: Trabajo de templates y estilos en la capa del tema, incluidas las composiciones de la grilla de campaña.
screenshots:
  - /assets/brooksfield/2.webp
  - /assets/brooksfield/3.webp
  - /assets/brooksfield/4.webp
  - /assets/brooksfield/5.webp
---

### Resumen del Proyecto

Brooksfield ([brooksfieldstore.com](https://www.brooksfieldstore.com/)) es una marca italiana de indumentaria con tienda online propia en Argentina. El sitio tiene que funcionar como dos cosas a la vez: una vidriera de campaña donde la fotografía sostiene la marca, y un catálogo lo suficientemente profundo como para manejar una línea completa de hombre y mujer repartida en decenas de categorías.

**Fue un trabajo en equipo.** Participé como parte del equipo de desarrollo del proyecto, no como desarrollador único.

Una aclaración sobre el stack: es una tienda **PrestaShop**, no WordPress. El constructor de páginas es IqitElementor, un módulo de PrestaShop, que es un producto distinto del plugin de WordPress de nombre parecido.

#### Objetivos

- **Presentación guiada por campaña** - Dejar que la fotografía de temporada lidere la home sin convertir la tienda en un lookbook que no vende.
- **Profundidad navegable** - Hacer recorrible un árbol de categorías extenso, entre líneas de hombre, mujer y accesorios.
- **Mensajes comerciales localizados** - Exponer los factores que definen la compra en el mercado argentino (cuotas, mínimo de envío gratis, entrega en el día) donde efectivamente inciden en la decisión.
- **Sistema de marca consistente** - Mantener coherencia de tipografía, espaciado y tratamiento de imagen mientras el contenido de temporada entra y sale.

#### Flujo de Trabajo del Proyecto

- **Capa de tema** - Trabajamos sobre un tema PrestaShop propio (`brooksfield`) con bundles de CSS y JS compilados, en lugar de customizar una plantilla de stock desde el admin.
- **Composiciones de campaña** - Armamos la home como bloques editoriales apilados: un hero de temporada a sangre completa, después grillas partidas y mosaicos rotulados por categoría (Jackets, Sweaters, Pantalones, Buzos, Especial Abrigos), todo con IqitElementor, para que marketing pueda rearmar una temporada sin un deploy.
- **Navegación del catálogo** - Configuramos el mega menú y la búsqueda en vivo de IQIT sobre toda la estructura de categorías, con landings de categoría que tienen su propio tratamiento de hero.
- **Comportamiento del listado** - Dejamos la grilla de productos con manejo de variantes, badges de stock y descuento, y una paginación dimensionada para la profundidad del catálogo.
- **Mensajes comerciales** - Ubicamos los planes de cuotas (3/6/9 cuotas sin interés, Visa–Amex–Mastercard), el mínimo de envío gratis y la entrega Same Day / Next Day CABA–GBA en la franja fija del header.
- **Integración de tracking** - Conectamos el seguimiento de conversiones para la atribución de campañas pagas.

#### Resultados e Impacto

- **Tienda editorial que igual funciona como catálogo** - La fotografía de campaña lidera la experiencia mientras la línea completa queda a dos clics.
- **Autonomía de marketing** - Los cambios de temporada se hacen desde el constructor, así que el tiempo de salida de una campaña no depende de la disponibilidad de un desarrollador.
- **Alcance de plataformas** - Demuestra entrega de e-commerce en PrestaShop, además del trabajo en WooCommerce presente en este portfolio.
- **Entrega en equipo** - Construido de forma colaborativa dentro de un código existente y un sistema de marca ya establecido.
