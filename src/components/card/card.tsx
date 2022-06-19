import './card.scss';

import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import { useBook } from '../../hooks';
import { Book } from '../../models/book.model';

interface CardProps {
  book: Book;
  save: (book: Book) => void;
  favoritoState: boolean;
  modal: () => void;
}

export const Card = (props: CardProps) => {
  const { book, save, favoritoState, modal } = props;
  const { setActualBookF } = useBook();

  const handleOpenModal = () => {
    modal();
    setActualBookF(book);
  };

  return (
    <div className="card">
      <img
        src={
          book.volumeInfo.imageLinks?.thumbnail ||
          'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif'
        }
        alt={book.volumeInfo.title}
        onClick={() => handleOpenModal()}
      />

      <span className="title" onClick={() => handleOpenModal()}>
        {book.volumeInfo.title}
      </span>

      {favoritoState && (
        <span
          className={book.favorite ? 'liked' : 'favorite'}
          onClick={() => save(book)}
        >
          <AiFillHeart className="icon" />
        </span>
      )}
    </div>
  );
};
