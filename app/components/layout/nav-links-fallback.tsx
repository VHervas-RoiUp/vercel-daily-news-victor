import Link from 'next/link';
import { headerRoutes } from '@/lib/data/header-routes';

export default function NavLinksFallback() {
  return (
    <ul className="flex items-center gap-6 text-sm">
      {headerRoutes.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className="font-medium no-underline text-neutral-500 hover:text-neutral-800"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
