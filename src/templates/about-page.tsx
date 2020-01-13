import Image from "gatsby-image";
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import {
  Content,
  FlexContainer,
  FlexColumn,
  FlexImage,
  HTMLContent,
  Layout,
  SEO
} from "../components";

const StyledImage = styled(FlexImage)`
  margin-top: 4rem;
`;

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  bannerImage
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <FlexContainer>
        <FlexColumn>
          <StyledImage
            fluid={bannerImage.childImageSharp.fluid}
            title={title}
            alt="Sheila hiking in Chamonix"
          />
        </FlexColumn>
        <FlexColumn
          backgroundColor={Constants.Colors.lightestBlue}
          padding="0 1rem"
        >
          <PageContent content={content} />
        </FlexColumn>
      </FlexContainer>
    </section>
  );
};

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title="About | Sheila Anne"
        description="Learn more about Life Coach, Yoga Instructor, and Content Creator - Sheila Anne Murray"
        image={post.frontmatter.bannerImage.childImageSharp.fluid.src}
        imageAlt={post.frontmatter.bannerImageHeadline}
      />
      <AboutPageTemplate
        bannerImage={post.frontmatter.bannerImage}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        bannerImageHeadline
        bannerImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
