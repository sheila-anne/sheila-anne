import React from "react";
import styled from "styled-components";

import facebook from "../../img/social/facebook.svg";
import instagram from "../../img/social/instagram.svg";

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
    <FooterNavItem title="Facebook" to="https://facebook.com">
      <FooterImage
        src={facebook}
        alt="Facebook"
        style={{ width: "1em", height: "1em" }}
      />
    </FooterNavItem>
    <FooterNavItem
      title="Follow Sheila Anne on Instagram"
      to="https://instagram.com/shetravls"
    >
      <FooterImage
        src={instagram}
        alt="Instagram"
        style={{ width: "1em", height: "1em", maxWidth: "100%" }}
      />
    </FooterNavItem>
  </SocialFooterColumn>
);
