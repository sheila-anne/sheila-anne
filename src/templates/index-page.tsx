import Helmet from "react-helmet";
import { graphql } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import {
  BlogRoll,
  Button,
  CenteredText,
  Features,
  FlexContainer,
  FullWidthImage,
  Layout,
  PreviewCompatibleBanner,
  SubscribeForm,
  SEO,
  SmartLink
} from "../components";
import { Constants } from "../constants";
import { useWindow } from "../hooks/useWindow";

type MainPitch = {
  description: string;
  title: string;
};

type Intro = {
  blurbs: FeaturedGridItem[];
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
  intro: Intro;
  mainpitch: MainPitch;
};

type IndexFrontmatterProperty = {
  frontmatter: IndexFrontmatterProps;
};

type PreviewTemplateProps = IndexFrontmatterProperty & {
  isPreview?: boolean;
  isMobile: boolean;
  posts: BlogPost[];
};

type IndexPageData = BlogPostsGraphql & {
  markdownRemark: IndexFrontmatterProperty;
};

type IndexPageProps = {
  data: IndexPageData;
} & BaseGatsbyPage;

type HeadlineProps = {
  lessMargin?: boolean;
  inline?: boolean;
};

const Container = styled.div`
  flex-grow: 1;
  margin: 0 1rem;
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
  text-decoration: underline;
`;

const BannerHeadline = styled.h1<HeadlineProps>`
  background-color: ${Constants.Colors.blue};
  border-radius: 1rem;
  box-shadow: ${Constants.Colors.blue} 0.5rem 0px 0px,
    ${Constants.Colors.blue} -0.5rem 0px 0px;
  color: #fff;
  padding: 0.5rem;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-top: 0;
  }
`;

const FlexLinkContainer = styled(FlexContainer)`
  border: 2px solid ${Constants.Colors.theGroveGreen};
  border-radius: 2rem;
  margin: 1rem;
  justify-content: space-around;
  padding: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-bottom: 1rem;

    > :last-child {
      margin-bottom: 0;
    }
  }
`;

const HomepageHeadline = styled.h1`
  font-size: 1.5rem;
  margin: 1rem;
  padding: 1rem;
`;

const ImageHeadlineContainer = styled.div`
  align-items: center;
  background-color: ${Constants.Colors.blue};
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  width: 85%;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: ${Constants.mobileWidth}) {
    background-color: #fff;
    border-radius: 0;
    margin-top: 0;
    width: 100%;
  }
`;

const BannerHeadlines = ({ bannerTitle, bannerSubtitle, isMobile }) => (
  <ImageHeadlineContainer>
    <BannerHeadline>{bannerTitle}</BannerHeadline>
    <BannerHeadline as="h3" inline={!isMobile} lessMargin={isMobile}>
      {bannerSubtitle}{" "}
      <BannerLink to="/the-grove" title="Life Coaching in The Grove">
        Start here.
      </BannerLink>
    </BannerHeadline>
  </ImageHeadlineContainer>
);

export const IndexPageTemplate: FC<PreviewTemplateProps> = ({
  frontmatter,
  isMobile,
  isPreview,
  posts
}) => {
  const {
    bannerTitle,
    bannerSubtitle,
    description,
    formHeadline,
    formParagraph,
    formSubHeadline,
    image,
    intro,
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
            type="jpg"
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
            preserveStackingContext={true}
            title="Sheila Anne Life Coaching cover photo"
          />
        }
        image={image}
      />
      <BannerHeadlines
        bannerSubtitle={bannerSubtitle}
        bannerTitle={bannerTitle}
        isMobile={isMobile}
      />
      <section>
        <Container>
          <FlexContainer backgroundColor={Constants.Colors.lightestBlue}>
            <HomepageHeadline>{description}</HomepageHeadline>
          </FlexContainer>
          <FlexContainer
            backgroundColor={Constants.Colors.featuredPost}
            margin="1rem 0"
          >
            <SubscribeForm
              backgroundColor={Constants.Colors.featuredPost}
              formDescription={formSubHeadline}
              formParagraph={formParagraph}
              formTitle={formHeadline}
              page="homepage"
            />
          </FlexContainer>
          <CenteredText>
            <h3>{mainpitch.title}</h3>
            <p>{mainpitch.description}</p>
          </CenteredText>
          <FlexContainer>
            <Features gridItems={intro.blurbs} />
          </FlexContainer>
          <FlexLinkContainer>
            <Button to="/the-grove/" title="Learn more in the Grove">
              Life Coaching in The Grove
            </Button>
            <Button to="/about/" title="More about Sheila Anne">
              About
            </Button>
          </FlexLinkContainer>
          <CenteredText>
            <BannerHeadline as="h3" lessMargin={true}>
              Latest from the Writing Desk
            </BannerHeadline>
          </CenteredText>
          <BlogRoll posts={posts} />
          <CenteredText>
            <Button to="/writing-desk/">Read more from the blog</Button>
          </CenteredText>
        </Container>
      </section>
    </>
  );
};

const IndexPage: FC<IndexPageProps> = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { isMobile } = useWindow();

  return (
    <Layout location={location}>
      <SEO
        title={frontmatter.pageTitle}
        description={frontmatter.pageDescription}
      />
      <IndexPageTemplate
        isMobile={isMobile}
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
      limit: 2
    ) {
      ...BlogPosts
    }
  }
`;
