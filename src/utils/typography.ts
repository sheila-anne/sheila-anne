import Typography, { TypographyOptions } from "typography";

import { Constants } from "../constants";

const theme: TypographyOptions = {
  baseFontSize: "16px",
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  headerFontFamily: ["Inria Serif", "serif"],
  bodyFontFamily: ["Montserrat", "serif"],
  bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    blockquote: {
      ...scale(1 / 5),
      color: `#000`,
      fontStyle: "italic",
      paddingLeft: rhythm(3 / 4),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${Constants.Colors.theGroveGreen}`,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    p: {
      marginBottom: "1rem",
    },
    hr: {
      height: "1px",
      width: "100%",
      marginTop: `calc(${rhythm(1 / 2)} - 1px)`,
    },
    "ul,ol": {
      marginBottom: "1rem",
      marginLeft: rhythm(1),
      listStyle: "none",
    },
    li: {
      padding: "5px",
    },
    "h1,h2,h3,h4,h5,h6": {
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1),
    },
    "@media only screen and (max-width:480px)": {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(3 / 4),
      },
      "h1,h2,h3,h4,h5,h6": {
        marginBottom: rhythm(1 / 2),
        marginTop: "1rem",
      },
    },
    h4: {
      letterSpacing: "0.140625em",
      textTransform: "uppercase",
    },
    h6: {
      fontStyle: "italic",
    },
    a: {
      color: `${Constants.Colors.theGroveGreen}`,
    },
    "a:hover,a:active": {
      boxShadow: "none",
    },
    "mark,ins": {
      background: `${Constants.Colors.theGroveGreen}`,
      color: "#FFF",
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: "none",
    },
  }),
};

const typography = new Typography(theme);
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;

export const maxPageWidth = typography.rhythm(35);
