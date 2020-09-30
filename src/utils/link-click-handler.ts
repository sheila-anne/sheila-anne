import { MouseEvent } from "react";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { Constants } from "../constants";
import { trackFacebook } from "./trackFacebook";

export const linkClickHandler = (event: MouseEvent<HTMLAnchorElement>, outerClickHandler?: (...props: any) => void) => {
  outerClickHandler && outerClickHandler();
  const args = {
    action: "click",
    category: `Internal Link`,
    label: event.currentTarget.href,
  };
  if (args.label.indexOf(Constants.baseUrl) === -1) {
    return;
  }
  trackCustomEvent(args);
  trackFacebook({ eventType: "trackCustom", eventName: "Link Click", params: args });
};
