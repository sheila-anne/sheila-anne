import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, BreakOutImage, HTMLContent, Layout, SEO } from "../components/";

const TheMat = ({ data, location }: GatsbyPage) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
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
            alt: "Sheila sitting in the lotus position",
            childImageSharp: post.frontmatter.bannerImage.childImageSharp,
          }}
          title={post.frontmatter.bannerImageHeadline}
        />
      </div>
      <BaseTemplate contentComponent={HTMLContent} content={post.html} />
    </Layout>
  );
};

export default TheMat;

export const pageQuery = graphql`
  query TheMatPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
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
        bannerImageHeadline
        pageDescription
        pageTitle
      }
    }
  }
`;
