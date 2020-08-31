import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import {
  BlogRoll,
  BreakOutImage,
  CenteredText,
  ContentBreak,
  Features,
  FlexContainer,
  HalfColumn,
  Instagram,
  Layout,
  LinkButton,
  PreviewCompatibleImage,
  SEO,
  SmartLink,
  Testimonial,
} from "../components";
import { Constants } from "../constants";
import { applyStyle } from "../utils";

type MainPitch = {
  description: string;
  title: string;
  image: NestedImage;
};

type IndexFrontmatterProps = BaseFrontmatter & {
  description: string;
  heading: string;
  image: PreviewImage | string;
  intro: {
    blurbs: FeaturedGridItem[];
  };
  mainpitch: MainPitch;
  pathfinder: NestedImage;
  testimonials: any;
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
  testimonials: any;
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
  text-decoration: underline;
`;

const BannerHeadline = styled.h1<HeadlineProps>`
  background-color: ${({ color }) => (!!color ? color : Constants.Colors.blue)};
  box-shadow: ${({ color }) => (!!color ? color : Constants.Colors.blue)} 0.5rem 0px 0px,
    ${({ color }) => (!!color ? color : Constants.Colors.blue)} -0.5rem 0px 0px;
  color: ${({ fontColor }) => (!!fontColor ? fontColor : "#FFF")};
  font-size: 1.5rem;
  margin-top: 0;
  ${({ margin }) => applyStyle("margin", margin)};
  padding: 0.5rem;
`;

const ImageContainer = styled.div`
  flex: 100%;
  margin-bottom: 1rem;
`;

const HalfImage = styled.div`
  max-width: 200px;
  text-align: center;

  @media (max-width: ${Constants.mobileWidth}) {
    max-width: inherit;
  }
`;

const Subheadline = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
`;

const PathfinderHeading = styled.h2`
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;
  text-align: center;
`;

const BannerText = styled.div`
  padding: 5px;
`;

const TestimonialContainer = styled(FlexContainer)`
  display: block;
`;

export const IndexPageTemplate = ({ frontmatter, posts }: PreviewTemplateProps) => {
  const { description, image, mainpitch, pathfinder, testimonials } = frontmatter;

  const safeImage = image as NestedImage;

  return (
    <section>
      <BreakOutImage
        loading="eager"
        imageInfo={{
          alt: "Sheila Anne welcoming you to her site",
          childImageSharp: safeImage?.childImageSharp,
        }}
        title="Sheila Anne Life Coaching cover photo"
      />
      <CenteredText>
        <BannerHeadline color="#FFF" fontColor="#000" margin="1rem 0 0 0">
          <BannerText>Come Home To Yourself, Transform Your Life</BannerText>
        </BannerHeadline>
      </CenteredText>
      <Container>
        <CenteredText>
          <Subheadline dangerouslySetInnerHTML={{ __html: description }} />
          <ContentBreak />
          <h3>Here's How We Can Work Together:</h3>
        </CenteredText>
        <FlexContainer margin="1rem 0">
          <Features gridItems={frontmatter.intro.blurbs} />
        </FlexContainer>
        <FlexContainer margin="2rem 0">
          <ImageContainer>
            <PreviewCompatibleImage
              loading="lazy"
              imageInfo={{
                alt: "Sheila Anne drinking coffee",
                childImageSharp: mainpitch.image.childImageSharp,
              }}
              title="A warm welcome from Sheila Anne"
            />
          </ImageContainer>
          <p>{mainpitch.title}</p>
        </FlexContainer>
        <ContentBreak />
        <FlexContainer justifyContent="center" margin="1rem 0">
          <HalfColumn>
            <HalfImage>
              <SmartLink to="/pathfinder/" title="PATHFINDER freebie">
                <PreviewCompatibleImage
                  loading="lazy"
                  imageInfo={{
                    alt: "Preview of the PATHFINDER freebie",
                    childImageSharp: pathfinder.childImageSharp,
                  }}
                  title="Preview of the PATHFINDER freebie"
                />
              </SmartLink>
            </HalfImage>
          </HalfColumn>
          <HalfColumn>
            <PathfinderHeading>PATHFINDER: Find Your Way</PathfinderHeading>
            <div>
              <BannerLink to="/pathfinder/" title="PATHFINDER freebie">
                Grab your free, downloadable guide
              </BannerLink>{" "}
              that will help you make your next big move. PATHFINDER will help you to reflect on questions that really
              matter when taking your next step; gain clarity around what you desire in your career path; and feel more
              resourced in how to pursue the path you deserve!
            </div>
          </HalfColumn>
        </FlexContainer>
        <CenteredText>
          <BannerHeadline as="h2" color="#FFF" fontColor="#000" lessMargin={true}>
            What People Are Saying
          </BannerHeadline>
        </CenteredText>
        <TestimonialContainer backgroundColor={Constants.Colors.theGroveGreenGray} margin="0 0 1rem 0">
          <Testimonial testimonials={testimonials} />
        </TestimonialContainer>
        <CenteredText>
          <BannerHeadline as="h2" color="#FFF" fontColor="#000" lessMargin={true}>
            Latest From The Blog
          </BannerHeadline>
        </CenteredText>
        <BlogRoll posts={posts} />
        <CenteredText>
          <LinkButton backgroundColor={Constants.Colors.theGroveLightGreen} color="#000" to="/writing-desk/">
            Read more @ the blog!
          </LinkButton>
        </CenteredText>
      </Container>
    </section>
  );
};

const IndexPage = ({ data, location }: IndexPageProps) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <SEO description={frontmatter.pageDescription} location={location} title={frontmatter.pageTitle} />
      <IndexPageTemplate frontmatter={frontmatter} posts={data.allMarkdownRemark.posts} />
      <Instagram insta={data.insta} instagramUrl={data.site.siteMetadata.social.instagram} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pathfinder {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          blurbs {
            href
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
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
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
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          text
        }
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
