import { graphql } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

import {
  CenteredText,
  Layout,
  FlexContainer,
  FlexColSplitImage,
  HalfColumn,
  OptInForm,
  PreviewCompatibleImage,
  SEO,
  SmartLink,
} from "../../components";

const AnchorCursor = styled.a`
  cursor: pointer;
`;

const MarginText = styled.div`
  margin-top: 1rem;
`;

export default ({ data, location }) => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  return (
    <Layout location={location}>
      <SEO
        description="Sign up to get Sheila Anne's Positivity Pack freebie."
        location={location}
        title="Positivity Pack | Sheila Anne"
      />
      {!isSubmitSuccess ? (
        <FlexContainer $justifyContent="center" $margin="1rem 0">
          <HalfColumn>
            <FlexColSplitImage>
              <PreviewCompatibleImage
                imageAlt="The Positivity Pack freebie"
                imageInfo={data.freebieImage.childImageSharp.gatsbyImageData}
                title="The Positivity Pack freebie"
              />
            </FlexColSplitImage>
          </HalfColumn>
          <HalfColumn>
            <OptInForm
              backgroundColor="#FFF"
              formTitle="Get your FREE Positivity Pack!"
              formDescription="You’re almost there! Please complete this form & get your FREE Positivity Pack in your inbox!"
              page="opt-in"
              submitText="Send me my free copy!"
              id="freebieForm"
              isSubmitSuccess={setIsSubmitSuccess}
            />
          </HalfColumn>
        </FlexContainer>
      ) : (
        <div>
          <h2>Good news! Your Positivity Pack is on its way to your inbox!</h2>
          <MarginText>
            Make a commitment to yourself right now to pick one positive affirmation each day, no matter how you feel.
            Let the affirmation ground you, guide you, and see how it resonates as your day unfolds. Seemingly small,
            affirmations can be a radically transformative way to shift your mindset and build confidence.
          </MarginText>
          <MarginText>
            Before you go, feel free to take a look around my little slice of the internet. Enjoy stories and life hacks{" "}
            <SmartLink to="/writing-desk/">on the blog</SmartLink> and find out more about{" "}
            <SmartLink to="/working-together/">working with me ✨</SmartLink>.
          </MarginText>
        </div>
      )}
      <section>
        <PreviewCompatibleImage
          imageAlt="Sheila smiling in nature"
          imageInfo={data.overlayPhoto.childImageSharp.gatsbyImageData}
          title="Bring in the New Year with positivity"
        />
        <CenteredText $margin="3rem 0 1rem 0">
          <h2>Here's What's Included In Your Positivity Pack</h2>
        </CenteredText>

        <ul>
          <li>A deck of over 30 affirmations</li>
          <li>10 phone wallpapers to choose from</li>
          <li>Link to a guided meditation by me!</li>
        </ul>

        <CenteredText $margin="3rem 0 1rem 0">
          <h2>These are the same affirmations that I personally use to</h2>
        </CenteredText>

        <ul>
          <li>Get out of a mindset rut</li>
          <li>Connect back to myself and feel more courageous</li>
          <li>Transform my perspective, daily</li>
          <li>Cultivate positive changes in my relationships, career path, and daily life</li>
        </ul>

        <MarginText>
          Reconnect to <b>yourself</b>, make a commitment to <b>feeling good</b>, radiate your inner light out into the
          world. This is my gift to you.
        </MarginText>
        <MarginText>
          Submit your information <AnchorCursor href="#freebieForm">using the form above </AnchorCursor> to receive your
          free <b>Positivity Pack</b>!
        </MarginText>
        <PreviewCompatibleImage
          imageAlt="Sheila breathing deep"
          imageInfo={data.third.childImageSharp.gatsbyImageData}
          title="Breathe easy with the Positivity Pack"
        />
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query FreebieQuery {
    freebieImage: file(relativePath: { eq: "positivity-pack-cropped.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [JPG])
      }
    }
    overlayPhoto: file(relativePath: { eq: "positivity-pack-cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [JPG])
      }
    }
    third: file(relativePath: { eq: "positivity-pack-breathing-calming-stress-relief.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [JPG])
      }
    }
  }
`;
