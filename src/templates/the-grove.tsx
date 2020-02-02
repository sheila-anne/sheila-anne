import { graphql } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import {
  CenteredSection,
  Content,
  Features,
  FlexContainer,
  FlexColumn,
  HTMLContent,
  Layout,
  SEO,
  SubscribeForm,
  PreviewCompatibleFlexImage,
  CenteredText
} from "../components";

const LifeCoachingFlexColumn = styled(FlexColumn)``;

export const TheGroveTemplate: FC<BasePreviewWithBannerImage> = ({
  content,
  contentComponent,
  frontmatter
}) => {
  const PageContent = contentComponent || Content;

  return (
    <CenteredSection>
      <PageContent content={content} margin="0 0 1rem 0" padding="5px 2rem" />
      <CenteredText>
        <h2>How Does It Work?</h2>
      </CenteredText>
      <FlexContainer>
        <Features gridItems={frontmatter.intro.blurbs} />
        <hr />
        <LifeCoachingFlexColumn>
          <PreviewCompatibleFlexImage
            imageInfo={frontmatter.featuredImage}
            title="Schedule a free discovery call today!"
            imageAlt="Sheila Anne Murray in the mountains of Switzerland"
          />
        </LifeCoachingFlexColumn>
        <LifeCoachingFlexColumn
          backgroundColor={Constants.Colors.theGroveLightGreen}
        >
          <SubscribeForm
            backgroundColor="#fff"
            formDescription={frontmatter.formSubHeadline}
            formParagraph={frontmatter.formParagraph}
            formTitle={frontmatter.formHeadline}
            id="#theGroveSubscribe"
            page="theGrove"
          />
        </LifeCoachingFlexColumn>
      </FlexContainer>
    </CenteredSection>
  );
};

const TheGrove = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.pageTitle}
        description={post.frontmatter.pageDescription}
        imageAlt={post.frontmatter.bannerImageHeadline}
      />
      <TheGroveTemplate
        contentComponent={HTMLContent}
        content={post.html}
        frontmatter={post.frontmatter}
        imageHeadline={post.frontmatter.bannerImageHeadline}
      />
    </Layout>
  );
};

export default TheGrove;

export const pageQuery = graphql`
  query TheGrovePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        formHeadline
        formSubHeadline
        formParagraph
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
            title
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;
