import type { UIKey } from './en';

export const es: Record<UIKey, string> = {
  // Nav (audit §2 Nav.astro)
  'nav.home': 'Inicio',
  'nav.work': 'Proyectos',
  'nav.about': 'Sobre mí',
  'nav.menu': 'Menú',
  'nav.blog': 'Blog',
  'nav.contact': 'Contacto',

  // Footer (audit §2 Footer.astro)
  'footer.creditPrefix': 'Diseñado y Desarrollado en Buenos Aires con ',

  // Skills (audit §2 Skills.astro — 3 cards, h2 + p each)
  'skills.card1.title': 'Desarrollo Wordpress',
  'skills.card1.body': 'Con más de 3 años de experiencia, desarrollo experiencias Web únicas',
  'skills.card2.title': 'Marketing y Diseño',
  'skills.card2.body':
    'Con un ojo audáz para el diseño y pensamiento tangencial para Marketing, he hecho triunfar muchos de mis proyectos.',
  'skills.card3.title': 'Enfoque Estratégico',
  'skills.card3.body':
    'Guiado por una visión estratégica, sobresalgo en alinear acciones a corto plazo con objetivos a largo plazo...',

  // Contact CTA (audit §2 ContactCTA.astro)
  'contactCta.heading': 'Querés que trabajemos juntos?',
  'contactCta.button': 'Enviame un mensaje',
  'contactCta.kicker': 'Conversemos',

  // Default meta (audit §2 MainHead.astro)
  'meta.defaultTitle': 'Rodrigo Camino: Desarrollador web',
  'meta.defaultDescription':
    '3+ Años de experiencia en el desarrollo de la Web. Desarrollador web creativo.',

  // Home page (audit §2 es/index.astro)
  'home.hero.title': '¡Hola! Mi nombre es Rodrigo Camino :)',
  'home.hero.tagline': 'Soy un Desarrollador Web Creativo, actualmente en Buenos Aires, Argentina.',
  'home.hero.kicker': 'Desarrollador Web Creativo',
  'home.pill.developer': 'Desarrollador',
  'home.pill.creative': 'Creativo',
  'home.pill.illusionist': 'Ilusionista',
  'home.portrait.alt': 'Rodrigo Camino sonriendo con un fondo degradado celeste y púrpura.',
  'home.work.heading': 'Trabajos Seleccionados',
  'home.work.body':
    'Descubre algunos de mis proyectos destacados realizados para clientes en los últimos años.',
  'home.work.viewAll': 'Ver Todo',

  // Home page — blog teaser (Phase 3)
  'home.blog.heading': 'Del Blog',
  'home.blog.body':
    'Notas ocasionales sobre desarrollo web, diseño y el oficio detrás del trabajo.',
  'home.blog.viewAll': 'Todos los artículos',

  // About page (audit §2 es/about.astro)
  'about.meta.title': 'Sobre mí | Rodrigo Camino',
  'about.meta.description': 'Sobre Rodrigo Camino: Desarrollo experiencias web únicas.',
  'about.hero.title': 'Sobre mi',
  'about.hero.tagline':
    'Gracias por pasar por acá. Pasá, ponete cómodo y veamos un poco de mis experiencias pasadas.',
  'about.background.heading': 'Background',
  'about.background.p1':
    'Rodrigo Camino es un experimentado diseñador y desarrollador web especializado en la creación de sitios web y plataformas digitales visualmente impactantes y centradas en el usuario. Con experiencia en branding, estrategias de marketing digital y diseño UX/UI, Rodrigo combina un enfoque creativo con análisis de datos para ofrecer experiencias digitales funcionales y atractivas.',
  'about.background.p2':
    'Su experiencia abarca diversos sectores, brindando soluciones personalizadas que se alinean con las necesidades y objetivos comerciales de los clientes. Rodrigo también tiene experiencia en estrategia empresarial, especialmente en consultoría para bares, y posee un sólido dominio tecnológico tanto en diseño como en procesos de backend.',
  'about.education.heading': 'Educación',
  'about.education.item1': 'Especialista en Análisis de Sistemas - ORT Argentina (2023 - presente)',
  'about.education.item2': 'Desarrollo en WordPress - Udemy (2021 - 2022)',
  'about.education.item3': 'Desarrollador Backend - CoderHouse (2020 - 2021)',
  'about.education.item4': 'Desarrollador Frontend - EducacionIT (2019 - 2020)',
  'about.skills.heading': 'Habilidades',
  'about.skills.item1': 'Desarrollo Web - WordPress, HTML, CSS, JavaScript, PHP',
  'about.skills.item2':
    'Diseño - Photoshop (Avanzado), Adobe Premiere (Intermedio), Illustrator (Básico)',
  'about.skills.item3': 'Marketing - Email Marketing (MailChimp), Estrategias en Redes Sociales, SEO',
  'about.skills.item4':
    'Gestión de Proyectos - Estrategia Empresarial, Colaboración con Clientes, Automatización de Procesos',
  'about.skills.item5':
    'Habilidades Blandas - Proactividad, Trabajo en Equipo, Adaptabilidad, Orientación al Cliente',

  // Work index page (audit §2 es/proyectos.astro)
  'work.meta.title': 'Mi Trabajo | Rodrigo Camino',
  'work.meta.description': 'Mis proyectos más recientes.',
  'work.hero.title': 'Mi Trabajo',
  'work.hero.tagline':
    'Mira mis proyectos recientes para darte una idea de mi experiencia.',

  // Work index — tag filter (Phase 3)
  'work.filter.label': 'Filtrar proyectos por etiqueta',
  'work.filter.all': 'Todos',
  'work.filter.empty': 'Aún no hay proyectos con esta etiqueta.',

  // Project detail back-link (audit §2 es/proyectos/[...slug].astro)
  'project.back': 'Proyectos',

  // Blog (Phase 3)
  'blog.meta.title': 'Blog | Rodrigo Camino',
  'blog.meta.description': 'Artículos sobre desarrollo web, diseño y oficio, por Rodrigo Camino.',
  'blog.hero.kicker': 'Artículos',
  'blog.hero.title': 'Notas y Artículos',
  'blog.hero.tagline':
    'Artículos ocasionales sobre desarrollo web, diseño y el oficio detrás del trabajo.',
  'blog.empty': 'Aún no hay artículos — vuelve pronto.',
  'blog.readMore': 'Leer artículo',
  'blog.back': 'Blog',

  // Contact page (Phase 3)
  'contact.meta.title': 'Contacto | Rodrigo Camino',
  'contact.meta.description':
    'Ponte en contacto con Rodrigo Camino sobre proyectos de desarrollo web y colaboraciones.',
  'contact.hero.kicker': 'Conversemos',
  'contact.hero.title': 'Ponte en contacto',
  'contact.hero.tagline':
    '¿Tienes un proyecto en mente o solo quieres saludar? Envía un mensaje y te responderé.',
  'contact.aside.heading': 'Otras formas de contactarme',
  'contact.aside.body': '¿Prefieres algo más rápido? Escríbeme directamente.',
  'contact.aside.whatsapp': 'Escribir por WhatsApp',
  'contact.aside.email': 'Enviar un correo',

  // Contact form (Phase 3)
  'contact.form.name': 'Nombre',
  'contact.form.email': 'Correo electrónico',
  'contact.form.message': 'Mensaje',
  'contact.form.submit': 'Enviar mensaje',
  'contact.form.sending': 'Enviando…',
  'contact.form.success': 'Gracias — tu mensaje está en camino. Te responderé pronto.',
  'contact.form.error':
    'Algo salió mal al enviar tu mensaje. Inténtalo de nuevo o escríbeme por WhatsApp.',
  'contact.form.errorRate':
    'Acabas de enviar un mensaje — espera un momento antes de enviar otro.',
  'contact.form.errorName': 'Por favor, ingresa tu nombre.',
  'contact.form.errorEmail': 'Por favor, ingresa un correo electrónico válido.',
  'contact.form.errorMessage': 'Por favor, escribe un mensaje de al menos 10 caracteres.',

  // 404 page (audit §2 NotFoundContent.astro)
  'notFound.title': 'Página no encontrada',
  'notFound.tagline': 'No encontrado',
  'notFound.home': 'Volver al inicio',

  // Language toggle (audit §2 LangToggle.astro)
  'lang.switch': 'Switch Language',
};
