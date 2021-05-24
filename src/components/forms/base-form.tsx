import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styled from "styled-components";

import { FormWrapperSection } from "./form-elements";
import { FormPage } from "../../types/forms";
import { InnerHandlerReturn } from "../../types/lambda";
import { PillButton } from "../button";
import { trackCustomEvent, trackFacebook, TrackArgs } from "../../utils";

export type BaseFormProps = {
  backgroundColor?: string;
  buttonColor?: string;
  formTitle: string;
  formDescription: string;
  formParagraph?: string;
  formRoute?: string;
  isSubmitSuccess?: Dispatch<SetStateAction<boolean>>;
  page: FormPage;
  submitText: string;
  trackArgs?: TrackArgs;
  id?: string;
  tags?: string;
};

const PaddedParagraph = styled.p`
  padding: 5px;
`;

const StyledForm = styled.form`
  display: inherit;
  flex-flow: column;
  align-items: center;
`;

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  formRoute: string,
  page: string,
  setButtonText: Dispatch<SetStateAction<string>>,
  trackArgs: TrackArgs,
  isSubmitSuccess?: Dispatch<SetStateAction<boolean>>
) => {
  e.preventDefault();

  setButtonText("Submitting...");
  const args = {
    event_category: trackArgs.eventName,
    event_label: page,
  };
  if (trackArgs.sendTo) {
    args["send_to"] = trackArgs.sendTo;
  }
  trackCustomEvent({ type: "conversion", args });
  trackFacebook({ eventType: "track", ...trackArgs });

  const formValues = { page };
  const formElements = (Array.from(e.currentTarget.elements) as unknown) as HTMLInputElement[];
  for (let element of formElements) {
    if ((element.value === element.defaultValue && element.id !== "tags") || !element.value) {
      continue;
    }
    formValues[element.name] = element.value;
  }
  debugger;

  const res = await fetch(formRoute, {
    method: "POST",
    body: JSON.stringify(formValues),
  })
    .then(res => res.json() as Promise<InnerHandlerReturn>)
    .catch((err: Error) => ({
      success: false,
      error: err,
    }));

  const success = !!res?.success;

  setButtonText(success ? "Success!" : "Error");
  isSubmitSuccess && isSubmitSuccess(success);
};

export const BaseForm: FC<BaseFormProps> = ({
  buttonColor,
  children,
  formDescription,
  formParagraph,
  formRoute = "",
  formTitle,
  isSubmitSuccess,
  page,
  submitText,
  trackArgs,
  id,
  tags,
}) => {
  const [buttonText, setButtonText] = useState(submitText);
  const fbTrackArgs = trackArgs ?? {
    eventName: "Lead",
  };

  return (
    <FormWrapperSection centerText={true} itemProp="mainContentOfPage">
      <h1>{formTitle}</h1>
      <p>{formDescription}</p>
      {!!formParagraph && <PaddedParagraph>{formParagraph}</PaddedParagraph>}
      <StyledForm id={id} onSubmit={e => handleSubmit(e, formRoute, page, setButtonText, fbTrackArgs, isSubmitSuccess)}>
        {children}
        {!!tags ? <input style={{ display: "none" }} value={tags} id="tags" readOnly={true} name="tags" /> : null}
        <PillButton color={buttonColor} type="submit">{buttonText}</PillButton>
      </StyledForm>
    </FormWrapperSection>
  );
};
