import styled from "styled-components";

import { Constants } from "../constants";

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 0;
  }
`;

export const FlexColumn = styled.div`
  flex: none;
  width: 50%;

  @media (max-width: ${Constants.mobileWidth}) {
    width: 100%;
  }
`;

export const FlexHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;
`;
