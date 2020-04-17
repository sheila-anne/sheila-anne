import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";
import React from "react";
import styled from "styled-components";

import {
  Button,
  CenteredText,
  Layout,
  SmartLink,
  TagList,
} from "../components/";

const TagLink = styled(SmartLink)`
  text-decoration: underline;

  > * {
    display: inline-block;
  }
`;

const Headline = styled.h1`
  margin-bottom: 2rem;
`;

const TagRoute = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <TagLink to={post.node.fields.slug} title={post.node.frontmatter.title}>
        <h2>{post.node.frontmatter.title}</h2>
      </TagLink>
    </li>
  ));
  const tag = pageContext.tag;
  const title = data.site.siteMetadata.title;
  const totalCount = data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”:`;

  return (
    <Layout location={location}>
      <section>
        <Helmet title={`Tags for "${tag}" | ${title}`} />
        <Headline>{tagHeader}</Headline>
        <TagList>{postLinks}</TagList>
        <hr />
        <CenteredText>
          <Button to="/tags/" title="Browse all tags">
            Browse more posts by tag!
          </Button>
        </CenteredText>
      </section>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
