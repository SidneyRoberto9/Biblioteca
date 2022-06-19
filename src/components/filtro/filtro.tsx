import './filtro.scss';

import React, { useState } from 'react';

import { useBook } from '../../hooks';

export const Filtro = () => {
  const [filter, setFilter] = useState('Todos');

  const { favorited } = useBook();

  const handleShow = (value: string) => {
    setFilter(value);

    switch (value) {
      case 'Todos':
        favorited(false);
        break;
      case 'Favoritos':
        favorited(true);
        break;
      default:
        favorited(false);
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
