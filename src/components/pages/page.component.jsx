import React from 'react';

import PageContainer from './page.styles';

export default ({ children, className }) => (
  <PageContainer className={className}>{children}</PageContainer>
);
