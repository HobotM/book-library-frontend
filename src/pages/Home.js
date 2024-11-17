// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import { getBooks } from '../services/api';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import { Container, Typography } from '@mui/material';

function Home() {
  const [books, setBooks] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [queryParams, setQueryParams] = useState({
    pageNumber: 1,
    pageSize: 10,
    searchTerm: '',
    genre: '',
    author: '',
    orderBy: 'Title',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getBooks(queryParams);
        setBooks(data.data);
        setTotalCount(data.totalCount);
      } catch (err) {
        setError('Failed to load books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [queryParams]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Container style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <SearchBar setQueryParams={setQueryParams} />
      <Filters setQueryParams={setQueryParams} />
      <BookList books={books} />
      <Pagination
        totalCount={totalCount}
        pageSize={queryParams.pageSize}
        currentPage={queryParams.pageNumber}
        setQueryParams={setQueryParams}
      />
    </Container>
  );
}

export default Home;
