import { describe, it, expect } from 'vitest';
import { collectTags, filterByTag, normalizeTag } from './tags';

const make = (...tags: string[]) => ({ data: { tags } });

describe('collectTags', () => {
  it('returns unique tags sorted case-insensitively', () => {
    const items = [make('Web', 'design'), make('Web', 'Branding')];
    expect(collectTags(items)).toEqual(['Branding', 'design', 'Web']);
  });
  it('returns an empty array for no items', () => {
    expect(collectTags([])).toEqual([]);
  });
});

describe('filterByTag', () => {
  const items = [make('Web'), make('Branding'), make('Web', 'Branding')];
  it('returns all items when the tag is null', () => {
    expect(filterByTag(items, null)).toHaveLength(3);
  });
  it('returns only items carrying the tag', () => {
    expect(filterByTag(items, 'Branding')).toHaveLength(2);
  });
  it('returns an empty array when nothing matches', () => {
    expect(filterByTag(items, 'Nope')).toEqual([]);
  });
});

describe('normalizeTag', () => {
  it('returns null for null', () => {
    expect(normalizeTag(null)).toBeNull();
  });
  it('returns null for a blank/whitespace value', () => {
    expect(normalizeTag('  ')).toBeNull();
  });
  it('trims a real value', () => {
    expect(normalizeTag(' Web ')).toBe('Web');
  });
});
