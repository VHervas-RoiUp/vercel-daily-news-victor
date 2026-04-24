export function getDefaultSiteName() {
  return process.env.NEXT_PUBLIC_DEFAULT_SITE_NAME ?? 'Vercel Daily News';
}

export function getDefaultHeaderBrand() {
  return process.env.NEXT_PUBLIC_DEFAULT_HEADER_BRAND ?? 'Vercel Daily';
}

export function getDefaultSeoDescription() {
  return (
    process.env.NEXT_PUBLIC_DEFAULT_SEO_DESCRIPTION ??
    'The latest news and insights for modern web developers.'
  );
}

export function getHomePageDescription() {
  return (
    process.env.NEXT_PUBLIC_HOME_PAGE_DESCRIPTION ??
    'Changelogs, engineering deep dives, customer stories, and community updates from Vercel Daily.'
  );
}

export function getSearchPageDescription() {
  return (
    process.env.NEXT_PUBLIC_SEARCH_PAGE_DESCRIPTION ??
    'Search Vercel Daily articles by keyword or filter by category.'
  );
}

export function getDevSiteUrl() {
  return process.env.NEXT_PUBLIC_DEV_SITE_URL ?? 'http://localhost:3000';
}
