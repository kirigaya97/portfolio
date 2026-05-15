import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations, localizePath, getRoutePath } from './utils';

describe('getLangFromUrl', () => {
  it('returns "en" for a root path', () => {
    expect(getLangFromUrl(new URL('https://x.com/'))).toBe('en');
  });
  it('returns "en" for a non-prefixed path', () => {
    expect(getLangFromUrl(new URL('https://x.com/work/'))).toBe('en');
  });
  it('returns "es" for an /es-prefixed path', () => {
    expect(getLangFromUrl(new URL('https://x.com/es/proyectos/'))).toBe('es');
  });
  it('returns "es" for the bare /es path', () => {
    expect(getLangFromUrl(new URL('https://x.com/es'))).toBe('es');
  });
});

describe('useTranslations', () => {
  it('returns the EN string for the en locale', () => {
    const t = useTranslations('en');
    expect(t('nav.home')).toBe('Home');
  });
  it('returns the ES string for the es locale', () => {
    const t = useTranslations('es');
    expect(t('nav.home')).toBe('Inicio');
  });
});

describe('localizePath', () => {
  it('leaves an EN path unprefixed', () => {
    expect(localizePath('/about', 'en')).toBe('/about');
  });
  it('prefixes an ES path with /es', () => {
    expect(localizePath('/about', 'es')).toBe('/es/about');
  });
  it('maps the ES root to /es', () => {
    expect(localizePath('/', 'es')).toBe('/es');
  });
  it('maps the EN root to /', () => {
    expect(localizePath('/', 'en')).toBe('/');
  });
});

describe('getRoutePath', () => {
  it('builds the EN work route', () => {
    expect(getRoutePath('work', 'en')).toBe('/work');
  });
  it('builds the ES work route with the proyectos slug', () => {
    expect(getRoutePath('work', 'es')).toBe('/es/proyectos');
  });
  it('builds the EN home route', () => {
    expect(getRoutePath('home', 'en')).toBe('/');
  });
  it('builds the ES home route', () => {
    expect(getRoutePath('home', 'es')).toBe('/es');
  });
});
