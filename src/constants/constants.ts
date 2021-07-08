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
const getSquareAppointmentUrl = (appointmentUrl: string) =>
  `https://squareup.com/appointments/buyer/widget/${appointmentUrl}/T2G1BPTFKKDBJ`;

export const Constants = {
  Colors: colors as Colors,
  baseUrl: "https://www.sheilaanne.com",
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px",
  square: {
    allServicesUrl: getSquareAppointmentUrl("vlggwbtks6vh2m"),
    eventsUrl: "https://checkout.square.site/buy/MOL5MPFPMF4RRZTSFJU5YT3H",
    explorationUrl: getSquareAppointmentUrl("382r9s8g5atn2g"),
    groundToGrowUrl: getSquareAppointmentUrl("efbofoh5gwycw0"),
    rootToRiseUrl: getSquareAppointmentUrl("2rao3bwu73phex"),
  },
  textBannerKey: "hide-banner",
};
