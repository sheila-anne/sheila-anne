import React from "react";

import { BaseForm, BaseFormProps } from "./base-form";
import { Input } from "./form-elements";

import { Constants } from "../../constants";

export const NourishForm = ({
  backgroundColor,
  formRoute = "/.netlify/functions/subscribe-handler",
  page,
  submitText,
  id,
  isSubmitSuccess,
}: BaseFormProps) => (
  <BaseForm
    id={id}
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
