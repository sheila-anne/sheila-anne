import { hasWindow } from "./hasWindow";

type FacebookEvent = "track" | "trackCustom";

export type TrackArgs = {
  eventName: string;
  params?: { [key: string]: string | boolean };
};

type FullTrackArgs = TrackArgs & {
  eventType: FacebookEvent;
};

type FacebookWindow = Window & {
  fbq: (eventType: string, eventName: string, params: object) => void;
};

export const trackFacebook = (args: FullTrackArgs) => {
  const fbWindow = (window as unknown) as FacebookWindow;
  if (!hasWindow || (hasWindow && typeof fbWindow.fbq !== "function")) {
    return;
  }
  fbWindow.fbq(args.eventType, args.eventName, args.params ?? {});
};
