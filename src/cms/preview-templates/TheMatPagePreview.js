import React from "react";
import { TheMatTemplate } from "../../templates/the-mat";

const TheMatPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <TheMatTemplate
      content={widgetFor("body")}
      frontmatter={data}
      image={data.bannerImage}
      imageHeadline={data.bannerImageHeadline}
      isPreview={true}
      posts={[]}
    />
  );
};

export default TheMatPagePreview;
