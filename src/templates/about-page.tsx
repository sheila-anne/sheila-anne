import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/layout";
import Content, { HTMLContent } from "../components/Content";
import { SEO } from "../components/seo";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <h2>{title}</h2>
      <PageContent content={content} />
    </section>
  );
};

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title="About | Sheila Anne"
        description="Learn more about Life Coach, Yoga Instructor, and Content Creator - Sheila Anne Murray"
      />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
