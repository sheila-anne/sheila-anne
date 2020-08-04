import { OutboundLink, trackCustomEvent } from "gatsby-plugin-google-analytics";
import React, { FC, MouseEvent } from "react";

import { InternalLink } from "./internal-link";
import { trackFacebook } from "../utils";

type CustomLinkType = {
  ariaLabel?: string;
  className?: string;
  hideMetadata?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  role?: string;
  to: string;
  title?: string;
};

type LinkType = "External" | "Internal";

const getLinkType = (to: string): LinkType => (to.indexOf("http") > -1 ? "External" : "Internal");

const innerOnClick = (event: MouseEvent<HTMLAnchorElement>, outerClickHandler?: (...props: any) => void) => {
  outerClickHandler && outerClickHandler();
  const args = {
    action: "click",
    category: `Internal Link`,
    label: event.currentTarget.href,
  };
  trackCustomEvent(args);
  trackFacebook("trackCustom", "Link Click", args);
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
        onClick={e => innerOnClick(e, onClick)}
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
