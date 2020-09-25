import { CircularProgress, Backdrop } from '@material-ui/core';
import React from 'react';

export const AppLoading: React.FC = () => (
  <Backdrop open={true}>
    <CircularProgress></CircularProgress>
  </Backdrop>
);