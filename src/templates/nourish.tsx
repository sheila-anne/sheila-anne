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
  NourishForm,
  PreviewCompatibleImage,
  SEO,
} from "../components";

const ColorContainer = styled.div<{ backgroundColor?: string }>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  margin-top: 1rem;
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
        <CenteredText color={Constants.Colors.nourishBrown} fontSize="2rem" fontWeight="800">
          <div>GET EARLY ACCESS!</div>
          <div>Be the first to apply</div>
          <div>& receive exclusive Early Bird bonuses!</div>
        </CenteredText>
      </ColorContainer>
      <h1 style={{ display: "none" }}>Nourish</h1>
      <FlexContainer justifyContent="center" margin="1rem 0" backgroundColor={Constants.Colors.nourishGray}>
        <HalfColumn>
          <NourishForm backgroundColor={Constants.Colors.nourishGray} submitText="Get Early Access!" page="nourish" />
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
      <PreviewCompatibleImage imageInfo={frontmatter.thirdImage} title="Nourish teaser photo" />
      <CenteredText
        backgroundColor={Constants.Colors.nourishNeutral}
        color={Constants.Colors.nourishBrown}
        padding="1rem"
        fontSize="2rem"
      >
        <div>
          FOR THE <b>AMBITIOUS WOMAN</b>
        </div>
        <div>
          WHO IS <b>READY</b>
        </div>
        <div>
          TO FULLY <b>NOURISH</b>
        </div>
        <div>
          HER <b>UNIQUE POWER</b>
        </div>
        <div>
          AND SAY <b>YES</b> TO
        </div>
        <div>
          THE <b>WILDLY BEAUTIFUL</b> LIFE
        </div>
        <div>
          <b>SHE KNOWS</b> SHE IS
        </div>
        <div>
          CAPABLE OF <b>CREATING</b>.
        </div>
      </CenteredText>
      <CenteredText
        backgroundColor={Constants.Colors.nourishNeutral}
        color={Constants.Colors.nourishBrown}
        fontSize="2rem"
        margin="1rem 0"
      >
        A 14 week group coaching program kicking off <b>Fall 2021!</b>
      </CenteredText>
      <CenteredText
        backgroundColor={Constants.Colors.nourishNeutral}
        color={Constants.Colors.nourishBrown}
        fontSize="2rem"
      >
        Sign up for Early Access 👆 to get Early Bird bonuses!
      </CenteredText>
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
        thirdImage {
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
