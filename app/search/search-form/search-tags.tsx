'use client';

import { ChevronDown } from '@geist-ui/icons';
import { useId, useMemo } from 'react';

type SearchTagsProps = {
  options: { value: string; label: string }[];
  selectedCategorySlug: string;
  onCategoryChange: (nextCategorySlug: string) => void;
};

export default function SearchTags({
  options,
  selectedCategorySlug,
  onCategoryChange,
}: SearchTagsProps) {
  const id = useId();
  const selectValue = useMemo(
    () =>
      options.some((option) => option.value === selectedCategorySlug)
        ? selectedCategorySlug
        : '',
    [options, selectedCategorySlug]
  );

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(e.target.value);
  };

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
          value={selectValue}
          onChange={onSelectChange}
          className="min-w-[180px] cursor-pointer appearance-none rounded-[7px] border border-[#E5E5E5] bg-white py-2 pl-3 pr-9 font-inherit text-[13px] font-medium text-[#0a0a0a] outline-none transition-[border-color] duration-150 focus-visible:border-black"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
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
