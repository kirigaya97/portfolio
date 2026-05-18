---
title: Sistema de Gestión de Logística Internacional
publishDate: 2026-02-24 00:00:00
img: /assets/logistica/1.png
img_alt: Captura de pantalla del panel de control del sistema de gestión logística internacional.
description: |
  Aplicación web full-stack para gestionar contenedores de carga internacional en tres depósitos: Hong Kong, China y Estados Unidos.
tags:
  - Dev
  - Frontend
  - Backend
technologies:
  - name: Next.js 16 (App Router)
    note: Server components y server actions para fetch de datos y mutaciones sin una capa de API separada.
  - name: Supabase (PostgreSQL)
    note: Base de datos relacional, autenticación e infraestructura para contenedores, clientes y plantillas de costos.
  - name: Tailwind CSS v4
    note: Estilos utility-first con una estética limpia de panel administrativo.
  - name: ExcelJS / XLSX
    note: Importación de packing lists y exportación de reportes de contenedores y simulaciones de costos en Excel.
  - name: dolarapi.com
    note: Proxy a través de una API route de Next.js para obtener tipos de cambio del dólar argentino en tiempo real.
  - name: Zod
    note: Validación de esquemas para inputs de formularios y payloads de server actions.
  - name: TanStack Table
    note: Tabla interactiva y ordenable del packing list con controles de visibilidad de columnas.
  - name: Vercel
    note: Plataforma de hosting con middleware en el edge para protección de rutas basada en autenticación.
screenshots:
  - /assets/logistica/2.png
  - /assets/logistica/3.png
  - /assets/logistica/4.png
  - /assets/logistica/5.png
---

### Resumen del Proyecto

Sistema interno full-stack construido para gestionar operaciones de logística internacional en tres depósitos de origen: Hong Kong, China y Estados Unidos. La aplicación rastrea contenedores de carga a lo largo de todo su ciclo de vida — desde el depósito hasta el despacho de aduana y la finalización — y ofrece herramientas operativas para estimación de costos, planificación volumétrica y gestión de packing lists. Fue desarrollada para operaciones reales de importación y desplegada en Vercel con Supabase como backend.

#### Objetivos

- **Seguimiento del ciclo de vida del contenedor** — Habilitar la gestión completa (CRUD) de contenedores con progresión de estado a través de cuatro etapas: depósito, tránsito, aduana y finalizado.
- **Simulación de costos de importación** — Proporcionar una calculadora de costos configurable y precisa que cubra componentes CIF, derechos aduaneros, impuestos y gastos operativos, con soporte para múltiples tipos de cambio del dólar argentino vía API en tiempo real.
- **Planificación volumétrica** — Permitir a los operadores calcular cuántas cajas entran en un contenedor de 40' HC o 40' Standard por volumen y capacidad de peso antes de la carga.
- **Importación de packing lists** — Soportar la carga de archivos Excel con mapeo flexible de columnas para importar listas de ítems directamente al packing list de un contenedor.
- **Gestión de clientes** — Mantener un directorio de clientes vinculado a contenedores y envíos.
- **Exportación de datos** — Exportar listados de contenedores e informes de costos a Excel para reporting.

#### Flujo de Trabajo del Proyecto

- **Planificación de arquitectura** — Se definió el roadmap de funcionalidades usando un sistema de JIT Context Assembly — una capa de contexto por directorio diseñada para guiar el desarrollo asistido por IA con planes de implementación estructurados por feature.
- **Auth y fundaciones (F1)** — Se implementó autenticación con Supabase usando manejo de cookies SSR vía `@supabase/ssr` y redirects de middleware en Next.js para proteger todas las rutas.
- **CRUD de contenedores (F2.1)** — Se construyeron flujos completos de creación, lectura, actualización y eliminación de contenedores, incluyendo selección de depósito de origen (HK, China, USA), tipo de contenedor, ETA y seguimiento de estado.
- **Importación de packing list (F2.2)** — Se desarrolló un pipeline de parseo de Excel con `xlsx` y `exceljs` y un mapeador interactivo de columnas para ingesta flexible de CSV/XLSX.
- **Calculadora volumétrica (F3.1)** — Motor de cálculo puro que computa la cantidad de cajas por contenedor en función de dimensiones y peso, con salida de porcentaje de utilización.
- **Calculadora de costos (F3.2)** — Motor de costos multi-etapa (FOB → CIF → derechos → impuestos → gastos operativos → costo de aterrizaje total) con plantillas de matriz de costos configurables y selección de tipo de cambio en tiempo real.
- **Exportaciones a Excel (F7)** — Se agregó funcionalidad de exportación para contenedores y resultados de simulación usando `exceljs`.
- **Responsividad mobile (F9)** — Se implementó un sidebar responsive con menú hamburguesa y ajustes de layout mobile-first.

#### Resultados e Impacto

- **Cobertura operativa** — El sistema cubre el flujo de gestión de contenedores de punta a punta, desde la creación hasta la finalización, en tres puntos de origen internacionales.
- **Precisión en costos** — La matriz de costos configurable permite a los operadores modelar distintos escenarios de importación con tipos de cambio en tiempo real, reemplazando cálculos manuales en planillas.
- **Ahorro de tiempo en packing lists** — El flujo de importación Excel con mapeo dinámico de columnas elimina la carga manual de datos a nivel de ítem logístico.
- **Acceso mobile** — El layout responsive permite al personal de logística consultar el estado de contenedores y fechas estimadas de tránsito desde dispositivos móviles.
