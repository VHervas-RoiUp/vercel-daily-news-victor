'use client';

import clsx from 'clsx';
import { useState } from 'react';

const TAGS = [
  { id: 'all', label: 'All' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'changelog', label: 'Changelog' },
  { id: 'company-news', label: 'Company News' },
  { id: 'customer-story', label: 'Customer Story' },
] as const;

export default function SearchTags() {
  const [activeId, setActiveId] = useState<(typeof TAGS)[number]['id']>('all');

  return (
    <div
      className="flex flex-wrap gap-3"
      role="toolbar"
      aria-label="Search filters"
    >
      {TAGS.map((tag) => {
        const active = activeId === tag.id;
        return (
          <button
            key={tag.id}
            type="button"
            aria-pressed={active}
            onClick={() => setActiveId(tag.id)}
            className={clsx(
              'cursor-pointer rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black',
              active
                ? 'bg-black font-semibold text-white'
                : 'border border-[#E5E5E5] bg-white font-normal text-[#666666] hover:bg-neutral-50'
            )}
          >
            {tag.label}
          </button>
        );
      })}
    </div>
  );
}
