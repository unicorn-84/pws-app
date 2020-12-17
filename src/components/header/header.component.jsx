import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import {
  HeaderContainer,
  Toolbar,
  BrandTitle,
  MainMenu,
  MenuLink,
} from './header.styles';

const Header = ({ location: { pathname } }) => (
  <HeaderContainer>
    <Toolbar>
      <BrandTitle>
        <Link to="/">vkapitonov.ru</Link>
      </BrandTitle>
      <MainMenu>
        <MenuLink active={pathname === '/' ? 'active' : null} to="/">работы</MenuLink>
        <MenuLink active={pathname === '/about' ? 'active' : null} to="/about">обо мне</MenuLink>
        <MenuLink active={pathname === '/contact' ? 'active' : null} to="/contact">контакт</MenuLink>
      </MainMenu>
    </Toolbar>
  </HeaderContainer>
);

export default withRouter(Header);
