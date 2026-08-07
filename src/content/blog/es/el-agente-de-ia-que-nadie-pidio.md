---
title: "El agente de IA que nadie pidió"
description: "Construí un agente RAG en United porque una tarea me aburría. Le devolvió al equipo una quinta parte de su capacidad."
publishDate: 2026-08-06
tags: ["IA", "Python", "Automatización"]
---

Lo mejor que entregué en United Airlines no estaba en ningún roadmap. Nadie me lo asignó. Lo hice porque me aburría, y el aburrimiento es una señal que conviene escuchar.

Era productor técnico de contenidos en *Hemispheres*, la publicación de a bordo de United, trabajando dentro de SDL Tridion, un CMS empresarial. El trabajo era ingeniería real: HTML, CSS y JavaScript dentro de un sistema por componentes, mapas interactivos, audio generado por texto a voz, integraciones REST. Pero una porción considerable de cada semana era trabajo repetitivo de carga y validación. Revisar los mismos campos. Confirmar las mismas reglas. Seguir.

La repetición no es solo tediosa. Es cara, y es donde viven los errores.

## Por qué un agente y no un script

Un script cubría la mitad determinística. El problema era que las reglas no eran del todo determinísticas. Buena parte de las verificaciones eran criterios expresados en prosa dentro de una guía de estilo, de esos que una persona aplica bien y una expresión regular no.

Esa es exactamente la forma de problema en la que el RAG sirve de verdad. No "escribime un texto", sino "acá hay un cuerpo de reglas, acá hay un caso concreto, aplicá una cosa sobre la otra y decime qué encontrás". Lo armé en Python con LangChain, lo apunté al material sobre el que necesitaba razonar, y mantuve el alcance angosto a propósito.

## El número, y su versión honesta

Le devolvió al equipo cerca de un veinte por ciento de su capacidad.

La forma honesta de decirlo importa más que la cifra. No reemplazó a nadie, y no hacía la parte interesante del trabajo. Absorbió la capa mecánica para que las personas pudieran gastar su atención en el criterio editorial, que era la parte que realmente necesitaba personas. Capacidad liberada, no puestos ahorrados.

## Lo que aprendí

**Proponé cosas.** El espacio entre notar un problema y que te pidan resolverlo es donde está casi todo el valor, y suele estar vacío. Nadie iba a abrir un ticket titulado "esto es tedioso".

**El alcance angosto sobrevive al contacto con producción.** No construí un asistente general. Construí algo que hacía un solo trabajo poco glamoroso de forma confiable. Los asistentes generales demuestran bien y se rompen en silencio.

**Automatizá la parte que entendés por completo.** Hice el trabajo manual durante meses antes de automatizarlo. Ese tiempo no se perdió: era la especificación.

Lo que vino después pesó tanto como el agente. Una vez que existía, la pregunta dentro de VML dejó de ser si valía la pena y pasó a ser quién más podía hacerlo, y eso terminó en capacitar a toda el área de tecnología en n8n, Flowise y LangChain. Ese es otro post.

La lección a la que vuelvo siempre: si una tarea te aburre tanto que te da fastidio, probablemente la entendés lo suficiente como para automatizarla.
