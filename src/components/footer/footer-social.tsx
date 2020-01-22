import React from "react";
import styled from "styled-components";

import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";

import { Constants } from "../../constants";
import { FooterImage } from "./footer-image";
import { FooterColumn } from "./footer-column";
import { SmartLink } from "../smart-link";

const FooterNavItem = styled(SmartLink)`
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  display: block;
  padding: 0.75rem;
  text-decoration: none;
`;

const SocialFooterColumn = styled(FooterColumn)`
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

export const FooterSocial = () => (
  <SocialFooterColumn>
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
  </SocialFooterColumn>
);
