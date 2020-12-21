import styled from 'styled-components';

import Page from '../page.component';
import theme from '../../../theme';

export const AboutPageContainer = styled(Page)`
  justify-self: center;
`;

export const SocialLink = styled.a`
  margin-right: ${theme.spacing(3)}px;

  :last-child {
    margin-right: 0;
  }
`;

export const SocialIcon = styled.svg`
  height: 50px;
  width: 50px;
  background-color: transparent;
`;
