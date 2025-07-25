import React from "react";
import styled from "styled-components";

import { BlogPostMeta } from "./blog-post-meta";
import { Constants } from "../constants";
import { FlexContainer, FlexColumn, FlexHeader } from "./flex";
import { PreviewCompatibleImage } from "./preview-compatible";
import { SmartLink } from "./smart-link";
import { getImage } from "gatsby-plugin-image";

type ArticleProps = {
  $isFeatured: boolean;
};

const BlogRollFlexContainer = styled(FlexContainer)`
  @media (max-width: ${Constants.mobileWidth}) {
    flex-flow: column;
  }
`;

const BlogRollFlexColumn = styled(FlexColumn)`
  flex-basis: 33%;
`;

const FlexTextContainer = styled.div`
  flex-basis: 67%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

const FlexTitle = styled.h3`
  padding: 1rem 0;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 0.25rem 0;
    padding: 2rem;
  }
`;

const FeaturedThumbnail = styled.div`
  align-self: center;
  flex-basis: 35%;
  margin: 1rem 1rem 0 0;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 1rem auto 0 auto;
  }
`;

const Article = styled.article<ArticleProps>`
  align-items: center;
  background-color: ${({ $isFeatured }) =>
    $isFeatured ? Constants.Colors.theGroveTeal : Constants.Colors.theGroveLightGreen};
  border-radius: 1rem;
  color: ${Constants.Colors.bodyCopy};
  display: flex;
  height: max-content;
  margin: 1rem;
  padding: 0 1rem 1rem 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 0;
    height: unset;
  }
`;

const Paragraph = styled.p`
  display: none;
  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
    padding: 0 1rem;
  }
`;

const BlogRollInner = ({ post }) => (
  <Article $isFeatured={post.frontmatter.featuredpost} itemType="https://schema.org/BlogPosting" itemScope={true}>
    <BlogPostMeta datePublished={post.frontmatter.date} featuredImage={post.frontmatter.featuredImage} />
    <meta itemProp="mainEntityOfPage" content={`${Constants.baseUrl}/writing-desk${post.fields.slug}`} />
    <FlexHeader>
      {post.frontmatter.featuredImage ? (
        <FeaturedThumbnail>
          <PreviewCompatibleImage
            imageAlt={`featured image thumbnail for post ${post.frontmatter.title}`}
            imageInfo={getImage(post.frontmatter.featuredImage)}
          />
        </FeaturedThumbnail>
      ) : null}
      <FlexTextContainer>
        <FlexTitle itemProp="name headline">{post.frontmatter.title}</FlexTitle>
        <Paragraph>{post.excerpt}</Paragraph>
      </FlexTextContainer>
    </FlexHeader>
  </Article>
);

export const BlogRoll = ({ posts }) => {
  return (
    <BlogRollFlexContainer $justifyContent="center">
      {posts &&
        posts.map(({ node: post }) => (
          <BlogRollFlexColumn $margin="0 0 1rem 0" key={post.id}>
            <SmartLink hideMetadata={true} to={post.fields.slug} title={post.frontmatter.title}>
              <BlogRollInner post={post} />
            </SmartLink>
          </BlogRollFlexColumn>
        ))}
    </BlogRollFlexContainer>
  );
};
