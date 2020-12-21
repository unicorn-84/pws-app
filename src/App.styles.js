import styled from 'styled-components';

import theme from './theme';

export default styled.div`
  display: grid;
  grid-template-rows: ${theme.props.header.height.desktop}px 1fr;
  min-height: 100vh;

  @media (max-width: 562px) {
    grid-template-rows: ${theme.props.header.height.mobile}px 1fr;
  }
`;
