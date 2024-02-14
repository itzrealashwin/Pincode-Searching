import React from 'react';

const Pagination = ({ dataPerPage, len }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(len / dataPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => (
        <button key={pageNumber}>{pageNumber}</button>
      ))}
    </div>
  );
};

export default Pagination;