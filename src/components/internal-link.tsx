import { Link } from "gatsby";
import styled from "styled-components";

import { applyStyle } from "../utils";

type InternalLinkProps = {
  "aria-current"?: boolean;
  color?: string;
  display?: string;
};

const InternalLink = styled(Link)<InternalLinkProps>`
  box-shadow: none;
  ${({ color }) => applyStyle("color", color)}
  ${({ display }) => applyStyle("display", display || "inline")};
  text-decoration: none;

  :hover {
    color: #000;
  }
`;

export { InternalLink };
