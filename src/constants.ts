import colors from "./config/colors.json";

const mobileBreakpoint = 768;

let ConstantColors = colors as Colors;

const Constants = {
  Colors: ConstantColors,
  baseUrl: "https://www.sheilaanne.com",
  formNames: {
    homepage: "homepage",
    theGrove: "theGrove"
  },
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px"
};

export { Constants };
