import colors from "./config/colors.json";

type Colors = {
  lightestBlue: string;
  lighterBlue: string;
  blue: string;
  darkBlue: string;
  gray: string;
  linkColors: string;
  navLinkText: string;
  featuredPost: string;
};

const mobileBreakpoint = 768;

const Constants = {
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px",
  Colors: colors as Colors,
  baseUrl: "https://www.sheilaanne.com"
};

export { Constants };
