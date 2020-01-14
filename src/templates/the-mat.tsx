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
            title="The Mat | Yoga With Sheila Anne"
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
        title="Yoga On The Mat | Sheila Anne"
        description="Learn more about Sheila Anne's connection to yoga and how that can help you flow through life"
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
        title
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
