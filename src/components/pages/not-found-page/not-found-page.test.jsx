import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './not-found-page.component';

describe('AboutPage', () => {
  test('renders NotFoundPage component', () => {
    render(<NotFoundPage />, { wrapper: MemoryRouter });
    expect(screen.getByText(/404 - Страница не найдена/i)).toBeInTheDocument();
  });
});
