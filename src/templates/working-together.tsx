import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import {
  BookingSection,
  CenteredText,
  ContentBreak,
  FAQ,
  Layout,
  LinkButton,
  SEO,
  SmartLink,
  Testimonial,
  WorkingTogetherHeader,
} from "../components";

const Text = styled.div`
  margin-bottom: 1rem;
`;

const SpacedHeader = styled.h2`
  margin: 3rem 0;
`;

export const WorkingTogetherTemplate = ({ faqs, frontmatter }) => {
  return (
    <section>
      <WorkingTogetherHeader />
      <SpacedHeader id="exploration-call">Exploration Call</SpacedHeader>
      <Text>
        Take the first step toward the next chapter of your life. This complimentary Exploration Call is an opportunity
        to tell me your story & learn strategies for moving forward. You can ask all the questions & learn which
        offering best suits your needs.
      </Text>
      <CenteredText margin="2rem 0">
        <LinkButton to="/book/exploration/">Book Your Exploration Call Today!</LinkButton>
      </CenteredText>
      <SpacedHeader id="nourish">Group Coaching: NOURISH 🌼</SpacedHeader>
      <Text>
        A one-of-a-kind 14 week group coaching program. For ambitious women who are ready to fully nourish their unique
        power and say "YES" to the wildly beautiful life they know they are capable of creating.
      </Text>
      <CenteredText margin="2rem 0">
        <LinkButton to="/nourish/">Nourish Details!</LinkButton>
      </CenteredText>
      <SpacedHeader id="root-to-rise">Private Coaching with Sheila</SpacedHeader>
      <Text>
        My 1:1 coaching program is for high-achievers who are ready to create long-lasting change. Embark on a journey
        of courageous self discovery, mindfulness, and level up in your career path, relationships, and lifestyle.
      </Text>
      <CenteredText margin="2rem 0">
        <LinkButton to="/root-to-rise/">Private Coaching Details!</LinkButton>
      </CenteredText>
      <ContentBreak />
      <Text>
        Not finding what you are looking for? I offer personalized workshops and customized coaching packages. Please{" "}
        <SmartLink to="/contact/">contact me</SmartLink> to let me know what you need.{" "}
        <a href="#faq">Don't miss the FAQ section</a> if you have questions, too.
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
      <WorkingTogetherTemplate frontmatter={post.frontmatter} faqs={faqs} />
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
            gatsbyImageData(width: 300, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
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
              gatsbyImageData(width: 300, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
            }
          }
          text
        }
      }
    }
  }
`;
