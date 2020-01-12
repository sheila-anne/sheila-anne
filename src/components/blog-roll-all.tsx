import { graphql, StaticQuery } from "gatsby";
import React from "react";

import { BlogRoll } from "./blog-roll";

export const BlogRollAll = () => (
  <StaticQuery
    query={BlogRollQuery}
    render={data => <BlogRoll posts={data.allMarkdownRemark.edges} />}
  />
);

const BlogRollQuery = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
