import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import theme from './theme';
import AppContainer from './App.styles';
import Header from './components/header/header.component';

export default () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" />
          <Route exact path="/contact" />
        </Switch>
      </AppContainer>
    </ThemeProvider>
  </React.StrictMode>
);
