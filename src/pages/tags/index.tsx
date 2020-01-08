import React, { FC } from "react";
import kebabCase from "lodash.kebabcase";
import { Link, graphql } from "gatsby";

import { FlexContainer, FlexColumn } from "../../components/flex";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";

const TagsPage: FC<GatsbyPage> = ({
  data: {
    allMarkdownRemark: { tags },
    site: {
      siteMetadata: { title }
    }
  },
  location
}) => (
  <Layout location={location}>
    <section>
      <SEO
        description="Sheila Anne | Producing inspirational life coaching and yoga content."
        title={`Tags | ${title}`}
        type="website"
      />
      <FlexContainer>
        <FlexColumn>
          <h1>Blog Tags</h1>
          <p>
            Feel free to browse the topics I've written about, and let me know
            if there's something you'd like to hear more about!
          </p>
          <ul>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </FlexColumn>
      </FlexContainer>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
