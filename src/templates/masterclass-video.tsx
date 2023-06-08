import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, CenteredText, Layout, HTMLContent, LinkButton, SEO, Youtube } from "../components";

const Masterclass = ({ data, location }) => {
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
      <Youtube url="p40UJY-ii_U" />
      <CenteredText>
        <LinkButton to="https://calendly.com/sheila-anne/40-minute-free-life-path-consultation">
          Grab your free bonus call here!
        </LinkButton>
      </CenteredText>
    </Layout>
  );
};

export default Masterclass;

export const pageQuery = graphql`
  query MasterclassVideoPage($id: String!) {
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
