import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";

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
`;

const SubscribeInput = styled.input`
  background-color: ${Constants.Colors.featuredPost};

  @media (max-width: ${Constants.mobileWidth}) {
    margin-left: 1rem;
  }
`;

const ContactUsSection = styled.div`
  margin: 1rem auto;
  text-align: center;

  & > * ${SubscribeInput} {
    display: block;
    border: 1px solid ${Constants.Colors.gray};
    border-radius: 5px;
  }
`;

const SubscribeForm = () => {
  return (
    <ContactUsSection>
      <h2>Let's get to know one another</h2>
      <p>Don't wait to change your life, connect with me today.</p>
      <form
        id="#contact-sheila"
        name="contact-sheila"
        data-netlify="true"
        onSubmit={e => console.log}
      >
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out.
            <input name="bot-field" value="" readOnly />
          </label>
        </p>
        <SubscribeInput
          style={{ display: "none" }}
          name="form-name"
          value="contact-sheila"
          readOnly={true}
        />
        <p>
          <SubscribeInput
            type="text"
            id="name"
            name="name"
            defaultValue="Name"
            required={true}
          />
        </p>
        <p>
          <SubscribeInput
            type="email"
            id="email"
            defaultValue="Email"
            name="email"
            required={true}
          />
        </p>
        <Submit name="SendMessage" type="submit">
          <SubmitSpan>Sign me up!</SubmitSpan>
        </Submit>
      </form>
    </ContactUsSection>
  );
};

export { SubscribeForm };
