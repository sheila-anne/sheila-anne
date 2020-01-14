import React, { FC } from "react";
import { graphql } from "gatsby";

import {
  BannerImage,
  BlogRoll,
  Content,
  HTMLContent,
  Layout,
  PreviewCompatibleBanner,
  PreviewCompatibleBannerHeadline,
  SEO
} from "../components/";
import { Constants } from "../constants";

export const TheMatTemplate: FC<BasePreviewWithBannerImage> = ({
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
          <BannerImage
            containImage={true}
            image={safeImage}
            title={frontmatter.pageTitle}
            imageHeadline={frontmatter.bannerImageHeadline}
            moveHeadlineOnMobile={true}
          />
        }
        ComponentChildren={
          <PreviewCompatibleBannerHeadline
            color={Constants.Colors.lighterBlue}
            imageHeadline={imageHeadline}
            isPreview={isPreview}
          />
        }
        image={image}
        isPreview={isPreview}
      />

      <PageContent content={content} />
      {posts.length > 0 && <BlogRoll posts={posts} />}
    </section>
  );
};

const TheMat: FC<GatsbyPage> = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.pageTitle}
        description={post.frontmatter.pageDescription}
      />
      <TheMatTemplate
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

export default TheMat;

export const pageQuery = graphql`
  query TheMatPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bannerImageHeadline
        pageDescription
        pageTitle
      }
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { eq: "the mat" } } }
    ) {
      ...BlogPosts
    }
  }
`;
