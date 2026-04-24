'use client';

import { Search, X } from '@geist-ui/icons';
import { useEffect, useRef, useState, type SubmitEventHandler } from 'react';
import clsx from 'clsx';

const MIN_AUTO_SEARCH_CHARS = 3;
const AUTO_SEARCH_DEBOUNCE_MS = 350;

type SearchInputProps = {
  urlSearchQuery: string;
  onSearchSubmit: (submittedQuery: string) => void;
};

export default function SearchInput({
  urlSearchQuery,
  onSearchSubmit,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState(urlSearchQuery);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDebounce = () => {
    if (debounceRef.current !== null) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
  };

  useEffect(() => {
    setInputValue(urlSearchQuery);
  }, [urlSearchQuery]);

  useEffect(() => {
    const trimmed = inputValue.trim();
    const urlQ = (urlSearchQuery || '').trim();

    debounceRef.current = setTimeout(() => {
      debounceRef.current = null;

      if (trimmed.length >= MIN_AUTO_SEARCH_CHARS) {
        if (trimmed !== urlQ) {
          onSearchSubmit(trimmed);
        }
        return;
      }

      if (trimmed.length === 0) {
        if (urlQ !== '') {
          onSearchSubmit('');
        }
        return;
      }

      if (urlQ.length >= MIN_AUTO_SEARCH_CHARS) {
        onSearchSubmit('');
      }
    }, AUTO_SEARCH_DEBOUNCE_MS);

    return () => {
      if (debounceRef.current !== null) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, [inputValue, onSearchSubmit, urlSearchQuery]);

  const onSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    clearDebounce();
    onSearchSubmit(inputValue.trim());
  };

  function onClear() {
    clearDebounce();
    setInputValue('');
    onSearchSubmit('');
  }

  return (
    <form className="relative mb-4" role="search" onSubmit={onSubmit}>
      <div
        className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 text-[#a3a3a3]"
        aria-hidden
      >
        <Search size={17} color="currentColor" className="shrink-0" />
      </div>
      <input
        type="text"
        name="q"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search articles by title, excerpt, or tags"
        autoComplete="off"
        className={clsx(
          'box-border w-full rounded-[10px] border-[1.5px] border-[#e5e5e5] bg-white py-[14px] pl-[46px] font-inherit text-base leading-normal text-[#0a0a0a] shadow-[0_1px_4px_rgba(0,0,0,0.04)] outline-none transition-[border-color] duration-150 placeholder:text-neutral-400 focus:border-black',
          inputValue ? 'pr-[148px]' : 'pr-[110px]'
        )}
      />
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2">
        {inputValue ? (
          <button
            type="button"
            onClick={onClear}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            aria-label="Clear search"
          >
            <X size={14} color="currentColor" aria-hidden />
          </button>
        ) : null}
        <button
          type="submit"
          className="flex shrink-0 items-center gap-[6px] rounded-[7px] bg-[#0a0a0a] px-[14px] py-[7px] font-inherit text-[13px] font-semibold text-white outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
          <Search
            size={13}
            color="currentColor"
            className="shrink-0"
            aria-hidden
          />
          Search
        </button>
      </div>
    </form>
  );
}
