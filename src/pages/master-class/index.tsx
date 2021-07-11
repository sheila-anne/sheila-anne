import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Layout, NetlifyForm, SEO } from "../../components";

const MarginText = styled.div`
  margin-bottom: 1rem;
`;

const MasterClass = ({ location }: GatsbyPage) => (
  <Layout location={location}>
    <SEO
      description={`Sign up for the Curate Your Wildly Beautiful Life event.`}
      location={location}
      title={`Master Class | Sheila Anne`}
      type="website"
    />
    <h1>Curate Your Wildly Beautiful Life</h1>
    <NetlifyForm actionRoute="/thank-you" />
    <MarginText>
      This master class is thoughtfully designed for ambitious women who want to step into the driver's seat, and create
      a life the wildly beautiful life they deserve. In just 60 minutes, you'll learn exactly how to lead from a place
      of alignment, honor your one-of-a-kind superpowers, and make big changes in your career, habits, and
      relationships. Just in time for the passion and energy of Leo season, you'll leave this session feeling inspired
      and ready to take big action 🔥
    </MarginText>
    <MarginText>
      Can't make the date but still want in? Sign up, and we'll be sure to get you the recording after the event.
    </MarginText>
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
