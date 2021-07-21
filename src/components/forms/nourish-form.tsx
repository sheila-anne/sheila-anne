import React from "react";
import styled from "styled-components";

import { BaseForm, BaseFormProps } from "./base-form";
import { Input, Hidden, TextArea } from "./form-elements";

import { Constants } from "../../constants";
import { getFormattedFormElements } from "./form-utils";

const StyledSmall = styled.small`
  margin-bottom: 1rem;
`;

const StyledSelect = styled.select`
  margin: 1rem 0;
`;

const Select = ({ options, name, id }: { options: string[]; name: string; id: string }) => {
  return (
    <StyledSelect name={name} id={id}>
      {options.map(option => (
        <option key={option} value={option} label={option} />
      ))}
    </StyledSelect>
  );
};

const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(event.target as HTMLFormElement);

  await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData as unknown as string).toString(),
  }).catch(console.error);
};

export const NourishForm = ({
  backgroundColor,
  formRoute = "/.netlify/functions/subscribe-handler",
  page,
  submitText,
  isSubmitSuccess,
}: BaseFormProps) => (
  <BaseForm
    id="nourish"
    isSubmitSuccess={isSubmitSuccess}
    formDescription="Hi there! I'm so happy you're here and I'm looking forward to learning more about you 🌼"
    formRoute={formRoute}
    formTitle="Apply to NOURISH"
    page={page}
    submitText={submitText}
    trackArgs={{
      eventName: "CompleteRegistration",
      params: {
        content_name: "NOURISH",
        status: true,
      },
    }}
    tags="Nourish"
    buttonColor={Constants.Colors.nourishNeutral}
    additionalSubmitHandler={onSubmit}
    isNetlify={true}
  >
    <Hidden as="input" name="form-name" value="nourish-form" readOnly={true} />
    <Input
      autoComplete="given-name"
      backgroundColor={backgroundColor}
      type="text"
      id="name"
      name="name"
      required={true}
      placeholder="First Name"
      title="What's your name?"
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
      title="What's your email?"
    />
    <TextArea
      id="how-did-you-hear-about-nourish"
      name="how-did-you-hear-about-nourish"
      title="How did you hear about NOURISH?"
      placeholder="How did you hear about NOURISH?"
    />
    <TextArea
      id="how-would-you-describe-where-you-currently-are-in-your-life"
      name="how-would-you-describe-where-you-currently-are-in-your-life"
      title="How would you describe where you currently are in your life / career?"
      placeholder="How would you describe where you currently are in your life / career?"
    />
    <TextArea
      id="what-are-your-three-biggest-challenges"
      name="what-are-your-three-biggest-challenges"
      title="What are your three biggest challenges when it comes to creating the life you truly desire?"
      placeholder="What are your three biggest challenges when it comes to creating the life you truly desire?"
    />
    <StyledSmall>
      Ex. Self doubt, too many options, stress / anxiety, not knowing my purpose, uncertainty about what’s next, getting
      in my own way, not having a supportive community
    </StyledSmall>
    <TextArea
      id="what-are-you-looking-to-get-out-of-nourish"
      name="what-are-you-looking-to-get-out-of-nourish"
      title="What are you looking to get out of NOURISH?"
      placeholder="What are you looking to get out of NOURISH?"
    />
    <StyledSmall>
      Ex. To feel healthy & well, inner peace, a new career venture, build my own business intentionally, cultivating a
      community, feeling 100% ME
    </StyledSmall>
    <label htmlFor="are-you-ready-to-commit">
      NOURISH is a high value program designed to transform your life and career. It’s packed with powerful content,
      we’ll have bi-weekly immersive group coaching calls, and you have access to an intimate online community to hold
      you every step of the way. Are you ready, willing, and able to invest in yourself financially right now, and to
      commit to nourishing the amazing woman you are?
    </label>
    <Select id="are-you-ready-to-commit" name="are-you-ready-to-commit" options={["Heck yes!", "I'm not sure ..."]} />

    <label htmlFor="will-you-schedule-the-call">
      Once we receive your application, we'll email you to schedule a connection call with Sheila to explore if NOURISH
      is the right program for you. Will you schedule the call and show up?
    </label>
    <Select id="will-you-schedule-the-call" name="will-you-schedule-the-call" options={["Absolutely!", "No."]} />
  </BaseForm>
);
