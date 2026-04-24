import type { Metadata } from 'next';
import { Suspense } from 'react';

import { FeaturedArticles } from '@/home/featured-articles';
import {
  BreakingNewsBanner,
  BreakingNewsBannerSkeleton,
} from '@/home/breaking-news';
import { HeroSection } from '@/home/hero-section';
import { getPublicationConfig } from '@/lib/api/publication';
import {
  getDefaultSiteName,
  getHomePageDescription,
} from '@/lib/services/env-defaults';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPublicationConfig();
  const name = config?.publicationName ?? getDefaultSiteName();
  const template = config?.seo?.titleTemplate ?? `%s | ${name}`;

  return {
    title: { absolute: template.replace('%s', 'Home') },
    description: getHomePageDescription(),
    openGraph: { url: '/' },
  };
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<BreakingNewsBannerSkeleton />}>
        <BreakingNewsBanner />
      </Suspense>
      <div className="general-container general-padding-x flex flex-col gap-16 py-16">
        <HeroSection />
        <FeaturedArticles />
      </div>
    </>
  );
}
