import { Link } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "./button";
import { Constants } from "../constants";
import { FlexContainer, FlexColumn, FlexHeader } from "./flex";
import { PreviewCompatibleImage } from "./preview-compatiable-image";
import { CenteredText } from "./centered-text";

type BlogRollProps = {
  posts: any;
};

type ArticleProps = {
  isFeatured: boolean;
};

const FeaturedThumbnail = styled.div`
  flex-basis: 35%;
  margin: 0 1.5em 0 0;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 1rem;
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
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  position: relative;

  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;
  margin: 1rem;
`;

export const BlogRoll: FC<BlogRollProps> = ({ posts }) => {
  return (
    <FlexContainer>
      {posts &&
        posts.map(({ node: post }) => (
          <FlexColumn key={post.id}>
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
                <p>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  <span> &bull; </span>
                  <span>{post.frontmatter.date}</span>
                </p>
              </FlexHeader>
              <div>
                <p>{post.excerpt}</p>
                <CenteredText>
                  <OffsetButton to={post.fields.slug}>
                    Keep Reading →
                  </OffsetButton>
                </CenteredText>
              </div>
            </Article>
          </FlexColumn>
        ))}
    </FlexContainer>
  );
};
