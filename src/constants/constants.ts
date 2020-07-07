import colors from "../config/colors.json";

const mobileBreakpoint = 768;

let ConstantColors = colors as Colors;

const Constants = {
  Colors: ConstantColors,
  baseUrl: "https://www.sheilaanne.com",
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px",
  square: {
    allServicesUrl:
      "https://squareup.com/appointments/buyer/widget/vlggwbtks6vh2m/T2G1BPTFKKDBJ",
    explorationUrl:
      "https://squareup.com/appointments/buyer/widget/382r9s8g5atn2g/T2G1BPTFKKDBJ",
    groundToGrowUrl:
      "https://squareup.com/appointments/buyer/widget/efbofoh5gwycw0/T2G1BPTFKKDBJ",
  },
};

export { Constants };
