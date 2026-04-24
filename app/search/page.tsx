import { Suspense } from 'react';

import { getCategories } from '@/lib/api/categories';

import { buildCategoryOptions } from './category-options';
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

export default async function SearchPage({
  searchParams,
}: PageProps<'/search'>) {
  const categoryOptions = buildCategoryOptions(await getCategories());

  return (
    <div className="bg-[#fafafa]">
      <div className="bg-[#fafafa] px-8 pt-10 pb-4">
        <div className="mx-auto max-w-[760px]">
          <h1 className="text-3xl font-bold text-black">Search</h1>
        </div>
      </div>
      <Suspense fallback={<SearchPageSuspenseFallback />}>
        <SearchForm categoryOptions={categoryOptions}>
          <Suspense fallback={<SearchResultsSkeleton />}>
            <SearchResults searchParams={searchParams} />
          </Suspense>
        </SearchForm>
      </Suspense>
    </div>
  );
}
