import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { BlogRoll } from "./blog-roll";

export const BlogRollAll = () => <BlogRoll posts={useStaticQuery(BlogRollQuery).allMarkdownRemark.posts} />;

const BlogRollQuery = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      ...BlogPosts
    }
  }
`;
