import React from 'react';

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
        <a href="/">vkapitonov.ru</a>
      </BrandTitle>
      <MainMenu>
        <a href="/">работы</a>
        <a href="/about">обо мне</a>
        <a href="/contacts">контакты</a>
      </MainMenu>
    </Toolbar>
  </HeaderContainer>
);
