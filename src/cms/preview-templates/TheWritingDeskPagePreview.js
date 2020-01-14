import React from "react";
import { WritingDeskPageTemplate } from "../../templates/writing-desk";

const TheWritingDeskPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <WritingDeskPageTemplate
      content={widgetFor("body")}
      isPreview={true}
      image={data.bannerImage}
      imageHeadline={data.bannerImageHeadline}
      posts={[]}
    />
  );
};

export default TheWritingDeskPagePreview;
