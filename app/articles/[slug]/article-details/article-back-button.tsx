'use client';

import { useRouter } from 'next/navigation';

export function ArticleBackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
          router.back();
        } else {
          router.push('/');
        }
      }}
      className="inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
    >
      <span aria-hidden className="text-neutral-400">
        ‹
      </span>
      Back
    </button>
  );
}
