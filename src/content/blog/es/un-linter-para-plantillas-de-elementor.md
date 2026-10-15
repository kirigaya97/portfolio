---
title: "Un linter para plantillas de Elementor"
description: "Lint, plan, dry run, GO, push por REST, verificación. El pipeline que armé para reetiquetar decenas de plantillas WordPress para el generador de IA de UENI sin romper ninguna."
publishDate: 2026-10-09
tags: ["WordPress", "Automatización", "Python"]
---

El post anterior fue sobre lo que significa el nombre de un placeholder para una IA que llena plantillas. Este es sobre cómo cambiás cientos de esos nombres en decenas de sitios WordPress en vivo sin romper nada.

La versión corta: dejás de editar plantillas a mano.

## Por qué no abrir Elementor y listo

Una familia de plantillas en UENI son tres sitios WordPress, business, services y store, cada uno con unos cuantos cientos de widgets de Elementor. Etiquetar uno a mano es entrar a cada widget, editar un control, guardar y esperar no haberte salteado ninguno ni escrito mal un nombre. Y después repetirlo en los dos hermanos.

Las ediciones a mano además son invisibles. Después nadie puede decir exactamente qué cambió, y nadie puede deshacerlo limpio.

## El pipeline

Cada plantilla pasa por los mismos pasos, ejecutados por un skill de Claude Code con Python y JavaScript debajo.

**0. Backup.** Un export completo de Elementor y una foto por REST de cada documento, antes que cualquier otra cosa.

**1. Lint.** Un linter en Python lee la foto, nunca el HTML renderizado, y la contrasta con el estándar de etiquetado. Sesenta y un códigos de chequeo en tres frentes: las etiquetas en sí (sintaxis, nombres del vocabulario, rangos de largo del ejemplo, slots de imagen), la jerarquía de títulos (un solo h1, un esquema coherente) y la consistencia de diseño (colores fijos y tipografías fuera de los presets). Además, guardas para secciones que nunca se deben generar, como reseñas y estadísticas.

**2. Plan.** Un archivo de plan, fila por fila: renombrar, reetiquetar, agregar, copiar, quitar etiqueta, cambiar el nivel de un título. Cada fila cita los hallazgos que la justifican. Esta es la parte donde entra el criterio.

**3. Dry run.** El linter corre de nuevo sobre la foto con el plan aplicado en memoria. Ninguna fila planificada puede producir un error.

**4. Aprobación.** Una tabla con cada cambio. Nada se mueve hasta que digo GO, y un GO cubre un sitio.

**5. Aplicar y subir.** El plan se compila en un payload de cambios chico, de unos pocos kilobytes, que se sube por la API REST de WordPress. Cada cambio lleva el valor que espera encontrar, así que un widget que alguien editó mientras tanto se rechaza en lugar de pisarse.

**6. Verificar.** Volver a traer todo, comparar contra el plan, lintear el resultado. Cero errores significa verificado. Si algo falló, ya existe un archivo de rollback.

## Lo que eso dio

En la primera plantilla piloto se aplicaron 129 cambios, se verificaron 129 y no se revirtió ninguno. Desde entonces el mismo pipeline corrió en varias familias, y cada una terminó con cero cambios no planificados y un lint sin errores.

También escala hacia los costados. Las tres variantes de una familia son clones por REST, así que los ids de elementos se comparten. Planificás la primera variante completa, contrastás cada cambio con las fotos de las hermanas y repetís lo que coincide. Las herramientas de familia viven en una sola carpeta compartida, nunca copiadas por familia, así que un arreglo llega a todas a la vez.

## Lo que queda manual, a propósito

El espaciado es solo auditoría. El linter lo reporta y lo arreglo a mano en Elementor, porque un cambio de espaciado aplicado a ciegas es la forma en que los layouts se rompen en tablet. Los arreglos de color y tipografía se pueden aplicar, pero solo como vínculos a los presets globales del kit, y solo cuando se piden.

Algunos widgets rechazan directamente las escrituras por REST. Esos quedan listados para una edición a mano y se revisan después con el mismo paso de verificación.

## El punto

Nada de esto es ingenioso. Es la disciplina aburrida del software, fotos, diffs, dry runs, revisión, aplicada a un lugar donde la gente suele hacer clic y esperar.

Los page builders son una buena forma de diseñar una página. Son una pésima forma de cambiar trescientas de forma consistente. Para eso querés algo que te diga, antes de publicar, exactamente qué está por cambiar.
