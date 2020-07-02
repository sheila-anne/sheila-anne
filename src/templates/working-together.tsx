import { graphql } from "gatsby";
import React from "react";

import { Constants } from "../constants";
import {
  BookingSection,
  Content,
  FAQ,
  HTMLContent,
  Layout,
  SEO,
  Testimonial,
  WorkingTogetherHeader,
} from "../components";

export const WorkingTogetherTemplate = ({
  content,
  contentComponent,
  frontmatter,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <WorkingTogetherHeader />
      <PageContent content={content} margin="0 0 1rem 0" padding="5px 2rem" />
      <hr />
      <BookingSection
        page="Working Together"
        backgroundColor={Constants.Colors.theGroveLightGreen}
        formTitle={frontmatter.formHeadline}
        formDescription={frontmatter.formSubHeadline}
        formParagraph={frontmatter.formParagraph}
      />
      <hr />
      <Testimonial testimonials={frontmatter.testimonials} />
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
      <WorkingTogetherTemplate
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
