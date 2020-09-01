import React from "react";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  const title = entry.getIn(["data", "title"]);

  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      isPreview={true}
      tags={tags && tags.toJS()}
      title={title}
    />
  );
};

export default BlogPostPreview;
