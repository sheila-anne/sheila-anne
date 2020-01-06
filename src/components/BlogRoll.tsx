import { Link, graphql, StaticQuery } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "./button";
import { Constants } from "../constants";
import { FlexContainer, FlexColumn, FlexHeader } from "../components/flex";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { CenteredText } from "./centered-text";

type ArticleProps = {
  isFeatured: boolean;
};

const FeaturedThumbnail = styled.div`
  flex-basis: 35%;
  margin: 0 1.5em 0 0;
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

const BlogRollInner: FC<GatsbyComponent> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <FlexContainer>
      {posts &&
        posts.map(({ node: post }) => (
          <FlexColumn key={post.id}>
            <Article isFeatured={post.frontmatter.featuredpost}>
              <FlexHeader>
                {post.frontmatter.featuredimage ? (
                  <FeaturedThumbnail>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
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
              <p>
                {post.excerpt}
                <CenteredText>
                  <OffsetButton to={post.fields.slug}>
                    Keep Reading →
                  </OffsetButton>
                </CenteredText>
              </p>
            </Article>
          </FlexColumn>
        ))}
    </FlexContainer>
  );
};

export const BlogRoll = () => (
  <StaticQuery
    query={BlogRollQuery}
    render={data => <BlogRollInner data={data} />}
  />
);

const BlogRollQuery = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
