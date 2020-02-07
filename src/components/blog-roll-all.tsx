import { graphql, StaticQuery } from "gatsby";
import React from "react";

import { BlogRoll } from "./blog-roll";

export const BlogRollAll = () => (
  <StaticQuery
    query={BlogRollQuery}
    render={data => <BlogRoll posts={data.allMarkdownRemark.posts} />}
  />
);

const BlogRollQuery = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      ...BlogPosts
    }
  }
`;
