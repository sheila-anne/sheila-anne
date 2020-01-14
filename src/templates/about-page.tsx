import { graphql } from "gatsby";
import React from "react";

import { Constants } from "../constants";
import {
  Content,
  FlexContainer,
  FlexColumn,
  HTMLContent,
  Layout,
  PreviewCompatibleFlexImage,
  SEO
} from "../components";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  bannerImage
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <FlexContainer>
        <FlexColumn>
          <PreviewCompatibleFlexImage
            imageInfo={bannerImage}
            title={title}
            imageAlt="Sheila hiking in Chamonix"
          />
        </FlexColumn>
        <FlexColumn
          backgroundColor={Constants.Colors.lightestBlue}
          padding="0 1rem"
        >
          <PageContent content={content} />
        </FlexColumn>
      </FlexContainer>
    </section>
  );
};

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.pageTitle}
        description={post.frontmatter.pageDescription}
        image={post.frontmatter.bannerImage.childImageSharp.fluid.src}
        imageAlt={post.frontmatter.bannerImageHeadline}
      />
      <AboutPageTemplate
        bannerImage={post.frontmatter.bannerImage}
        contentComponent={HTMLContent}
        title={post.frontmatter.pageTitle}
        content={post.html}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        bannerImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;
