---
title: "Cuándo no usar WordPress"
description: "Construyo sitios WordPress para vivir. La mayoría de mi trabajo reciente no es WordPress, y eso es un criterio, no una moda."
publishDate: 2026-08-20
tags: ["Arquitectura", "WordPress", "Astro"]
---

Construyo sitios WordPress desde 2018 y lo sigo haciendo. También tengo un portfolio donde la mayoría del trabajo reciente es Astro o Next.js. Esas dos cosas no están en tensión, y la explicación no es que me haya cambiado de bando.

WordPress es un gestor de contenidos. La pregunta siempre es si el sitio que tenés adelante tiene contenido que gestionar.

## La pregunta que lo define

No "¿WordPress es bueno?", que no tiene respuesta, sino: **¿quién edita esto, cada cuánto, y qué pasa si nadie lo edita nunca?**

Esa sola pregunta ordena casi todos los proyectos que tomé.

Una constructora que suma páginas de obra, una inmobiliaria que publica propiedades todas las semanas, un correo nacional que actualiza destinos y noticias: eso son operaciones de contenido. Alguien sin perfil técnico necesita cambiar cosas un martes sin llamarme. Para eso existe exactamente un CMS, y agarrar otra cosa porque está más de moda sería resolver mi problema en lugar del suyo.

Una landing de una sola página para un mago, con textos que cambian dos veces al año y una lista de shows básicamente fija: eso no es una operación de contenido. Es un documento. Ponerle un CMS atrás significa instalar una base de datos, un admin, un login, una cinta sin fin de actualizaciones y una superficie de seguridad, todo para que dos veces al año alguien pudiera editar un texto que en la práctica me va a pedir que edite yo.

## Qué pagás por un CMS que no necesitás

El costo no es teórico, y en realidad no es la performance, aunque sea parte.

El costo es que creaste algo que hay que mantener para siempre. Actualizaciones de core, de plugins, deprecaciones de versiones de PHP, una página de login que recibe intentos todo el tiempo, backups que tienen que existir y que hay que probar. Ese mantenimiento lo hago sobre más de diez sitios en producción, así que no lo describo desde afuera. Vale la pena cuando el cliente recibe una operación de contenido a cambio. Es puro sobrecosto cuando no.

Mientras tanto, esa misma landing como build estático no tiene base de datos que comprometer, ni admin al que forzarle la entrada, ni actualización que pueda voltearla a las 3 de la mañana. Además carga más rápido, pero honestamente esa es la mitad menos importante del argumento.

## Dónde cae la línea en realidad

No creo que la división sea "sitios simples estáticos, sitios complejos WordPress". Las landings de magos no son simples. Varias tienen más ingeniería que el trabajo en WordPress, con motores de scroll propios, animación en canvas y presupuestos de performance estrictos.

La división es sobre **quién es dueño del contenido en el tiempo**.

- Contenido que cambia según la agenda de otro, editado por alguien que no soy yo: un CMS.
- Contenido esencialmente fijo, o que voy a editar yo igual: un build estático.
- Una aplicación de verdad, con registros, consultas y usuarios: ninguna de las dos, construí la aplicación.

Esa última importa. SADA es un padrón con treinta y cuatro campos por registro y un flujo de corrección masiva. Logística rastrea contenedores a lo largo de un ciclo de vida. Forzar WordPress hacia eso habría sido posible y habría sido un error, porque son aplicaciones usando un sitio web de abrigo.

## Por qué esto es criterio y no preferencia

La versión honesta es que hoy voy a WordPress por defecto menos que en 2020, y es porque mejoré haciéndome la pregunta, no porque haya dejado de gustarme la herramienta.

Alguien que conoce una sola plataforma va a descubrir que todos los proyectos la necesitan. Eso no es experiencia, es la forma de la caja de herramientas. La habilidad útil es poder decirle a un cliente que vino a pedir un sitio en WordPress que no le hace falta y que esto es lo que sí necesita, y después poder construir cualquiera de las dos.
