import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, Layout, HTMLContent, SEO } from "../components";

const CorporateWellness = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        description={post.frontmatter.pageDescription}
        image={post.frontmatter.bannerImage.publicURL}
        imageAlt={post.frontmatter.bannerImageHeadline}
        location={location}
        title={post.frontmatter.pageTitle}
      />
      <BaseTemplate contentComponent={HTMLContent} content={post.html} />
    </Layout>
  );
};

export default CorporateWellness;

export const pageQuery = graphql`
  query CorporateWellness($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImage {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        bannerImageHeadline
        pageDescription
        pageTitle
      }
    }
  }
`;
