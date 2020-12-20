import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import theme from './theme';
import AppContainer from './App.styles';
import Main from './components/main/main.component';
import Header from './components/header/header.component';
import ProjectsPage from './components/pages/projects-page/projects-page.component';
import AboutPage from './components/pages/about-page/about-page.component';
import ContactPage from './components/pages/contact-page/contact-page.component';
import NotFoundPage from './components/pages/not-found-page/not-found-page.component';

export default () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={ProjectsPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Main>
      </AppContainer>
    </ThemeProvider>
  </React.StrictMode>
);
