import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, HTMLContent, Layout, PreviewCompatibleImage, RenewalForm, SEO } from "../components";

const RenewalTemplate = ({ frontmatter, html }) => {
  return (
    <>
      <BaseTemplate contentComponent={HTMLContent} content={html} />
      <RenewalForm />
      <PreviewCompatibleImage imageInfo={frontmatter.bannerImage} title="Renewal with Sheila Anne" />
      <PreviewCompatibleImage imageInfo={frontmatter.secondImage} title="Details on the upcoming Renewal program" />
      <PreviewCompatibleImage imageInfo={frontmatter.thirdImage} title="What to expect from Renewal" />
    </>
  );
};

const Nourish = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO
      image={frontmatter.bannerImage.publicURL}
      description={frontmatter.pageDescription}
      imageAlt={frontmatter.bannerImageHeadline}
      location={location}
      title={frontmatter.pageTitle}
    />
    <RenewalTemplate frontmatter={frontmatter} html={html} />
  </Layout>
);

export default Nourish;

export const pageQuery = graphql`
  query RenewalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        secondImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thirdImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;
