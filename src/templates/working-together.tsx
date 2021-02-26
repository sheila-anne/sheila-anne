import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import {
  BookingSection,
  CenteredText,
  Content,
  FAQ,
  HTMLContent,
  Layout,
  LinkButton,
  PreviewCompatibleImage,
  SEO,
  SmartLink,
  Testimonial,
  WorkingTogetherHeader,
} from "../components";

const Text = styled.div`
  margin-bottom: 1rem;
`;

export const WorkingTogetherTemplate = ({ content, contentComponent, faqs, frontmatter }) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <WorkingTogetherHeader />
      <PageContent content={content} margin="0 0 1rem 0" padding="5px 2rem" />
      <h2 id="root-to-rise">Root To Rise Transformational Coaching Program</h2>
      <Text>
        My signature 1:1 coaching program is for high-achievers who are ready to create long-lasting change. Embark on a
        journey of courageous self discovery, mindfulness, and level up in your career path, relationships, and
        lifestyle.
      </Text>
      <CenteredText margin="2rem 0">
        <LinkButton to="/root-to-rise/">Take me to the details!</LinkButton>
      </CenteredText>
      <Text>
        Questions? <a href="#faq">Check out the FAQ</a> or <SmartLink to="/contact/">send me a message!</SmartLink>
      </Text>
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
      <FAQ faq={faqs} />
    </section>
  );
};

const WorkingTogether = ({ data, location }) => {
  const {
    markdownRemark: post,
    site: {
      siteMetadata: { faqs },
    },
  } = data;

  return (
    <Layout location={location}>
      <SEO
        image={post.frontmatter.featuredImage.publicURL}
        description={post.frontmatter.pageDescription}
        imageAlt={post.frontmatter.bannerImageHeadline}
        location={location}
        title={post.frontmatter.pageTitle}
      />
      <WorkingTogetherTemplate
        contentComponent={HTMLContent}
        content={post.html}
        frontmatter={post.frontmatter}
        faqs={faqs}
      />
    </Layout>
  );
};

export default WorkingTogether;

export const pageQuery = graphql`
  query WorkingTogetherPage($id: String!) {
    site {
      siteMetadata {
        faqs {
          question
          answer
        }
      }
    }

    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
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
