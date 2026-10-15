---
title: "Etiquetar plantillas para una IA que nunca ve el ejemplo"
description: "En UENI, un pipeline de IA llena plantillas de Elementor con los textos e imágenes de cada cliente. Me ocupo del sistema de placeholders que lee, y la primera lección fue que el nombre hace más de lo que parece."
publishDate: 2026-10-01
tags: ["IA", "WordPress", "Elementor"]
---

En UENI, los sitios de los clientes los genera un pipeline de IA que el equipo llama WPPA. Toma una plantilla maestra de Elementor, lee sus slots de placeholder y llena cada uno con textos e imágenes escritos a partir de los datos que cargó el propio cliente. Una plantilla se convierte en cientos de sitios distintos de pequeños negocios.

WPPA no lo construí yo. Mi trabajo es la capa que lee: el **sistema de etiquetado de placeholders** en unas treinta familias de plantillas, cada una con una variante business, services y store. Si un slot está mal nombrado, todos los sitios generados desde esa plantilla heredan el error.

## Lo que la IA recibe de verdad

Lo primero que hice fue dejar de suponer y averiguar exactamente qué recibe el modelo por cada campo.

Recibe el nombre del campo, una instrucción de largo, un brief de la sección y un brief de la página. **Nunca ve el texto de ejemplo** que está en la plantilla. Ese ejemplo cumple dos funciones, y ninguna es "ejemplo para la IA": su cantidad de palabras se convierte en la instrucción de largo, y hace que la plantilla se vea terminada para las personas que la editan.

Ese solo dato reordenó todo. Un párrafo de ejemplo muy bien escrito es invisible para el modelo. Un nombre descuidado no.

## El nombre lleva el tema

Como el modelo nunca ve el ejemplo, **el nombre del placeholder es el tema**. Y lo lee de forma literal.

El ejemplo más claro: un slot de imagen llamado `Hands-At-Work`. La intención era alguien trabajando en un oficio. Lo que volvió fueron manos. Solo manos, sueltas, trabajando. El modelo hizo exactamente lo que se le pidió.

Va más allá de un campo. Los briefs de sección se escriben de nuevo en cada armado, a partir de los datos del cliente y de los nombres de los placeholders de esa sección. Así que un nombre no solo orienta su propio slot, orienta el brief de todo lo que tiene alrededor. Si nombrás los slots de una sección según el negocio de ejemplo de la plantilla, la sección entera se corre hacia ese negocio.

## El ejemplo lleva el largo

Una vez que lo ves, la división de roles es limpia: **el nombre define de qué trata un campo, la cantidad de palabras del ejemplo define cuánto mide.**

Eso significa que renombrar un slot no puede arreglar un campo que vuelve demasiado largo. Solo editar el ejemplo puede. Aprendí a leer cada cambio propuesto mirando las dos partes, porque un "renombre" que además acortó el ejemplo en silencio parecería que funcionó por el renombre.

## Hay cosas que no vale la pena etiquetar

No todo texto debería ser un slot. Etiquetas de botón como "Read More" o "Send Message" son interfaz genérica. El modelo, con un slot de dos palabras y sin ejemplo, llegaba a la misma etiqueta genérica de todos modos. Etiquetarlas suma riesgo y nada de valor. Para dejar una etiqueta fija, se deja el widget sin placeholder.

Lo mismo vale, y más en serio, para todo lo que no se debe inventar: reseñas, calificaciones, estadísticas, premios, personas. En esas secciones se etiqueta el texto que las rodea y nada más.

## Verificado no es generado

La última lección es sobre el tiempo. WPPA arma a partir de una foto tomada cuando se captura la plantilla, no desde la plantilla en vivo. Puedo renombrar, reetiquetar y verificar un slot por REST, verlo correcto en el sitio, y que igual no cambie nada para los clientes hasta que el equipo vuelva a capturar.

Así que "terminado" tiene dos significados, y los reportes que escribo dicen cuál aplica.

## Por qué valía la pena hacerlo con cuidado

Prompt engineering suele significar escribir un prompt. Acá el prompt está repartido en cientos de nombres dentro de un page builder visual, escritos por distintas personas a lo largo del tiempo, y leídos por un modelo que los toma al pie de la letra.

Tratar esos nombres como una interfaz, con reglas, un vocabulario y un linter, es lo que convirtió un conjunto de plantillas en algo que genera de forma predecible. Las herramientas que lo hacen posible son el próximo post.
