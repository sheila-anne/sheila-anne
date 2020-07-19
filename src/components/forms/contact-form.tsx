import React, { FC } from "react";

import { BaseForm, BaseFormProps } from "./base-form";
import { Input, TextArea } from "./form-elements";

export const ContactForm: FC<BaseFormProps> = ({
  backgroundColor,
  formDescription,
  formParagraph,
  formRoute = "/.netlify/functions/contact-handler",
  formTitle,
  page,
  submitText,
}) => (
  <BaseForm
    formDescription={formDescription}
    formParagraph={formParagraph}
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
    <Input
      autoComplete="tel"
      backgroundColor={backgroundColor}
      id="phone"
      inputMode="tel"
      maxLength={11}
      name="phone"
      placeholder="Phone (optional)"
      type="tel"
      title="Phone Number"
    />
    <div>
      <TextArea id="message" name="message" placeholder="Message" required={true} title="Write your message here" />
    </div>
  </BaseForm>
);
