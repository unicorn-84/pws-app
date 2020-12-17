import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProjectsPage from './projects-page.component';

describe('ProjectsPage', () => {
  test('renders ProjectsPage component', () => {
    render(<ProjectsPage />, { wrapper: MemoryRouter });
  });
});
