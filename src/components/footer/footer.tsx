import React from "react";
import styled from "styled-components";

import sheilaLogo from "../../img/sheilaLogo.svg";

import { Constants } from "../../constants";
import { FooterColumn } from "./footer-column";
import { FooterImage } from "./footer-image";
import { SmartLink } from "../smart-link";
import { FooterSocial } from "./footer-social";

const StyledFooter = styled.footer`
  background-color: #2b2523;
  color: #f5f5f5;
  text-align: center;
`;

const FlexFooter = styled.div`
  display: flex;
`;

const FooterList = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
`;

const FooterLink = styled(SmartLink)`
  color: white;
  display: block;
  padding: 5px;
  :hover {
    border-radius: 1rem;
    background-color: #fafafa;
    color: #2b2523;
  }
`;

const StyledListItem = styled.li`
  max-width: 30%;
  text-align: center;

  @media (max-width: ${Constants.mobileWidth}) {
    max-width: 100%;
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterImage
      src={sheilaLogo}
      alt="Sheila Anne"
      style={{ width: "14em", height: "10em" }}
    />
    <FlexFooter>
      <FooterColumn>
        <FooterList>
          <StyledListItem>
            <FooterLink to="/">Home</FooterLink>
          </StyledListItem>
          <StyledListItem>
            <FooterLink to="/about/">About</FooterLink>
          </StyledListItem>
        </FooterList>
      </FooterColumn>
      <FooterColumn>
        <FooterList>
          <StyledListItem>
            <FooterLink to="/writing-desk/">Latest Stories</FooterLink>
          </StyledListItem>
          <StyledListItem>
            <FooterLink to="/contact/">Contact</FooterLink>
          </StyledListItem>
        </FooterList>
      </FooterColumn>
      <FooterSocial />
    </FlexFooter>
  </StyledFooter>
);

export { Footer };
