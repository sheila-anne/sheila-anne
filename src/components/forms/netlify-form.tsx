import React, { FC } from "react";
import styled from "styled-components";

import { FormWrapperSection, Input } from "./form-elements";
import { PlainButton } from "..";

const Honeypot = styled.p`
  display: none;
`;

type NetylifyFormProps = {
  actionRoute: string;
  formName: string;
  submitButtonText: string;
};

const ClickableButton = styled(PlainButton)`
  cursor: pointer;
  margin-top: 1rem;
`;

export const NetlifyForm: FC<NetylifyFormProps> = ({ actionRoute, formName, submitButtonText, children }) => (
  <FormWrapperSection>
    <form id={`#${formName}`} name={formName} data-netlify="true" action={actionRoute}>
      <Honeypot>
        <label>
          Don’t fill this out if you expect to hear from us!
          <Input name="bot-field" value="" readOnly />
        </label>
      </Honeypot>
      <Honeypot as="input" name="form-name" value={formName} readOnly={true} />
      {children}
      <ClickableButton name="SendMessage" type="submit">
        {submitButtonText}
      </ClickableButton>
    </form>
  </FormWrapperSection>
);
