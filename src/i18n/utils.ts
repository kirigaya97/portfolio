import { defaultLang, routes, type Lang, type RouteKey } from './ui';
import { en, type UIKey } from './en';
import { es } from './es';

const dictionaries = { en, es } as const;

/** Detect the active locale from a request URL by its first path segment. */
export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split('/')[1];
  return segment === 'es' ? 'es' : defaultLang;
}

/** Return a translator bound to a locale, falling back to the default language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return dictionaries[lang][key] ?? dictionaries[defaultLang][key];
  };
}

/** Prefix a site-absolute path with the locale segment (no prefix for the default locale). */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/es' : `/es${clean}`;
}

/** Build the localized path for a known route key, honoring per-locale slugs. */
export function getRoutePath(key: RouteKey, lang: Lang): string {
  return localizePath('/' + routes[key][lang], lang);
}
