// src/components/BookCard.js
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BookCard({ book }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/books/${book.id}`);
  };

  return (
    <Card style={{ width: '250px', margin: '10px' }}>
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography color="textSecondary">{book.author}</Typography>
        <Typography variant="body2">{book.genre}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleViewDetails}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
