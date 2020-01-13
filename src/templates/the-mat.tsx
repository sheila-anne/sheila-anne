import React, { FC } from "react";
import { graphql } from "gatsby";

import { BlogRoll, Content, HTMLContent, Layout, SEO } from "../components/";

export const TheMatTemplate = ({ content, contentComponent, data }) => {
  const PageContent = contentComponent || Content;
  const { allMarkdownRemark } = data as BlogPostsGraphql;

  return (
    <section>
      <PageContent content={content} />
      {allMarkdownRemark.posts.length > 0 && (
        <BlogRoll posts={allMarkdownRemark.posts} />
      )}
    </section>
  );
};

const TheMat: FC<GatsbyPage> = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title="Yoga On The Mat | Sheila Anne"
        description="Learn more about Sheila Anne's connection to yoga and how that can help you flow through life"
      />
      <TheMatTemplate
        contentComponent={HTMLContent}
        content={post.html}
        data={data}
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
        title
      }
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { eq: "the mat" } } }
    ) {
      ...BlogPosts
    }
  }
`;
