import React from "react";

import { BaseForm } from "./base-form";
import { Input } from "./form-elements";

export const MasterclassForm = ({ isSubmitSuccess }) => {
  return (
    <BaseForm
      formDescription="Enter your information below to enroll in the masterclass!"
      formTitle="Sign up for your free masterclass link!"
      formRoute="/.netlify/functions/subscribe-handler"
      page="masterclass"
      submitText="Submit"
      trackArgs={{
        eventName: "Masterclass",
        sendTo: "AW-456930843/akzHCOvX6PIBEJvs8NkB",
        params: { content_name: "MASTERCLASS" },
      }}
      tags="Masterclass"
      isNetlify={true}
      isSubmitSuccess={isSubmitSuccess}
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
};
