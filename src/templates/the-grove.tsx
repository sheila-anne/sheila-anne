import { graphql } from "gatsby";
import React from "react";

import { Constants } from "../constants";
import {
  BookingSection,
  CenteredText,
  Content,
  FAQ,
  Features,
  FlexContainer,
  HTMLContent,
  Layout,
  SEO
} from "../components";

export const TheGroveTemplate = ({
  content,
  contentComponent,
  frontmatter
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <PageContent content={content} margin="0 0 1rem 0" padding="5px 2rem" />
      <CenteredText>
        <h2>How Does It Work?</h2>
      </CenteredText>
      <FlexContainer>
        <Features gridItems={frontmatter.intro.blurbs} />
      </FlexContainer>
      <hr />
      <BookingSection
        page="The Grove"
        backgroundColor={Constants.Colors.theGroveLightGreen}
        formTitle={frontmatter.formHeadline}
        formDescription={frontmatter.formSubHeadline}
        formParagraph={frontmatter.formParagraph}
      />
      <hr />
      <FAQ faq={frontmatter.faq} />
    </section>
  );
};

const TheGrove = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        description={post.frontmatter.pageDescription}
        imageAlt={post.frontmatter.bannerImageHeadline}
        location={location}
        title={post.frontmatter.pageTitle}
      />
      <TheGroveTemplate
        contentComponent={HTMLContent}
        content={post.html}
        frontmatter={post.frontmatter}
      />
    </Layout>
  );
};

export default TheGrove;

export const pageQuery = graphql`
  query TheGrovePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        faq {
          question
          answer
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        formHeadline
        formSubHeadline
        formParagraph
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageAlt
            text
            title
          }
        }
        pageDescription
        pageTitle
      }
    }
  }
`;