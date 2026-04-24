import { Suspense } from 'react';

import { getPublicationConfig } from '@/lib/api/publication';

import { CopyrightYear } from './copyright-year';
import { CopyrightYearSkeleton } from './copyright-year-skeleton';

const FALLBACK_SITE_NAME = 'Vercel Daily News';

export default async function Footer() {
  const config = await getPublicationConfig();
  const siteName = config?.publicationName ?? FALLBACK_SITE_NAME;

  return (
    <footer className="border-t border-neutral-200 bg-white w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6 general-padding-x">
        <p className="text-sm text-neutral-500">
          &copy;{' '}
          <Suspense fallback={<CopyrightYearSkeleton />}>
            <CopyrightYear />
          </Suspense>{' '}
          {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
