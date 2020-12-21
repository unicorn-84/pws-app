import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ContactPage from './contact-page.component';

describe('ContactPage', () => {
  test('renders ContactPage component', () => {
    render(<ContactPage />, { wrapper: MemoryRouter });
  });
  test('renders emails', () => {
    render(<ContactPage />, { wrapper: MemoryRouter });
    expect(screen.getByText('unicorn-84@ya.ru')).toBeInTheDocument();
    expect(screen.getByText('dev.kapitonov@gmail.com')).toBeInTheDocument();
  });
});
