import { graphql } from "gatsby";
import React from "react";

import { BannerImage } from "../components/banner-image";
import { BlogRollAll } from "../components/blog-roll-all";
import Content, { HTMLContent } from "../components/Content";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const BlogIndexPageTemplate = ({ content, contentComponent, data }) => {
  const PageContent = contentComponent || Content;
  const imageData = data.desktop;
  const imageHeadline = data.markdownRemark.frontmatter.imageHeadline;

  return (
    <section>
      <BannerImage
        image={imageData}
        title="Welcome to The Writing Desk"
        imageHeadline={imageHeadline}
      />
      <PageContent content={content} />
      <BlogRollAll />
    </section>
  );
};

const BlogIndexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      <SEO
        description="Excerpts from the Writing Desk of Sheila Anne"
        image={data.desktop.childImageSharp.fluid.src}
        imageAlt="Notes from the Writing Desk"
        title={`${data.markdownRemark.frontmatter.title} | Sheila Anne`}
      />
      <BlogIndexPageTemplate
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
        data={data}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query TheWritingDeskPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        imageHeadline
        title
      }
    }

    desktop: file(relativePath: { eq: "blog-index.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default BlogIndexPage;
