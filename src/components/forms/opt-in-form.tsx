import React, { FC } from "react";

import { BaseForm, BaseFormProps } from "./base-form";
import { Input } from "./form-elements";

export const OptInForm: FC<BaseFormProps> = ({
  backgroundColor,
  formDescription,
  formRoute = "/.netlify/functions/subscribe-handler",
  formTitle,
  page,
  submitText,
}) => (
  <BaseForm
    formDescription={formDescription}
    formRoute={formRoute}
    formTitle={formTitle}
    page={page}
    submitText={submitText}
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
