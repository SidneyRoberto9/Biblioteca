import './pagination.scss';

import React from 'react';

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: (offset: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { limit, total, offset, setOffset } = props;

  const current = Math.floor(offset ? offset / limit + 1 : 1);
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  const OnPageChange = async (page: number) => {
    setOffset(limit * (page - 1));
  };

  return (
    <div className="pagination">
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => {
          const isActive = page === current;

          return (
            <div className={isActive ? 'active' : ''} key={page}>
              <button onClick={() => OnPageChange(page)}>{page}</button>
            </div>
          );
        })}
    </div>
  );
};
