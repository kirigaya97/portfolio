/**
 * Pure tag helpers for the work index filter. Generic over a minimal taggable
 * shape so they unit-test without importing any `astro:*` virtual module.
 */

interface Taggable {
  data: { tags: string[] };
}

/** Unique tags across all items, sorted alphabetically (case-insensitive). */
export function collectTags<T extends Taggable>(items: T[]): string[] {
  const seen = new Set<string>();
  for (const item of items) {
    for (const tag of item.data.tags) seen.add(tag);
  }
  return [...seen].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

/** Items carrying `tag`. A null tag returns the list unchanged. */
export function filterByTag<T extends Taggable>(items: T[], tag: string | null): T[] {
  if (!tag) return items;
  return items.filter((item) => item.data.tags.includes(tag));
}

/** Normalize a raw `?tag=` query value: trim, and treat blank as null. */
export function normalizeTag(raw: string | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  return trimmed === '' ? null : trimmed;
}
