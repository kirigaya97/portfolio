export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang: Lang = 'en';

export type Lang = keyof typeof languages;

/**
 * Route slugs per locale. The slug for a logical page differs per language
 * (e.g. the work index is /work in EN but /proyectos in ES).
 * Blog and contact routes are added in Phase 3.
 */
export const routes = {
  home: { en: '', es: '' },
  work: { en: 'work', es: 'proyectos' },
  about: { en: 'about', es: 'about' },
} as const;

export type RouteKey = keyof typeof routes;
