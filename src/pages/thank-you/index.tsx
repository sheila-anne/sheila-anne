import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { FlexContainer, Layout, SEO } from "../../components";

const SpacedOutText = styled.div`
  margin-bottom: 1rem;
`;

const ThankYou = ({ location }) => (
  <Layout location={location}>
    <SEO description={`Thanks for submitting!`} location={location} title={`Thank You | Sheila Anne`} type="website" />
    <h1>Thanks!</h1>
    <FlexContainer>
      <SpacedOutText>Thanks for getting in touch. I'll reach out to you shortly!</SpacedOutText>
    </FlexContainer>
  </Layout>
);

export default ThankYou;

export const thankYouPageQuery = graphql`
  query ThankYouQuery {
    site {
      siteMetadata {
        social {
          instagram
        }
      }
    }
  }
`;
