// src/components/Pagination.js
import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

function Pagination({ totalCount, pageSize, currentPage, setQueryParams }) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const handleChange = (event, value) => {
    setQueryParams((prev) => ({ ...prev, pageNumber: value }));
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      color="primary"
    />
  );
}

export default Pagination;
