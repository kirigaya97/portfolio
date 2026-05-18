export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang: Lang = 'en';

export type Lang = keyof typeof languages;

/**
 * Route slugs per locale. The slug for a logical page differs per language
 * (e.g. the work index is /work in EN but /proyectos in ES).
 */
export const routes = {
  home: { en: '', es: '' },
  work: { en: 'work', es: 'proyectos' },
  about: { en: 'about', es: 'about' },
  blog: { en: 'blog', es: 'blog' },
  contact: { en: 'contact', es: 'contact' },
} as const;

export type RouteKey = keyof typeof routes;
