import { OutboundLink, trackCustomEvent } from "gatsby-plugin-google-analytics";
import React, { FC, MouseEvent } from "react";

import { InternalLink } from "./internal-link";

type CustomLinkType = {
  ariaLabel?: string;
  className?: string;
  hideMetadata?: boolean;
  role?: string;
  to: string;
  title?: string;
};

const getLinkType = (to: string) =>
  to.indexOf("http") > -1 ? "External" : "Internal";

const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const to = event.currentTarget.href;
  trackCustomEvent({
    action: "click",
    category: `Internal Link`,
    label: to
  });
};

const getInnerLink = (children: React.ReactNode, hideMetadata?: boolean) => {
  return !hideMetadata ? <span itemProp="name">{children}</span> : children;
};

export const SmartLink: FC<CustomLinkType> = ({
  ariaLabel,
  className,
  hideMetadata,
  role,
  to,
  title,
  children
}) => {
  const linkType = getLinkType(to);
  if (linkType === "Internal") {
    return (
      <InternalLink
        aria-label={ariaLabel}
        className={className}
        itemProp={!hideMetadata ? "url" : undefined}
        onClick={onClick}
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
        rel="noopener noreferrer"
        role={!!role ? role : undefined}
        target="_blank"
        title={title}
      >
        {getInnerLink(children, hideMetadata)}
      </OutboundLink>
    );
  }
};