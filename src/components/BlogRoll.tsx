import { Link, graphql, StaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../components/flex-container";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { InternalLink } from "./internal-link";

type ArticleProps = {
  isFeatured: boolean;
};

const Article = styled.article<ArticleProps>`
  background-color: ${({ isFeatured }) => (isFeatured ? "#d74100" : "#f5f5f5")};
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

const Button = styled(InternalLink)`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
`;

const FlexColumn = styled.div`
  flex: none;
  width: 50%;
`;

const BlogRollInner = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <FlexContainer>
      {posts &&
        posts.map(({ node: post }) => (
          <FlexColumn key={post.id}>
            <Article isFeatured={post.frontmatter.featuredpost}>
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`
                      }}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Button to={post.fields.slug}>Keep Reading →</Button>
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
