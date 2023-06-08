import styled from "styled-components";

import { applyStyle } from "../utils";

export const CenteredText = styled.div.withConfig<{
  color?: string;
  backgroundColor?: string;
  fontWeight?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
}>({ shouldForwardProp: prop => prop !== "backgroundColor" && prop !== "fontSize" && prop !== "fontWeight" })`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  ${({ color }) => applyStyle("color", color)}
  ${({ fontSize }) => applyStyle("font-size", fontSize)}
  ${({ fontWeight }) => applyStyle("font-weight", fontWeight)}
  ${({ margin }) => applyStyle("margin", margin)}
  ${({ padding }) => applyStyle("padding", padding)}
  text-align: center;
`;
