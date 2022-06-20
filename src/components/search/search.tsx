import './search.scss';

import React from 'react';
import { BiSearch } from 'react-icons/bi';

import { useBook } from '../../hooks/useBook';

export const Search = () => {
  const { searchContent } = useBook();

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        id="searchInput"
        placeholder="Pesquise na Biblioteca..."
        spellCheck="false"
        onChange={(e) => searchContent(e.target.value)}
      />

      <button type="submit" className="searchButton">
        <BiSearch className="icon" />
      </button>
    </div>
  );
};
