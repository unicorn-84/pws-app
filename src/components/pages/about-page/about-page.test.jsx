import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from './about-page.component';

describe('AboutPage', () => {
  test('renders AboutPage component', () => {
    render(<AboutPage />, { wrapper: MemoryRouter });
  });
  test('renders icons', () => {
    render(<AboutPage />, { wrapper: MemoryRouter });
    expect(screen.getByTestId('linkedin')).toBeInTheDocument();
    expect(screen.getByTestId('github')).toBeInTheDocument();
  });
});
