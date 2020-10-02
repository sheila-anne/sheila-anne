import { MouseEvent } from "react";

import { Constants } from "../constants";
import { trackFacebook } from "./trackFacebook";
import { trackCustomEvent } from "./trackCustomEvent";

export const linkClickHandler = (event: MouseEvent<HTMLAnchorElement>, outerClickHandler?: (...props: any) => void) => {
  outerClickHandler && outerClickHandler();
  const args = {
    event_category: `Internal Link`,
    event_label: event.currentTarget.href,
  };
  if (args.event_label.indexOf(Constants.baseUrl) === -1) {
    return;
  }
  trackCustomEvent({ type: "Link Click", ...args });
  trackFacebook({ eventType: "trackCustom", eventName: "Link Click", params: args });
};
