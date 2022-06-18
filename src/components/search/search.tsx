import './search.scss';

import React from 'react';
import { BiSearch } from 'react-icons/bi';

export const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="Pesquise na Biblioteca..."
      />
      <button type="submit" className="searchButton">
        <BiSearch className="icon" />
      </button>
    </div>
  );
};
