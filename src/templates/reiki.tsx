import { graphql } from "gatsby";
import React from "react";

import { BaseTemplate, BookingIframe, Layout, HTMLContent, SEO } from "../components";
import { Constants } from "../constants";

const Reiki = ({ data, location }) => {
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
      <>
        <h2>Book In-Person Reiki With Sheila</h2>
        <BookingIframe id="book" $showBookingSection={true} src={Constants.booking.reikiUrl} />
      </>
    </Layout>
  );
};

export default Reiki;

export const pageQuery = graphql`
  query ReikiPage($id: String!) {
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
