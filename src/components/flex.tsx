import styled from "styled-components";

import { Constants } from "../constants";

type BackgroundColorProps = {
  backgroundColor?: string;
};

type FlexContainerProps = BackgroundColorProps & {
  margin?: string;
};

type FlexColumnProps = BackgroundColorProps & {
  alignSelf?: string;
  backgroundColor?: string;
  padding?: string;
};

const BackgroundColorDiv = styled.div<BackgroundColorProps>`
  ${({ backgroundColor }) =>
    !!backgroundColor && `background-color: ${backgroundColor};`}
`;

export const FlexContainer = styled(BackgroundColorDiv)<FlexContainerProps>`
  display: flex;
  flex-flow: row wrap;
  ${({ margin }) => !!margin && `margin: ${margin};`}

  @media (max-width: ${Constants.mobileWidth}) {
    margin: ${({ margin }) => (!!margin ? margin : "0")};
  }
`;

export const FlexColumn = styled(BackgroundColorDiv)<FlexColumnProps>`
  ${({ alignSelf }) => !!alignSelf && `align-self: ${alignSelf}`}
  flex: none;
  ${({ padding }) => !!padding && `padding: ${padding};`}
  width: 50%;

  @media (max-width: ${Constants.mobileWidth}) {
    width: 100%;
    padding: inherit;
  }
`;

export const FlexHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
  }
`;
