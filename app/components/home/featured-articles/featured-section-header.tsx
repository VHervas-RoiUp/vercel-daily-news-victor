import Link from 'next/link';

export function FeaturedSectionHeader() {
  return (
    <div className="flex flex-row items-end justify-between gap-6 max-md:flex-col max-md:items-start">
      <div>
        <h2
          id="featured-heading"
          className="text-3xl font-bold tracking-tight text-black sm:text-2xl"
        >
          Featured
        </h2>
        <p className="mt-1 text-base text-gray-500 sm:text-sm">
          Handpicked stories from the team.
        </p>
      </div>
      <Link
        href="/articles"
        className="shrink-0 pt-1 text-sm text-gray-500 transition-colors hover:text-black sm:pt-0"
      >
        View all
      </Link>
    </div>
  );
}
