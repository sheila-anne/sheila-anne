import styled from "styled-components";
import { applyStyle } from "../utils";

const CenteredText = styled.div<{ margin?: string }>`
  ${({ margin }) => applyStyle("margin", margin)}
  text-align: center;
`;

export { CenteredText };
