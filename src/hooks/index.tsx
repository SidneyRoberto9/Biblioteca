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
  const [search, setSearch] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPages, setMaxPages] = useState<number>(1);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useState<Book[]>([]);
  const [actualBook, setActualBook] = useState<Book>();

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
        )}`
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
    setFavoriteList(getFavorites());
  }, [favorite]);

  useEffect(() => {
    if (favorite) {
      setBooks(favoriteList);
    } else {
      search.length >= 3 && getBooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, books, favorite]);

  const changePage = async (page: number) => {
    setPage(page);
  };

  const getPage = async () => {
    return page;
  };

  const searchContent = async (value: string) => {
    setSearch(value);
  };

  const favorited = async (value: boolean) => {
    setFavorite(value);
  };

  const getFavoriteState = () => {
    return favorite;
  };

  const setActualBookF = async (book: Book) => {
    setActualBook(book);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        favoriteList,
        searchContent,
        search,
        changePage,
        getPage,
        maxPages,
        favorited,
        getFavoriteState,
        actualBook,
        setActualBookF,
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
