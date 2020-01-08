import styled from "styled-components";

import { Constants } from "../constants";

type FlexContainerProps = {
  backgroundColor?: string;
  margin?: string;
};

export const FlexContainer = styled.div<FlexContainerProps>`
  ${({ backgroundColor }) =>
    !!backgroundColor && `background-color: ${backgroundColor};`}
  display: flex;
  flex-flow: row wrap;
  ${({ margin }) => !!margin && `margin: ${margin};`}

  @media (max-width: ${Constants.mobileWidth}) {
    margin: ${({ margin }) => (!!margin ? margin : "0")};
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

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
  }
`;
