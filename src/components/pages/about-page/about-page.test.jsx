import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from './about-page.component';

describe('AboutPage', () => {
  test('renders AboutPage component', () => {
    render(<AboutPage />, { wrapper: MemoryRouter });
  });
});
