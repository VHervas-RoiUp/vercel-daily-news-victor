'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { headerRoutes } from '@/lib/data/header-routes';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-6 text-sm">
      {headerRoutes.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={clsx(
              'font-medium no-underline',
              {
                'text-neutral-500 hover:text-neutral-800': pathname !== href,
              },
              { 'text-neutral-900 hover:opacity-80': pathname === href }
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
