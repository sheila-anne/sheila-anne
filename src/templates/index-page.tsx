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
  Headline,
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

const BannerLink = styled(SmartLink)`
  color: #fff;
  text-decoration: underline;
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

const BannerHeadlineWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  height: 150px;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;

const BannerHeadlines = ({ bannerTitle, bannerSubtitle, isMobile }) => (
  <BannerHeadlineWrapper>
    <Headline color={Constants.Colors.blue}>{bannerTitle}</Headline>
    <Headline
      color={Constants.Colors.blue}
      as="h3"
      inline={!isMobile}
      lessMargin={isMobile}
    >
      {bannerSubtitle}{" "}
      <BannerLink to="/the-grove" title="Life Coaching in The Grove">
        Start here.
      </BannerLink>
    </Headline>
  </BannerHeadlineWrapper>
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

  const Banners = () => (
    <BannerHeadlines
      bannerSubtitle={bannerSubtitle}
      bannerTitle={bannerTitle}
      isMobile={isMobile}
    />
  );

  const bannerImagesrc = safeImage?.childImageSharp?.fluid?.src;

  const bannerImage = (
    <FullWidthImage
      critical={true}
      fadeIn="soft"
      fluid={safeImage?.childImageSharp?.fluid || safeImage}
      moveHeadlineOnMobile={true}
      preserveStackingContext={true}
      title="Sheila Anne Life Coaching cover photo"
    >
      {!isMobile && <Banners />}
    </FullWidthImage>
  );

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
        Component={bannerImage}
        ComponentChildren={<Banners />}
        image={image}
      />
      {isMobile && <Banners />}
      <section>
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
          <Headline
            as="h3"
            color={Constants.Colors.blue}
            height="4rem"
            lessMargin={true}
          >
            Latest from the Writing Desk
          </Headline>
        </CenteredText>
        <BlogRoll posts={posts} />
        <CenteredText>
          <Button to="/writing-desk/">Read more from the blog</Button>
        </CenteredText>
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
