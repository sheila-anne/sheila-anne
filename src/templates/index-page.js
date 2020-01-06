import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Button } from "../components/button";
import { CenteredText } from "../components/centered-text";
import { Constants } from "../constants";
import { Container } from "../components/container";
import { FlexContainer } from "../components/flex-container";
import { Layout } from "../components/layout";
import Features from "../components/Features";
import { BlogRoll } from "../components/BlogRoll";

const FullWidthImage = styled.div`
  height: 400px;
  background-attachment: fixed;
  background-size: cover;
  background-position: left top;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

const ImageHeadlineContainer = styled.div`
  display: flex;
  height: 150px;
  line-height: 1;
  justify-content: space-around;
  flex-direction: column;

  @media (max-width: ${Constants.mobileWidth}) {
    align-items: center;
  }
`;

const BannerHeadline = styled.h1`
  box-shadow: #4d80e4 0.5rem 0px 0px, #4d80e4 -0.5rem 0px 0px;
  background-color: #4d80e4;
  color: #fff;
  line-height: 1;
  padding: 0.5rem;
`;

export const IndexPageTemplate = ({
  image,
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
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <ImageHeadlineContainer>
        <BannerHeadline>{title}</BannerHeadline>
        <BannerHeadline as="h3">{subheading}</BannerHeadline>
      </ImageHeadlineContainer>
    </FullWidthImage>
    <section>
      <Container>
        <FlexContainer>
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="content">
                <div className="tile">
                  <h1 className="title">{mainpitch.title}</h1>
                </div>
                <div className="tile">
                  <h3 className="subtitle">{mainpitch.description}</h3>
                </div>
              </div>
              <FlexContainer>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </FlexContainer>
              <Features gridItems={intro.blurbs} />
              <CenteredText>
                <Button to="/products">See all products</Button>
              </CenteredText>
              <FlexContainer>
                <h3>Latest stories</h3>
                <BlogRoll />
              </FlexContainer>
              <CenteredText>
                <Button to="/blog">Read more from the blog</Button>
              </CenteredText>
            </div>
          </div>
        </FlexContainer>
      </Container>
    </section>
  </>
);

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <IndexPageTemplate
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
            text
          }
          heading
          description
        }
      }
    }
  }
`;
