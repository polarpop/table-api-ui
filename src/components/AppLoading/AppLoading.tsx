import { CircularProgress, Container } from '@material-ui/core';
import React from 'react';

export const AppLoading: React.FC = () => (
  <Container maxWidth="xl" style={{
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100vh",
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    display: 'flex'
  }}>
    <CircularProgress></CircularProgress>
  </Container>
);