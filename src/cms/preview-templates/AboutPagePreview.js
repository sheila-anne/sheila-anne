import React from "react";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <AboutPageTemplate
      bannerImage={data.bannerImage}
      content={widgetFor("body")}
      title={data.title}
    />
  );
};

export default AboutPagePreview;