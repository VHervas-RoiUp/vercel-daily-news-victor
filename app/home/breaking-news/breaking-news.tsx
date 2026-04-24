import { AlertTriangle } from '@geist-ui/icons';
import Link from 'next/link';

import { getBreakingNews } from '@/lib/api/breaking-news';

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
