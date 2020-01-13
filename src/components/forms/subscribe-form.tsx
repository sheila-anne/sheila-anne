import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState
} from "react";
import styled from "styled-components";

import { Constants } from "../../constants";
import { FormWrapperSection, Input } from "./form-elements";

type PageNames = keyof typeof Constants.formNames;

type SubscribeFormProps = {
  backgroundColor: string;
  formTitle: string;
  formDescription: string;
  formParagraph?: string;
  page: PageNames;
};

const PaddedParagraph = styled.p`
  padding: 5px;
`;

const SubmitSpan = styled.span`
  display: block;
  position: relative;
  padding: 17px 28px;
  background-size: 100% 200%;
  background-position: top;

  @media (max-width: ${Constants.mobileWidth}) {
    background-color: #000;
  }
`;

const Submit = styled.button`
  position: relative;
  padding: 0;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: transparent;
  color: #29292a;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transition: 0.3s ease height;
    background: #29292a;
  }

  &:hover,
  &:focus {
    color: #fff;
    transition: all 0.3s ease;
    span {
      background-position: bottom;
    }
    &::before {
      height: 100%;
    }
  }

  @media (max-width: ${Constants.mobileWidth}) {
    color: #fff;
    margin-top: 1rem;
  }
`;

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  setButtonText: Dispatch<SetStateAction<string>>,
  page: PageNames
) => {
  e.preventDefault();
  setButtonText("Submitting...");

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

  const res = await fetch(".netlify/functions/form-handler", {
    method: "POST",
    body: JSON.stringify(formValues)
  })
    .then(res => res.json())
    .catch(() => {
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
  page
}) => {
  const [buttonText, setButtonText] = useState("Submit!");

  return (
    <FormWrapperSection centerText={true}>
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
            type="text"
            id="phone"
            inputMode="tel"
            name="phone"
            placeholder="Phone (Optional)"
          />
        </p>
        <Submit name="SendMessage" type="submit">
          <SubmitSpan>{buttonText}</SubmitSpan>
        </Submit>
      </form>
    </FormWrapperSection>
  );
};

export { SubscribeForm };
