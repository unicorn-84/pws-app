import styled from 'styled-components';

import theme from '../../theme';

export default styled.div`
  display: grid;
  grid-template-columns: minmax(${theme.spacing(4)}px, auto) minmax(auto, ${({ maxWidth }) => maxWidth}px) minmax(${theme.spacing(4)}px, auto);
  height: 100%;
`;
