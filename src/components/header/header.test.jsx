import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header.component';

describe('App', () => {
  test('renders Header component', () => {
    render(<Header />);
    screen.debug();
  });

  test('renders brand title', () => {
    render(<Header />);
    expect(screen.getByText(/vkapitonov.ru/)).toBeInTheDocument();
  });

  test('renders main menu', () => {
    render(<Header />);
    expect(screen.getByText(/работы/)).toBeInTheDocument();
    expect(screen.getByText(/обо мне/)).toBeInTheDocument();
    expect(screen.getByText(/контакты/)).toBeInTheDocument();
  });
});
