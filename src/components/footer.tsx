import React from "react";
import styled from "styled-components";

import { InternalLink } from "./internal-link";
import sheilaLogo from "../img/sheilaLogo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const StyledFooter = styled.footer`
  background-color: #2b2523;
  color: #f5f5f5;
  text-align: center;
`;

const FlexFooter = styled.div`
  display: flex;
`;

const FooterColumn = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
  width: 33.33%;
`;

const FooterList = styled.ul`
  list-style: none;
  text-align: left;
`;

const FooterNavItem = styled.a`
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  color: #f5f5f5;
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

const FooterLink = styled(InternalLink)`
  display: block;
  :hover {
    background-color: #fafafa;
    color: #2b2523;
  }
`;

const FooterImage = styled.img`
  margin-bottom: -0.2rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterImage
        src={sheilaLogo}
        alt="Sheila Anne"
        style={{ width: "14em", height: "10em" }}
      />
      <FlexFooter>
        <FooterColumn>
          <FooterList>
            <li>
              <FooterLink to="/">Home</FooterLink>
            </li>
            <li>
              <FooterLink to="/about">About</FooterLink>
            </li>
            <li>
              <FooterLink to="/products">Products</FooterLink>
            </li>
            <li>
              <FooterLink to="/contact/examples">Form Examples</FooterLink>
            </li>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterList>
            <li>
              <FooterLink to="/blog">Latest Stories</FooterLink>
            </li>
            <li>
              <FooterLink to="/contact">Contact</FooterLink>
            </li>
          </FooterList>
        </FooterColumn>
        <SocialFooterColumn>
          <FooterNavItem title="facebook" href="https://facebook.com">
            <FooterImage
              src={facebook}
              alt="Facebook"
              style={{ width: "1em", height: "1em" }}
            />
          </FooterNavItem>
          <FooterNavItem title="instagram" href="https://instagram.com">
            <FooterImage
              src={instagram}
              alt="Instagram"
              style={{ width: "1em", height: "1em", maxWidth: "100%" }}
            />
          </FooterNavItem>
        </SocialFooterColumn>
      </FlexFooter>
    </StyledFooter>
  );
};

export { Footer };
