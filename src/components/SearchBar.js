// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function SearchBar({ setQueryParams }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setQueryParams((prev) => ({ ...prev, searchTerm, pageNumber: 1 }));
  };

  return (
    <div style={{ margin: '20px' }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px', width: '300px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
