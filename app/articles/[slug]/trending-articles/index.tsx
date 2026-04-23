import { Suspense } from 'react';
import { TrendingArticlesList } from './trending-articles-list';
import { TrendingArticlesSkeleton } from './trending-articles-skeleton';

interface TrendingArticlesProps {
  exclude?: string[];
}

export async function TrendingArticles({ exclude }: TrendingArticlesProps) {
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
      <Suspense fallback={<TrendingArticlesSkeleton />}>
        <TrendingArticlesList exclude={exclude} />
      </Suspense>
    </section>
  );
}
