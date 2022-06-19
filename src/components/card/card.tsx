import './card.scss';

import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import { Book } from '../../models/book.model';

interface CardProps {
  book: Book;
  save: (book: Book) => void;
}

export const Card = (props: CardProps) => {
  const { book, save } = props;

  return (
    <div className="card">
      <img
        src={
          book.volumeInfo.imageLinks?.thumbnail ||
          'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif'
        }
        alt={book.volumeInfo.title}
      />

      <span className="title">{book.volumeInfo.title}</span>

      <span
        className={book.favorite ? 'liked' : 'favorite'}
        onClick={() => save(book)}
      >
        <AiFillHeart className="icon" />
      </span>
    </div>
  );
};
