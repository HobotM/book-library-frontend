// src/pages/BookDetailsPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/api';
import { Typography, Card, CardContent, CircularProgress, Container } from '@mui/material';
import Loading from '../components/Loading';

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (err) {
        setError('Failed to load book details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

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

  if (!book) {
    return (
      <Container style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h6">Book not found.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Card style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h4">{book.title}</Typography>
          <Typography variant="h6" color="textSecondary">
            {book.author}
          </Typography>
          <Typography variant="subtitle1">{book.genre}</Typography>
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            {book.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default BookDetailsPage;
