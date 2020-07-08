import { graphql } from "gatsby";
import React from "react";

import { Content, HTMLContent, Layout, SEO, Testimonial } from "../components";

export const RootToRiseTemplate = ({
  content,
  contentComponent,
  frontmatter,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <PageContent content={content} margin="0 0 1rem 0" padding="5px 2rem" />
      <Testimonial testimonials={frontmatter.testimonials} />
    </section>
  );
};

const RootToRise = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        image={post.frontmatter.featuredImage.childImageSharp.original.src}
        description={post.frontmatter.pageDescription}
        imageAlt={post.frontmatter.bannerImageHeadline}
        location={location}
        title={post.frontmatter.pageTitle}
      />
      <RootToRiseTemplate
        contentComponent={HTMLContent}
        content={post.html}
        frontmatter={post.frontmatter}
      />
    </Layout>
  );
};

export default RootToRise;

export const pageQuery = graphql`
  query RootToRisePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 95) {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
        pageDescription
        pageTitle
        testimonials {
          title
          imageAlt
          imageSrc {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          text
        }
      }
    }
  }
`;
