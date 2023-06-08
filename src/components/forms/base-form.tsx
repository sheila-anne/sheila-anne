import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styled from "styled-components";

import { FormWrapperSection, Hidden } from "./form-elements";
import { FormPage } from "../../types/forms";
import { getFormattedFormElements } from "./form-utils";
import { InnerHandlerReturn } from "../../types/lambda";
import { PillButton } from "../button";
import { trackCustomEvent, trackFacebook, TrackArgs } from "../../utils";

export type BaseFormProps = {
  backgroundColor?: string;
  buttonColor?: string;
  children?: React.ReactNode;
  formTitle?: string;
  formDescription?: string;
  formParagraph?: string;
  formRoute?: string;
  isSubmitSuccess?: Dispatch<SetStateAction<boolean>>;
  page: FormPage;
  submitText: string;
  trackArgs?: TrackArgs;
  id?: string;
  tags?: string;
  additionalSubmitHandler?: (event: React.FormEvent<HTMLFormElement>) => void;
  isNetlify?: boolean;
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
  isNetlify: boolean | undefined,
  isSubmitSuccess?: Dispatch<SetStateAction<boolean>>,
  additionalSubmitHandler?: (event: React.FormEvent<HTMLFormElement>) => void
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

  const formValues = { page, ...getFormattedFormElements(e) };

  const netlifySubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as string).toString(),
    }).catch(console.error);
  };

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
  if (success) {
    additionalSubmitHandler && additionalSubmitHandler(e);
    isNetlify && netlifySubmitHandler(e);
  }
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
  additionalSubmitHandler,
  isNetlify,
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
      <StyledForm
        id={id}
        onSubmit={e =>
          handleSubmit(
            e,
            formRoute,
            page,
            setButtonText,
            fbTrackArgs,
            isNetlify,
            isSubmitSuccess,
            additionalSubmitHandler
          )
        }
        data-netlify={isNetlify}
        name={id}
      >
        {isNetlify && <Hidden as="input" name="form-name" value={id} />}
        {children}
        {!!tags ? (
          <Hidden as="input" style={{ display: "none" }} value={tags} id="tags" readOnly={true} name="tags" />
        ) : null}
        <PillButton color={buttonColor} type="submit">
          {buttonText}
        </PillButton>
      </StyledForm>
    </FormWrapperSection>
  );
};
