import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  min-height: 100vh;

  @media (max-width: 575px) {
    grid-template-rows: 100px 1fr;
  }
`;
