import React from "react";
import styled from "styled-components";

import { PreviewCompatibleImage } from "./preview-compatible";

type TestimonialProps = {
  imgSrc: PreviewImage;
};

const TestimonialCallout = styled.div`
  display: inline-flex;
  flex: 66%;
  margin-left: 2rem;
  padding: 2rem;
  text-align: center;
`;

const TestimonialImage = styled(PreviewCompatibleImage)`
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
  border-top-right-radius: 20%;
  border-bottom-right-radius: 15%;
  height: 175px;
  width: 200px;
`;

const TestimonialItalics = styled.i`
  margin: 0 1rem;
`;

const TestimonialSection = styled.section`
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
  padding: 10px;
`;

const TestimonialTitle = styled.h4``;

export const Testimonial = ({ imgSrc }: TestimonialProps) => {
  return (
    <TestimonialSection>
      <TestimonialImage imageInfo={imgSrc} />
      <TestimonialTitle>Taylor, Real Estate</TestimonialTitle>
      <TestimonialCallout>
        <TestimonialItalics>
          Working with Sheila has been nothing short of amazing! The
          breakthroughs I have had in the past few months have been life
          changing. She has an amazing talent for looking at the big picture and
          is one of the few people I’ve ever met who is able to follow my
          scattermindedness, reflect on the important information and guide me
          back with powerful questioning. That, teamed with her ability to take
          you out of your mind and into your body to feel through the question
          is always an extraordinarily powerful experience.
        </TestimonialItalics>
        <br />
        <TestimonialItalics>
          Not only has every session been absolutely amazing but she helped me
          unearth the confidence I needed to take the biggest leap of my life.
          She allowed me to root back into my authentic self and lead with my
          heart. Without the work I have done with her the past few months I
          would still be stuck in a loop of fear, self doubt and would not be
          chasing my dreams. I am beyond grateful for the work I have done and
          the growth I’ve experienced in the short time I have worked with her.
        </TestimonialItalics>
      </TestimonialCallout>
    </TestimonialSection>
  );
};
