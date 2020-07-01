import React from "react";
import { WorkingTogetherTemplate } from "../../templates/working-together";

const WorkingTogetherPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  return (
    <WorkingTogetherTemplate content={widgetFor("body")} frontmatter={data} />
  );
};

export default WorkingTogetherPagePreview;
