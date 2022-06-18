import './card.scss';

import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

export const Card = () => {
  return (
    <div className="card">
      <img
        src="http://books.google.com/books/content?id=kYE8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        alt=""
      />

      <span className="title">
        League of Legends: Reinos de RuneterraLeague of Legends: Reinos de
        RuneterraLeague of Legends: Reinos de RuneterraLeague of Legends: Reinos
        de RuneterraLeague of Legends: Reinos de RuneterraLeague of Legends:
        Reinos de RuneterraLeague of Legends: Reinos de RuneterraLeague of
        Legends: Reinos de RuneterraLeague of Legends: Reinos de RuneterraLeague
        of Legends: Reinos de RuneterraLeague of Legends: Reinos de
        RuneterraLeague of Legends: Reinos de Runeterra
      </span>

      <span className="favorite">
        <AiFillHeart className="icon" />
      </span>
    </div>
  );
};
