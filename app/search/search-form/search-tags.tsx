'use client';

import { ChevronDown } from '@geist-ui/icons';
import { useId, useState } from 'react';

const OPTIONS = [
  { value: 'All', label: 'All categories' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Changelog', label: 'Changelog' },
  { value: 'Company News', label: 'Company News' },
  { value: 'Customer Story', label: 'Customer Story' },
] as const;

export default function SearchTags() {
  const id = useId();
  const [value, setValue] = useState<string>(OPTIONS[0].value);

  return (
    <div className="flex items-center gap-[10px]">
      <label
        htmlFor={id}
        className="whitespace-nowrap text-[13px] text-[#666666]"
      >
        Filter by
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-w-[180px] cursor-pointer appearance-none rounded-[7px] border border-[#E5E5E5] bg-white py-2 pl-3 pr-9 font-inherit text-[13px] font-medium text-[#0a0a0a] outline-none transition-[border-color] duration-150 focus-visible:border-black"
        >
          {OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div
          className="pointer-events-none absolute right-2.5 top-1/2 flex -translate-y-1/2 text-[#666666]"
          aria-hidden
        >
          <ChevronDown size={12} color="currentColor" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
