import './home.scss';

import React, { useState } from 'react';

import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { ModalInfo } from '../../components/modal-info/modal-info';
import { Pagination } from '../../components/pagination/pagination';
import { useBook } from '../../hooks/useBook';
import { Book } from '../../models/book.model';

export const Home = () => {
  const { books, search, changePage, maxPages, getFavorite, favoriteList } =
    useBook();
  const [countPage, setCountPage] = useState(1);
  const [open, setOpen] = useState(false);

  const searchLength = search.length >= 3;

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
      <ModalInfo open={open} closeModal={() => setOpen(false)} />

      {getFavorite() ? (
        <div className="cards">
          {favoriteList.map((book: Book) => (
            <Card book={book} key={book.id} modal={() => setOpen(true)} />
          ))}
        </div>
      ) : (
        <>
          <div className="cards">
            {searchLength ? (
              books.map((book: Book) => (
                <Card book={book} key={book.id} modal={() => setOpen(true)} />
              ))
            ) : (
              <div className="bg">
                Use a Barra de Pesquisa para Obter Livros...
              </div>
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
        </>
      )}
    </section>
  );
};
