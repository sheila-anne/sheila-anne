const React = require("react");

const fonts = [
  `/Fonts/InriaSerif/InriaSerif.woff2`,
  `/Fonts/Montserrat/Montserrat.woff2`
];

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(
    fonts.map(font => (
      <link
        href={font}
        rel="preload"
        as="font"
        key={font}
        crossOrigin="anoynmous"
        type="font/woff2"
      />
    ))
  );
};
