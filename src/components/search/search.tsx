import './search.scss';

import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import googleApi from '../../services/google-api';
import { formatStringToSearch } from '../../utils/format.util';

interface SearchProps {
  setBooks: (str: any[]) => void;
}

export const Search = (props: SearchProps) => {
  const [searchBooks, setSearchBooks] = useState([] as any[]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getVolumes = () => {
      googleApi
        .get(
          `/volumes?q=${formatStringToSearch(search)}&key=${
            process.env.REACT_APP_GOOGLE_API_KEY
          }`
        )
        .then((response) => setSearchBooks(response.data.items))
        .catch((error) => console.log(error));
    };

    search.length > 2 && getVolumes();
  }, [search]);

  const handleChangeSearch = (value: string) => {
    setSearch(value);
    if (search.length > 2) {
      props.setBooks(searchBooks);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="Pesquise na Biblioteca..."
        onChange={(e) => handleChangeSearch(e.target.value)}
      />

      <button
        type="submit"
        className="searchButton"
        onClick={() => props.setBooks(searchBooks)}
      >
        <BiSearch className="icon" />
      </button>
    </div>
  );
};
