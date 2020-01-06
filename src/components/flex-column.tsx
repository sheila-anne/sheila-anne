import styled from "styled-components";

import { Constants } from "../constants";

export const FlexColumn = styled.div`
  width: 50%;

  @media (max-width: ${Constants.mobileWidth}) {
    width: 100%;
  }
`;
