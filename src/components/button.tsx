import styled from "styled-components";

import { Constants } from "../constants";
import { InternalLink } from "./internal-link";
import { applyStyle } from "../utils";

type ButtonProps = {
  mobileMargin?: string;
};

export const Button = styled(InternalLink)<ButtonProps>`
  display: inline-block;
  padding: 12px 16px 10px;
  font-size: 18px;
  font-size: 1rem;
  line-height: 1.25;
  background-color: #fff;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 700;
  color: ${Constants.Colors.theGroveGreen};
  text-align: center;
  box-shadow: inset 0 0 0 2px ${Constants.Colors.theGroveGreen};
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;

  @media (max-width: ${Constants.mobileWidth}) {
    ${({ mobileMargin }) => applyStyle("margin", mobileMargin)};
  }
`;
