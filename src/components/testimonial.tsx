import React, { Dispatch, Reducer, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import styled from "styled-components";

import { BannerLink } from "./banner-link";
import { CenteredText } from "./centered";
import { PreviewCompatibleImage } from "./preview-compatible";
import { PlainButton } from "./button";
import { trackCustomEvent, trackFacebook } from "../utils";
import { Constants } from "../constants";

type Action = {
  type: string;
};

type State = {
  [key in string]: boolean;
};

type Testimonial = {
  imageAlt?: string;
  imageSrc?: any;
  text: string;
  title: string;
};

type TestimonialProps = {
  testimonials: Testimonial[];
};

type Expandable = {
  dispatch: Dispatch<Action>;
  isExpanded: boolean;
  text: string;
  title: string;
};

const MIN_EXPANDABLE_HEIGHT = 100;

const Clickable = styled.div`
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  text-align: center;
`;

const ExpandableText = styled.p.withConfig<{ isExpanded: boolean }>({
  shouldForwardProp: prop => prop !== "isExpanded",
})`
  height: auto;
  max-height: ${({ isExpanded }) => (!!isExpanded ? "1000px" : `${MIN_EXPANDABLE_HEIGHT}px`)};
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

const getInitialState = (testimonials: Testimonial[]): State =>
  testimonials
    .map(testimonial => ({
      [testimonial.title]: false,
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    }));

const reducer: Reducer<State, Action> = (state: State, action: Action): State => {
  const isExpanded = !state[action.type];
  const args = {
    event_category: `Testimonial`,
    event_label: `${action.type} was ${isExpanded ? "expanded" : "closed"}`,
  };
  trackCustomEvent({ type: "Testimonial Interaction", args });
  trackFacebook({
    eventType: "trackCustom",
    eventName: "Testimonial Interaction",
    params: {
      content_category: args.event_category,
      content_name: args.event_label,
    },
  });
  return { ...state, [action.type]: isExpanded };
};

const MeasurableHeightText = ({ dispatch, isExpanded, text, title }: Expandable) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, []);

  const Text = ({ isExpanded, text }: { isExpanded: boolean; text: string }) => (
    <ExpandableText isExpanded={isExpanded} ref={ref}>
      "{text}"
    </ExpandableText>
  );

  return height > MIN_EXPANDABLE_HEIGHT ? (
    <Clickable
      onClick={() =>
        dispatch({
          type: title,
        })
      }
    >
      <Text isExpanded={isExpanded} text={text} />
      <CenteredText>
        <PlainButton backgroundColor={Constants.Colors.theGroveLightGreen}>
          {isExpanded ? "Show Less" : "Show More"}
        </PlainButton>
      </CenteredText>
    </Clickable>
  ) : (
    <Text isExpanded={true} text={text}></Text>
  );
};

export const Testimonial = ({ testimonials }: TestimonialProps) => {
  const initialState = getInitialState(testimonials);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showMeasurableHeight, setShowMeasurableHeight] = useState(false);

  useEffect(() => {
    setShowMeasurableHeight(true);
  });

  return (
    <TestimonialSection id="testimonials">
      {testimonials.map(testimonial => (
        <TestimonialCallout key={testimonial.title}>
          {testimonial.imageSrc && (
            <TestimonialImage
              imageAlt={testimonial.imageAlt}
              imageInfo={testimonial.imageSrc.childImageSharp.gatsbyImageData}
              title={testimonial.title}
            />
          )}
          <TestimonialTitle>{testimonial.title}</TestimonialTitle>
          {showMeasurableHeight ? (
            <MeasurableHeightText
              dispatch={dispatch}
              isExpanded={state[testimonial.title]}
              text={testimonial.text}
              title={testimonial.title}
            />
          ) : null}
        </TestimonialCallout>
      ))}
      <hr />
      <CenteredText margin="1rem 0">
        Care to share? Write a review about your experience{" "}
        <BannerLink to="https://forms.gle/U4LwVirKiBMKWEAt5">here</BannerLink>!
      </CenteredText>
    </TestimonialSection>
  );
};
