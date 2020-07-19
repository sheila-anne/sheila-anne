import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styled from "styled-components";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { FormWrapperSection } from "./form-elements";
import { FormPage } from "../../types/forms";
import { PillButton } from "../button";
import { trackFacebook } from "../../utils";

export type BaseFormProps = {
  backgroundColor?: string;
  formTitle: string;
  formDescription: string;
  formParagraph?: string;
  formRoute?: string;
  page: FormPage;
  submitText: string;
};

type BackendResponse = {
  success: boolean;
};

const PaddedParagraph = styled.p`
  padding: 5px;
`;

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  formRoute: string,
  setButtonText: Dispatch<SetStateAction<string>>,
  page: string
) => {
  e.preventDefault();

  setButtonText("Submitting...");
  const args = {
    action: "submit",
    category: `Form Submission`,
    label: page,
  };
  trackCustomEvent(args);
  trackFacebook("track", "Lead", args);

  const formValues = { page };
  const formElements = (Array.from(e.currentTarget.elements) as unknown) as HTMLInputElement[];
  for (let element of formElements) {
    if (element.value === element.defaultValue || !element.value) {
      continue;
    }
    formValues[element.name] = element.value;
  }

  const res = await fetch(formRoute, {
    method: "POST",
    body: JSON.stringify(formValues),
  })
    .then(res => res.json() as Promise<BackendResponse>)
    .catch(
      () =>
        ({
          success: false,
        } as BackendResponse)
    );

  const success = !!res?.success;

  setButtonText(success ? "Success!" : "Error");
};

export const BaseForm: FC<BaseFormProps> = ({
  children,
  formDescription,
  formParagraph,
  formRoute = "",
  formTitle,
  page,
  submitText,
}) => {
  const [buttonText, setButtonText] = useState(submitText);

  return (
    <FormWrapperSection centerText={true} itemProp="mainContentOfPage">
      <h1>{formTitle}</h1>
      <p>{formDescription}</p>
      {!!formParagraph && <PaddedParagraph>{formParagraph}</PaddedParagraph>}
      <form onSubmit={e => handleSubmit(e, formRoute, setButtonText, page)}>
        {children}
        <PillButton type="submit">{buttonText}</PillButton>
      </form>
    </FormWrapperSection>
  );
};
