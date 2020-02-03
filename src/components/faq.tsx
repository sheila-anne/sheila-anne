import React, { FC, Reducer, useReducer } from "react";
import styled from "styled-components";

import { Constants } from "../constants";

type StateAction = {
  [key in string]: boolean;
};

type FAQ = {
  answer: string;
  question: string;
};

type FAQProps = {
  faq: FAQ[];
};

type State = StateAction;

const Clickable = styled.div`
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  margin: 2rem 0;
`;

const HiddenText = styled.small<{ isExpanded: boolean }>`
  display: ${({ isExpanded }) => (!!isExpanded ? "block" : "none")};
  margin-top: 1rem;
`;

const SmallHeadline = styled.h2`
  font-size: 1.25rem;
`;

const reducer: Reducer<State, StateAction> = (
  state: State,
  action: StateAction
): State => {
  const newState = { ...state };
  const name = Object.keys(action)[0];
  const newValue = !action[name] as boolean;
  newState[name] = newValue;
  return newState;
};

export const FAQ: FC<FAQProps> = ({ faq }) => {
  const initialState = faq
    .map(frequentlyAsked => ({
      name: frequentlyAsked.question,
      isExpanded: false
    }))
    .reduce(
      (previousValue, currentValue) => {
        return {
          ...previousValue,
          [currentValue.name]: currentValue.isExpanded
        };
      },
      { base: false }
    );
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h1>FAQ</h1>
      {faq.map(frequentlyAsked => (
        <Clickable
          key={frequentlyAsked.question}
          onClick={() =>
            dispatch({
              [frequentlyAsked.question]: state[frequentlyAsked.question]
            })
          }
        >
          <SmallHeadline>{frequentlyAsked.question} →</SmallHeadline>
          <HiddenText isExpanded={state[frequentlyAsked.question]}>
            {frequentlyAsked.answer}
          </HiddenText>
        </Clickable>
      ))}
    </section>
  );
};
