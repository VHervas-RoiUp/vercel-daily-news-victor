'use client';

import { Search, X } from '@geist-ui/icons';
import { useState } from 'react';

export default function SearchInput() {
  const [value, setValue] = useState('');

  return (
    <form
      className="relative mb-4"
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 text-[#a3a3a3]"
        aria-hidden
      >
        <Search size={17} color="currentColor" className="shrink-0" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search articles, topics, authors…"
        autoComplete="off"
        className="box-border h-[52.5px] w-full rounded-[10px] border-[1.5px] border-[#e5e5e5] bg-white py-0 pl-[46px] pr-[52px] font-inherit text-base leading-normal text-[#0a0a0a] shadow-[0_1px_4px_rgba(0,0,0,0.04)] outline-none transition-[border-color] duration-150 placeholder:text-neutral-400 focus:border-black"
      />
      {value ? (
        <button
          type="button"
          onClick={() => setValue('')}
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          aria-label="Clear search"
        >
          <X size={14} color="currentColor" aria-hidden />
        </button>
      ) : null}
    </form>
  );
}
