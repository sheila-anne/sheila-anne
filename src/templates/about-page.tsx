import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, BreakOutImage, HTMLContent, Layout, SEO } from "../components";

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location} itemType={"https://schema.org/AboutPage"}>
      <SEO
        description={post.frontmatter.pageDescription}
        image={post.frontmatter.bannerImage.childImageSharp.original.src}
        imageAlt={post.frontmatter.bannerImageHeadline}
        location={location}
        title={post.frontmatter.pageTitle}
      />
      <div>
        <BreakOutImage
          loading="eager"
          imageInfo={{
            alt: "Sheila running through a field",
            childImageSharp: post.frontmatter.bannerImage.childImageSharp,
          }}
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
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
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
