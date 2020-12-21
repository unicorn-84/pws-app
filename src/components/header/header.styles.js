import styled from 'styled-components';
import { Link } from 'react-router-dom';

import theme from '../../theme';

export const HeaderContainer = styled.header`
  background-color: #fff;
`;

export const Toolbar = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: ${theme.props.header.height.desktop / 2}px;
  align-self: center;
  align-items: center;

  @media (max-width: 562px) {
    grid-auto-rows: ${theme.props.header.height.mobile / 2}px;
  }
`;

export const BrandTitle = styled.div`
  @media (max-width: 562px) {
    justify-self: center;
  }

  > a {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
  }
`;

export const MainMenu = styled.nav`
  justify-self: end;

  @media (max-width: 562px) {
    justify-self: center;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? theme.palette.primary.main : 'inherit')};
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 1px solid;
  border-color: ${({ active }) => (active ? theme.palette.primary.main : 'rgba(0, 0, 0, 0.2)')};
  transition: all 0.2s ease;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: ${theme.spacing(3)}px;

  :last-child {
    margin-right: 0;
  }

  :hover {
    color: ${theme.palette.primary.main};
    border-color: ${theme.palette.primary.main};
  }
`;

export const MoreMenu = styled.div``;
