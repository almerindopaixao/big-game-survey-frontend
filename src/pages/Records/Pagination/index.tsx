import React from 'react';

import './styles.css';

type Props = {
  totalPages?: number;
  goToPage: (item: number) => void;
  activePage: number;
};

const Pagination = ({
  totalPages,
  goToPage,
  activePage,
}: Props): JSX.Element => {
  const paginationItens = Array.from(Array(totalPages).keys());

  return (
    <div className="pagination-container">
      {paginationItens.map((item) => (
        <button
          key={item}
          className={`pagination-item ${
            activePage === item ? 'active' : 'inactive'
          }`}
          onClick={() => goToPage(item)}
        >
          {item + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;