import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Button } from "../components/button";
import { CenteredText } from "../components/centered-text";
import { Constants } from "../constants";
import { SubscribeForm } from "../components/subscribe-form";
import { Container } from "../components/container";
import { FlexContainer } from "../components/flex";
import { Layout } from "../components/layout";
import { Features } from "../components/features";
import { BlogRoll } from "../components/BlogRoll";
import { useWindow } from "../hooks/useWindow";

const FullWidthImage = styled.div`
  height: 400px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  margin-top: 0;

  @media (max-width: ${Constants.mobileWidth}) {
    height: 200px;
    background-size: contain;
    background-position: unset;
  }
`;

const ImageHeadlineContainer = styled.div`
  align-items: flex-start;
  display: flex;
  height: 150px;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-bottom: 4rem;
  }
`;

const BannerHeadline = styled.h1`
  box-shadow: ${Constants.Colors.blue} 0.5rem 0px 0px,
    ${Constants.Colors.blue} -0.5rem 0px 0px;
  background-color: ${Constants.Colors.blue};
  color: #fff;
  padding: 0.5rem;

  @media (max-width: ${Constants.mobileWidth}) {
    ${({ lessMargin }) => !!lessMargin && "margin: 0;"}
  }
`;

export const IndexPageTemplate = ({
  image,
  isMobile,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <>
    <FullWidthImage
      style={{
        backgroundImage: `url(${
          !!image && !!image.childImageSharp
            ? image.childImageSharp.fluid.src
            : image
        })`
      }}
    >
      {!isMobile && (
        <ImageHeadlineContainer>
          <BannerHeadline>{title}</BannerHeadline>
          <BannerHeadline as="h3">{subheading}</BannerHeadline>
        </ImageHeadlineContainer>
      )}
    </FullWidthImage>
    {isMobile && (
      <ImageHeadlineContainer>
        <BannerHeadline>{title}</BannerHeadline>
        <BannerHeadline as="h3" lessMargin={true}>
          {subheading}
        </BannerHeadline>
      </ImageHeadlineContainer>
    )}
    <section>
      <Container>
        <FlexContainer backgroundColor={Constants.Colors.lightestBlue}>
          <h1>{mainpitch.title}</h1>
          <h3>{mainpitch.description}</h3>
        </FlexContainer>
        <FlexContainer
          backgroundColor={Constants.Colors.featuredPost}
          margin="1rem 0"
        >
          <SubscribeForm />
        </FlexContainer>
        <CenteredText>
          <BannerHeadline as="h3" lessMargin={true}>
            {heading}
          </BannerHeadline>
          <p>{description}</p>
        </CenteredText>
        <FlexContainer>
          <Features gridItems={intro.blurbs} />
          <FlexContainer>
            <BannerHeadline as="h3" lessMargin={true}>
              Latest from the Writing Desk
            </BannerHeadline>
            <BlogRoll />
          </FlexContainer>
          <CenteredText>
            <Button to="/blog">Read more from the blog</Button>
          </CenteredText>
        </FlexContainer>
      </Container>
    </section>
  </>
);

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { isMobile } = useWindow();

  return (
    <Layout location={location}>
      <IndexPageTemplate
        isMobile={isMobile}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageAlt
            text
          }
          heading
          description
        }
      }
    }
  }
`;
