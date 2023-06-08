import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, HTMLContent, Layout, SEO } from "../components";

const Events = ({ data, location }) => {
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

export default Events;

export const pageQuery = graphql`
  query EventsPage($id: String!) {
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
