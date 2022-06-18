import './search.scss';

import React from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchProps {
  setSearch: (value: string) => void;
}

export const Search = (props: SearchProps) => {
  const handleChangeSearch = (value: string) => {
    props.setSearch(value.toLocaleLowerCase());
  };

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        id="searchInput"
        placeholder="Pesquise na Biblioteca..."
        spellCheck="false"
        onChange={(e) => handleChangeSearch(e.target.value)}
      />

      <button type="submit" className="searchButton">
        <BiSearch className="icon" />
      </button>
    </div>
  );
};
