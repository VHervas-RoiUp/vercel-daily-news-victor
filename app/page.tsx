import { Suspense } from 'react';

import { FeaturedArticles } from '@/home/featured-articles';
import { BreakingNewsBanner } from '@/home/breaking-news';
import { HeroSection } from '@/home/hero-section';

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
