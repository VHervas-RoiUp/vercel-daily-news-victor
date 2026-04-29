import { AlertTriangle } from '@geist-ui/icons';
import Link from 'next/link';

import { getBreakingNews } from '@/lib/api/breaking-news';

export function BreakingNewsBannerSkeleton() {
  return (
    <div
      className="w-full bg-neutral-600/90 py-2 text-white sm:h-14 sm:py-0"
      role="status"
      aria-label="Loading breaking news"
    >
      <div className="mx-auto flex h-full min-h-14 max-w-7xl animate-pulse items-center gap-2 general-padding-x sm:min-h-0 sm:gap-4">
        <div
          className="h-5 w-5 shrink-0 rounded-sm bg-neutral-500/90"
          aria-hidden
        />
        <div
          className="h-6 w-16 shrink-0 rounded bg-neutral-500/90"
          aria-hidden
        />
        <div className="min-w-0 flex-1" aria-hidden>
          <div className="h-3.5 w-full max-w-2xl rounded bg-neutral-400/85" />
        </div>
      </div>
    </div>
  );
}

export async function BreakingNewsBanner() {
  const item = await getBreakingNews();

  if (!item || !item.headline) {
    return <div className="h-14 w-full" />;
  }

  const content = (
    <div className="mx-auto flex h-full min-h-14 max-w-7xl items-center gap-2 general-padding-x sm:min-h-0 sm:gap-4">
      <AlertTriangle size={20} strokeWidth={1.75} />
      <span className="rounded-md bg-white px-2 py-1 text-xs font-bold uppercase text-black">
        Breaking
      </span>
      <p className="min-w-0 flex-1 text-sm font-medium leading-snug line-clamp-2 sm:line-clamp-none sm:truncate">
        {item.headline}
      </p>
    </div>
  );

  if (item.articleId) {
    return (
      <Link
        href={`/articles/${item.articleId}`}
        className="block w-full bg-black py-2 text-white sm:h-14 sm:py-0"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="w-full bg-black py-2 text-white sm:h-14 sm:py-0">
      {content}
    </div>
  );
}
