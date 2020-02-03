import { graphql } from "gatsby";
import React from "react";

import {
  CenteredSection,
  Content,
  HTMLContent,
  Layout,
  SEO
} from "../components";

export const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <CenteredSection>
      <PageContent content={content} />
    </CenteredSection>
  );
};

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.pageTitle}
        description={post.frontmatter.pageDescription}
        image={post.frontmatter.bannerImage.childImageSharp.original.src}
        imageAlt={post.frontmatter.bannerImageHeadline}
      />
      <AboutPageTemplate contentComponent={HTMLContent} content={post.html} />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        bannerImage {
          childImageSharp {
            original {
              src
            }
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;
