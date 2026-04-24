'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-white" aria-labelledby="app-error-heading">
      <div className="general-container general-padding-x flex flex-col gap-16 py-16 sm:py-24">
        <div className="flex max-w-4xl flex-col items-start text-left">
          <p
            className="mb-5 text-sm font-medium uppercase text-gray-500 tracking-wide"
            id="app-error-kicker"
          >
            Error
          </p>
          <h1
            id="app-error-heading"
            className="mb-6 max-w-3xl text-5xl font-extrabold text-black sm:text-6xl"
          >
            Something went wrong
          </h1>
          <p className="mb-10 max-w-lg text-lg font-normal leading-relaxed text-gray-500 sm:mb-8 sm:text-lg">
            An unexpected error occurred while loading this page. You can try
            again, or return home if the problem continues.
          </p>
          {error.digest ? (
            <p className="mb-6 max-w-lg text-sm text-gray-400">
              Reference: {error.digest}
            </p>
          ) : null}
          <nav
            className="flex flex-wrap gap-3"
            aria-label="Recovery navigation"
          >
            <Button type="button" variant="primary" onClick={() => reset()}>
              Try again
            </Button>
            <Button asChild>
              <Link href="/">
                Back to home
                <span aria-hidden="true" className="ml-2 text-lg leading-none">
                  →
                </span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </section>
  );
}
