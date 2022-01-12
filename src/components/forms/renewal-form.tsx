import React from "react";

import { Constants } from "../../constants";
import { BaseForm } from "./base-form";
import { Input } from "./form-elements";

export const RenewalForm = () => (
  <BaseForm
    id="renewal"
    formDescription="By submitting this form you agree to receive emails by Sheila Anne. We will not spam you or sell your inspiration. Expect nothing but uplifting musings and life-changing tools :)"
    formRoute="/.netlify/functions/subscribe-handler"
    formTitle="Sign up for Renewal"
    page="renewal"
    submitText="Submit!"
    trackArgs={{
      eventName: "CompleteRegistration",
      params: {
        content_name: "RENEWAL",
        status: true,
      },
    }}
    tags="Renewal"
    buttonColor={Constants.Colors.nourishNeutral}
    isNetlify={true}
  >
    <Input
      autoComplete="given-name"
      type="text"
      id="name"
      name="name"
      required={true}
      placeholder="First Name"
      title="What's your name?"
    />
    <Input
      autoComplete="email"
      type="email"
      id="email"
      inputMode="email"
      name="email"
      required={true}
      placeholder="Email"
      title="What's your email?"
    />
  </BaseForm>
);
