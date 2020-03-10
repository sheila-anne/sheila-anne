import { hasWindow } from "./hasWindow";

export const trackFacebook = (params: any) => {
  if (!hasWindow || (hasWindow && typeof window.fbq !== "function")) {
    return;
  }
  fbq("track", params);
};
