import { Suspense } from 'react';

import { CopyrightYear } from './copyright-year';
import { CopyrightYearSkeleton } from './copyright-year-skeleton';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6 general-padding-x">
        <p className="text-sm text-neutral-500">
          &copy;{' '}
          <Suspense fallback={<CopyrightYearSkeleton />}>
            <CopyrightYear />
          </Suspense>{' '}
          Vercel Daily News. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
