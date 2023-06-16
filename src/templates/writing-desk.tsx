import React, { FC } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { BlogRollAll, Content, HTMLContent, Layout, SEO } from "../components";
import { Constants } from "../constants";

type WritingDeskProps = {
  content: string;
  contentComponent?: FC<any>;
  imageHeadline: string;
  pageTitle: string;
};

const Headline = styled.h2`
  background-color: ${Constants.Colors.theGroveLightGreen};
  color: #2b2523;
  padding: 5px;
  text-align: center;
`;

export const WritingDeskPageTemplate = ({ content, contentComponent, imageHeadline }: WritingDeskProps) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <PageContent content={content} />
      <Headline>{imageHeadline}</Headline>
      <BlogRollAll />
    </section>
  );
};

const WritingDeskPage = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;
  const bannerImage = frontmatter.bannerImage;
  return (
    <Layout location={location}>
      <SEO
        description={frontmatter.pageDescription}
        image={bannerImage.childImageSharp.gatsbyImageData.images.fallback.src}
        imageAlt="Notes from the Writing Desk"
        location={location}
        title={frontmatter.pageTitle}
      />
      <WritingDeskPageTemplate
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
        imageHeadline={frontmatter.bannerImageHeadline}
        pageTitle={frontmatter.pageTitle}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query TheWritingDeskPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImage {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        bannerImageHeadline
        pageDescription
        pageTitle
      }
    }
  }
`;

export default WritingDeskPage;
