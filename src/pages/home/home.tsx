import './home.scss';

import React from 'react';

import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { Pagination } from '../../components/pagination/pagination';
import { useBook } from '../../hooks';
import { Book, favorite } from '../../models/book.model';

export const Home = () => {
  const { books, search } = useBook();

  const handleFavoritar = (book: favorite) => {
    console.log(books);
  };

  const searchLength = search.length >= 3;

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
      {searchLength && <Pagination />}
    </section>
  );
};
