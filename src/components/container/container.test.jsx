import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Container from './container.component';

describe('Container', () => {
  test('renders Container component', () => {
    render(<Container />, { wrapper: MemoryRouter });
  });
});
