import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Button } from "../components/button";
import { CenteredText } from "../components/centered-text";
import { Constants } from "../constants";
import { SubscribeForm } from "../components/subscribe-form";
import { Container } from "../components/container";
import { FlexContainer } from "../components/flex";
import { FullWidthImage } from "../components/banner-image";
import { Layout } from "../components/layout";
import { Features } from "../components/features";
import { BlogRoll } from "../components/blog-roll";
import { SEO } from "../components/seo";
import { useWindow } from "../hooks/useWindow";

type HeadlineProps = {
  lessMargin?: boolean;
};

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

const BannerHeadline = styled.h1<HeadlineProps>`
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
  intro,
  posts
}) => (
  <>
    <FullWidthImage
      fluid={
        !!image && !!image.childImageSharp ? image.childImageSharp.fluid : image
      }
      moveHeadlineOnMobile={true}
      title="Sheila Anne Life Coaching cover photo"
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
          <BannerHeadline as="h3">{heading}</BannerHeadline>
          <p>{description}</p>
        </CenteredText>
        <FlexContainer>
          <Features gridItems={intro.blurbs} />
        </FlexContainer>
        <CenteredText>
          <BannerHeadline as="h3" lessMargin={true}>
            Latest from the Writing Desk
          </BannerHeadline>
        </CenteredText>
        <BlogRoll posts={posts} />
        <CenteredText>
          <Button to="/blog">Read more from the blog</Button>
        </CenteredText>
      </Container>
    </section>
  </>
);

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { isMobile } = useWindow();

  return (
    <Layout location={location}>
      <SEO
        title="Sheila Anne | Life Coaching | Content Creation | Yoga & Intentional Movement"
        description="Life coach, yoga teacher, and writer Sheila Anne welcomes those looking to take their life to the next level"
      />
      <IndexPageTemplate
        isMobile={isMobile}
        image={frontmatter.image}
        title={frontmatter.bannerTitle}
        heading={frontmatter.heading}
        subheading={frontmatter.bannerSubtitle}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        posts={data.allMarkdownRemark.posts}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        bannerTitle
        bannerSubtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
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

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 2
    ) {
      posts: edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
