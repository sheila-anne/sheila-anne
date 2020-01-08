import colors from "./config/colors.json";

const mobileBreakpoint = 768;

let ConstantColors = colors as Colors;

const Constants = {
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px",
  Colors: ConstantColors,
  baseUrl: "https://www.sheilaanne.com"
};

export { Constants };
