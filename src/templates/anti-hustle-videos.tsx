import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, HTMLContent, Layout, SEO } from "../components";

const AntiHustleVideos = ({ data, location }) => {
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

export default AntiHustleVideos;

export const pageQuery = graphql`
  query AntiHustle($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImage {
          publicURL
        }
        bannerImageHeadline
        pageDescription
        pageTitle
      }
    }
  }
`;
