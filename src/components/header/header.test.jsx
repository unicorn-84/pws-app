import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './header.component';

describe('App', () => {
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
});
