import { graphql } from "gatsby";
import React, { useState } from "react";

import {
  BookingIframe,
  Content,
  HTMLContent,
  Layout,
  SEO
} from "../components";
import { Constants } from "../constants";

export const BookPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return <PageContent content={content} />;
};

const BookPage = ({ data, location }) => {
  const { markdownRemark: post } = data;
  const [showBookingFrame, setShowBookingFrame] = useState(false);

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.pageTitle}
        description={post.frontmatter.pageDescription}
      />
      <BookPageTemplate contentComponent={HTMLContent} content={post.html} />
      {!showBookingFrame && <div>Loading ...</div>}
      <BookingIframe
        height="600px"
        onLoad={() => setShowBookingFrame(true)}
        showBookingSection={showBookingFrame}
        src={Constants.schedulingUrl}
      />
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
