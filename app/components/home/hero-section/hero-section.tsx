import Link from 'next/link';

import { Button } from '@/components/ui/button';

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
          <Button asChild variant="primary">
            <Link href="/articles">
              Browse articles
              <span aria-hidden="true" className="text-lg leading-none ml-2">
                →
              </span>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/subscribe">Subscribe</Link>
          </Button>
        </nav>
      </div>
    </section>
  );
}
