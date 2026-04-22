import { getTrendingArticles } from '@/lib/api/articles';

import { TrendingArticleItem } from './trending-article-item';

interface TrendingArticlesProps {
  exclude?: string[];
}

export async function TrendingArticles({ exclude }: TrendingArticlesProps) {
  const trendingArticles = await getTrendingArticles();

  const items =
    trendingArticles?.filter((a) => a.slug && !exclude?.includes(a.slug)) ?? [];

  if (!items.length) return null;

  return (
    <section className="min-w-0" aria-labelledby="trending-heading">
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
        Trending
      </p>
      <h2
        id="trending-heading"
        className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-[1.625rem] sm:leading-tight"
      >
        More from Vercel Daily
      </h2>
      <ul className="mt-8 list-none">
        {items.map((article) => (
          <TrendingArticleItem
            key={article.id ?? article.slug}
            article={article}
          />
        ))}
      </ul>
    </section>
  );
}
