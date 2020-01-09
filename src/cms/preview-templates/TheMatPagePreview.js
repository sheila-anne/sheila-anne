import React from "react";
import { TheMatTemplate } from "../../templates/the-mat";

const TheMatPagePreview = ({ entry, widgetFor }) => (
  <TheMatTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default TheMatPagePreview;
