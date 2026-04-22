import { Suspense } from 'react';
import { FeaturedSectionHeader } from './featured-section-header';
import { FeaturedArticlesList } from './featured-articles-list';
import { FeaturedArticlesListSkeleton } from './featured-articles-list-skeleton';

export function FeaturedArticles() {
  return (
    <section
      className="flex flex-col gap-12"
      aria-labelledby="featured-heading"
    >
      <FeaturedSectionHeader />
      <Suspense fallback={<FeaturedArticlesListSkeleton />}>
        <FeaturedArticlesList />
      </Suspense>
    </section>
  );
}
