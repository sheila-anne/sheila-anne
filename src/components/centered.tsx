import styled from "styled-components";

import { applyStyle } from "../utils";

export const CenteredSection = styled.section`
  margin: 0 auto;
`;

export const CenteredText = styled.div<{
  backgroundColor?: string;
  margin?: string;
  padding?: string;
}>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  ${({ margin }) => applyStyle("margin", margin)}
  ${({ padding }) => applyStyle("padding", padding)}
  text-align: center;
`;
