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

export const Input = styled.input<InputProps>`
  ${({ backgroundColor }) =>
    !!backgroundColor && `background-color: ${backgroundColor};`}
`;

export const TextArea = styled.textarea`
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

  & > * ${Input}, ${TextArea} {
    display: block;
    border: 1px solid ${Constants.Colors.gray};
    border-radius: 5px;
  }
`;
