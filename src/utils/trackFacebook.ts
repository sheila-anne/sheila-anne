import { hasWindow } from "./hasWindow";

type FacebookEvent = "track" | "trackCustom";

export type TrackArgs = {
  eventName: string;
  params?: { [key: string]: string | boolean };
};

type FullTrackArgs = TrackArgs & {
  eventType: FacebookEvent;
};

export const trackFacebook = (args: FullTrackArgs) => {
  if (!hasWindow || (hasWindow && typeof window.fbq !== "function")) {
    return;
  }
  fbq(args.eventType, args.eventName, args.params ?? {});
};
