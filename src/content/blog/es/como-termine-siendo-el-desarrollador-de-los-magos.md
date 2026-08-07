---
title: "Cómo terminé siendo el desarrollador de los magos"
description: "Cinco sitios de magos después, un nicho accidental resultó enseñarme más sobre interfaces que la mayoría del trabajo de cliente."
publishDate: 2026-06-25
tags: ["Diseño", "Nicho", "Mentalismo"]
---

En algún momento noté que una proporción sospechosa de mi portfolio eran magos. ChapMagic. Guillermo Flores. Vázquez. Magia y Burbujas. Santiago Fernández. Mentalismo corporativo, magia de cerca, shows de burbujas, teatro.

Nada de eso fue estrategia. Yo mismo soy mentalista, así que conocía gente de ese mundo, y un proyecto se volvió una recomendación que se volvió otro. Así se forman casi todos los nichos en la práctica.

Pero se convirtió en una especialización real, y me enseñó cosas que se trasladan.

## El brief es siempre el mismo y nunca el mismo

Todos estos sitios tienen el mismo trabajo: convencer a alguien que nunca vio a este artista de que vale la pena pagar por una hora con él. Es una venta difícil, porque el producto es una experiencia que no se puede probar, y la única evidencia honesta son las reacciones de otras personas.

La variación está en el tono, y la distancia de tono es enorme. Guillermo Flores necesitaba algo gótico y teatral, oscuro, ornamentado, más cerca de una estampa de Edgar Allan Poe que de una página de servicios. Magia y Burbujas necesitaba algo cálido y abierto, un artista callejero haciendo shows de burbujas para familias en Barcelona, donde esa misma estética habría estado activamente mal.

El mismo problema de conversión, registro emocional opuesto. Construir los dos me enseñó más sobre el tono como requisito funcional que cualquier cantidad de teoría.

## La atmósfera es un problema de presupuesto de performance

Todos estos sitios quieren sentirse como algo. Eso empuja fuerte hacia imágenes pesadas, video, movimiento elaborado, y directo a una primera carga lenta.

Lo cual es fatal, porque buena parte del tráfico llega desde un teléfono, desde un link de Instagram, con la conexión que la persona tenga en ese momento. Un sitio cinematográfico que tarda seis segundos en aparecer ya perdió la discusión que estaba dando sobre calidad de producción.

Por eso estos proyectos son donde me puse estricto. Fuentes self-hosted en lugar de una ida y vuelta a un CDN. Movimiento restringido a opacidad y transform para que se quede en el compositor. Movimiento reducido respetado. En Ilusionista, un presupuesto explícito: menos de 100 KB de JavaScript en la primera carga, con una estética que parece que debería costar mucho más. La disciplina salió de este nicho y ahora la aplico en todos lados.

## Lo que realmente me dio actuar

La transferencia útil no es visual. Es estructural.

Un número de magia y una landing page tienen el mismo trabajo de fondo: controlar el orden en que alguien recibe la información. Qué nota primero, qué demorás, qué lo dejás concluir por su cuenta. Un truco que revela en el orden equivocado no es un truco, es una secuencia de hechos. Una página que revela en el orden equivocado no persuade, es una lista de datos.

Los dos fallan igual. Los dos se arreglan preguntando qué sabe la persona en cada momento, y qué debería estar preguntándose después.

No planifiqué el nicho. Pero ser el desarrollador que ya entiende lo que hace el cliente termina valiendo más que ser el desarrollador con la lista de tecnologías más larga, y volvería a hacer ese canje.
