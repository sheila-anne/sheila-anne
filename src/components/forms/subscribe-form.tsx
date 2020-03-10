import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState
} from "react";
import styled from "styled-components";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { FormWrapperSection, Input, TextArea } from "./form-elements";
import { SquareButton } from "../button";
import { trackFacebook } from "../../utils";

type SubscribeFormProps = {
  backgroundColor: string;
  formTitle: string;
  formDescription: string;
  formParagraph?: string;
  page: string;
};

const PaddedParagraph = styled.p`
  padding: 5px;
`;

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
    label: page
  };
  trackCustomEvent(args);
  trackFacebook(args);

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

  const res = await fetch("/.netlify/functions/form-handler", {
    method: "POST",
    body: JSON.stringify(formValues)
  })
    .then(res => res.json())
    .catch(() => ({
      success: false
    }));

  const success = !!res?.success;

  setButtonText(success ? "Success!" : "Error");
};

const SubscribeForm: FC<SubscribeFormProps> = ({
  backgroundColor,
  formDescription,
  formParagraph,
  formTitle,
  page
}) => {
  const [buttonText, setButtonText] = useState("Submit!");

  return (
    <FormWrapperSection centerText={true} itemProp="mainContentOfPage">
      <h1>{formTitle}</h1>
      <p>{formDescription}</p>
      {!!formParagraph && <PaddedParagraph>{formParagraph}</PaddedParagraph>}
      <form onSubmit={e => handleSubmit(e, setButtonText, page)}>
        <p>
          <Input
            autoComplete="name"
            backgroundColor={backgroundColor}
            type="text"
            id="name"
            name="name"
            required={true}
            placeholder="Name"
          />
        </p>
        <p>
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
        </p>
        <p>
          <Input
            autoComplete="tel"
            backgroundColor={backgroundColor}
            id="phone"
            inputMode="tel"
            maxLength={11}
            name="phone"
            placeholder="Phone (optional)"
            type="tel"
          />
        </p>
        <p>
          <TextArea
            id="message"
            name="message"
            placeholder="Message (optional)"
          ></TextArea>
        </p>
        <SquareButton type="submit">{buttonText}</SquareButton>
      </form>
    </FormWrapperSection>
  );
};

export { SubscribeForm };
