import { describe, it, expect } from 'vitest';
import { localeOf, slugOf, localizedPosts } from './blog';

describe('localeOf', () => {
  it('extracts the locale prefix from an id', () => {
    expect(localeOf('en/welcome')).toBe('en');
    expect(localeOf('es/bienvenida')).toBe('es');
  });
});

describe('slugOf', () => {
  it('strips the locale prefix', () => {
    expect(slugOf('en/welcome')).toBe('welcome');
  });
  it('keeps nested path segments', () => {
    expect(slugOf('en/2026/welcome')).toBe('2026/welcome');
  });
});

describe('localizedPosts', () => {
  const all = [
    { id: 'en/old', data: { publishDate: new Date('2026-01-01') } },
    { id: 'es/uno', data: { publishDate: new Date('2026-02-01') } },
    { id: 'en/new', data: { publishDate: new Date('2026-03-01') } },
  ];
  it('keeps only the requested locale, newest first', () => {
    expect(localizedPosts(all, 'en').map((p) => p.id)).toEqual(['en/new', 'en/old']);
  });
  it('returns an empty array when no post matches the locale', () => {
    expect(localizedPosts(all, 'fr')).toEqual([]);
  });
});
