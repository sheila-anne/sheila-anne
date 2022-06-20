import { graphql } from "gatsby";
import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import styled from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";

import {
  BaseTemplate,
  CenteredText,
  ContentBreak,
  MasterclassForm,
  HTMLContent,
  Layout,
  PillButton,
  PreviewCompatibleImage,
  SEO,
} from "../components";

const handleSubmit = (
  e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  setShowMasterclassForm: Dispatch<SetStateAction<boolean>>,
  showMasterclassForm: boolean
) => {
  e.preventDefault();

  setShowMasterclassForm(!showMasterclassForm);
};

const ColorContainer = styled.div<{ backgroundColor?: string; marginBottom?: string }>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  margin-top: 1rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "1rem")};
  padding: 1rem 2rem;
`;

const MasterclassSection = ({ setShowMasterclassForm, showMasterclassForm, setIsSubmitSuccess }) =>
  showMasterclassForm ? (
    <MasterclassForm isSubmitSuccess={setIsSubmitSuccess} />
  ) : (
    <CenteredText margin="2rem 0">
      <PillButton onClick={e => handleSubmit(e, setShowMasterclassForm, showMasterclassForm)}>
        Enroll for the masterclass!
      </PillButton>
    </CenteredText>
  );

const ConfirmationSection = () => (
  <ColorContainer backgroundColor={Constants.Colors.lightestBlue}>
    <div>You're in!</div>
    <br />
    <div> I just sent you an email with the masterclass video, "Your 5 Step Strategy For Finding Your Life Path".</div>
    <br />
    <div> It's time to do a happy dance and go check it out! </div>
    <br />
    <div>Make sure to watch the video TODAY because I'm offering you a super juicy bonus that expires soon!</div>
    <br />
    <div>
      I am so excited for you to watch this class, so you can start making changes in your life and step into the woman
      you know you can be!{" "}
    </div>
    <br />
    <div>Cheering you on!</div>
  </ColorContainer>
);

const Masterclass = ({ data, location }: GatsbyPage) => {
  const { markdownRemark: post } = data;
  const [showFirstForm, setShowFirstForm] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [firstFormSubmitSuccess, setFirstFormSubmitSuccess] = useState(false);
  const [secondFormSubmitSuccess, setSecondFormSubmitSuccess] = useState(false);

  return (
    <Layout location={location}>
      <SEO
        description={post.frontmatter.pageDescription}
        image={post.frontmatter.bannerImage.publicURL}
        imageAlt={post.frontmatter.bannerImageHeadline}
        location={location}
        title={post.frontmatter.pageTitle}
      />
      <BaseTemplate contentComponent={HTMLContent} content={post.html} />
      <div>
        In this video you will learn the 5 step strategy that will help you shift from anxious & overwhelmed to aligned
        & purposeful living!{" "}
      </div>
      <br />
      {!firstFormSubmitSuccess ? (
        <MasterclassSection
          setShowMasterclassForm={setShowFirstForm}
          showMasterclassForm={showFirstForm}
          setIsSubmitSuccess={setFirstFormSubmitSuccess}
        />
      ) : (
        <ConfirmationSection />
      )}
      <div>I’ll be teaching you:</div>
      <br />
      <ul>
        <li>The strategy my clients implement to create a life and career that feels deeply meaningful 💙</li>
        <li>How to work toward your goals without hustle, anxiety, and overwhelm 😣</li>
        <li>The key to filtering out the nonsense and tuning into your own experience 🧠</li>
        <li>How to become magnetic in your life, and find clarity and abundance despite turbulence in life 🧲</li>
        <li>Actions you can take straight away to build an up-leveled mindset and environment 🌿</li>
        <li>
          The secret sauce that so many people miss when they’re trying to make changes in their life (something that
          took me a while to learn and I’m expediting the process for you!).
        </li>
      </ul>
      <ContentBreak />
      <div>A little about the woman leading this class (me!):</div>
      <br />
      <PreviewCompatibleImage
        imageInfo={{
          alt: "A little about Sheila Anne",
          childImageSharp: data.aboutSheila.childImageSharp,
        }}
        title="A little about Sheila Anne"
      />
      <div>
        Sheila Anne is a professional coach, business owner, and yoga instructor. She specializes in helping
        high-achieving women to thrive in their relationships, careers, and lifestyles. Are you ready to create a life
        of ease and flow without losing your edge? Sheila wanted the same thing and, after much trial and error, she
        learned to connect back to herself and leap into a wildly fulfilling life. She’s passionate about expediting the
        process for other women who are ready to stop craving something different and actually take action on their
        goals!
      </div>
      {!secondFormSubmitSuccess ? (
        <MasterclassSection
          setShowMasterclassForm={setShowSecondForm}
          showMasterclassForm={showSecondForm}
          setIsSubmitSuccess={setSecondFormSubmitSuccess}
        />
      ) : (
        <ConfirmationSection />
      )}
    </Layout>
  );
};

export default Masterclass;

export const pageQuery = graphql`
  query MasterclassPage($id: String!) {
    aboutSheila: file(relativePath: { eq: "a-little-about-sheila-anne.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bannerImageHeadline
        pageDescription
        pageTitle
      }
    }
  }
`;
