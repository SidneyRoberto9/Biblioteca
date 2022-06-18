import './card.scss';

import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

interface CardProps {
  title: string;
  img: string;
  save: (title: string) => void;
}

export const Card = (props: CardProps) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />

      <span className="title">{props.title}</span>

      <span className="favorite" onClick={() => props.save(props.title)}>
        <AiFillHeart className="icon" />
      </span>
    </div>
  );
};
