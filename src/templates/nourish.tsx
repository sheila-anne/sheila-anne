import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";
import {
  BreakOutImage,
  CenteredText,
  FlexContainer,
  FlexColSplitImage,
  HalfColumn,
  Layout,
  PreviewCompatibleImage,
  SEO,
} from "../components";

const ColorContainer = styled.div<{ backgroundColor?: string }>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  margin-bottom: 1rem;
  padding: 1rem 2rem;
`;

const DesktopImage = styled(BreakOutImage)`
  @media (max-width: ${Constants.mobileWidth}) {
    display: none;
  }
`;

const MobileImage = styled(BreakOutImage)`
  display: none;

  @media (max-width: ${Constants.mobileWidth}) {
    display: inherit;
  }
`;

const ColorContainerMobile = styled(ColorContainer)`
  margin-top: 0.25rem;
  display: none;

  @media (max-width: ${Constants.mobileWidth}) {
    display: inherit;
  }
`;

const InlineBrownText = styled.p`
  color: ${Constants.Colors.nourishBrown};
  display: inline;
  margin-left: 2px;
`;

const RoundedImage = styled(PreviewCompatibleImage)`
  border-radius: 1rem;
`;

export const NourishTemplate = ({ frontmatter }) => {
  return (
    <section style={{ backgroundColor: Constants.Colors.nourishGray }}>
      <DesktopImage imageInfo={frontmatter.bannerImage} title="Nourish whole person coaching program" />
      <MobileImage imageInfo={frontmatter.bannerImageMobile} title="Nourish whole person coaching program" />
      <ColorContainerMobile backgroundColor={Constants.Colors.nourishNeutral}>
        <CenteredText fontWeight="800" color={"#FFF"}>
          <div>a whole-person coaching program</div>
          <div>to cultivate well-being</div>
          <div>foster community</div>
          <div>
            and let your natural self
            <InlineBrownText> thrive</InlineBrownText>
          </div>
        </CenteredText>
      </ColorContainerMobile>

      <ColorContainer backgroundColor={Constants.Colors.nourishGray}>
        <CenteredText color={Constants.Colors.nourishBrown} fontWeight="800">
          <div>JOIN THE WAITLIST!</div>
          <div>Be the first to know when doors open</div>
          <div>& receive exclusive Early Bird bonuses!</div>
        </CenteredText>
      </ColorContainer>
      <h1 style={{ display: "none" }}>Nourish</h1>
      <FlexContainer justifyContent="center" margin="1rem 0" backgroundColor={Constants.Colors.nourishGray}>
        <HalfColumn>
          {/* form */}
          <div>form will go here</div>
        </HalfColumn>
        <HalfColumn>
          <FlexColSplitImage>
            <RoundedImage
              imageInfo={{
                alt: "Nourish whole person Coaching Program by Sheila Anne",
                childImageSharp: frontmatter.secondImage.childImageSharp,
              }}
              loading="eager"
              title="A whole person coaching program to cultivate well-being, foster community, and let your natural self thrive"
            />
          </FlexColSplitImage>
        </HalfColumn>
      </FlexContainer>
    </section>
  );
};

const Nourish = ({
  data: {
    markdownRemark: { frontmatter },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO
      image={frontmatter.bannerImage.publicURL}
      description={frontmatter.pageDescription}
      imageAlt={frontmatter.bannerImageHeadline}
      location={location}
      title={frontmatter.pageTitle}
    />
    <NourishTemplate frontmatter={frontmatter} />
  </Layout>
);

export default Nourish;

export const pageQuery = graphql`
  query NourishPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        bannerImageMobile {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        secondImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;
