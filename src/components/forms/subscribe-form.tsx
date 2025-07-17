import React from "react";

import { FormPage } from "../../types/forms";
import { BaseForm } from "./base-form";
import { Input } from "./form-elements";

import { Constants } from "../../constants";

export const SubscribeForm = ({ page, submitText = "Join" }: { page: FormPage; submitText?: string }) => (
  <BaseForm
    buttonColor={Constants.Colors.redRocksRed}
    id="subscribeForm"
    formDescription="Stay in the loop on updates, events, and thoughtful musings from Sheila Anne"
    formRoute="/.netlify/functions/subscribe-handler"
    formTitle="Join the community!"
    page={page}
    submitText={submitText}
    tags="Subscribe"
  >
    <Input autoComplete="name" type="text" id="name" name="name" required={true} placeholder="Name" title="Name" />
    <Input
      autoComplete="email"
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
