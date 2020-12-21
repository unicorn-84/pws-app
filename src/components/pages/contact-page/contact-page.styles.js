import styled from 'styled-components';

import Page from '../page.component';

export default styled(Page)`
  justify-self: center;
  margin-top: 20vh;

  > h2 {
    margin-top: 0;

    :last-child {
      margin-bottom: 0;
    }
  }
`;
