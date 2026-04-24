import { Suspense } from 'react';

import SearchInput from './search-input';
import SearchTags from './search-tags';

export default function SearchForm() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold text-black">Search</h1>
      <SearchInput />
      <Suspense>
        <SearchTags />
      </Suspense>
    </section>
  );
}
