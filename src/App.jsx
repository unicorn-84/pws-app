import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import AppContainer from './App.styles';
import Header from './components/header/header.component';

export default () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Header />
      </AppContainer>
    </ThemeProvider>
  </React.StrictMode>
);
