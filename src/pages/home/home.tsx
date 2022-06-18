import './home.scss';

import React, { useEffect, useState } from 'react';

import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { Book, favorite } from '../../models/book.model';
import googleApi from '../../services/google-api';
import { formatStringToSearch } from '../../utils/format.util';

export const Home = () => {
  const [books, setBooks] = useState([] as Book[]);
  const [search, setSearch] = useState('');
  let index = 0;

  const handleFavoritar = (book: favorite) => {
    console.log(books);
  };

  useEffect(() => {
    const getVolumes = async () => {
      await googleApi
        .get(
          `/volumes?q=${formatStringToSearch(
            search
          )}&maxResults=25&startIndex=${index}&key=${
            process.env.REACT_APP_GOOGLE_API_KEY
          }`
        )
        .then((response) => setBooks(response.data.items))
        .catch((error) => console.log(error));
    };

    search.length > 2 && getVolumes();
  }, [search, index]);

  return (
    <section className="home-container">
      <Header setSearch={setSearch}></Header>
      <div className="cards">
        {books.map((book: Book) => (
          <Card book={book} save={handleFavoritar} key={book.id} />
        ))}
      </div>
    </section>
  );
};
