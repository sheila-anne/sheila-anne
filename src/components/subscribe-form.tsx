import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import { FormWrapperSection, Input } from "../components/forms";

const SubmitSpan = styled.span`
  display: block;
  position: relative;
  padding: 17px 28px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to bottom, #29292a, #29292a 50%, #fff 50%);
  background-size: 100% 200%;
  background-position: top;
  transition: all 0.3s ease;

  @media (max-width: ${Constants.mobileWidth}) {
    -webkit-text-fill-color: inherit;
    -webkit-background-clip: inherit;
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
  }
`;

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  setButtonText: Dispatch<SetStateAction<string>>
) => {
  e.preventDefault();
  setButtonText("Submitting...");

  const formValues = {};
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

const SubscribeForm = () => {
  const [buttonText, setButtonText] = useState("Submit!");

  return (
    <FormWrapperSection centerText={true}>
      <h2>Let's get to know one another</h2>
      <p>Don't wait to change your life, connect with me today!</p>
      <form onSubmit={e => handleSubmit(e, setButtonText)}>
        <p>
          <Input
            autoComplete="name"
            backgroundColor={Constants.Colors.featuredPost}
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
            backgroundColor={Constants.Colors.featuredPost}
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
            backgroundColor={Constants.Colors.featuredPost}
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
