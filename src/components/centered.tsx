import styled from "styled-components";

import { Constants } from "../constants";
import { applyStyle } from "../utils";

type CenteredTextProps = {
  $backgroundColor?: string;
  $color?: string;
  $fontWeight?: string;
  $fontSize?: string;
  $margin?: string;
  $padding?: string;
};

export const CenteredText = styled.div<CenteredTextProps>`
  ${({ $backgroundColor }) => applyStyle("background-color", $backgroundColor)}
  ${({ $color }) => applyStyle("color", $color)}
  ${({ $fontSize }) => applyStyle("font-size", $fontSize)}
  ${({ $fontWeight }) => applyStyle("font-weight", $fontWeight)}
  ${({ $margin }) => applyStyle("margin", $margin)}
  ${({ $padding }) => applyStyle("padding", $padding)}
  text-align: center;

  @media (max-width: ${Constants.mobileWidth}) {
    font-size: inherit;
  }
`;
