import { AlertTriangle } from '@geist-ui/icons';

import { getBreakingNews } from '@/lib/api/breaking-news';

export async function BreakingNewsBanner() {
  const item = await getBreakingNews();

  if (!item || !item.headline) {
    return <div className="h-14 w-full"></div>;
  }

  return (
    <div className="h-14 w-full bg-black text-white">
      <div className="mx-auto max-w-7xl flex items-center gap-4 h-full general-padding-x">
        <AlertTriangle size={20} strokeWidth={1.75} />
        <span className="bg-white text-black rounded-md px-2 py-1 uppercase font-bold text-xs">
          Breaking
        </span>
        <p className="min-w-0 flex-1 truncate text-sm font-medium leading-snug">
          {item.headline}
        </p>
      </div>
    </div>
  );
}
