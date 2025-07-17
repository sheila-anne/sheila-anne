import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import {
  BannerLink,
  BannerImage,
  BlogRoll,
  CenteredText,
  ContentBreak,
  Features,
  FlexContainer,
  FlexColSplitImage,
  HalfColumn,
  Layout,
  LinkButton,
  OneTreePlanted,
  PreviewCompatibleImage,
  SEO,
  SmartLink,
  Testimonial,
  Youtube,
} from "../components";
import { Constants } from "../constants";
import { applyStyle } from "../utils";
import { BaseFrontmatter, BlogPost, FeaturedGridItem, BlogPostsGraphql, BaseGatsbyPage } from "../types/global";

type MainPitch = {
  description: string;
  title: string;
  image: any;
};

type IndexFrontmatterProps = BaseFrontmatter & {
  description: string;
  bannerImage: {
    publicURL: string;
  };
  bannerImageHeadline: string;
  heading: string;
  image: any;
  intro: {
    blurbs: FeaturedGridItem[];
    workWithMe: string[];
  };
  mainpitch: MainPitch;
  freebie: any;
  testimonials: any;
};

type IndexPageInnerProps = {
  frontmatter: IndexFrontmatterProps;
  html: string;
};

type PreviewTemplateProps = IndexPageInnerProps & {
  isPreview?: boolean;
  posts: BlogPost[];
};

type IndexPageData = BlogPostsGraphql & {
  markdownRemark: IndexPageInnerProps;
  insta: any;
  site: {
    siteMetadata: {
      social: {
        instagram: string;
      };
    };
  };
  testimonials: any;
};

type IndexPageProps = {
  data: IndexPageData;
} & BaseGatsbyPage;

type HeadlineProps = {
  color?: string;
  $fontColor?: string;
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

const BannerHeadline = styled.h1<HeadlineProps>`
  background-color: ${({ color }) => (!!color ? color : Constants.Colors.blue)};
  box-shadow:
    ${({ color }) => (!!color ? color : Constants.Colors.blue)} 0.5rem 0px 0px,
    ${({ color }) => (!!color ? color : Constants.Colors.blue)} -0.5rem 0px 0px;
  color: ${({ $fontColor }) => (!!$fontColor ? $fontColor : "#FFF")};
  font-size: 1.5rem;
  margin-top: 0;
  ${({ margin }) => applyStyle("margin", margin)};
  padding: 0.5rem;
`;

const ImageContainer = styled.div`
  flex: 100%;
  margin-bottom: 1rem;
`;

const Subheadline = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
`;

const FreebieHeading = styled.h2`
  margin: 0 0.5rem;
  padding: 0 1rem 1rem 1rem;
  text-align: center;
`;

const TestimonialContainer = styled(FlexContainer).withConfig({
  shouldForwardProp: prop => prop !== "backgroundColor",
})`
  display: block;
  margin-bottom: 2rem;
`;

export const IndexPageTemplate = ({ frontmatter, html, posts }: PreviewTemplateProps) => {
  const { image, mainpitch, freebie, testimonials } = frontmatter;

  const fullTestimonials = [...testimonials];

  return (
    <section>
      <BannerImage
        image={image.childImageSharp.gatsbyImageData}
        imageHeadline="Flowing Forward Together: Align, Inspire, Transform"
        title="Sheila Anne sitting on a yoga mat smiling"
      />
      <Container>
        <CenteredText>
          <h3>Here's How We Can Work Together:</h3>
          <div>Click / tap on each of the sections for more info!</div>
        </CenteredText>
        <FlexContainer $margin="1rem 0">
          <Features gridItems={frontmatter.intro.blurbs} />
        </FlexContainer>
        <ContentBreak />
        <CenteredText $margin="0 0 2rem 0">
          <FlexContainer $justifyContent="center" $margin="1rem">
            <strong>Free masterclass with Sheila:</strong>
          </FlexContainer>
          <LinkButton to="/masterclass/">Learn more!</LinkButton>
          <FlexContainer $margin="1rem">
            In this video, you will learn the 5 step strategy that will help you shift from anxious & overwhelmed to
            aligned & purposeful living.
          </FlexContainer>
        </CenteredText>
        <ContentBreak />
        <CenteredText>
          <h3>What people are saying:</h3>
        </CenteredText>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <ContentBreak />
        <FlexContainer $margin="1rem 0 0 0">
          <ImageContainer>
            <PreviewCompatibleImage
              loading="lazy"
              imageAlt="Sheila Anne on a brightly lit porch with a colorful rug"
              imageInfo={mainpitch.image.childImageSharp.gatsbyImageData}
              title="A warm welcome from Sheila Anne"
            />
          </ImageContainer>
          <div>
            {mainpitch.title} <SmartLink to="/book/exploration/">Book your first call with me here.</SmartLink>
          </div>
        </FlexContainer>
        <FlexContainer $justifyContent="center" $margin="2rem 0">
          <HalfColumn>
            <FlexColSplitImage>
              <SmartLink to="/freebie/" title="Positivity Pack freebie">
                <PreviewCompatibleImage
                  loading="lazy"
                  imageAlt="Preview of the Positivity Pack freebie"
                  imageInfo={freebie.childImageSharp.gatsbyImageData}
                  title="Preview of the Positivity Pack freebie"
                />
              </SmartLink>
            </FlexColSplitImage>
          </HalfColumn>
          <HalfColumn>
            <FreebieHeading>Free Download!</FreebieHeading>
            <div>
              Find focus, be magnetic and create change from within with the{" "}
              <BannerLink to="/freebie/" title="Positivity Pack freebie">
                Positivity Pack
              </BannerLink>
              !
            </div>
          </HalfColumn>
        </FlexContainer>
        <ContentBreak />
        <Youtube url="7jTx1xMKI_Q" />
        <TestimonialContainer $margin="0 0 1rem 0">
          <Testimonial testimonials={fullTestimonials} />
        </TestimonialContainer>
        <CenteredText>
          <BannerHeadline as="h2" color="#FFF" $fontColor={Constants.Colors.bodyCopy}>
            Latest From The Blog
          </BannerHeadline>
        </CenteredText>
        <BlogRoll posts={posts} />
        <CenteredText>
          <LinkButton to="/writing-desk/">Read more @ the blog!</LinkButton>
        </CenteredText>
        <OneTreePlanted />
      </Container>
    </section>
  );
};

const IndexPage = ({ data, location }: IndexPageProps) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout location={location}>
      <SEO
        description={frontmatter.pageDescription}
        location={location}
        title={frontmatter.pageTitle}
        image={frontmatter.bannerImage.publicURL}
        imageAlt={frontmatter.bannerImageHeadline}
      />
      <IndexPageTemplate frontmatter={frontmatter} html={html} posts={data.allMarkdownRemark.posts} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        description
        bannerImage {
          publicURL
        }
        bannerImageHeadline
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        freebie {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        intro {
          workWithMe
          blurbs {
            href
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
              }
            }
            imageAlt
            text
            title
          }
        }
        mainpitch {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 2048, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
            }
          }
        }
        pageDescription
        pageTitle
        testimonials {
          title
          imageAlt
          imageSrc {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
            }
          }
          text
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 3
    ) {
      ...BlogPosts
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
