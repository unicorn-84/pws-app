import React from 'react';

import MainContainer from './main.styles';
import Container from '../container/container.component';

export default ({ children }) => (
  <MainContainer>
    <Container maxWidth="992">
      {children}
    </Container>
  </MainContainer>
);
