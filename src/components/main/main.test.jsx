import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Main from './main.component';

describe('Main', () => {
  test('renders Main component', () => {
    render(<Main />, { wrapper: MemoryRouter });
  });
});
