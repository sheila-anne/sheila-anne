import styled from "styled-components";
import React, {
  ComponentType,
  Dispatch,
  FormEvent,
  FormHTMLAttributes,
  InputHTMLAttributes,
  SetStateAction,
  TextareaHTMLAttributes,
  useState,
} from "react";

import { Constants } from "../../constants";
import { applyStyle } from "../../utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  $backgroundColor?: string;
  $display?: string;
};

type FormWrapperProps = {
  $alignItems?: string;
  $centerText?: boolean;
};

/*
this type has to be extended as more elements are fed in; this is because HTMLElement lacks the
"validity" property, among other things, and there isn't a subset element in MDN / TypeScript for valid
elements to be used in a form, although there is an actual web standard, "Flow Content" that is considered
legal to use within a form: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content
not all Flow Content elements have the validity prop, either ... so we're left with this type
 */
type FormElement = HTMLInputElement | HTMLTextAreaElement;

const setAriaInvalid = (e: FormEvent<FormElement>, setIsInvalid: Dispatch<SetStateAction<boolean>>) => {
  e.preventDefault();
  setIsInvalid(!e.currentTarget.validity.valid);
};

function ariaWrapper<T>(Component: ComponentType<T>) {
  const [isInvalid, setIsInvalid] = useState(true);

  return (props: T & FormHTMLAttributes<FormElement>) => (
    <Component
      {...props}
      onInput={(e: FormEvent<FormElement>) => setAriaInvalid(e, setIsInvalid)}
      aria-invalid={isInvalid}
      aria-label={!!props.title ? props.title : undefined}
    />
  );
}

export const Hidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

function accessibleWrapper<T extends FormHTMLAttributes<FormElement>>(
  Component: ComponentType<T>,
  props: FormHTMLAttributes<HTMLElement>
) {
  /*
  have to cast the props here to keep everything happy because the typings
  for styled-components don't return the correct react typings (like HTMLInputElement)
  even when calling styled.input explicitly - unlucky
  */
  const ariaWrappedComponent = ariaWrapper(Component)(props as T);
  return props.title ? (
    <label htmlFor={props.name}>
      <Hidden>{props.title}</Hidden>
      {ariaWrappedComponent}
    </label>
  ) : (
    ariaWrappedComponent
  );
}

export const Input = (props: InputProps) => accessibleWrapper(InputInner, props);

export const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => accessibleWrapper(TextAreaInner, props);

const InputInner = styled.input<InputProps>`
  ${({ $backgroundColor }) => !!$backgroundColor && `background-color: ${$backgroundColor};`}
  margin: 1rem 0;
`;

const TextAreaInner = styled.textarea`
  margin-bottom: 1rem;
  min-height: 150px;
  min-width: 500px;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-top: 1rem;
    min-width: 290px;
  }
`;

export const FormWrapperSection = styled.section<FormWrapperProps>`
  ${({ $alignItems }) => applyStyle("align-items", !!$alignItems ? $alignItems : "center")}
  display: flex;
  flex-flow: column;
  margin: 1rem auto;
  ${({ $centerText }) => !!$centerText && `text-align: center;`}

  & > * ${InputInner}, ${TextAreaInner} {
    display: block;
    border: 1px solid ${Constants.Colors.gray};
    border-radius: 5px;
  }
`;
