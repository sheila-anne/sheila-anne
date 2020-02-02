import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState
} from "react";
import styled from "styled-components";

import { FormWrapperSection, Input } from "./form-elements";
import { SquareButton } from "../button";
import { trackOnClick } from "./track-on-click";

type PageNames = "theGrove" | "homepage";

type SubscribeFormProps = {
  backgroundColor: string;
  formTitle: string;
  formDescription: string;
  formParagraph?: string;
  id?: string;
  page: PageNames;
};

const PaddedParagraph = styled.p`
  padding: 5px;
`;

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  setButtonText: Dispatch<SetStateAction<string>>,
  page: PageNames
) => {
  e.stopPropagation();
  e.persist();
  e.preventDefault();

  setButtonText("Submitting...");
  trackOnClick(page === "homepage" ? "Homepage Hubspot" : "The Grove Hubspot");

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
    .catch(err => {
      success: false;
    });

  const success = !!res?.success;

  setButtonText(success ? "Success!" : "Error");
};

const SubscribeForm: FC<SubscribeFormProps> = ({
  backgroundColor,
  formDescription,
  formParagraph,
  formTitle,
  id,
  page
}) => {
  const [buttonText, setButtonText] = useState("Submit!");

  return (
    <FormWrapperSection id={id && id} centerText={true}>
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
        <SquareButton type="submit" text={buttonText} />
      </form>
    </FormWrapperSection>
  );
};

export { SubscribeForm };
