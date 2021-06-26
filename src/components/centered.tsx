import styled from "styled-components";

import { applyStyle } from "../utils";

export const CenteredText = styled.div<{
  color?: string;
  backgroundColor?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
}>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  ${({ color }) => applyStyle("color", color)}
  ${({ fontWeight }) => applyStyle("font-weight", fontWeight)}
  ${({ margin }) => applyStyle("margin", margin)}
  ${({ padding }) => applyStyle("padding", padding)}
  text-align: center;
`;
