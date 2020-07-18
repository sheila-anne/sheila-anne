import React, { FC } from "react";

import { BaseForm, BaseFormProps } from "./base-form";
import { Input } from "./form-elements";

type OptInFormProps = BaseFormProps & {
  backgroundColor: string;
};

export const OptInForm: FC<OptInFormProps> = ({ backgroundColor, formDescription, formTitle, page }) => (
  <BaseForm
    formDescription={formDescription}
    formRoute="/.netlify/functions/subscribe-handler"
    formTitle={formTitle}
    page={page}
    submitText="Yes, send it to me!"
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
