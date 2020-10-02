import { hasWindow } from "./hasWindow";

type GtagEventArgs = {
  event_action?: string;
  event_category: string;
  event_label: string;
};

type GtagBaseEvent = {
  type: string;
  args?: GtagEventArgs;
};

type GtagWindow = Window & {
  gtag: (event: "event", type: string, args?: GtagEventArgs) => void;
};

export const trackCustomEvent = (event: GtagBaseEvent) => {
  const gWindow = (window as unknown) as GtagWindow;
  if (!hasWindow || (hasWindow && !gWindow.gtag)) {
    return;
  }

  gWindow.gtag(
    "event",
    event.type,
    !!event.args ? event.args : { event_category: "Default", event_label: "Generic event" }
  );
};
