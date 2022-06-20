import './card.scss';

import React from 'react';
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai';

import { useBook } from '../../hooks/useBook';
import { Book } from '../../models/book.model';

interface CardProps {
  book: Book;

  modal: () => void;
}

export const Card = (props: CardProps) => {
  const { book, modal } = props;
  const { setActualBook, getFavorite, favoriteUpdate } = useBook();

  const handleOpenModal = () => {
    modal();
    setActualBook(book);
  };

  const handleFavoriteSave = (book: Book) => {
    const favoriteClass = document.querySelector(`.id-${book.id}`);
    favoriteClass.classList.toggle('liked');

    const fav = localStorage.getItem('favorites');

    if (!fav) {
      localStorage.setItem('favorites', JSON.stringify([book]));
      return;
    }

    const favorites = JSON.parse(fav);

    if (favorites.find((data: Book) => data.id === book.id)) {
      let newFavorites = favorites.filter((data: Book) => data.id !== book.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return;
    }

    favorites.push(book);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const handleFavoriteDelete = (book: Book) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));

    let newFavorites = favorites.filter((data: Book) => data.id !== book.id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    favoriteUpdate();

    const favoriteClass = document.querySelector(`.id-${book.id}`);
    favoriteClass && favoriteClass.classList.remove('liked');
  };

  if (book.favorite) {
    const favoriteClass = document.querySelector(`.id-${book.id}`);
    favoriteClass && favoriteClass.classList.add('liked');
  }

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

      {getFavorite() ? (
        <span className="favorite" onClick={() => handleFavoriteDelete(book)}>
          <AiOutlineClose className="icon" />
        </span>
      ) : (
        <span
          className={`favorite id-${book.id}`}
          onClick={() => handleFavoriteSave(book)}
        >
          <AiFillHeart className="icon" />
        </span>
      )}
    </div>
  );
};
