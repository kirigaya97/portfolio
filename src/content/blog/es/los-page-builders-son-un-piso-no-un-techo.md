---
title: "Los page builders son un piso, no un techo"
description: "A Divi y ACF se los descarta como arrastrar y soltar. En JC Consultora fueron la base de dos piezas de PHP a medida."
publishDate: 2026-07-30
tags: ["WordPress", "PHP", "ACF"]
---

Hay un reflejo en este rubro: se escucha "Divi" o "Elementor" y se asume que la persona arma páginas y no escribe código. Entiendo de dónde viene. También me parece un atajo perezoso, y JC Consultora es el sitio que señalo para decirlo.

Es una consultora inmobiliaria de Buenos Aires. WordPress, un child theme de Divi, ACF debajo. En la superficie, un stack común. Dos cosas ahí están escritas en PHP, y las dos existen porque la versión con plugin era peor.

## Primero modelar el dato

Antes de todo el trabajo a medida, las propiedades tenían que dejar de ser páginas. Una publicación escrita como prosa en el cuerpo de una página no es un dato: es un documento que casualmente menciona un barrio. No se puede consultar, ni filtrar, ni reutilizar.

Así que la propiedad pasó a ser un registro: ciudad, barrio, tipo de operación, características, imágenes, todo como campos ACF estructurados sobre un post type propio. Todo lo que vino después depende de esa decisión. Es el trabajo menos visible del sitio y la razón por la que el resto fue posible.

## El filtro

El sitio tenía que dejar acotar el catálogo por ubicación antes de recorrer nada. El movimiento obvio es un plugin de filtros. En cambio, escribí la capa de consulta a mano.

La razón no es purismo. Los plugins de filtrado genéricos están hechos para manejar cualquier esquema que se le ocurra a cualquiera, lo que significa que arrastran mucha maquinaria que no vas a usar, y meten una capa entre vos y tus propias consultas. Yo ya tenía definida la forma exacta del dato. Consultarlo directo era menos código que configurar un plugin para que la adivine.

El control está en el hero, ciudad y barrio, con una acción de filtrar. Lo primero que ve el visitante es la puerta de entrada.

## El botón de WhatsApp que sabe dónde está

Esta es la pieza que más me gusta, y es más ocho líneas de pensamiento que ochocientas de código.

La mayoría de los botones de WhatsApp abren una conversación en blanco. El visitante tiene que explicar quién es y qué estaba mirando, y una buena parte directamente no se toma el trabajo. El interés estaba y la fricción se lo comió.

Entonces el botón arma su propio mensaje según la página en la que está. En una ficha de propiedad, abre la conversación con la URL y el título ya escritos. El visitante manda "Hola, quiero más información sobre esta propiedad: [url] - [título]" sin tipear nada.

Dos consecuencias. El costo de preguntar baja a un toque. Y la inmobiliaria recibe la referencia de la propiedad en el primer mensaje, en lugar de tener que preguntar de qué se trata la consulta.

Se genera por propiedad, así que sigue siendo correcto a medida que cambia el catálogo y nadie lo mantiene a mano. Podés abrir cualquier ficha en el sitio y leer el link.

## El punto de fondo

El builder nunca fue la restricción. Divi resolvió la presentación, que es en lo que es bueno, y me liberó para gastar el trabajo a medida donde cambiaba el resultado. Negarse a tocar un page builder no es una marca de seriedad como ingeniero. Saber a qué capa pertenece cada problema, sí.
