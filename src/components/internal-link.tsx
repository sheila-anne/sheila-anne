import { Link } from "gatsby";
import styled from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";

type InternalLinkProps = {
  "aria-current"?: boolean;
  color?: string;
  display?: string;
  "white-space"?: string;
};

const InternalLink = styled(Link)<InternalLinkProps>`
  box-shadow: none;
  ${({ color }) => applyStyle("color", color)}
  ${({ display }) => applyStyle("display", display || "inline")};
  text-decoration: none;
  ${props => applyStyle("white-space", props["white-space"])}

  :hover {
    color: ${Constants.Colors.bodyCopy};
  }
`;

export { InternalLink };
