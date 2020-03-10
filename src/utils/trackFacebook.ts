import { hasWindow } from "./hasWindow";

type FacebookEvent = "track" | "trackCustom";

export const trackFacebook = (
  eventType: FacebookEvent,
  eventName: string,
  params: any
) => {
  if (!hasWindow || (hasWindow && typeof window.fbq !== "function")) {
    return;
  }
  fbq(eventType, eventName, params);
};
