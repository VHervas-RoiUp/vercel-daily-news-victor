import Link from 'next/link';
import { Suspense } from 'react';

import { Button } from '@/components/ui/button';

import HeroSubscriptionCta from './hero-subscription-cta';

export function HeroSection() {
  return (
    <section className="bg-white" aria-labelledby="hero-heading">
      <div className="flex max-w-4xl flex-col items-start text-left">
        <p
          id="hero-kicker"
          className="mb-5 text-sm font-medium uppercase text-gray-500 tracking-wide"
        >
          The Vercel Daily
        </p>
        <h1
          id="hero-heading"
          className="mb-6 max-w-3xl text-6xl font-extrabold text-black"
        >
          News and insights for modern web developers.
        </h1>
        <p
          id="hero-intro"
          className="mb-10 max-w-lg text-lg font-normal leading-relaxed text-gray-500 sm:mb-8 sm:text-lg"
        >
          Changelogs, engineering deep dives, customer stories, and community
          updates — all in one place.
        </p>
        <nav className="flex flex-wrap gap-3" aria-label="Featured actions">
          <Button asChild variant="primary" className="min-h-10 h-10">
            <Link href="/search">
              Browse articles
              <span aria-hidden="true" className="text-lg leading-none ml-2">
                →
              </span>
            </Link>
          </Button>
          <Suspense
            fallback={
              <div
                className="inline-block min-h-11 w-32 max-w-full shrink-0 opacity-0"
                aria-hidden
              />
            }
          >
            <HeroSubscriptionCta />
          </Suspense>
        </nav>
      </div>
    </section>
  );
}
