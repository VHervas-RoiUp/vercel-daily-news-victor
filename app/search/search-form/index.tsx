'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition, type ReactNode } from 'react';

import { SearchResultsSkeleton } from '../search-results/search-results-skeleton';

import SearchInput from './search-input';
import SearchTags from './search-tags';

import type { CategorySelectOption } from '../category-options';

type SearchFormProps = {
  categoryOptions: CategorySelectOption[];
  children: ReactNode;
};

export default function SearchForm({
  categoryOptions,
  children,
}: SearchFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get('q') ?? '';
  const categoryFromUrl = searchParams.get('category') ?? '';
  const [isSearchTransitionPending, startTransition] = useTransition();

  const buildSearchPath = useCallback(
    (updates: { q?: string; category?: string }) => {
      const searchQueryToUse =
        (updates.q !== undefined
          ? updates.q
          : (searchParams.get('q') ?? '')
        ).trim();
      const categoryToUse =
        updates.category !== undefined
          ? updates.category
          : (searchParams.get('category') ?? '');

      const nextParams = new URLSearchParams();
      if (searchQueryToUse) nextParams.set('q', searchQueryToUse);
      if (categoryToUse) nextParams.set('category', categoryToUse);
      const queryString = nextParams.toString();
      return queryString ? `/search?${queryString}` : '/search';
    },
    [searchParams]
  );

  const navigateToSearch = useCallback(
    (path: string) => {
      startTransition(() => {
        router.push(path);
      });
    },
    [router]
  );

  const onSearchSubmit = useCallback(
    (submittedQuery: string) => {
      navigateToSearch(buildSearchPath({ q: submittedQuery }));
    },
    [buildSearchPath, navigateToSearch]
  );

  const onCategoryChange = useCallback(
    (nextCategory: string) => {
      navigateToSearch(buildSearchPath({ category: nextCategory }));
    },
    [buildSearchPath, navigateToSearch]
  );

  return (
    <>
      <div className="border-b border-[#e5e5e5] bg-[#fafafa] px-8 pb-8 pt-0">
        <div className="mx-auto max-w-[760px]">
          <SearchInput
            urlSearchQuery={queryFromUrl}
            onSearchSubmit={onSearchSubmit}
          />
          <SearchTags
            options={categoryOptions}
            selectedCategorySlug={categoryFromUrl}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </div>
      {isSearchTransitionPending ? <SearchResultsSkeleton /> : children}
    </>
  );
}
