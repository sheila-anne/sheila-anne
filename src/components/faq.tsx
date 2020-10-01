import React, { Reducer, useReducer } from "react";
import styled from "styled-components";

import { trackCustomEvent, trackFacebook } from "../utils";

type Action = {
  type: string;
};

type FAQ = {
  answer: string;
  question: string;
};

type FAQProps = {
  faq: FAQ[];
};

type State = {
  [key in string]: boolean;
};

const Clickable = styled.div`
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  margin: 2rem 0;
`;

const HiddenText = styled.p<{ isExpanded: boolean }>`
  display: ${({ isExpanded }) => (!!isExpanded ? "block" : "none")};
  margin-top: 1rem;
`;

const SmallHeadline = styled.h2`
  font-size: 1.25rem;
  position: relative;
  text-decoration: underline;
`;

const RotateOnOpen = styled.span<{ isExpanded: boolean }>`
  display: block;
  position: absolute;
  right: 100%;
  top: 0;
  transform: rotate(${({ isExpanded }) => (!!isExpanded ? 90 : 0)}deg);
  transition: ease 0.3s;
`;

const getInitialState = (faq: FAQ[]) =>
  faq
    .map(frequentlyAsked => ({
      [frequentlyAsked.question]: false,
    }))
    .reduce((previousValue, currentValue) => ({
      ...previousValue,
      ...currentValue,
    }));

const reducer: Reducer<State, Action> = (state: State, action: Action): State => {
  const isExpanded = !state[action.type];
  const args = {
    category: `FAQ`,
    label: `${action.type} was ${isExpanded ? "expanded" : "closed"}`,
  };
  trackCustomEvent({ type: "FAQ Interaction", args });
  trackFacebook({ eventType: "trackCustom", eventName: "FAQ Interaction", params: args });
  return { ...state, [action.type]: isExpanded };
};

export const FAQ = ({ faq }: FAQProps) => {
  const initialState = getInitialState(faq);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h1 id="faq">FAQ</h1>
      {faq.map(frequentlyAsked => (
        <Clickable
          key={frequentlyAsked.question}
          onClick={() =>
            dispatch({
              type: frequentlyAsked.question,
            })
          }
        >
          <SmallHeadline>
            {frequentlyAsked.question} <RotateOnOpen isExpanded={state[frequentlyAsked.question]}>→</RotateOnOpen>
          </SmallHeadline>
          <HiddenText isExpanded={state[frequentlyAsked.question]}>{frequentlyAsked.answer}</HiddenText>
        </Clickable>
      ))}
    </section>
  );
};
