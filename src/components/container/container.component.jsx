import React from 'react';

import Container from './container.styles';

export default ({ children, maxWidth }) => (
  <Container maxWidth={maxWidth}>
    {children}
  </Container>
);
