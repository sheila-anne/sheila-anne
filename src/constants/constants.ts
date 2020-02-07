import colors from "../config/colors.json";

const mobileBreakpoint = 768;

let ConstantColors = colors as Colors;

const Constants = {
  Colors: ConstantColors,
  baseUrl: "https://www.sheilaanne.com",
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px",
  schedulingUrl:
    "https://squareup.com/appointments/buyer/widget/vlggwbtks6vh2m/T2G1BPTFKKDBJ"
};

export { Constants };
