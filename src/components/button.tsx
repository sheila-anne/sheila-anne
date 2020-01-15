import styled from "styled-components";

import { Constants } from "../constants";
import { SmartLink } from "./smart-link";

export const Button = styled(SmartLink)`
  display: inline-block;
  padding: 12px 16px 10px;
  font-size: 1rem;
  line-height: 1.25;
  background-color: #fff;
  text-decoration: none;
  font-weight: 700;
  color: ${Constants.Colors.theGroveGreen};
  text-align: center;
  box-shadow: inset 0 0 0 2px ${Constants.Colors.theGroveGreen};
  transition: all 0.15s ease;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 0 0 1rem 0;
  }
`;
