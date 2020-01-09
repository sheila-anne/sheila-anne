import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import Content, { HTMLContent } from "../components/Content";

export const TheGroveTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <PageContent content={content} />
    </section>
  );
};

const TheGrove = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <TheGroveTemplate contentComponent={HTMLContent} content={post.html} />
    </Layout>
  );
};

export default TheGrove;

export const pageQuery = graphql`
  query TheMatPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
