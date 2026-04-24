import type { Metadata } from 'next';
import { Suspense } from 'react';

import { FeaturedArticles } from '@/home/featured-articles';
import { BreakingNewsBanner } from '@/home/breaking-news';
import { HeroSection } from '@/home/hero-section';
import { getPublicationConfig } from '@/lib/api/publication';

const HOME_DESCRIPTION =
  'Changelogs, engineering deep dives, customer stories, and community updates from Vercel Daily.';

const SITE_FALLBACK = 'Vercel Daily News';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPublicationConfig();
  const name = config?.publicationName ?? SITE_FALLBACK;
  const template = config?.seo?.titleTemplate ?? `%s | ${name}`;

  return {
    title: { absolute: template.replace('%s', 'Home') },
    description: HOME_DESCRIPTION,
    openGraph: { url: '/' },
  };
}

export default function Home() {
  return (
    <>
      {/* TODO: maybe add skeleton, depending if we want to show it loading, but in the case the request returns null, it will be weird */}
      <Suspense fallback={<div className="h-14 w-full"></div>}>
        <BreakingNewsBanner />
      </Suspense>
      <div className="general-container general-padding-x flex flex-col gap-16 py-16">
        <HeroSection />
        <FeaturedArticles />
      </div>
    </>
  );
}
