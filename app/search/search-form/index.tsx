'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition, type ReactNode } from 'react';

import { SearchResultsSkeleton } from '../search-results/search-results-skeleton';

import SearchInput from './search-input';
import SearchTags from './search-tags';

type SearchFormProps = {
  children: ReactNode;
};

export default function SearchForm({ children }: SearchFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [isSearchNavigationPending, startTransition] = useTransition();

  const onNavigateSearch = useCallback(
    (targetPath: string) => {
      startTransition(() => {
        router.push(targetPath);
      });
    },
    [router]
  );

  return (
    <>
      <div className="border-b border-[#e5e5e5] bg-[#fafafa] px-8 pb-8 pt-0">
        <div className="mx-auto max-w-[760px]">
          <SearchInput
            initialQuery={initialQuery ?? ''}
            onNavigateSearch={onNavigateSearch}
          />
          <SearchTags />
        </div>
      </div>
      {isSearchNavigationPending ? <SearchResultsSkeleton /> : children}
    </>
  );
}
