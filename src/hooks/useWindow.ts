import { useState, useEffect } from "react";

import { Constants } from "../constants";
import { hasWindow } from "../utils";

export const useWindow = () => {
  const [windowProps, setWindowProps] = useState(() => {
    return hasWindow
      ? {
          width: window.outerWidth,
          height: window.outerHeight,
          isMobile: window.outerWidth <= Constants.mobileBreakpoint,
        }
      : {
          width: 0,
          height: 0,
          isMobile: false,
        };
  });

  useEffect(() => {
    const onResize = () =>
      hasWindow &&
      setWindowProps({
        width: window.outerWidth,
        height: window.outerHeight,
        isMobile: window.outerWidth <= Constants.mobileBreakpoint,
      });
    if (hasWindow) {
      window.addEventListener("resize", onResize);
    }
    return () => {
      hasWindow && window.removeEventListener("resize", onResize);
    };
  });

  return windowProps;
};
