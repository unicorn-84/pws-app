import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import {
  HeaderContainer,
  Toolbar,
  BrandTitle,
  MainMenu,
  MenuLink,
} from './header.styles';
import Container from '../container/container.component';

const Header = ({ location }) => (
  <HeaderContainer>
    <Container maxWidth="1200">
      <Toolbar>
        <BrandTitle>
          <Link to="/">
            vkapitonov.ru
          </Link>
        </BrandTitle>
        <MainMenu>
          <MenuLink to="/" active={location.pathname === '/' ? 'active' : null}>
            работы
          </MenuLink>
          <MenuLink to="/about" active={location.pathname === '/about' ? 'active' : null}>
            обо мне
          </MenuLink>
          <MenuLink to="/contact" active={location.pathname === '/contact' ? 'active' : null}>
            контакт
          </MenuLink>
        </MainMenu>
      </Toolbar>
    </Container>
  </HeaderContainer>
);

export default withRouter(Header);
