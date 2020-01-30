import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "./button";
import { Constants } from "../constants";
import { FlexContainer, FlexColumn, FlexHeader } from "./flex";
import { PreviewCompatibleImage } from "./preview-compatible";
import { SmartLink } from "./smart-link";

type ArticleProps = {
  isFeatured: boolean;
};

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

const FlexSpan = styled.span``;

const FlexTitle = styled.h3`
  padding: 1rem 0;

  @media (max-width: ${Constants.mobileWidth}) {
    padding: 2rem;
    margin: 1rem 0;
  }
`;

const FeaturedThumbnail = styled.div`
  flex-basis: 35%;
  margin: 1rem 1rem 0 0;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 0;
  }
`;

const Article = styled.article<ArticleProps>`
  background-color: ${({ isFeatured }) =>
    isFeatured ? Constants.Colors.featuredPost : Constants.Colors.lightestBlue};
  color: #000;
  position: relative;
  padding: 0 1rem 1rem 1rem;

  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  height: 250px;
  margin: 1rem;
  overflow: hidden;
`;

const BlogRollInner = ({ post }: { post: BlogPostInner }) => (
  <Article isFeatured={post.frontmatter.featuredpost}>
    <FlexHeader>
      {post.frontmatter.featuredImage ? (
        <FeaturedThumbnail>
          <PreviewCompatibleImage
            imageInfo={{
              image: post.frontmatter.featuredImage,
              alt: `featured image thumbnail for post ${post.frontmatter.title}`
            }}
          />
        </FeaturedThumbnail>
      ) : null}
      <FlexTextContainer>
        <FlexTitle>{post.frontmatter.title}</FlexTitle>
        <FlexSpan>Published {post.frontmatter.date}</FlexSpan>
      </FlexTextContainer>
    </FlexHeader>
    <div>
      <p>{post.excerpt}</p>
    </div>
  </Article>
);

export const BlogRoll: FC<BlogPosts> = ({ posts }) => {
  return (
    <FlexContainer>
      {posts &&
        posts.map(({ node: post }) => (
          <FlexColumn key={post.id}>
            <SmartLink to={post.fields.slug} title={post.frontmatter.title}>
              <BlogRollInner post={post} />
            </SmartLink>
          </FlexColumn>
        ))}
    </FlexContainer>
  );
};
