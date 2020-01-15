import { OutboundLink, trackCustomEvent } from "gatsby-plugin-google-analytics";
import React, { FC, MouseEvent } from "react";

import { InternalLink } from "./internal-link";

type CustomLinkType = {
  className?: string;
  to: string;
  title?: string;
};

const getLinkType = (to: string) =>
  to.indexOf("http") > -1 ? "External" : "Internal";

const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const to = event.currentTarget.href;
  trackCustomEvent({
    action: "Click",
    category: `Link Click to: ${to}`,
    label: "Navigation"
  });
};

export const SmartLink: FC<CustomLinkType> = ({
  className,
  to,
  title,
  children
}) => {
  const linkType = getLinkType(to);
  if (linkType === "Internal") {
    return (
      <InternalLink
        className={className}
        onClick={onClick}
        to={to}
        title={title}
      >
        {children}
      </InternalLink>
    );
  } else {
    return (
      <OutboundLink
        className={className}
        href={to}
        onClick={onClick}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
      >
        {children}
      </OutboundLink>
    );
  }
};
