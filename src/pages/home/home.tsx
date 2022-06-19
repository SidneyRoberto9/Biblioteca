import './home.scss';

import React, { useState } from 'react';

import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { Pagination } from '../../components/pagination/pagination';
import { useBook } from '../../hooks';
import { Book } from '../../models/book.model';

export const Home = () => {
  const { books, search, changePage, maxPages } = useBook();
  const [countPage, setCountPage] = useState(1);

  const searchLength = search.length >= 3;

  const handleFavoritar = (book: Book) => {
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

  const setOffset = (offset: number) => {
    window.scrollTo(0, 0);
    setCountPage(offset);
    if (offset) {
      changePage(offset / 10);
    } else {
      changePage(1);
    }
  };

  return (
    <section className="home-container">
      <Header />

      <div className="cards">
        {searchLength ? (
          books.map((book: Book) => (
            <Card book={book} save={handleFavoritar} key={book.id} />
          ))
        ) : (
          <div className="bg">Faça Sua Pesquisa Para Obter Resultados...</div>
        )}
      </div>
      {searchLength && (
        <Pagination
          limit={25}
          total={maxPages}
          offset={countPage}
          setOffset={setOffset}
        />
      )}
    </section>
  );
};
