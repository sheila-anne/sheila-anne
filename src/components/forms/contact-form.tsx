import React from "react";

import { NetlifyForm } from "./";
import { Input, TextArea } from "./form-elements";

export const ContactForm = ({
  backgroundColor,
  submitText,
}) => (
  <NetlifyForm
    actionRoute="/thank-you"
    formName={"contact-us"}
    submitButtonText={submitText}
  >
    <h2>Let's get in touch</h2>
    <div>Have further questions for me? Don't hesitate to reach out, let's get to know one another:</div>
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
  </NetlifyForm>
);
