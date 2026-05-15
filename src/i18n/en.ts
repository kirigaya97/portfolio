export const en = {
  // Nav (audit §2 Nav.astro)
  'nav.home': 'Home',
  'nav.work': 'Work',
  'nav.about': 'About',
  'nav.menu': 'Menu',

  // Footer (audit §2 Footer.astro)
  'footer.credit': 'Designed & Developed in Buenos Aires with Astro',

  // Skills (audit §2 Skills.astro — 3 cards, h2 + p each)
  'skills.card1.title': 'Wordpress development',
  'skills.card1.body': 'With 3+ years of experience, I develop unique Wordpress online experiences.',
  'skills.card2.title': 'Design and Marketing',
  'skills.card2.body':
    'Having a keen eye for desing and out of the box marketing strategies have led many of my projects to success.',
  'skills.card3.title': 'Strategy-Minded',
  'skills.card3.body':
    'Driven by a strategic vision, I excel in aligning short-term actions with long-term objectives.',

  // Contact CTA (audit §2 ContactCTA.astro)
  'contactCta.heading': 'Interested in working together?',
  'contactCta.button': 'Shoot Me a Message',

  // Default meta (audit §2 MainHead.astro)
  'meta.defaultTitle': 'Rodrigo Camino: Web developer',
  'meta.defaultDescription':
    '3+ years of experience in web design and development. I develop unique Web experiences.',

  // Home page (audit §2 index.astro)
  'home.hero.title': 'Hello! my name is Rodrigo Camino :)',
  'home.hero.tagline': "I'm a Creative Web Developer, now based in Buenos Aires, Argentina.",
  'home.pill.developer': 'Developer',
  'home.pill.creative': 'Creative',
  'home.pill.illusionist': 'Ilusionist',
  'home.portrait.alt': 'Rodrigo Camino sonriendo con un fondo degrade celeste y púrpura.',
  'home.work.heading': 'Selected Work',
  'home.work.body':
    'Take a look below at some of my featured work for clients from the past few years.',
  'home.work.viewAll': 'View All',

  // About page (audit §2 about.astro)
  'about.meta.title': 'About | Rodrigo Camino',
  'about.meta.description': 'About Rodrigo Camino: I develop unique Web experiences.',
  'about.hero.title': 'About',
  'about.hero.tagline':
    'Thanks for stopping by. Read below to learn more about myself and my background.',
  'about.background.heading': 'Background',
  'about.background.p1':
    'Rodrigo Camino is a seasoned web designer and developer specializing in creating visually impactful, user-centered websites and digital platforms. With expertise in branding, digital marketing strategies, and UX/UI design, Rodrigo combines a creative approach with data-driven insights to deliver functional, engaging digital experiences.',
  'about.background.p2':
    'His background spans a range of sectors, providing tailored solutions that align with client needs and business goals. Rodrigo is also experienced in business strategy, especially for bar consulting, and has a strong command of technology in both design and backend processes.',
  'about.education.heading': 'Education',
  'about.education.item1': 'System analist specialist - ORT Argentina (2023 - present)',
  'about.education.item2': 'Wordpress development - Udemy (2021 - 2022)',
  'about.education.item3': 'Back-end developer - CoderHouse (2020 - 2021)',
  'about.education.item4': 'Front-end developer - EducacionIT (2019 - 2020)',
  'about.skills.heading': 'Skills',
  'about.skills.item1': 'Web Development - WordPress, HTML, CSS, JavaScript, PHP',
  'about.skills.item2':
    'Design - Photoshop (Advanced), Adobe Premiere (Intermediate), Illustrator (Basic)',
  'about.skills.item3': 'Marketing - Email Marketing (MailChimp), Social Media Strategies, SEO',
  'about.skills.item4':
    'Project Management - Business Strategy, Client Collaboration, Process Automation',
  'about.skills.item5': 'Soft Skills - Proactive, Teamwork, Adaptable, Client-Oriented',

  // Work index page (audit §2 work.astro)
  'work.meta.title': 'My Work | Rodrigo Camino',
  'work.meta.description': "Learn about Rodrigo Camino's most recent projects",
  'work.hero.title': 'My Work',
  'work.hero.tagline':
    'See my most recent projects below to get an idea of my past experience.',

  // Project detail back-link (audit §2 work/[...slug].astro)
  'project.back': 'Work',

  // Language toggle (audit §2 LangToggle.astro)
  'lang.switch': 'Switch Language',
} as const;

export type UIDict = typeof en;
export type UIKey = keyof UIDict;
