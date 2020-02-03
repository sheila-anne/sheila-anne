import React from "react";
import { TheGroveTemplate } from "../../templates/the-grove";

const TheGrovePagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <TheGroveTemplate
      content={widgetFor("body")}
      frontmatter={data}
      isPreview={true}
      image={data.bannerImage}
    />
  );
};

export default TheGrovePagePreview;
