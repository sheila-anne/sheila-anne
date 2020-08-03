const React = require("react");
const { BannerText } = require("./src/components/text-banner");

export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    require(`intersection-observer`);
  }
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <BannerText />
      {element}
    </>
  );
};
