import React, { FC } from "react";
import styled from "styled-components";

import { InternalLink } from "./internal-link";

const ExternalLink = styled.a``;

type CustomLinkType = {
  className?: string;
  to: string;
  title?: string;
};

export const SmartLink: FC<CustomLinkType> = ({
  className,
  to,
  title,
  children
}) => {
  const linkType = to.indexOf("http") > -1 ? "external" : "internal";
  if (linkType === "internal") {
    return (
      <InternalLink className={className} to={to} title={title}>
        {children}
      </InternalLink>
    );
  } else {
    return (
      <ExternalLink
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        {children}
      </ExternalLink>
    );
  }
};
