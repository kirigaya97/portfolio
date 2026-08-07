---
title: "INPOSDOM: Instituto Postal Dominicano"
publishDate: 2024-06-01 00:00:00
img: /assets/inposdom/1.webp
img_alt: Home de INPOSDOM con el slider de destinos internacionales de envío.
description: |
  Un desarrollo WordPress para el sector público: INPOSDOM, el correo nacional de República Dominicana, con seguimiento de envíos, búsqueda de código postal, catálogo de servicios y secciones de transparencia institucional, entregado como parte de un equipo de desarrollo.
tags:
  - Dev
  - Frontend
technologies:
  - name: WordPress
    note: El contenido lo gestiona directamente el equipo de comunicación del instituto.
  - name: Elementor Pro
    note: Sistema de plantillas y theme builder detrás de los layouts y las secciones reutilizables.
  - name: Hello Elementor
    note: Tema base deliberadamente mínimo, para que el peso del estilo viva en el builder y no en overrides del tema.
  - name: Plugins a medida
    note: Los módulos de búsqueda de código postal y de países disponibles corren como plugins propios e independientes.
screenshots:
  - /assets/inposdom/2.webp
  - /assets/inposdom/3.webp
  - /assets/inposdom/4.webp
  - /assets/inposdom/5.webp
---

### Resumen del Proyecto

INPOSDOM (Instituto Postal Dominicano, [inposdom.gob.do](https://inposdom.gob.do/)) es el operador postal nacional de República Dominicana. El sitio es un portal de servicios del Estado: la gente entra para rastrear un envío, buscar un código postal, verificar si un país está habilitado o consultar la información institucional que el organismo está obligado a publicar.

**Fue un trabajo en equipo.** Participé como parte del equipo de desarrollo del proyecto, no como desarrollador único.

#### Objetivos

- **Home orientada al servicio** - Poner primero aquello que la gente realmente viene a buscar (seguimiento, códigos postales, destinos de envío) por encima de lo institucional.
- **Herramientas de autogestión** - Darle respuestas directas al ciudadano en el sitio, en lugar de derivarlo a una línea telefónica o a una sucursal.
- **Transparencia institucional** - Alojar las secciones de rendición de cuentas que un organismo público debe mantener, sin que le tapen el lugar a las herramientas de servicio.
- **Contenido mantenible por el equipo** - Dejar al instituto en condiciones de actualizar destinos, noticias y textos de servicio sin depender de un desarrollador.

#### Flujo de Trabajo del Proyecto

- **Arquitectura de información** - Estructuramos la home alrededor de las tareas principales del ciudadano, con el catálogo de servicios (EMS, Correo Empresarial, Encomienda Postal, Correo Certificado) en un segundo nivel y el contenido institucional debajo.
- **Sistema de plantillas** - Armamos los layouts con el theme builder de Elementor Pro sobre Hello Elementor, manteniendo el tema base al mínimo para que el estilo quede concentrado en un solo lugar y no repartido entre tema y builder.
- **Búsqueda de código postal** - Integramos una interfaz de búsqueda dedicada donde el visitante ingresa una dirección, sector o código postal y obtiene la respuesta ahí mismo.
- **Módulo de países disponibles** - Desarrollamos la sección de destinos como un directorio filtrable por región (América, Asia, Europa, Resto del mundo) con estado de disponibilidad por país, para que el listado refleje la operación real y no una página estática que se desactualiza.
- **Accesos al seguimiento** - Expusimos el seguimiento nacional, internacional y a Cuba como caminos separados y bien rotulados, ya que cada uno consulta una plataforma distinta.
- **Secciones institucionales** - Implementamos el portal de transparencia, el directorio de funcionarios, el foro y la biblioteca de documentos junto con las herramientas de servicio.

#### Resultados e Impacto

- **Portal de servicios unificado** - Seguimiento, códigos postales, catálogo de servicios y disponibilidad de destinos conviven en un mismo sitio, en vez de estar dispersos en plataformas separadas.
- **Menos carga de soporte por diseño** - Las herramientas de autogestión responden en la propia página las consultas de mayor volumen.
- **Gestión de contenido autónoma** - El personal del instituto mantiene destinos, noticias y textos de servicio por su cuenta desde WordPress.
- **Experiencia en sector público** - Trabajo dentro de los requisitos de revisión, accesibilidad y transparencia de un cliente estatal, en equipo y no en solitario.
