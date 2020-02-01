import React, { FC } from "react";
import { graphql } from "gatsby";

import {
  BannerImage,
  Content,
  HTMLContent,
  ImageHeadlineContainer,
  Layout,
  PreviewCompatibleBanner,
  SEO
} from "../components/";
import { Constants } from "../constants";

export const TheMatTemplate: FC<BasePreviewWithBannerImage> = ({
  content,
  contentComponent,
  frontmatter,
  image,
  imageHeadline,
  isPreview
}) => {
  const PageContent = contentComponent || Content;
  const safeImage = image as NestedImage;

  return (
    <section>
      <PreviewCompatibleBanner
        Component={
          <BannerImage
            image={safeImage}
            title={frontmatter.pageTitle}
            imageHeadline={frontmatter.bannerImageHeadline}
          />
        }
        ComponentChildren={
          <ImageHeadlineContainer color={Constants.Colors.lighterBlue}>
            {imageHeadline}
          </ImageHeadlineContainer>
        }
        image={safeImage}
        isPreview={isPreview}
      />

      <PageContent content={content} />
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
  }
`;
