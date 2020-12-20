import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Page from './page.component';

describe('ContactPage', () => {
  test('renders ContactPage component', () => {
    render(<Page />, { wrapper: MemoryRouter });
  });
});
