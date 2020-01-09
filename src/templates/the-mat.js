import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import Content, { HTMLContent } from "../components/Content";

export const TheMatTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <PageContent content={content} />
    </section>
  );
};

const TheMat = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <TheMatTemplate contentComponent={HTMLContent} content={post.html} />
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
  }
`;
