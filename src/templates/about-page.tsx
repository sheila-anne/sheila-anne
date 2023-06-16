import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, BreakOutImage, HTMLContent, Layout, SEO } from "../components";

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location} itemType={"https://schema.org/AboutPage"}>
      <SEO
        description={post.frontmatter.pageDescription}
        image={post.frontmatter.bannerImage.publicURL}
        imageAlt={post.frontmatter.bannerImageHeadline}
        location={location}
        title={post.frontmatter.pageTitle}
      />
      <div>
        <BreakOutImage
          loading="eager"
          imageAlt="Sheila running through a field"
          imageInfo={post.frontmatter.bannerImage.childImageSharp.gatsbyImageData}
          title={post.frontmatter.bannerImageHeadline}
        />
      </div>
      <BaseTemplate contentComponent={HTMLContent} content={post.html} />
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
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG], width: 2048)
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;
