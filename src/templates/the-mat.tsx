import React, { FC } from "react";
import { graphql } from "gatsby";

import { BlogRoll } from "../components/blog-roll";
import Content, { HTMLContent } from "../components/Content";
import { Layout } from "../components/layout";

export const TheMatTemplate = ({ content, contentComponent, data }) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <PageContent content={content} />
      {data.allMarkdownRemark.edges.length > 0 && (
        <BlogRoll posts={data.allMarkdownRemark.edges} />
      )}
    </section>
  );
};

const TheMat: FC<GatsbyPage> = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <TheMatTemplate
        contentComponent={HTMLContent}
        content={post.html}
        data={data}
      />
    </Layout>
  );
};

export default TheMat;

export const pageQuery = graphql`
  query TheGrovePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { eq: "the mat" } } }
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
            featuredimage {
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
