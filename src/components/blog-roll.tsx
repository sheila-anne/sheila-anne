import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "./button";
import { Constants } from "../constants";
import { CenteredText } from "./centered-text";
import { FlexContainer, FlexColumn, FlexHeader } from "./flex";
import { PreviewCompatibleImage } from "./preview-compatible-image";
import { SmartLink } from "./smart-link";

type ArticleProps = {
  isFeatured: boolean;
};

const FlexParagraph = styled.p`
  flex-basis: 65%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const FlexSpan = styled.span`
  margin-top: 1rem;
`;

const FlexLink = styled.h3`
  background-color: ${Constants.Colors.theGroveTeal};
  border-radius: 10px;
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
  border-radius: 4px;
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
      <FlexParagraph>
        <FlexLink>{post.frontmatter.title}</FlexLink>
        <FlexSpan>Published {post.frontmatter.date}</FlexSpan>
      </FlexParagraph>
    </FlexHeader>
    <div>
      <p>{post.excerpt}</p>
      <CenteredText>
        <OffsetButton to={post.fields.slug}>Keep Reading →</OffsetButton>
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
