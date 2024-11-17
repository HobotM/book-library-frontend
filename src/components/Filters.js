// src/components/Filters.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

function Filters({ setQueryParams }) {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Fetch distinct genres and authors from the API (implement endpoints as needed)
    // For now, use hardcoded values
    setGenres(['Science Fiction', 'Fantasy', 'Mystery', 'Non-Fiction', 'Classic']);
    setAuthors(['Isaac Asimov', 'J.K. Rowling', 'Agatha Christie', 'Malcolm Gladwell']);
  }, []);

  const handleFilter = () => {
    setQueryParams((prev) => ({ ...prev, genre, author, pageNumber: 1 }));
  };

  const handleReset = () => {
    setGenre('');
    setAuthor('');
    setQueryParams((prev) => ({ ...prev, genre: '', author: '', pageNumber: 1 }));
  };


const [orderBy, setOrderBy] = useState('Title');

const handleSortChange = (e) => {
  setOrderBy(e.target.value);
  setQueryParams((prev) => ({ ...prev, orderBy: e.target.value }));
};

  return (
    <div style={{ margin: '20px' }}>
      <TextField
        select
        label="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={{ marginRight: '10px', width: '200px' }}
      >
        {genres.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginRight: '10px', width: '200px' }}
      >
        {authors.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
  select
  label="Sort By"
  value={orderBy}
  onChange={handleSortChange}
  style={{ marginRight: '10px', width: '200px' }}
>
  <MenuItem value="Title">Title (A-Z)</MenuItem>
  <MenuItem value="title_desc">Title (Z-A)</MenuItem>
  <MenuItem value="Author">Author (A-Z)</MenuItem>
  <MenuItem value="author_desc">Author (Z-A)</MenuItem>
</TextField>

      <Button variant="contained" color="primary" onClick={handleFilter} style={{ marginRight: '10px' }}>
        Apply Filters
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleReset}>
        Reset Filters
      </Button>
    </div>
  );
}

export default Filters;
