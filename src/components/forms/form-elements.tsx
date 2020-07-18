import styled from "styled-components";
import React, { ComponentType, Dispatch, FormEvent, SetStateAction, useState, ReactHTMLElement } from "react";

import { Constants } from "../../constants";
import { applyStyle } from "../../utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  backgroundColor?: string;
};

type FormWrapperProps = {
  alignItems?: string;
  centerText?: boolean;
};

const setAriaInvalid = (e: FormEvent<HTMLFormElement>, setIsInvalid: Dispatch<SetStateAction<boolean>>) => {
  e.preventDefault();
  setIsInvalid(!e.currentTarget.validity.valid);
};

function accessibleComponent<T>(Component: ComponentType<T>) {
  const [isInvalid, setIsInvalid] = useState(true);

  return (props: T & { title?: string }) => (
    <Component
      {...props}
      onInput={(e: FormEvent<HTMLFormElement>) => setAriaInvalid(e, setIsInvalid)}
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

function ariaWrapper<T>(Component: ComponentType<T>, props: React.FormHTMLAttributes<HTMLElement>) {
  const ariaWrappedComponent = accessibleComponent(Component)(props as T);
  return props.title ? (
    <label htmlFor={props.name}>
      <Hidden>{props.title}</Hidden>
      {ariaWrappedComponent}
    </label>
  ) : (
    ariaWrappedComponent
  );
}

export const Input = (props: InputProps) => ariaWrapper(InputInner, props);

export const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => ariaWrapper(TextAreaInner, props);

const InputInner = styled.input<InputProps>`
  ${({ backgroundColor }) => !!backgroundColor && `background-color: ${backgroundColor};`}
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
  ${({ alignItems }) => applyStyle("align-items", !!alignItems ? alignItems : "center")}
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
