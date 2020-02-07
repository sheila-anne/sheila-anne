import React from "react";
import { BaseTemplate } from "../../components/base-template";

const AboutPagePreview = ({ widgetFor }) => {
  return <BaseTemplate content={widgetFor("body")} />;
};

export default AboutPagePreview;
