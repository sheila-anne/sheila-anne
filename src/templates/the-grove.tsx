import Image from "gatsby-image";
import { graphql } from "gatsby";
import React from "react";

import { BannerImage } from "../components/banner-image";
import { BlogRoll } from "../components/blog-roll";
import Content, { HTMLContent } from "../components/Content";
import { FlexContainer, FlexColumn } from "../components/flex";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export const TheGroveTemplate = ({ content, contentComponent, data }) => {
  const PageContent = contentComponent || Content;
  const bannerImage = data.markdownRemark.frontmatter.bannerImage;
  const imageHeadline = data.markdownRemark.frontmatter.imageHeadline;

  return (
    <section>
      <BannerImage
        image={bannerImage}
        title="Life Coaching in The Grove"
        imageHeadline={imageHeadline}
        moveHeadlineOnMobile={true}
      />
      <PageContent content={content} />
      <FlexContainer>
        <FlexColumn>
          <Image
            fluid={
              data.markdownRemark.frontmatter.featuredImage.childImageSharp
                .fluid
            }
          />
        </FlexColumn>
        <FlexColumn>
          <div
            style={{
              backgroundColor: "black",
              height: "500px",
              marginLeft: "3rem"
            }}
          />
        </FlexColumn>
      </FlexContainer>
      {data.allMarkdownRemark.edges.length > 0 && (
        <BlogRoll posts={data.allMarkdownRemark.edges} />
      )}
    </section>
  );
};

const TheGrove = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title="Life Coaching In The Grove | Sheila Anne"
        description="Discover how to supercharge your life, focus your mental clarity, and balance your ambitions with the ability to be present with Sheila Anne Life Coaching"
      />
      <TheGroveTemplate
        contentComponent={HTMLContent}
        content={post.html}
        data={data}
      />
    </Layout>
  );
};

export default TheGrove;

export const pageQuery = graphql`
  query TheMatPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        imageHeadline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { eq: "the grove" } } }
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
            featuredImage {
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
