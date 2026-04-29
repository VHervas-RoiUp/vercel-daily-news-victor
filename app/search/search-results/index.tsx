import { Search } from '@geist-ui/icons';

import { getArticleList } from '@/lib/api/articles';

import { SearchArticleCard } from './search-article-card';

type SearchResultsProps = {
  searchParams: PageProps<'/search'>['searchParams'];
};

export default async function SearchResults({
  searchParams: searchParamsPromise,
}: SearchResultsProps) {
  const searchParams = await searchParamsPromise;
  const searchQuery =
    typeof searchParams?.q === 'string' ? searchParams?.q : undefined;
  const searchTerm = searchQuery?.trim();
  const categorySlug =
    typeof searchParams?.category === 'string'
      ? searchParams.category.trim()
      : undefined;

  const articles = await getArticleList({
    search: searchTerm || undefined,
    category: categorySlug || undefined,
    limit: searchTerm ? 5 : 12,
  });

  const list = articles?.filter((a) => a.slug) ?? [];
  const heading = searchTerm ? 'Search results' : 'Recent articles';

  if (list.length === 0) {
    if (searchTerm) {
      return (
        <section className="flex flex-col items-center px-8 pb-24 pt-9 bg-white">
          <div className="w-full max-w-7xl general-padding-x">
            <p className="text-[13px] text-[#666666]">No results</p>
            <div className="flex min-h-[min(52svh,420px)] flex-col items-center justify-center px-2 pb-4 pt-14 text-center">
              <div className="mb-7 text-[#b3b3b3]" aria-hidden>
                <Search size={80} color="currentColor" strokeWidth={1.2} />
              </div>
              <p className="max-w-md text-lg font-bold leading-tight text-black sm:text-[22px]">
                No results for &quot;{searchTerm}&quot;
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#666666]">
                Try a different search term or remove the category filter.
              </p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="flex flex-col items-center px-8 pb-24 pt-9 bg-white">
        <div className="w-full max-w-7xl general-padding-x">
          <p className="text-[13px] text-[#666666]">
            No articles to show right now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center px-8 pb-20 pt-9 bg-white">
      <div className="mx-auto max-w-7xl general-padding-x">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[13px] text-[#666666]">
            <span>{heading}</span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((article, index) => (
            <SearchArticleCard
              key={article.id ?? article.slug}
              article={article}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
