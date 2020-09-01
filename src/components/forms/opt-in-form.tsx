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
}: BaseFormProps) => (
  <BaseForm
    formDescription={formDescription}
    formRoute={formRoute}
    formParagraph={formParagraph}
    formTitle={formTitle}
    page={page}
    submitText={submitText}
    trackArgs={{
      eventName: "CompleteRegistration",
      params: {
        content_name: "PATHFINDER",
        status: true,
      },
    }}
  >
    <Input
      autoComplete="name"
      backgroundColor={backgroundColor}
      type="text"
      id="name"
      name="name"
      required={true}
      placeholder="Name"
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
  </BaseForm>
);
