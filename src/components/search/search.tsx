import './search.scss';

import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchProps {
  setSearch: (value: string) => void;
}

export const Search = (props: SearchProps) => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (value: string) => {
    setSearch(value.toLocaleLowerCase());
    props.setSearch(search);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="Pesquise na Biblioteca..."
        value={search}
        onChange={(e) => handleChangeSearch(e.target.value)}
      />

      <button
        type="submit"
        className="searchButton"
        onClick={() => props.setSearch(search)}
      >
        <BiSearch className="icon" />
      </button>
    </div>
  );
};
