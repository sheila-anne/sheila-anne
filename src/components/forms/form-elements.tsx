import styled from "styled-components";

import { Constants } from "../../constants";

type InputProps = {
  backgroundColor?: string;
};

type FormWrapperProps = {
  centerText?: boolean;
};

export const Submit = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid ${Constants.Colors.gray};
  border-radius: 5px;
  padding: 1rem 1rem 0.75rem;
  font-weight: 100;
  background: none;
`;

export const Input = styled.input<InputProps>`
    ${({ backgroundColor }) =>
      !!backgroundColor && `background-color: ${backgroundColor};`}
  @media (max-width: ${Constants.mobileWidth}) {
    margin-left: 1rem;
  }
`;

export const FormWrapperSection = styled.section<FormWrapperProps>`
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
    min-width: 290px;
  }
`;
