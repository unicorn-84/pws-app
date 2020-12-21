import styled from 'styled-components';

import Page from '../page.component';
import theme from '../../../theme';

export const AboutPageContainer = styled(Page)`
  justify-self: center;
  margin-top: 20vh;
`;

export const SocialLink = styled.a`
  margin-right: ${theme.spacing(4)}px;

  :last-child {
    margin-right: 0;
  }
`;

export const SocialIcon = styled.svg`
  height: 70px;
  width: 70px;

  @media (max-width: 575px) {
    height: 50px;
    width: 50px;
  }
`;
