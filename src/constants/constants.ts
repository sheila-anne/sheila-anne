const formNames = require("./formNames");
import colors from "../config/colors.json";

const mobileBreakpoint = 768;

let ConstantColors = colors as Colors;

type FormNames = {
  homepage: "homepage";
  theGrove: "theGrove";
};

const Constants = {
  Colors: ConstantColors,
  baseUrl: "https://www.sheilaanne.com",
  formNames: formNames as FormNames,
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px"
};

export { Constants };
