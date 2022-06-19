import './header.scss';

import React from 'react';

import { Filtro } from '../filtro/filtro';
import { Search } from '../search/search';

export const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>Biblioteca</h1>
      </div>

      <Search />
      <Filtro />
    </header>
  );
};
