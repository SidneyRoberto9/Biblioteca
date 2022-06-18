import './header.scss';

import React from 'react';

import { Search } from '../search/search';

interface HeaderProps {
  setSearch: (value: string) => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="title">
        <h1>Biblioteca</h1>
      </div>

      <Search setSearch={props.setSearch} />

      <ul>
        <li>Inicio</li>
        <li>Favoritos</li>
      </ul>
    </header>
  );
};
