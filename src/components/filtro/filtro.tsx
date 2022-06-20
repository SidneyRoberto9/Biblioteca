import './filtro.scss';

import React, { useState } from 'react';

import { useBook } from '../../hooks/useBook';

export const Filtro = () => {
  const [filter, setFilter] = useState('Todos');

  const { favoritePage, updateBooks } = useBook();

  const handleShow = (value: string) => {
    setFilter(value);

    switch (value) {
      case 'Todos':
        favoritePage(false);
        updateBooks();
        break;
      case 'Favoritos':
        favoritePage(true);
        break;
      default:
        favoritePage(false);
        break;
    }
  };

  const handleDrop = () => {
    let dropdown: HTMLDivElement = document.querySelector('.dropdown');
    dropdown.classList.toggle('line');

    let option: HTMLDivElement = document.querySelector('.option');
    option.classList.toggle('active');
  };

  return (
    <div className="dropdown" onClick={() => handleDrop()}>
      <input
        type="text"
        className="textBox"
        placeholder="Filtro..."
        readOnly
        value={filter}
      />
      <div className="option">
        <div onClick={() => handleShow('Todos')}>Todos</div>
        <div onClick={() => handleShow('Favoritos')}>Favoritos</div>
      </div>
    </div>
  );
};
