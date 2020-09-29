import { graphql } from "gatsby";
import React, { useState } from "react";

import { BaseTemplate, BookingIframe, HTMLContent, Layout, SEO } from "../components";
import { Constants } from "../constants";

const BookPage = ({ data, location }: { data: any; location: Location }) => {
  const { markdownRemark: post } = data;
  const [showBookingFrame, setShowBookingFrame] = useState(false);

  let bookingUrl = Constants.square.allServicesUrl;
  if (location) {
    switch (location.pathname) {
      case "/book/exploration/": {
        bookingUrl = Constants.square.explorationUrl;
        break;
      }
      case "/book/ground-to-grow/": {
        bookingUrl = Constants.square.groundToGrowUrl;
        break;
      }
      case "/book/root-to-rise/": {
        bookingUrl = Constants.square.rootToRiseUrl;
        break;
      }
    }
  }

  const innerOnLoad = () => {
    setShowBookingFrame(true);
  };

  return (
    <Layout location={location}>
      <SEO description={post.frontmatter.pageDescription} location={location} title={post.frontmatter.pageTitle} />
      <BaseTemplate contentComponent={HTMLContent} content={post.html} />
      {!showBookingFrame && <div>Loading ...</div>}
      <BookingIframe height="800px" onLoad={innerOnLoad} showBookingSection={showBookingFrame} src={bookingUrl} />
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
