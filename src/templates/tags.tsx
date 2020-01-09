import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";

import { Layout } from "../components/layout";
import { TagList } from "../components/tag-list";

const TagRoute = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug} title={post.node.frontmatter.title}>
        <h2>{post.node.frontmatter.title}</h2>
      </Link>
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
        <Helmet title={`${tag} | ${title}`} />
        <h3>{tagHeader}</h3>
        <TagList>{postLinks}</TagList>
        <Link to="/tags/" title="Browse all tags">
          Browse all tags
        </Link>
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
