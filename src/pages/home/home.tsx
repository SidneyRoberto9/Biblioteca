import './home.scss';

import React from 'react';

import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';

export const Home = () => {
  const imagem =
    'http://books.google.com/books/content?id=kYE8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api';
  const titulo = 'League of Legends: Reinos de Runeterra';

  const handleFavoritar = (title: string) => {
    console.log('Favoritou ' + title);
  };

  return (
    <section className="home-container">
      <Header></Header>

      <div className="cards">
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
        <Card img={imagem} title={titulo} save={handleFavoritar} />
      </div>
    </section>
  );
};
