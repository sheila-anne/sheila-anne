import styled from "styled-components";

import { Constants } from "../../constants";
import { applyStyle } from "../../utils";

type InputProps = {
  backgroundColor?: string;
};

type FormWrapperProps = {
  alignItems?: string;
  centerText?: boolean;
};

export const Submit = styled.button`
  background: none;
  cursor: pointer;
  border: 1px solid ${Constants.Colors.gray};
  border-radius: 5px;
  font-weight: 100;
  padding: 1rem 1rem 0.75rem;
`;

export const Input = styled.input<InputProps>`
  ${({ backgroundColor }) =>
    !!backgroundColor && `background-color: ${backgroundColor};`}
`;

export const FormWrapperSection = styled.section<FormWrapperProps>`
  ${({ alignItems }) =>
    applyStyle("align-items", !!alignItems ? alignItems : "center")}
  display: flex;
  flex-flow: column;
  margin: 1rem auto;
  ${({ centerText }) => !!centerText && `text-align: center;`}

  & > * ${Input} {
    display: block;
    border: 1px solid ${Constants.Colors.gray};
    border-radius: 5px;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  min-height: 150px;
  min-width: 500px;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-top: 1rem;
    min-width: 290px;
  }
`;
