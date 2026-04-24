import { Suspense } from 'react';
import Link from 'next/link';

import Triangle from '@/components/ui/triangle';
import NavLinks from '@/layout/nav-links';
import NavLinksFallback from '@/layout/nav-links-fallback';
import HeaderSubscriptionStatus from '@/components/subscription/header-subscription-status';
import { getPublicationConfig } from '@/lib/api/publication';

const FALLBACK_BRAND = 'Vercel Daily';

export default async function Header() {
  const config = await getPublicationConfig();
  const brand = config?.publicationName ?? FALLBACK_BRAND;

  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between general-padding-x"
        aria-label="Main"
      >
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
      </nav>
    </header>
  );
}
