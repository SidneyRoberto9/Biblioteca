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
  const MAX_PAGE = 25;
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  const getBooks = async () => {
    await googleApi
      .get(
        `/volumes?q=${formatStringToSearch(
          search
        )}&maxResults=${MAX_PAGE}&startIndex=${page}&key=${
          process.env.REACT_APP_GOOGLE_API_KEY
        }`
      )
      .then((response) => {
        setBooks(response.data.items);
        setMaxPages(response.data.totalItems * MAX_PAGE);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    search.length >= 3 && getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

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
