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

export const SocialWrapper = styled.div<{ dontShow?: boolean }>`
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
  @media (max-width: ${Constants.mobileWidth}) {
    margin-right: 0;
  }
`;

export const FixedSocialItems = () => (
  <>
    {SocialItems.map(socialItem => (
      <SocialLink
        key={socialItem.url}
        title={socialItem.title}
        to={socialItem.url}
      >
        <SocialImage src={socialItem.image} alt={socialItem.title} />
      </SocialLink>
    ))}
  </>
);

export const Social = () => (
  <SocialWrapper>
    <FixedSocialItems />
    <SocialLink title="Contact Sheila Anne" to="/contact/">
      <Emoji symbol={`\u2709`} label="Contact Sheila Anne" />
    </SocialLink>
  </SocialWrapper>
);
