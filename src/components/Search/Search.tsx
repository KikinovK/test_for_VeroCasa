import { FC, useState } from 'react';
import './Search.scss';
import Button from '../../ui/Button/Button';
import SearchIcon from '../../assets/icon/search.svg?react';

interface SearchProps {
  onSearch?: (query: string) => void;
}

const Search: FC<SearchProps> = ({ onSearch = () => {} }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <Button type="submit"  classNames={['search__button']}>
        <SearchIcon />
      </Button>
      <input
        type="text"
        className="search__input"
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Search;
