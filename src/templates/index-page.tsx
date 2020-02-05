import Helmet from "react-helmet";
import { graphql } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import {
  BlogRoll,
  BookingSection,
  Button,
  CenteredSection,
  CenteredText,
  FlexContainer,
  FullWidthImage,
  Layout,
  PreviewCompatibleBanner,
  SEO,
  SmartLink
} from "../components";
import { Constants } from "../constants";

type MainPitch = {
  description: string;
  title: string;
};

type IndexFrontmatterProps = BaseFrontmatter & {
  bannerSubtitle: string;
  bannerTitle: string;
  description: string;
  formHeadline: string;
  formSubHeadline: string;
  formParagraph: string;
  heading: string;
  image: PreviewImage | string;
  mainpitch: MainPitch;
};

type IndexFrontmatterProperty = {
  frontmatter: IndexFrontmatterProps;
};

type PreviewTemplateProps = IndexFrontmatterProperty & {
  isPreview?: boolean;
  posts: BlogPost[];
};

type IndexPageData = BlogPostsGraphql & {
  markdownRemark: IndexFrontmatterProperty;
};

type IndexPageProps = {
  data: IndexPageData;
} & BaseGatsbyPage;

type HeadlineProps = {
  color?: string;
  fontColor?: string;
  lessMargin?: boolean;
};

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152;
  }

  @media (min-width: 1408px) {
    max-width: 1344px;
  }
`;

const BannerLink = styled(SmartLink)`
  color: #fff;
  display: inline;
  text-decoration: underline;
`;

const BannerHeadline = styled.h1<HeadlineProps>`
  background-color: ${({ color }) => (!!color ? color : Constants.Colors.blue)};
  box-shadow: ${({ color }) => (!!color ? color : Constants.Colors.blue)} 0.5rem
      0px 0px,
    ${({ color }) => (!!color ? color : Constants.Colors.blue)} -0.5rem 0px 0px;
  color: ${({ fontColor }) => (!!fontColor ? fontColor : "#FFF")};
  font-size: 1.5rem;
  margin-top: 0;
  padding: 0.5rem;
`;

const Subheadline = styled.h2`
  font-size: 1.5rem;
  margin: 1rem;
  padding: 1rem;
`;

export const IndexPageTemplate: FC<PreviewTemplateProps> = ({
  frontmatter,
  isPreview,
  posts
}) => {
  const {
    bannerSubtitle,
    description,
    formHeadline,
    formParagraph,
    formSubHeadline,
    image,
    mainpitch
  } = frontmatter;

  const safeImage = image as NestedImage;

  const bannerImagesrc = safeImage?.childImageSharp?.fluid?.src;

  return (
    <>
      {!!bannerImagesrc && (
        <Helmet>
          <link
            href={bannerImagesrc}
            rel="preload"
            as="image"
            key={bannerImagesrc}
            crossOrigin="anoynmous"
          />
        </Helmet>
      )}
      <PreviewCompatibleBanner
        isPreview={isPreview}
        Component={
          <FullWidthImage
            critical={true}
            fadeIn="soft"
            fluid={safeImage?.childImageSharp?.fluid || safeImage}
            title="Sheila Anne Life Coaching cover photo"
          />
        }
        image={image}
      />
      <CenteredSection>
        <CenteredText>
          <BannerHeadline>{mainpitch.title}</BannerHeadline>
        </CenteredText>
        <Container>
          <CenteredText>
            <Subheadline>{description}</Subheadline>
            <BannerHeadline as="h2" color={Constants.Colors.theGroveGreen}>
              {bannerSubtitle}{" "}
              <BannerLink to="/the-grove" title="Life Coaching in The Grove">
                Start here.
              </BannerLink>
            </BannerHeadline>
            <p>{mainpitch.description}</p>
          </CenteredText>
          <FlexContainer
            backgroundColor={Constants.Colors.featuredPost}
            justifyContent="center"
            margin="1rem 0"
          >
            <BookingSection
              backgroundColor={Constants.Colors.featuredPost}
              formDescription={formSubHeadline}
              formParagraph={formParagraph}
              formTitle={formHeadline}
              page="Homepage"
            />
          </FlexContainer>
          <CenteredText>
            <BannerHeadline as="h3" lessMargin={true}>
              Latest from my blog
            </BannerHeadline>
          </CenteredText>
          <BlogRoll posts={posts} />
          <CenteredText>
            <Button to="/writing-desk/">Read more on the blog!</Button>
          </CenteredText>
        </Container>
      </CenteredSection>
    </>
  );
};

const IndexPage: FC<IndexPageProps> = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <SEO
        title={frontmatter.pageTitle}
        description={frontmatter.pageDescription}
      />
      <IndexPageTemplate
        frontmatter={frontmatter}
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
        description
        formHeadline
        formSubHeadline
        formParagraph
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mainpitch {
          title
          description
        }
        pageDescription
        pageTitle
      }
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 3
    ) {
      ...BlogPosts
    }
  }
`;
