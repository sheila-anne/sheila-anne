import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import {
  FlexContainer,
  HalfColumn,
  FlexColSplitImage,
  PreviewCompatibleImage,
  Layout,
  SEO,
  SmartLink,
} from "../../components";

const SpacedOutText = styled.div`
  margin-bottom: 1rem;
`;

const ThankYou = ({ data, location }: GatsbyPage) => (
  <Layout location={location}>
    <SEO description={`Thanks for submitting!`} location={location} title={`Thank You | Sheila Anne`} type="website" />
    <h1>Congrats!</h1>
    <FlexContainer>
      <SpacedOutText>
        You're all signed up for <b>Curate Your Wildly Beautiful Life</b>.
      </SpacedOutText>
      <SpacedOutText>
        Share your favorite graphic from this page on social media to let your friends know you're coming! Tag{" "}
        <SmartLink to={data.site.siteMetadata.social.instagram}>@sheflowsandgrows</SmartLink> on Instagram and we will
        send you a <b>free meditation</b>. Can't make the time but wishing you could? Sign up and we'll make sure to get
        you the recording 💛.
      </SpacedOutText>
    </FlexContainer>
    <FlexContainer justifyContent="center" margin="1rem 0">
      <HalfColumn>
        <FlexColSplitImage>
          <PreviewCompatibleImage
            imageInfo={{
              alt: "Curate Your Wildly Beautiful Life with Sheila Anne",
              childImageSharp: data.featuredImageOne.childImageSharp,
            }}
            loading="eager"
            title="Curate Your Wildly Beautiful Life with Sheila Anne"
          />
        </FlexColSplitImage>
      </HalfColumn>
      <HalfColumn>
        <FlexColSplitImage>
          <PreviewCompatibleImage
            imageInfo={{
              alt: "Curate Your Wildly Beautiful Life with Sheila Anne, continued",
              childImageSharp: data.featuredImageTwo.childImageSharp,
            }}
            loading="eager"
            title="Curate Your Wildly Beautiful Life with Sheila Anne, continued"
          />
        </FlexColSplitImage>
      </HalfColumn>
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
    featuredImageOne: file(relativePath: { eq: "sheila-anne-curate-wildly-beautiful-life.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featuredImageTwo: file(relativePath: { eq: "sheila-anne-curate-your-wildly-beautiful-life-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
