import SearchForm from './search-form';
import SearchResults from './search-results';

export default function SearchPage() {
  return (
    <div className="general-container general-padding-x pb-10 lg:pb-14">
      <SearchForm />
      <SearchResults />
    </div>
  );
}
