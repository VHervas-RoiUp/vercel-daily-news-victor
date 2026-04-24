import SearchForm from './search-form';
import SearchResults from './search-results';

export default function SearchPage() {
  return (
    <div>
      <section className="bg-[#fafafa] border-b border-[#e5e5e5] pt-10 px-8 pb-8">
        <div className="mx-auto max-w-[760px]">
          <h1 className="mb-6 text-3xl font-bold text-black">Search</h1>
          <SearchForm />
        </div>
      </section>
      <SearchResults />
    </div>
  );
}
