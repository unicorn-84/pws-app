import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />, { wrapper: MemoryRouter });
  });

  test('переход на страницу "/" при клике "vkapitonov.ru"', () => {
    render(<App />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByText(/vkapitonov\.ru/));
    expect(window.location.pathname).toBe('/');
  });

  test('переход на страницу "/" при клике "работы"', () => {
    render(<App />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByText(/работы/));
    expect(window.location.pathname).toBe('/');
  });

  test('переход на страницу "/about" при клике "обо мне"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText(/обо мне/));
    expect(window.location.pathname).toBe('/about');
  });

  test('переход на страницу "/contact" при клике "контакты"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText(/контакты/));
    expect(window.location.pathname).toBe('/contact');
  });
});
