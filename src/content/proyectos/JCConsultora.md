---
title: "JC Consultora: Sitio Inmobiliario con Filtrado PHP a Medida"
publishDate: 2025-06-01 00:00:00
img: /assets/jcconsultora/1.webp
img_alt: Home de JC Consultora con el filtro de propiedades por ciudad y barrio sobre el hero.
description: |
  Un sitio inmobiliario para JC Consultores Inmobiliarios, desarrollado en solitario sobre WordPress con Divi y ACF como base de dos funcionalidades PHP a medida: un filtro de propiedades hecho a mano y un botón de WhatsApp que arma su mensaje según la página en la que está.
tags:
  - Dev
  - Backend
  - Frontend
  - Design
technologies:
  - name: WordPress
    note: Las propiedades las mantiene la inmobiliaria sin intervención de desarrollo.
  - name: Divi (child theme)
    note: Base de maquetación, extendida mediante un child theme donde vive el PHP a medida.
  - name: ACF
    note: Campos estructurados de la propiedad (ciudad, barrio, tipo de operación, características) que el código propio consulta.
  - name: PHP a medida para el filtro de propiedades
    note: Filtrado hecho a mano sobre el post type de propiedades, en lugar de un plugin de filtros.
  - name: PHP a medida para el botón de WhatsApp contextual
    note: Arma el mensaje saliente a partir de la propiedad actual, para que la conversación arranque con el interés real del visitante.
  - name: Scroll sequence
    note: Secuencia de hero fija y guiada por scroll en la vista de inicio.
screenshots:
  - /assets/jcconsultora/2.webp
  - /assets/jcconsultora/3.webp
  - /assets/jcconsultora/4.webp
  - /assets/jcconsultora/5.webp
---

### Resumen del Proyecto

JC Consultores Inmobiliarios ([jcconsultora.com.ar](https://jcconsultora.com.ar/)) es una consultora inmobiliaria de Buenos Aires dirigida por un corredor inmobiliario, tasador y martillero público, que trabaja alquileres temporarios, operaciones de compraventa y desarrollos residenciales. El sitio es un catálogo de propiedades que tiene que responder rápido una sola pregunta (*¿hay algo acá para mí?*) y después llevar al visitante a una conversación.

**Este lo hice solo**, y es el proyecto que muestra Divi y ACF usados como base para desarrollo a medida de verdad, y no como simple armado de páginas. Dos piezas están escritas en PHP, no configuradas con plugins.

#### Objetivos

- **Filtrar, no scrollear** - Que el visitante pueda acotar el catálogo por ubicación antes de recorrer nada.
- **Datos de propiedad estructurados** - Modelar las propiedades como registros reales con campos consultables, no como páginas de texto libre.
- **Contacto con el contexto intacto** - Que la consulta llegue con la propiedad que el visitante estaba mirando.
- **Mantenible por la inmobiliaria** - Que puedan publicar y editar propiedades sin tocar código.

#### Flujo de Trabajo del Proyecto

- **Modelado de datos con ACF** - Definí el registro de propiedad (ciudad, barrio, tipo de operación, características, imágenes) como campos ACF estructurados sobre un post type propio, de modo que cada publicación sea dato consultable y no prosa dentro de una página.
- **Sistema de filtrado PHP a medida** - Construí la capa de filtrado a mano contra esos campos, en lugar de instalar un plugin de filtros. El control está directamente en el hero: selects de **Ciudad** y **Barrio** con una acción *Filtrar*, así lo primero que ve el visitante es la puerta de entrada al catálogo. Los accesos por barrio (Almagro, San Telmo, Caballito, Belgrano) pasan por esa misma capa de consulta.
- **Botón de WhatsApp contextual** - Escribí un botón de contacto en PHP que arma su propio mensaje saliente según el contexto de la página. En una ficha de propiedad, precarga la conversación con el interés ya declarado, con la URL de la propiedad y su título, en vez de abrir con un *"Hola"* en blanco. El mensaje se genera por propiedad, así que sigue siendo correcto a medida que cambia el catálogo y nunca hay que mantenerlo a mano.
- **Child theme de Divi** - Mantuve todo el PHP propio en un child theme para que las actualizaciones de Divi no pisen el trabajo.
- **Plantillas de ficha** - Armé las plantillas de desarrollo y de propiedad alrededor de los campos ACF, con galerías, contexto de ubicación y descarga de brochure.
- **Secuencia de inicio** - Implementé una secuencia de hero fija guiada por scroll en la home, con el filtro siempre disponible por encima.
- **Estructura de servicios** - Ordené las tres líneas de negocio (alquileres temporarios, operaciones inmobiliarias y desarrollos) como caminos diferenciados.

#### Resultados e Impacto

- **Filtrado sin el peso de un plugin** - El catálogo se acota con una capa de consulta hecha a medida, evitando un plugin de filtros genérico y la carga que trae.
- **Consultas que llegan precalificadas** - Como el mensaje de WhatsApp se arma desde el contexto de la página, la inmobiliaria recibe la referencia de la propiedad ya en el primer mensaje, sin tener que preguntar de qué se trata la consulta.
- **Un modelo de contenido mantenible** - Las propiedades son registros estructurados, así que cada publicación nueva hereda automáticamente el filtrado, la plantilla y el comportamiento de contacto.
- **Divi y ACF como base de desarrollo** - El constructor visual resuelve la presentación y el PHP propio resuelve el comportamiento, que es donde está la ingeniería real de este proyecto.
