import React, { FC } from "react";
import styled from "styled-components";

import { BlogPostMeta } from "./blog-post-meta";
import { Constants } from "../constants";
import { FlexContainer, FlexColumn, FlexHeader } from "./flex";
import { PreviewCompatibleImage } from "./preview-compatible";
import { SmartLink } from "./smart-link";

type ArticleProps = {
  isFeatured: boolean;
};

const BlogRollFlexColumn = styled(FlexColumn)`
  flex-basis: 33%;
`;

const FlexTextContainer = styled.div`
  flex-basis: 65%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
    text-align: center;
  }
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
  background-color: ${({ isFeatured }) =>
    isFeatured
      ? Constants.Colors.theGroveGreenGray
      : Constants.Colors.theGroveLightGreen};
  border-radius: 1rem;
  color: #000;
  margin: 1rem;
  overflow: hidden;
  padding: 0 1rem 1rem 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    height: 100%;
    margin: 0;
  }
`;

const BlogRollInner = ({ post }: { post: BlogPostInner }) => (
  <Article
    isFeatured={post.frontmatter.featuredpost}
    itemType="https://schema.org/BlogPosting"
    itemScope={true}
  >
    <BlogPostMeta
      datePublished={post.frontmatter.date}
      featuredImage={post.frontmatter.featuredImage}
    />
    <meta
      itemProp="mainEntityOfPage"
      content={`${Constants.baseUrl}/writing-desk${post.fields.slug}`}
    />
    <FlexHeader>
      {post.frontmatter.featuredImage ? (
        <FeaturedThumbnail>
          <PreviewCompatibleImage
            imageInfo={{
              image: post.frontmatter.featuredImage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
            }}
          />
        </FeaturedThumbnail>
      ) : null}
      <FlexTextContainer>
        <FlexTitle itemProp="name headline">{post.frontmatter.title}</FlexTitle>
      </FlexTextContainer>
    </FlexHeader>
  </Article>
);

export const BlogRoll: FC<BlogPosts> = ({ posts }) => {
  return (
    <FlexContainer>
      {posts &&
        posts.map(({ node: post }) => (
          <BlogRollFlexColumn margin="0 0 1rem 0" key={post.id}>
            <SmartLink
              hideMetadata={true}
              to={post.fields.slug}
              title={post.frontmatter.title}
            >
              <BlogRollInner post={post} />
            </SmartLink>
          </BlogRollFlexColumn>
        ))}
    </FlexContainer>
  );
};
