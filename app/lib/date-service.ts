const PUBLISHED_DATE_LOCALE = 'en-US';

/**
 * Parses API `publishedAt` ISO strings. Returns null when missing or invalid.
 */
export function parsePublishedAt(iso: string | undefined): Date | null {
  if (!iso?.trim()) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** e.g. September 25, 2025 — article hero / detail */
export function formatPublishedDateLong(iso: string | undefined): string {
  const d = parsePublishedAt(iso);
  if (!d) return '';
  return d.toLocaleDateString(PUBLISHED_DATE_LOCALE, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/** e.g. Sep 25, 2025 — cards, sidebars */
export function formatPublishedDateShort(iso: string | undefined): string {
  const d = parsePublishedAt(iso);
  if (!d) return '';
  return d.toLocaleDateString(PUBLISHED_DATE_LOCALE, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
