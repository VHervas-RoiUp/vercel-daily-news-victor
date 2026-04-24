import { Suspense } from 'react';

import SearchInput from './search-input';
import SearchTags from './search-tags';

export default function SearchForm() {
  return (
    <section>
      <SearchInput />
      <Suspense>
        <SearchTags />
      </Suspense>
    </section>
  );
}
