import React, { FC } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import {
  BasicHeadline,
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

type IndexFrontmatterProps = {
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
  ${({ inline }) => !!inline && `display: inline;`}
  padding: 0.5rem;

  @media (max-width: ${Constants.mobileWidth}) {
    ${({ lessMargin }) => !!lessMargin && "margin: 0;"}
  }
`;

const BannerLink = styled(SmartLink)`
  color: #fff;
  text-decoration: underline;
`;

const BannerHeadlines = ({ bannerTitle, bannerSubtitle, isMobile }) => (
  <ImageHeadlineContainer>
    <BannerHeadline>{bannerTitle}</BannerHeadline>
    <BannerHeadline as="h3" inline={!isMobile} lessMargin={isMobile}>
      {bannerSubtitle} <BannerLink to="/the-grove">Start here.</BannerLink>
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
    mainpitch,
    heading
  } = frontmatter;

  const safeImage = image as NestedImage;

  const banners = (
    <BannerHeadlines
      bannerSubtitle={bannerSubtitle}
      bannerTitle={bannerTitle}
      isMobile={isMobile}
    />
  );

  const bannerImage = (
    <FullWidthImage
      fluid={
        !!safeImage && !!safeImage.childImageSharp
          ? safeImage.childImageSharp.fluid
          : safeImage
      }
      moveHeadlineOnMobile={true}
      title="Sheila Anne Life Coaching cover photo"
    >
      {!isMobile && banners}
    </FullWidthImage>
  );

  return (
    <>
      <PreviewCompatibleBanner
        isPreview={isPreview}
        Component={bannerImage}
        image={image}
      />
      {isMobile && banners}
      <section>
        <Container>
          <FlexContainer backgroundColor={Constants.Colors.lightestBlue}>
            <BasicHeadline>{mainpitch.description}</BasicHeadline>
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
            <BannerHeadline as="h2">{heading}</BannerHeadline>
            <h3>{mainpitch.title}</h3>
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
        title={`Sheila Anne | Life Coaching | Content Creation | Yoga & Intentional Movement`}
        description="Life coach, yoga teacher, and writer Sheila Anne Murray welcomes those looking to take their life to the next level"
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
        heading
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
        mainpitch {
          title
          description
        }
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
