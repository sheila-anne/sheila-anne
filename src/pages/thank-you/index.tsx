import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { FlexContainer, FlexColumn, Layout, SEO, SmartLink } from "../../components";

const SpacedOutText = styled.div`
  margin-bottom: 1rem;
`;

const ThankYou = ({ data, location }: GatsbyPage) => (
  <Layout location={location}>
    <SEO description={`Thanks for submitting!`} location={location} title={`Thank You | Sheila Anne`} type="website" />
    <h1>Congrats!</h1>
    <FlexContainer>
      <SpacedOutText>You're all signed up for Curating Your Wildly Beautiful Life.</SpacedOutText>
      <SpacedOutText>
        Post this graphic to let others know what you're up to. Tag{" "}
        <SmartLink to={data.site.siteMetadata.social.instagram}>@sheflowsandgrows</SmartLink> on Instagram and we'll
        send you a free, guided meditation.
      </SpacedOutText>
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
