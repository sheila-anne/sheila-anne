import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { FormWrapperSection, Input, Submit, TextArea } from "./form-elements";

const onSubmit = async (
  event: FormEvent<HTMLFormElement>,
  setSubmitText: Dispatch<SetStateAction<string>>
) => {
  event.preventDefault();
  setSubmitText("Submitting ...");
  trackCustomEvent({
    action: "submit",
    category: `Form Submission`,
    label: "Contact"
  });

  const formElements = (Array.from(
    event.currentTarget.elements
  ) as unknown) as HTMLInputElement[];

  const isValid =
    formElements.filter(elem => elem.name === "bot-field")[0].value === "";
  const validFormElements = isValid ? formElements : [];

  if (validFormElements.length < 1) {
    setSubmitText("It looks like you filled out too many fields!");
  } else {
    const filledOutElements = validFormElements
      .filter(elem => !!elem.value)
      .map(
        element =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value)
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: filledOutElements
    })
      .then(res => {
        setSubmitText("Submitted!");
        return Promise.resolve();
      })
      .catch(_ => {
        setSubmitText(
          `Failed to submit, try emailing me:  <a href="mailto: sheila@shielaanne.com">sheila@sheilaanne.com </a>`
        );
      });
  }
};

export const ContactForm = () => {
  const [submitText, setSubmitText] = useState("Send!");
  return (
    <FormWrapperSection alignItems="flex-start">
      <h1>Contact Sheila Anne</h1>
      <p>
        Drop me a little note by filling out the form below, I'd love to hear
        from you. Alternatively, feel free to reach out to me by email:{" "}
        <a href="mailto: sheila@shielaanne.com">sheila@sheilaanne.com </a>!
      </p>
      <form
        id="#contact"
        name="contact-sheila"
        method="POST"
        data-netlify="true"
        onSubmit={e => onSubmit(e, setSubmitText)}
      >
        <p style={{ display: "none" }}>
          <label htmlFor="bot-field">
            Don’t fill this out if you expect to hear from us!
            <input id="bot-field" name="bot-field" value="" readOnly={true} />
          </label>
        </p>
        <Input
          style={{ display: "none" }}
          name="form-name"
          value="contact-sheila"
          readOnly={true}
        />
        <p>
          <label htmlFor="name">
            Your Name:{" "}
            <Input type="text" id="name" name="name" required={true} />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your Email:{" "}
            <Input type="email" id="email" name="email" required={true} />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:{" "}
            <TextArea required={true} id="message" name="message"></TextArea>
          </label>
        </p>
        <Submit name="SendMessage" type="submit">
          <div dangerouslySetInnerHTML={{ __html: submitText }} />
        </Submit>
      </form>
    </FormWrapperSection>
  );
};
