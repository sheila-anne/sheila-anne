import React, { FC } from "react";
import styled from "styled-components";

import { FormWrapperSection, Input } from "./form-elements";
import { PlainButton } from "..";

const Honeypot = styled.p`
  display: none;
`;

type NetylifyFormProps = {
  actionRoute: string;
};

const ClickableButton = styled(PlainButton)`
  cursor: pointer;
`;

const FORM_NAME = "sheila-anne-event";

export const NetlifyForm: FC<NetylifyFormProps> = ({ actionRoute }) => (
  <FormWrapperSection>
    <form id={`#${FORM_NAME}`} name={FORM_NAME} data-netlify="true" action={actionRoute}>
      <Honeypot>
        <label>
          Don’t fill this out if you expect to hear from us!
          <Input name="bot-field" value="" readOnly />
        </label>
      </Honeypot>
      <Honeypot as="input" name="form-name" value={FORM_NAME} readOnly={true} />
      <div>
        <label htmlFor="name">
          Your Name: <Input type="text" id="name" name="name" required={true} autoComplete="given-name" />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Your Email: <Input type="email" id="email" name="email" required={true} autoComplete="email" />
        </label>
      </div>
      <ClickableButton name="SendMessage" type="submit">
        Attend!
      </ClickableButton>
    </form>
  </FormWrapperSection>
);
