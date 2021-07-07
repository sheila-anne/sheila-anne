import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, CenteredText, HTMLContent, Layout, LinkButton, PreviewCompatibleImage, SEO, SmartLink } from "../components";
import { Constants } from "../constants"

const Events = ({ data, location }: GatsbyPage) => {
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
      <div>
      <PreviewCompatibleImage
        imageInfo={post.frontmatter.bannerImage}
        title="Workshop series with Sheila Anne"
      />

      </div>
      <CenteredText margin="2rem 0 2rem 0">
          <LinkButton backgroundColor={Constants.Colors.theGroveLightGreen} color="#000" to={Constants.square.eventsUrl} >
            Grab your spot here!
          </LinkButton>
      </CenteredText>
      <BaseTemplate contentComponent={HTMLContent} content={post.html} />
      <CenteredText margin="1rem 0 1rem 0">
          <LinkButton backgroundColor={Constants.Colors.theGroveLightGreen} color="#000" to={Constants.square.eventsUrl} >
            Don't miss out, reserve today!
          </LinkButton>
      </CenteredText>
    </Layout>
  );
};

export default Events;

export const pageQuery = graphql`
  query TheMatPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
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
