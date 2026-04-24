import { Suspense } from 'react';
import Link from 'next/link';

import Triangle from '@/components/ui/triangle';
import NavLinks from '@/layout/nav-links';
import NavLinksFallback from '@/layout/nav-links-fallback';
import HeaderSubscriptionStatus from '@/components/subscription/header-subscription-status';
import { getDefaultHeaderBrand } from '@/lib/services/env-defaults';
import { getPublicationConfig } from '@/lib/api/publication';

export default async function Header() {
  const config = await getPublicationConfig();
  const brand = config?.publicationName ?? getDefaultHeaderBrand();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <nav aria-label="Main">
        <div className="mx-auto hidden h-14 max-w-7xl items-center justify-between general-padding-x sm:flex">
          <div className="flex items-center gap-8 sm:gap-10">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-900 no-underline"
            >
              <Triangle />
              <span className="text-sm font-bold tracking-tight sm:text-base">
                {brand}
              </span>
            </Link>
            <Suspense fallback={<NavLinksFallback />}>
              <NavLinks />
            </Suspense>
          </div>
          <Suspense>
            <HeaderSubscriptionStatus />
          </Suspense>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 py-3 general-padding-x sm:hidden">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2 text-neutral-900 no-underline"
            >
              <Triangle />
              <span className="truncate text-sm font-bold tracking-tight">
                {brand}
              </span>
            </Link>
            <Suspense>
              <HeaderSubscriptionStatus />
            </Suspense>
          </div>
          <Suspense fallback={<NavLinksFallback />}>
            <NavLinks />
          </Suspense>
        </div>
      </nav>
    </header>
  );
}
