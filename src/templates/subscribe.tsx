import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, FlexImage, HTMLContent, Layout, SEO, SubscribeForm } from "../components";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

const SubscribePage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location} shouldShowFooterSubscribe={false}>
      <SEO
        description={post.frontmatter.pageDescription}
        image={post.frontmatter.bannerImage.publicURL}
        imageAlt={post.frontmatter.bannerImageHeadline}
        location={location}
        title={post.frontmatter.pageTitle}
      />
      <BaseTemplate contentComponent={HTMLContent} content={post.html} />
      <SubscribeForm page="subscribe" submitText="Yes, I'm In"></SubscribeForm>
      <hr />
      <FlexImage
        alt="Sheila on the beach making a heart with her hands"
        image={getImage(data.subscribeEnding) as IGatsbyImageData}
      ></FlexImage>
    </Layout>
  );
};

export default SubscribePage;

export const pageQuery = graphql`
  query Subscribe($id: String!) {
    subscribeEnding: file(relativePath: { eq: "sheila-subscribe-ending.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
      }
    }
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
