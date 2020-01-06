import styled from "styled-components";

import { Constants } from "../constants";
import { InternalLink } from "../components/internal-link";

export const Button = styled(InternalLink)`
  display: inline-block;
  padding: 12px 16px 10px;
  font-size: 18px;
  font-size: 1rem;
  line-height: 1.25;
  background-color: #fff;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: 700;
  color: ${Constants.Colors.readMore};
  text-align: center;
  box-shadow: inset 0 0 0 2px ${Constants.Colors.readMore};
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
`;
