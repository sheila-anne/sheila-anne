import { Helmet } from "react-helmet-async";
import { graphql } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import {
  BlogRoll,
  BookingSection,
  Button,
  CenteredText,
  Features,
  FlexContainer,
  FullWidthImage,
  Instagram,
  Layout,
  PreviewCompatibleBanner,
  SEO,
  SmartLink,
} from "../components";
import { Constants } from "../constants";
import { applyStyle } from "../utils";

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
  intro: any;
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
  insta: any;
  site: {
    siteMetadata: {
      social: {
        instagram: string;
      };
    };
  };
};

type IndexPageProps = {
  data: IndexPageData;
} & BaseGatsbyPage;

type HeadlineProps = {
  color?: string;
  fontColor?: string;
  lessMargin?: boolean;
  margin?: string;
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
  ${({ margin }) => applyStyle("margin", margin)};
  padding: 0.5rem;
`;

const Subheadline = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
`;

const BannerText = styled.div`
  padding: 5px;
`;

export const IndexPageTemplate: FC<PreviewTemplateProps> = ({
  frontmatter,
  isPreview,
  posts,
}) => {
  const {
    description,
    formHeadline,
    formParagraph,
    formSubHeadline,
    image,
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
      <section>
        <CenteredText>
          <BannerHeadline color={"#FFF"} fontColor="#000">
            <BannerText>Get Grounded</BannerText>
            <BannerText>Find Balance</BannerText>
            <BannerText>Thrive</BannerText>
          </BannerHeadline>
        </CenteredText>
        <Container>
          <CenteredText>
            <Subheadline dangerouslySetInnerHTML={{ __html: description }} />
            <BannerHeadline
              as="h2"
              color={Constants.Colors.theGroveGreen}
              margin="0 0 2rem 0"
            >
              <BannerLink to="/the-grove/" title="Life Coaching in The Grove">
                Start your journey with me.
              </BannerLink>
            </BannerHeadline>
            <h3>Here's How It Works:</h3>
          </CenteredText>
          <FlexContainer>
            <Features gridItems={frontmatter.intro.blurbs} />
          </FlexContainer>
          <FlexContainer justifyContent="center" margin="2rem 0">
            <BookingSection
              formDescription={formSubHeadline}
              formParagraph={formParagraph}
              formTitle={formHeadline}
              page="Homepage"
            />
          </FlexContainer>
          <CenteredText>
            <BannerHeadline
              as="h3"
              color="#FFF"
              fontColor={"#000"}
              lessMargin={true}
            >
              Latest From The Blog
            </BannerHeadline>
          </CenteredText>
          <BlogRoll posts={posts} />
          <CenteredText>
            <Button
              backgroundColor={Constants.Colors.theGroveLightGreen}
              color="#000"
              to="/writing-desk/"
            >
              Read more @ the blog!
            </Button>
          </CenteredText>
        </Container>
      </section>
    </>
  );
};

const IndexPage: FC<IndexPageProps> = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <SEO
        description={frontmatter.pageDescription}
        location={location}
        title={frontmatter.pageTitle}
      />
      <IndexPageTemplate
        frontmatter={frontmatter}
        posts={data.allMarkdownRemark.posts}
      />
      <Instagram
        insta={data.insta}
        instagramUrl={data.site.siteMetadata.social.instagram}
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

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 3
    ) {
      ...BlogPosts
    }

    insta: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 85, maxWidth: 600, maxHeight: 600) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        social {
          instagram
        }
      }
    }
  }
`;
