import { hasWindow } from "./hasWindow";

type GtagBaseEvent = {
  type: string;
  args?: { [key in string]: string };
};

type GtagWindow = Window & {
  gtag: (event: "event", type: string, args?: { [key in string]: string }) => void;
};

export const trackCustomEvent = (event: GtagBaseEvent) => {
  const gWindow = (window as unknown) as GtagWindow;
  if (!hasWindow || (hasWindow && !gWindow.gtag)) {
    return;
  }

  gWindow.gtag("event", event.type, !!event.args ? event.args : {});
};
