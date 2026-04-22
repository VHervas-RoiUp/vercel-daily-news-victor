import { Suspense } from 'react';
import Link from 'next/link';
import { Bell } from '@geist-ui/icons';

import Triangle from '@/components/ui/triangle';
import NavLinks from '@/layout/nav-links';
import NavLinksFallback from '@/layout/nav-links-fallback';

export default function Header() {
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
              Vercel Daily
            </span>
          </Link>
          <Suspense fallback={<NavLinksFallback />}>
            <NavLinks />
          </Suspense>
        </div>
        <button
          type="button"
          className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          aria-label="Notifications"
        >
          <Bell size={20} strokeWidth={1.75} />
        </button>
      </nav>
    </header>
  );
}
