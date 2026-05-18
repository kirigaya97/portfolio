/**
 * Pure helpers for the `blog` collection. Blog entry ids carry a locale prefix
 * (e.g. "en/welcome"). These functions take plain data, so the file imports no
 * `astro:*` virtual module and unit-tests directly under vitest.
 */

/** Locale prefix of a blog entry id: "en/welcome" -> "en". */
export function localeOf(id: string): string {
  return id.split('/')[0];
}

/** Slug of a blog entry id without its locale prefix: "en/welcome" -> "welcome". */
export function slugOf(id: string): string {
  return id.split('/').slice(1).join('/');
}

interface DatedEntry {
  id: string;
  data: { publishDate: Date };
}

/**
 * Filter a blog collection to one locale and sort newest-first.
 * Pass the array returned by `getCollection('blog')`.
 */
export function localizedPosts<T extends DatedEntry>(all: T[], lang: string): T[] {
  return all
    .filter((post) => localeOf(post.id) === lang)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}
