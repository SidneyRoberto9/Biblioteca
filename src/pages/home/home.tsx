import './home.scss';

import React, { useState } from 'react';

import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';

export const Home = () => {
  const [books, setBooks] = useState([] as any[]);

  const imagem =
    'http://books.google.com/books/content?id=kYE8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api';
  const titulo = 'League of Legends: Reinos de Runeterra';

  const handleFavoritar = (title: string) => {
    console.log(books);
  };

  return (
    <section className="home-container">
      <Header setBooks={setBooks}></Header>
      <div className="cards">
        <Card img={imagem} title={'teste'} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
        <Card img={imagem} title={titulo} save={handleFavoritar} />
      </div>
    </section>
  );
};
