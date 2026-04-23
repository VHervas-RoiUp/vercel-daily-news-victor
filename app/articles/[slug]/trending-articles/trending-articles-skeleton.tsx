export function TrendingArticlesSkeleton() {
  return (
    <ul className="mt-8 list-none">
      {[1, 2, 3, 4].map((i) => (
        <li
          key={i}
          className="border-b border-neutral-200 py-6 last:border-b-0 last:pb-0"
        >
          <article>
            <div className="block" aria-hidden>
              <p className="flex flex-wrap items-baseline text-xs font-medium uppercase tracking-wide">
                <span className="h-3 w-20 animate-pulse rounded bg-neutral-200" />
                <span className="mx-1.5 h-3 w-1.5 shrink-0 animate-pulse rounded-sm bg-neutral-200" />
                <span className="h-3 w-24 animate-pulse rounded bg-neutral-200 normal-case" />
              </p>
              <div className="mt-3 space-y-2">
                <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-200" />
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-3 w-full max-w-2xl animate-pulse rounded bg-neutral-200" />
                <div className="h-3 w-full max-w-xl animate-pulse rounded bg-neutral-200" />
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
