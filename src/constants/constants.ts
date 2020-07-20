import colors from "../config/colors.json";

const mobileBreakpoint = 768;
const getSquareAppointmentUrl = (appointmentUrl: string) =>
  `https://squareup.com/appointments/buyer/widget/${appointmentUrl}/T2G1BPTFKKDBJ`;

let ConstantColors = colors as Colors;

export const Constants = {
  Colors: ConstantColors,
  baseUrl: "https://www.sheilaanne.com",
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px",
  square: {
    allServicesUrl: getSquareAppointmentUrl("vlggwbtks6vh2m"),
    explorationUrl: getSquareAppointmentUrl("382r9s8g5atn2g"),
    groundToGrowUrl: getSquareAppointmentUrl("efbofoh5gwycw0"),
  },
};
