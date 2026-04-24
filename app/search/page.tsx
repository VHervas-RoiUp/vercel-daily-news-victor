import { Suspense } from 'react';

import SearchForm from './search-form';
import SearchResults from './search-results';
import { SearchResultsSkeleton } from './search-results/search-results-skeleton';

function SearchPageSuspenseFallback() {
  return (
    <>
      <div className="border-b border-[#e5e5e5] bg-[#fafafa] px-8 pb-8">
        <div className="mx-auto max-w-[760px]">
          <div
            className="mb-4 h-[52px] w-full animate-pulse rounded-[10px] bg-neutral-200/70"
            aria-hidden
          />
        </div>
      </div>
      <SearchResultsSkeleton />
    </>
  );
}

export default function SearchPage({ searchParams }: PageProps<'/search'>) {
  return (
    <div className="bg-[#fafafa]">
      <div className="px-8 pt-10 bg-[#fafafa]">
        <div className="mx-auto max-w-[760px]">
          <h1 className="text-3xl font-bold text-black">Search</h1>
        </div>
      </div>
      <Suspense fallback={<SearchPageSuspenseFallback />}>
        <SearchForm>
          <Suspense fallback={<SearchResultsSkeleton />}>
            <SearchResults searchParams={searchParams} />
          </Suspense>
        </SearchForm>
      </Suspense>
    </div>
  );
}
