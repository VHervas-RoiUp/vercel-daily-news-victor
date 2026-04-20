import { Suspense } from 'react';

import { BreakingNewsBanner } from '@/components/home/breaking-news';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturedArticles } from '@/components/home/featured-articles/featured-articles';

export default function Home() {
  return (
    <>
      {/* TODO: maybe add skeleton? */}
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
