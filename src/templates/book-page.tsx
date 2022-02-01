import { graphql } from "gatsby";
import React, { useState } from "react";

import { BaseTemplate, BookingIframe, BookingScript, HTMLContent, Layout, SEO } from "../components";
import { Constants } from "../constants";

const BookPage = ({ data, location }: { data: any; location: Location }) => {
  const { markdownRemark: post } = data;

  let bookingUrl = Constants.booking.allServicesUrl;
  if (location) {
    switch (location.pathname) {
      case "/book/exploration/": {
        bookingUrl = Constants.booking.explorationUrl;
        break;
      }
      case "/book/root-to-rise/": {
        bookingUrl = Constants.booking.rootToRiseUrl;
        break;
      }
    }
  }

  return (
    <Layout location={location}>
      <BookingScript />
      <SEO description={post.frontmatter.pageDescription} location={location} title={post.frontmatter.pageTitle} />
      <BaseTemplate contentComponent={HTMLContent} content={post.html} />
      <BookingIframe height="800px" showBookingSection={true} src={bookingUrl} />
    </Layout>
  );
};

export default BookPage;

export const bookPageQuery = graphql`
  query BookPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageDescription
        pageTitle
      }
    }
  }
`;
