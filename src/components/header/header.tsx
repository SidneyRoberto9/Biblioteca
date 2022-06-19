import './header.scss';

import React from 'react';

import { Search } from '../search/search';

export const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>Biblioteca</h1>
      </div>

      <Search />

      <ul>
        <li>Inicio</li>
        <li>Favoritos</li>
      </ul>
    </header>
  );
};
