---
title: "Una planilla como único backend"
description: "SADA gestiona un padrón político-electoral sobre Google Sheets. Fue la decisión correcta, y acá está el porqué."
publishDate: 2026-07-22
tags: ["Next.js", "Arquitectura", "Restricciones"]
---

SADA es una aplicación web interna para gestionar el padrón político-electoral de un partido en San Antonio de Areco. Multiusuario, treinta y cuatro campos por registro, analíticas, exportaciones, un flujo de revisión masiva de domicilios. Next.js en el front.

No hay base de datos. El backend es una planilla de Google.

Todos mis instintos dicen que hay que corregir eso. No lo hice, y volvería a tomar la misma decisión.

## Empezar por donde vive el dato

El padrón ya existía en una planilla. Vivía ahí hacía años. Las personas que lo mantenían sabían usarla, confiaban en ella y podían abrirla desde el teléfono en una reunión sin pedirle permiso a nadie.

Migrar a Postgres habría sido más limpio técnicamente y peor en la práctica. Habría tomado la única herramienta que el cliente controlaba por completo y la habría reemplazado por una a la que solo llega a través de software que escribí yo. Si mi aplicación se rompe, o yo desaparezco, o se vence el hosting, su padrón queda inalcanzable. Para una organización política chica eso no es un riesgo hipotético: es el curso normal de los acontecimientos.

Quedarse en Sheets significó que el dato sobreviva a la aplicación. Eso es una virtud, y valía un costo real de ingeniería.

## Cuál fue ese costo

Sheets es una API de planilla de cálculo haciéndose pasar por capa de datos, y esa impostura se paga.

**Las columnas se mueven.** Alguien inserta una columna y todos los índices hardcodeados de tu código apuntan en silencio al campo equivocado. Ese es el modo de falla, y es silencioso, que es lo que lo vuelve peligroso. Así que nada direcciona columnas por posición. Hay una abstracción de mapa de columnas entre la aplicación y la planilla, y es la pieza de código más importante del proyecto.

**No hay restricciones.** Ni tipos, ni claves foráneas, ni unicidad. Todo lo que la planilla no vaya a exigir lo tiene que exigir la aplicación, lo que significa que la validación no es una capa de comodidad: es la única capa.

**Borrar es peligroso.** Las filas no son filas en el sentido de una base de datos, y sacar una corre todo lo que está debajo. Por eso el borrado es lógico y no físico: un campo de estado pasa a inactivo y el registro se queda. Nada se destruye con un clic.

**Las escrituras son angostas a propósito.** El flujo de corrección masiva de domicilios escribe solo las columnas que le corresponden y nunca toca los campos de solo lectura, porque una escritura amplia contra una planilla compartida en vivo es la forma de perder una tarde de trabajo ajeno.

## La lección general

La restricción interesante en la mayoría de los proyectos reales no es técnica. Es la forma de la vida que el cliente ya tiene, y la arquitectura correcta suele ser la que la respeta y no la que quedaría mejor en un diagrama.

Podría haber discutido por una base de datos, y habría ganado la discusión, porque habría tenido razón en lo técnico y me habría equivocado en el resultado. Tener razón no es el trabajo.
