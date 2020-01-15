import React from "react";
import styled from "styled-components";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

import { FooterImage } from "./footer/";
import { SmartLink } from "./smart-link";

const FooterNavItem = styled(SmartLink)`
  cursor: pointer;
  border-radius: 2px;
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
    <FooterNavItem title="Sheila Anne on Facebook" to="https://facebook.com">
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
  </SocialDiv>
);
