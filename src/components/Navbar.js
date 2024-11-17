// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Book Library
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
