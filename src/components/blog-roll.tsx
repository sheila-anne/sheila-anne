import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "./button";
import { Constants } from "../constants";
import { CenteredText } from "./centered-text";
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
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
    text-align: center;
  }
`;

const FlexSpan = styled.span`
  margin-top: 1rem;
`;

const FlexTitle = styled.h3`
  background-color: ${Constants.Colors.theGroveTeal};
  border-radius: 1rem;
  color: white;
  margin: 2rem 0;
  padding: 2rem 4rem;

  @media (max-width: ${Constants.mobileWidth}) {
    padding: 2rem;
    margin: 1rem 0;
  }
`;

const FeaturedThumbnail = styled.div`
  flex-basis: 35%;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 0;
  }
`;

const OffsetButton = styled(Button)`
  box-shadow: none;
  color: ${Constants.Colors.darkBlue};
  margin-top: 1rem;
`;

const Article = styled.article<ArticleProps>`
  background-color: ${({ isFeatured }) =>
    isFeatured ? Constants.Colors.featuredPost : Constants.Colors.lightestBlue};
  border-radius: 1rem;
  color: #000;
  position: relative;
  padding: 0 1rem 1rem 1rem;

  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;
  margin: 1rem;
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
      <CenteredText>
        <OffsetButton as="button">Keep Reading →</OffsetButton>
      </CenteredText>
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
