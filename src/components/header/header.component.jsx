import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderContainer,
  Toolbar,
  BrandTitle,
  MainMenu,
} from './header.styles';

export default () => (
  <HeaderContainer>
    <Toolbar>
      <BrandTitle>
        <Link to="/">vkapitonov.ru</Link>
      </BrandTitle>
      <MainMenu>
        <Link to="/">работы</Link>
        <Link to="/about">обо мне</Link>
        <Link to="/contact">контакты</Link>
      </MainMenu>
    </Toolbar>
  </HeaderContainer>
);
