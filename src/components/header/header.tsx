import './header.scss';

import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <h1>Biblioteca</h1>

      <ul>
        <li>Home</li>
        <li>Favoritos</li>
      </ul>
    </header>
  );
};
