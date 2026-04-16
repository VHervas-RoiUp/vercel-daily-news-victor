"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinksData = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
];

export default function NavLinks() {
  const path = usePathname();
  return (
    <ul className="flex items-center gap-6 text-sm">
      {navLinksData.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={clsx(
              "font-medium no-underline",
              {
                "text-neutral-500 hover:text-neutral-800": path !== href,
              },
              { "text-neutral-900 hover:opacity-80": path === href },
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
