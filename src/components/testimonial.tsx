import React, { Reducer, useReducer } from "react";
import styled from "styled-components";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { CenteredText } from "./centered";
import { PreviewCompatibleImage } from "./preview-compatible";
import { PlainButton } from "./button";
import { trackFacebook } from "../utils";
import { Constants } from "../constants";

type Action = {
  type: string;
};

type State = {
  [key in string]: boolean;
};

type Testimonial = {
  imageAlt: string;
  imageSrc: PreviewImage;
  text: string;
  title: string;
};

type TestimonialProps = {
  testimonials: Testimonial[];
};

const Clickable = styled.div`
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  text-align: center;
`;

const ExpandableText = styled.p<{ isExpanded: boolean }>`
  height: auto;
  max-height: ${({ isExpanded }) => (!!isExpanded ? "1000px" : "100px")};
  margin-top: 1rem;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out 0s;
`;

const TestimonialCallout = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1rem 2rem;
`;

const TestimonialImage = styled(PreviewCompatibleImage)`
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
  border-top-right-radius: 20%;
  border-bottom-right-radius: 15%;
  height: 175px;
  width: 200px;
`;

const TestimonialSection = styled.section`
  padding: 10px;
`;

const TestimonialTitle = styled.h4`
  align-self: center;
  margin-left: 1rem;
`;

const getInitialState = (testimonials: Testimonial[]) =>
  testimonials
    .map((testimonial) => ({
      [testimonial.title]: false,
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    }));

const reducer: Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  const isExpanded = !state[action.type];
  const args = {
    action: "click",
    category: `Testimonial`,
    label: `${action.type} was ${isExpanded ? "expanded" : "closed"}`,
  };
  trackCustomEvent(args);
  trackFacebook("trackCustom", "Testimonial Interaction", args);
  return { ...state, [action.type]: isExpanded };
};

export const Testimonial = ({ testimonials }: TestimonialProps) => {
  const initialState = getInitialState(testimonials);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TestimonialSection>
      {testimonials.map((testimonial) => (
        <TestimonialCallout key={testimonial.title}>
          <TestimonialImage
            imageAlt={testimonial.imageAlt}
            imageInfo={testimonial.imageSrc}
            title={testimonial.title}
          />
          <TestimonialTitle>{testimonial.title}</TestimonialTitle>
          <Clickable
            onClick={() =>
              dispatch({
                type: testimonial.title,
              })
            }
          >
            <ExpandableText isExpanded={state[testimonial.title]}>
              "{testimonial.text}"
            </ExpandableText>
            <CenteredText>
              <PlainButton
                backgroundColor={Constants.Colors.theGroveLightGreen}
                color="#000"
              >
                {state[testimonial.title] ? "Show Less" : "Show More"}
              </PlainButton>
            </CenteredText>
          </Clickable>
        </TestimonialCallout>
      ))}
    </TestimonialSection>
  );
};
