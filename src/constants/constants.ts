import colors from "../config/colors.json";

const mobileBreakpoint = 768;

let ConstantColors = colors as Colors;

const Constants = {
  Colors: ConstantColors,
  baseUrl: "https://www.sheilaanne.com",
  mobileBreakpoint,
  mobileWidth: mobileBreakpoint + "px",
  social: {
    facebook: "https://facebook.com/sheilaannecoaching",
    facebookTitle: "Sheila Anne on Facebook",
    instagram: "https://instagram.com/shetravls",
    instagramTitle: "Follow Sheila Anne on Instagram"
  }
};

export { Constants };
