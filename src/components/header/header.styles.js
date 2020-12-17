import styled from 'styled-components';

import theme from '../../theme';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  z-index: 1100;
  flex-shrink: 0;
  flex-direction: column;
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
`;

export const Toolbar = styled.div`
  min-height: 64px;
  width: 100%;
  max-width: 1140px;
  padding-right: ${theme.spacing(3)}px;
  padding-left: ${theme.spacing(3)}px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const BrandTitle = styled.div`
  flex-grow: 1;

  > a {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: inherit;
  }
`;

export const MainMenu = styled.nav`
  > a {
    margin-left: ${theme.spacing(2)}px;
    margin-right: ${theme.spacing(2)}px;
    text-decoration: none;
    color: inherit;
    font-size: 1.2rem;
    font-weight: 500;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    white-space: nowrap;
    text-overflow: ellipsis;

    :hover {
      color: ${theme.palette.primary.main};
      border-color: ${theme.palette.primary.main};
    }
  }
`;

export const MoreMenu = styled.div``;
