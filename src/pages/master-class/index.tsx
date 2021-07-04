import { graphql } from "gatsby";
import React from "react";

import { FlexContainer, Layout, NetlifyForm, SEO } from "../../components";

const MasterClass = ({ location }: GatsbyPage) => (
  <Layout location={location}>
    <SEO
      description={`Get in on the Master Class while you still can!`}
      location={location}
      title={`Master Class | Sheila Anne`}
      type="website"
    />
    <h1>Master Class</h1>
    <NetlifyForm actionRoute="/thank-you" />
  </Layout>
);

export default MasterClass;

export const masterClassQuery = graphql`
  query MasterClassQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
