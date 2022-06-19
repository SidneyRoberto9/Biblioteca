import './filtro.scss';

import React, { useState } from 'react';

export const Filtro = () => {
  const [filter, setFilter] = useState('Todos');

  const handleShow = (value: string) => {
    setFilter(value);
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
