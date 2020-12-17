import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ContactPage from './contact-page.component';

describe('ContactPage', () => {
  test('renders ContactPage component', () => {
    render(<ContactPage />, { wrapper: MemoryRouter });
  });
});
