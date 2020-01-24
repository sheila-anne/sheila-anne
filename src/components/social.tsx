import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import { Emoji } from "./emoji";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import { SmartLink } from "./smart-link";

type SocialLinks = {
  image: string;
  url: string;
  title: string;
};

const SocialItems = [
  {
    image: facebook,
    title: "Follow Sheila Anne on Facebook",
    url: "https://facebook.com/sheilaannecoaching"
  },
  {
    image: instagram,
    title: "Follow Sheila Anne on Instagram",
    url: "https://instagram.com/shetravls"
  }
] as SocialLinks[];

const SocialImage = styled.img`
  height: 1em;
  margin-bottom: -0.2rem;
  width: 1em;
`;

const SocialLink = styled(SmartLink)`
  color: #000;
  border-radius: 2px;
  cursor: pointer;
  display: block;
  padding: 0.75rem;
  text-decoration: none;
`;

export const SocialWrapper = styled.ul`
  align-self: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 2rem;

  ${SocialLink} {
    background-color: #fff;
    border-radius: 1rem;
    display: inline;
    height: 1rem;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 1rem;
  }
`;

export const FixedSocialItems = () =>
  SocialItems.map(socialItem => (
    <li>
      <SocialLink
        key={socialItem.url}
        title={socialItem.title}
        to={socialItem.url}
      >
        <SocialImage src={socialItem.image} alt={socialItem.title} />
      </SocialLink>
    </li>
  ));

export const Social = ({ id }: { id?: string }) => (
  <SocialWrapper id={id}>
    {FixedSocialItems()}
    <li>
      <SocialLink title="Contact Sheila Anne" to="/contact/">
        <Emoji symbol={`\u2709`} label="Contact Sheila Anne" />
      </SocialLink>
    </li>
  </SocialWrapper>
);
