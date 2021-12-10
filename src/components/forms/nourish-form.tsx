import React from "react";
import styled from "styled-components";

import { BaseForm, BaseFormProps } from "./base-form";
import { Input, Hidden, TextArea } from "./form-elements";

import { Constants } from "../../constants";
import { getFormattedFormElements } from "./form-utils";

const StyledSmall = styled.small`
  margin-bottom: 1rem;
`;

const StyledSelect = styled.select`
  margin: 1rem 0;
`;

const Select = ({ options, name, id }: { options: string[]; name: string; id: string }) => {
  return (
    <StyledSelect name={name} id={id}>
      {options.map(option => (
        <option key={option} value={option} label={option} />
      ))}
    </StyledSelect>
  );
};

const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(event.target as HTMLFormElement);

  await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData as unknown as string).toString(),
  }).catch(console.error);
};

export const NourishForm = ({
  backgroundColor,
  formRoute = "/.netlify/functions/subscribe-handler",
  page,
  submitText,
  isSubmitSuccess,
}: BaseFormProps) => (
  <BaseForm
    id="nourish"
    isSubmitSuccess={isSubmitSuccess}
    formDescription=""
    formRoute={formRoute}
    formTitle=""
    page={page}
    submitText={submitText}
    trackArgs={{
      eventName: "CompleteRegistration",
      params: {
        content_name: "NOURISH",
        status: true,
      },
    }}
    tags="Nourish"
    buttonColor={Constants.Colors.nourishNeutral}
    additionalSubmitHandler={onSubmit}
    isNetlify={true}
  >
    <Input
      autoComplete="given-name"
      backgroundColor={backgroundColor}
      type="text"
      id="name"
      name="name"
      required={true}
      placeholder="First Name"
      title="Name"
    />
    <Input
      autoComplete="email"
      backgroundColor={backgroundColor}
      type="email"
      id="email"
      inputMode="email"
      name="email"
      required={true}
      placeholder="Email"
      title="Email"
    />
    <input style={{ display: "none" }} value="Nourish" id="tags" readOnly={true} name="tags" />
  </BaseForm>
);
