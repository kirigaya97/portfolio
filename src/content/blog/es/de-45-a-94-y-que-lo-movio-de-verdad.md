---
title: "De 45 a 94, y qué lo movió de verdad"
description: "Un puntaje de Lighthouse es un síntoma, no un objetivo. Qué cambió realmente debajo en la reconstrucción de CAPFA."
publishDate: 2026-08-13
tags: ["Performance", "WordPress", "Lighthouse"]
---

CAPFA Constructora es una constructora cuyo sitio sacaba 45 en performance de Lighthouse. Después de la reconstrucción sacó 94.

Quiero usar ese número con cuidado, porque un puntaje de Lighthouse es un síntoma. Nadie entra a un sitio web para experimentar un buen puntaje. Lo que cambió de verdad fue un conjunto de decisiones concretas, y el número se movió por eso.

## El puntaje no es el objetivo

La trampa de una métrica de performance es que es fácil de manipular. Podés perseguir el 100 difiriendo todo, cargando en lazy contenido que debería ser inmediato, y vaciando la página hasta que la métrica esté contenta y el sitio esté peor.

Así que el objetivo nunca fue 94. El objetivo era un sitio que llegue rápido con la conexión que tiene un cliente potencial real, y que el cliente pueda actualizar sin ir destruyéndolo de a poco. El puntaje es cómo lo verifiqué, no a lo que apunté.

## De dónde venía el 45

El patrón le va a resultar familiar a cualquiera que haya heredado un WordPress de cierta antigüedad. No había nada catastróficamente mal. Había muchos costos chicos, cada uno defendible por separado, que sumados pesaban.

Un plugin para una funcionalidad que eran tres líneas de código. Otro cuyo único trabajo era un botón de contacto. Cada uno cargando su propio CSS y su propio JavaScript en todas las páginas del sitio, incluidas aquellas donde la funcionalidad ni aparecía.

Ese es el peso real de un plugin, y es invisible desde el admin. Vos ves una fila en una lista. El navegador ve dos pedidos más en cada carga.

## Qué lo movió realmente

**Menos plugins haciendo trabajos triviales.** El botón de WhatsApp es el caso más claro. Era un plugin. Pasó a ser un fragmento chico de JavaScript en el tema, que hace lo mismo y no cuesta nada en las páginas que no lo usan. Cuando la funcionalidad es genuinamente chica, escribirla sale más barato que instalarla, y la diferencia se acumula en todo el sitio.

**PHP a medida en vez de capas de configuración.** Varios comportamientos se estaban logrando configurando algo genérico para que se aproximara a lo que hacía falta. Escribir directamente la cosa específica eliminó el plugin y la aproximación al mismo tiempo.

**Una estructura por componentes.** Las herramientas modulares de Divi más funciones PHP propias, para que los elementos repetidos se definieran una sola vez. Es una decisión de mantenibilidad más que de performance, pero las dos están relacionadas: un sitio que el cliente puede actualizar sin romperlo es un sitio que sigue sacando 94 un año después.

**Estructura acorde al contenido.** Plantillas para las páginas que efectivamente se repiten, que es donde vive el contenido de una constructora.

## La parte que nadie mide

El puntaje se validó con Lighthouse, Google Analytics y otras herramientas de testeo, y se sostuvo.

Pero el resultado que defendería en una entrevista no es el 94. Es que CAPFA hoy actualiza su propio sitio, y el trabajo de performance no se deshizo solo la primera vez que alguien agregó una página. Un sitio rápido que solo sigue siendo rápido mientras el desarrollador está mirando no está arreglado. Está afinado, que es una cosa distinta y bastante más débil.

Optimizar una página una vez es una tarea. Dejarla en un estado donde el cliente no pueda volver a hacerla lenta con facilidad es el trabajo de verdad.
