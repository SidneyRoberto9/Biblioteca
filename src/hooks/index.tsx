import { createContext, useContext, useEffect, useState } from 'react';

import { Book, BooksContextData } from '../models/book.model';
import googleApi from '../services/google-api';
import { formatStringToSearch } from '../utils/format.util';

export const BooksContext = createContext<BooksContextData>(
  {} as BooksContextData
);

type BooksContextProps = {
  children: React.ReactNode;
};

export function BooksContextProvider({ children }: BooksContextProps) {
  const MAX_PAGE = 20;
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    if (!favorites) {
      return [];
    }
    return JSON.parse(favorites);
  };

  const getBooks = async () => {
    await googleApi
      .get(
        `/volumes?q=${formatStringToSearch(
          search
        )}&maxResults=${MAX_PAGE}&startIndex=${parseInt(
          (page * MAX_PAGE - MAX_PAGE).toString(),
          10
        )}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((response) => {
        setBooks(() => {
          const favoriteBooks = getFavorites();

          let library = response.data.items.map((book: Book) => {
            if (favoriteBooks.find((data: Book) => data.id === book.id)) {
              return {
                ...book,
                favorite: true,
              };
            }
            return {
              ...book,
              favorite: false,
            };
          });

          return library;
        });
        setMaxPages(response.data.totalItems);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    search.length >= 3 && getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, books]);

  const changePage = async (page: number) => {
    setPage(page);
  };

  const getPage = async () => {
    return page;
  };

  const searchContent = async (value: string) => {
    setSearch(value);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        searchContent,
        search,
        changePage,
        getPage,
        maxPages,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export const useBook = () => {
  const context = useContext(BooksContext);

  return context;
};
