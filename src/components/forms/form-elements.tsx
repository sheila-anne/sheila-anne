import styled from "styled-components";
import React, {
  ComponentType,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

import { Constants } from "../../constants";
import { applyStyle } from "../../utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  backgroundColor?: string;
};

type FormWrapperProps = {
  alignItems?: string;
  centerText?: boolean;
};

const setValid = (
  e: FormEvent<HTMLFormElement>,
  setIsInvalid: Dispatch<SetStateAction<boolean>>
) => {
  e.preventDefault();
  setIsInvalid(!e.currentTarget.validity.valid);
};

function higherOrderStyledComponent<T>(Component: ComponentType<T>) {
  const [isInvalid, setIsInvalid] = useState(true);

  return (props: T) => (
    <Component
      {...props}
      onInput={(e: FormEvent<HTMLFormElement>) => setValid(e, setIsInvalid)}
      aria-invalid={isInvalid}
    />
  );
}

export const Input = (props: InputProps) =>
  higherOrderStyledComponent(InputInner)(props);

export const TextArea = (
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) => higherOrderStyledComponent(TextAreaInner)(props);

const InputInner = styled.input<InputProps>`
  ${({ backgroundColor }) =>
    !!backgroundColor && `background-color: ${backgroundColor};`}
  margin: 1rem 0;
`;

const TextAreaInner = styled.textarea`
  min-height: 150px;
  min-width: 500px;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-top: 1rem;
    min-width: 290px;
  }
`;

export const FormWrapperSection = styled.section<FormWrapperProps>`
  ${({ alignItems }) =>
    applyStyle("align-items", !!alignItems ? alignItems : "center")}
  display: flex;
  flex-flow: column;
  margin: 1rem auto;
  ${({ centerText }) => !!centerText && `text-align: center;`}

  & > * ${InputInner}, ${TextAreaInner} {
    display: block;
    border: 1px solid ${Constants.Colors.gray};
    border-radius: 5px;
  }
`;
