import { Link } from "gatsby";
import styled from "styled-components";

import { Constants } from "../constants";

type InternalLinkProps = {
  "aria-current"?: boolean;
  color?: string;
  display?: string;
};

const InternalLink = styled(Link)<InternalLinkProps>`
  box-shadow: none;
  color: ${({ color }) => (color ? color : "inherit")};
  display: ${({ display }) => (display ? display : "inline")};
  text-decoration: none;

  :hover {
    color: ${Constants.Colors.internalLinks};
  }
`;

export { InternalLink };