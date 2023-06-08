import { OutboundLink } from "gatsby-plugin-google-gtag";
import React, { FC, MouseEvent, ReactNode } from "react";

import { InternalLink } from "./internal-link";
import { linkClickHandler } from "../utils";

type CustomLinkType = {
  ariaLabel?: string;
  children?: ReactNode;
  className?: string;
  hideMetadata?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  role?: string;
  to: string;
  title?: string;
};

type LinkType = "External" | "Internal";

const getLinkType = (to: string): LinkType => {
  if (to.includes("localhost") || to.startsWith("/")) {
    return "Internal";
  }
  return to.indexOf("http") > -1 ? "External" : "Internal";
};

const getInnerLink = (children: React.ReactNode, hideMetadata?: boolean) => {
  return !hideMetadata ? <span itemProp="name">{children}</span> : children;
};

export const SmartLink: FC<CustomLinkType> = ({
  ariaLabel,
  className,
  hideMetadata,
  onClick,
  role,
  to,
  title,
  children,
}) => {
  const linkType = getLinkType(to);
  if (linkType === "Internal") {
    return (
      <InternalLink
        aria-label={ariaLabel}
        className={className}
        itemProp={!hideMetadata ? "url" : undefined}
        onClick={e => linkClickHandler(e, onClick)}
        role={!!role ? role : undefined}
        to={to}
        title={title}
      >
        {getInnerLink(children, hideMetadata)}
      </InternalLink>
    );
  } else {
    return (
      <OutboundLink
        aria-label={ariaLabel}
        className={className}
        href={to}
        itemProp="url"
        rel="noopener"
        role={!!role ? role : undefined}
        target="_blank"
        title={title}
      >
        {getInnerLink(children, hideMetadata)}
      </OutboundLink>
    );
  }
};
