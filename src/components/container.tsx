import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 1rem;
  position: relative;
  width: auto;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152;
  }

  @media (min-width: 1408px) {
    max-width: 1344px;
  }
`;
