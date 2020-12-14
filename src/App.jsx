import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import theme from './theme';
import AppContainer from './App.styles';

export default () => (
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <AppContainer>
        dev.kapitonov
      </AppContainer>
    </ThemeProvider>
  </React.StrictMode>
);
