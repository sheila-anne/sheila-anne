import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { FormWrapperSection, Input } from "./form-elements";
import { FormPage } from "../../types/forms";
import { PillButton } from "../button";
import { trackFacebook } from "../../utils";

type OptInFormProps = {
  backgroundColor: string;
  formTitle: string;
  formDescription: string;
  page: FormPage;
};

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  setButtonText: Dispatch<SetStateAction<string>>,
  page: string
) => {
  e.preventDefault();

  setButtonText("Submitting...");
  const args = {
    action: "submit",
    category: `Form Submission`,
    label: page,
  };
  trackCustomEvent(args);
  trackFacebook("track", "Lead", args);

  const formValues = { page };
  const formElements = (Array.from(
    e.currentTarget.elements
  ) as unknown) as HTMLInputElement[];
  for (let element of formElements) {
    if (element.value === element.defaultValue || !element.value) {
      continue;
    }
    formValues[element.name] = element.value;
  }

  const res = await fetch("/.netlify/functions/subscribe-handler", {
    method: "POST",
    body: JSON.stringify(formValues),
  })
    .then(res => res.json())
    .catch(() => ({
      success: false,
    }));

  const success = !!res?.success;

  setButtonText(success ? "Success!" : "Error");
};

export const OptInForm: FC<OptInFormProps> = ({
  backgroundColor,
  formDescription,
  formTitle,
  page,
}) => {
  const [buttonText, setButtonText] = useState("Yes, send it to me!");
  //TODO: consolidate this and the subscribe form!

  return (
    <FormWrapperSection centerText={true} itemProp="mainContentOfPage">
      <h1>{formTitle}</h1>
      <p>{formDescription}</p>
      <form onSubmit={e => handleSubmit(e, setButtonText, page)}>
        <Input
          autoComplete="name"
          backgroundColor={backgroundColor}
          type="text"
          id="name"
          name="name"
          required={true}
          placeholder="Name"
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
        />
        <PillButton type="submit">{buttonText}</PillButton>
      </form>
    </FormWrapperSection>
  );
};
