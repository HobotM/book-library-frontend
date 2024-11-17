// src/components/Loading.js

import React from 'react';
import { CircularProgress, Container } from '@mui/material';

function Loading() {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <CircularProgress />
    </Container>
  );
}

export default Loading;
