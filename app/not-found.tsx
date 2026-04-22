import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="bg-white" aria-labelledby="not-found-heading">
      <div className="general-container general-padding-x flex flex-col gap-16 py-16 sm:py-24">
        <div className="flex max-w-4xl flex-col items-start text-left">
          <p
            id="not-found-kicker"
            className="mb-5 text-sm font-medium uppercase text-gray-500 tracking-wide"
          >
            404
          </p>
          <h1
            id="not-found-heading"
            className="mb-6 max-w-3xl text-5xl font-extrabold text-black sm:text-6xl"
          >
            Page not found
          </h1>
          <p className="mb-10 max-w-lg text-lg font-normal leading-relaxed text-gray-500 sm:mb-8 sm:text-lg">
            The page you are looking for does not exist or may have been moved.
            Try going home or browsing articles.
          </p>
          <nav
            className="flex flex-wrap gap-3"
            aria-label="Recovery navigation"
          >
            <Button asChild variant="primary">
              <Link href="/">
                Back to home
                <span aria-hidden="true" className="ml-2 text-lg leading-none">
                  →
                </span>
              </Link>
            </Button>
            <Button asChild>
              <Link href="/articles">Browse articles</Link>
            </Button>
          </nav>
        </div>
      </div>
    </section>
  );
}
