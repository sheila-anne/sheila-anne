import React from "react";
import { TheGroveTemplate } from "../../templates/the-grove";

const TheGrovePagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log(data);
  return (
    <TheGroveTemplate
      content={widgetFor("body")}
      frontmatter={data}
      isPreview={true}
      image={data.bannerImage}
      imageHeadline={data.bannerImageHeadline}
      posts={[]}
    />
  );
};

export default TheGrovePagePreview;
