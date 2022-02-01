import colors from "../config/colors.json";

type Colors = {
  lightestBlue: string;
  lighterBlue: string;
  blue: string;
  gray: string;
  navLinkText: string;
  theGroveGreen: string;
  theGroveTeal: string;
  theGroveLightGreen: string;
  theGroveGreenGray: string;
  redRocksRed: string;
  nourishNeutral: string;
  nourishGray: string;
  nourishBrown: string;
};

const mobileBreakpoint = 768;
const getBookingAppointmentUrl = (appointmentUrl?: string) =>
  `https://calendly.com/sheila-anne${
    appointmentUrl ? "/" + appointmentUrl : ""
  }?primary_color=${colors.theGroveGreen.slice(1)}&hide_event_type_details=1`;

export const Constants = {
  Colors: colors as Colors,
  baseUrl: "https://www.sheilaanne.com",
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px",
  booking: {
    allServicesUrl: getBookingAppointmentUrl(),
    explorationUrl: getBookingAppointmentUrl("exploration-call"),
    rootToRiseUrl: getBookingAppointmentUrl("root-to-rise-intro-call"),
  },
  textBannerKey: "hide-banner",
};
