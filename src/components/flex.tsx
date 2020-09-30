import Image from "gatsby-image";
import styled, { css } from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";

type BackgroundColorProps = {
  backgroundColor?: string;
};

type FlexContainerProps = BackgroundColorProps & {
  margin?: string;
  justifyContent?: string;
};

type FlexColumnProps = FlexContainerProps & {
  padding?: string;
  alignSelf?: string;
};

const BackgroundColorDiv = styled.div<BackgroundColorProps>`
  ${({ backgroundColor }) => !!backgroundColor && `background-color: ${backgroundColor};`}
`;

export const FlexContainer = styled(BackgroundColorDiv)<FlexContainerProps>`
  display: flex;
  flex-flow: row wrap;
  ${({ margin }) => applyStyle("margin", margin)}
  ${({ justifyContent }) => applyStyle("justify-content", justifyContent)}

  @media (max-width: ${Constants.mobileWidth}) {
    flex-flow: row wrap;
    ${({ margin }) => applyStyle("margin", margin || "0")};
  }
`;

export const FlexColumn = styled(BackgroundColorDiv)<FlexColumnProps>`
  ${({ alignSelf }) => applyStyle("align-self", alignSelf)}
  ${({ padding }) => applyStyle("padding", padding)}
  flex-basis: 50%;

  @media (max-width: ${Constants.mobileWidth}) {
    ${({ margin }) => applyStyle("margin", margin)}
    flex-basis: 100%;
  }
`;

export const HalfColumn = styled(FlexColumn)`
  align-self: center;
  flex-basis: 33%;

  @media (max-width: ${Constants.mobileWidth}) {
    flex-basis: 75%;
  }
`;

export const FlexColSplitImage = styled.div`
  max-width: 200px;
  text-align: center;

  @media (max-width: ${Constants.mobileWidth}) {
    max-width: inherit;
  }
`;

export const FlexHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
    padding-top: 10px;
  }
`;

export const FlexImageCSS = css`
  margin-right: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export const FlexImage = styled(Image)`
  ${FlexImageCSS}
`;
