import React from "react";
import { TheGroveTemplate } from "../../templates/the-grove";

const TheGrovePagePreview = ({ entry, widgetFor }) => (
  <TheGroveTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default TheGrovePagePreview;
