import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

import Header from './header.component';
import theme from '../../theme';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Header />, { wrapper: MemoryRouter });
  });

  test('renders brand title', () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByText(/vkapitonov\.ru/)).toBeInTheDocument();
  });

  test('renders main menu', () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByText(/работы/)).toBeInTheDocument();
    expect(screen.getByText(/обо мне/)).toBeInTheDocument();
    expect(screen.getByText(/контакт/)).toBeInTheDocument();
  });

  test('у "MenuLink" active стили на соответствующих страницах', () => {
    render(<Header />, { wrapper: BrowserRouter });
    ['работы', 'обо мне', 'контакт'].forEach((item) => {
      const menuLink = screen.getByText(new RegExp(item));
      fireEvent.click(menuLink);
      expect(menuLink).toHaveStyle(`color: ${theme.palette.primary.main}`);
      expect(menuLink).toHaveStyle(`border-color: ${theme.palette.primary.main}`);
    });
  });
});
