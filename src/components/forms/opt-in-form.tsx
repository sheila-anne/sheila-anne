import React from "react";

import { BaseForm, BaseFormProps } from "./base-form";
import { Input } from "./form-elements";

export const OptInForm = ({
  backgroundColor,
  formDescription,
  formRoute = "/.netlify/functions/subscribe-handler",
  formParagraph,
  formTitle,
  page,
  submitText,
  id,
  isSubmitSuccess,
}: BaseFormProps) => (
  <BaseForm
    id={id}
    isSubmitSuccess={isSubmitSuccess}
    formDescription={formDescription}
    formRoute={formRoute}
    formParagraph={formParagraph}
    formTitle={formTitle}
    page={page}
    submitText={submitText}
    trackArgs={{
      eventName: "CompleteRegistration",
      params: {
        content_name: "POSITIVITY_PACK",
        status: true,
      },
    }}
    tags="Positivity Pack"
  >
    <Input
      autoComplete="name"
      $backgroundColor={backgroundColor}
      type="text"
      id="name"
      name="name"
      required={true}
      placeholder="Name"
      title="Name"
    />
    <Input
      autoComplete="email"
      $backgroundColor={backgroundColor}
      type="email"
      id="email"
      inputMode="email"
      name="email"
      required={true}
      placeholder="Email"
      title="Email"
    />
    <Input
      autoComplete="tel"
      $backgroundColor={backgroundColor}
      type="text"
      id="tel"
      name="tel"
      placeholder="Telephone (optional)"
      title="Telephone"
    />
  </BaseForm>
);
