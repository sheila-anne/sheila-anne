import { MouseEvent } from "react";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { trackFacebook } from "./trackFacebook";

export const linkClickHandler = (event: MouseEvent<HTMLAnchorElement>, outerClickHandler?: (...props: any) => void) => {
  outerClickHandler && outerClickHandler();
  const args = {
    action: "click",
    category: `Internal Link`,
    label: event.currentTarget.href,
  };
  trackCustomEvent(args);
  trackFacebook("trackCustom", "Link Click", args);
};
