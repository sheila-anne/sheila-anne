import React from "react";
import styled from "styled-components";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

import { Constants } from "../constants";
import { FooterImage } from "./footer/";
import { SmartLink } from "./smart-link";
import { Emoji } from "./emoji";

const FooterNavItem = styled(SmartLink)`
  color: #000;
  border-radius: 2px;
  cursor: pointer;
  display: block;
  padding: 0.75rem;
  text-decoration: none;
`;

const SocialDiv = styled.div`
  ${FooterNavItem} {
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: #f5f5f5;
    margin: 0.5rem;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    display: inline;
  }
`;

export const Social = () => (
  <SocialDiv>
    <FooterNavItem
      title={Constants.social.facebookTitle}
      to={Constants.social.facebook}
    >
      <FooterImage src={facebook} alt={Constants.social.facebookTitle} />
    </FooterNavItem>
    <FooterNavItem
      title={Constants.social.instagramTitle}
      to={Constants.social.instagram}
    >
      <FooterImage src={instagram} alt={Constants.social.instagramTitle} />
    </FooterNavItem>
    <FooterNavItem title="Contact Sheila Anne" to="/contact/">
      <Emoji symbol={`\u2709`} label="Email" />
    </FooterNavItem>
  </SocialDiv>
);
