import { graphql } from "gatsby";
import React, { FC } from "react";

import { Content, HTMLContent, Layout, SEO } from "../components/";

export const TheMatTemplate: FC<BasePreviewWithBannerImage> = ({
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <PageContent content={content} />
    </section>
  );
};

const TheMat: FC<GatsbyPage> = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.pageTitle}
        description={post.frontmatter.pageDescription}
      />
      <TheMatTemplate
        contentComponent={HTMLContent}
        content={post.html}
        frontmatter={post.frontmatter}
        image={post.frontmatter.bannerImage}
        imageHeadline={post.frontmatter.bannerImageHeadline}
      />
    </Layout>
  );
};

export default TheMat;

export const pageQuery = graphql`
  query TheMatPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageDescription
        pageTitle
      }
    }
  }
`;
