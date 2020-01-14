import { graphql } from "gatsby";
import React, { FC } from "react";

import { Constants } from "../constants";
import {
  BannerImage,
  BlogRoll,
  Content,
  FlexContainer,
  FlexColumn,
  HTMLContent,
  Layout,
  SEO,
  SubscribeForm,
  PreviewCompatibleBanner,
  PreviewCompatibleBannerHeadline,
  PreviewCompatibleFlexImage
} from "../components";

const TheGroveBannerImage = ({
  safeImage,
  imageHeadline
}: {
  safeImage: NestedImage;
  imageHeadline: string;
}) => (
  <BannerImage
    color={Constants.Colors.theGroveGreen}
    image={safeImage}
    title="Life Coaching in The Grove"
    imageHeadline={imageHeadline}
    moveHeadlineOnMobile={true}
  />
);

export const TheGroveTemplate: FC<BasePreviewWithBannerImage> = ({
  content,
  contentComponent,
  frontmatter,
  image,
  imageHeadline,
  isPreview,
  posts
}) => {
  const PageContent = contentComponent || Content;
  const safeImage = image as NestedImage;

  return (
    <section>
      <PreviewCompatibleBanner
        Component={
          <TheGroveBannerImage
            safeImage={safeImage}
            imageHeadline={imageHeadline}
          />
        }
        ComponentChildren={
          <PreviewCompatibleBannerHeadline
            color={Constants.Colors.theGroveGreen}
            imageHeadline={imageHeadline}
            isPreview={isPreview}
          />
        }
        image={image}
        isPreview={isPreview}
      />
      <PageContent
        backgroundColor={Constants.Colors.theGroveGreenGray}
        content={content}
        margin="0 0 1rem 0"
        padding="5px"
      />
      <FlexContainer>
        <FlexColumn>
          <PreviewCompatibleFlexImage
            imageInfo={frontmatter.featuredImage}
            title="Schedule a free discovery call today!"
            imageAlt="Sheila Anne Murray in the mountains of Switzerland"
          />
        </FlexColumn>
        <FlexColumn backgroundColor={Constants.Colors.theGroveLightGreen}>
          <SubscribeForm
            backgroundColor="#fff"
            formDescription={frontmatter.formSubHeadline}
            formParagraph={frontmatter.formParagraph}
            formTitle={frontmatter.formHeadline}
            page="theGrove"
          />
        </FlexColumn>
      </FlexContainer>
      {posts.length > 0 && <BlogRoll posts={posts} />}
    </section>
  );
};

const TheGrove = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.pageTitle}
        description={post.frontmatter.pageDescription}
        image={post.frontmatter.bannerImage.childImageSharp.fluid.src}
        imageAlt={post.frontmatter.bannerImageHeadline}
      />
      <TheGroveTemplate
        contentComponent={HTMLContent}
        content={post.html}
        frontmatter={post.frontmatter}
        image={post.frontmatter.bannerImage}
        imageHeadline={post.frontmatter.bannerImageHeadline}
        posts={data.allMarkdownRemark.posts}
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
        bannerImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
        pageDescription
        pageTitle
      }
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { eq: "the grove" } } }
    ) {
      ...BlogPosts
    }
  }
`;
