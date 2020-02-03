import { graphql } from "gatsby";
import React from "react";

import {
  CenteredSection,
  Content,
  HTMLContent,
  Layout,
  PreviewCompatibleImage,
  SEO
} from "../components";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  bannerImage
}) => {
  const PageContent = contentComponent || Content;

  return (
    <CenteredSection>
      <PageContent content={content} />
      <PreviewCompatibleImage
        imageInfo={bannerImage}
        title={title}
        imageAlt="Sheila hiking in Chamonix"
      />
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
        image={post.frontmatter.bannerImage.childImageSharp.fluid.src}
        imageAlt={post.frontmatter.bannerImageHeadline}
      />
      <AboutPageTemplate
        bannerImage={post.frontmatter.bannerImage}
        contentComponent={HTMLContent}
        title={post.frontmatter.pageTitle}
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
        bannerImageHeadline
        bannerImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;
