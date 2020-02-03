import React, { FC } from "react";
import kebabCase from "lodash.kebabcase";
import { graphql } from "gatsby";

import {
  CenteredSection,
  FlexContainer,
  FlexColumn,
  Layout,
  SEO,
  SmartLink
} from "../../components";

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
    <CenteredSection>
      <SEO
        description={`Sheila Anne | Find blogs produced by Life Coach and writer Sheila Anne for the subject: ${title}`}
        title={`Tags | ${title} | Sheila Anne`}
        type="website"
      />
      <FlexContainer>
        <FlexColumn>
          <h1>Blog Tags</h1>
          <p>
            Feel free to browse the topics I've written about, and{" "}
            <SmartLink title="Contact" to="/contact/">
              let me know{" "}
            </SmartLink>
            if there's something you'd like to hear more about!
          </p>
          <ul>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <SmartLink
                  title={tag.fieldValue}
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </SmartLink>
              </li>
            ))}
          </ul>
        </FlexColumn>
      </FlexContainer>
    </CenteredSection>
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
