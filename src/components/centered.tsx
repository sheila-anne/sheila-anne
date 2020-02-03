import styled from "styled-components";

import { applyStyle } from "../utils";

export const CenteredSection = styled.section`
  margin: 0 auto;
`;

export const CenteredText = styled.div<{ margin?: string }>`
  ${({ margin }) => applyStyle("margin", margin)}
  text-align: center;
`;
