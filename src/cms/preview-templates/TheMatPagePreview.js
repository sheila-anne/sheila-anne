import React from "react";
import { BaseTemplate } from "../../components/base-template";

const TheMatPagePreview = ({ widgetFor }) => {
  return <BaseTemplate content={widgetFor("body")} />;
};

export default TheMatPagePreview;
