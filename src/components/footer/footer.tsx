import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

// @ts-ignore
import sheilaLogo from "../../img/sheilaLogo.svg";

import { Constants } from "../../constants";
import { SmartLink } from "../smart-link";
import { FooterSocial } from "./footer-social";
import { SubscribeForm } from "../forms";

const StyledFooter = styled.footer`
  background-color: ${Constants.Colors.theGroveGreen};
  color: #f5f5f5;
  text-align: center;
`;

const FooterGatsbyImage = styled(GatsbyImage)`
  margin-right: 1rem;
`;

const FlexFooter = styled.div<{ margin?: string }>`
  align-items: center;
  display: flex;
  justify-content: center;
  ${({ margin }) => !!margin && `margin: ${margin};`}
`;

const FooterColumn = styled.div`
  padding: 0.75rem;
  width: 33.33%;
`;

const FooterImage = styled.img`
  height: 1em;
  margin-bottom: -2.5rem;
  width: 1em;
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

const footerQuery = graphql`
  query footerInfo {
    pccImage: file(relativePath: { eq: "pcc-logo.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 75
          width: 75
          quality: 100
          placeholder: BLURRED
          formats: [AUTO, WEBP, JPG]
          layout: FIXED
        )
      }
    }
    wpccImage: file(relativePath: { eq: "whole-person-certified.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 75
          width: 75
          quality: 100
          placeholder: BLURRED
          formats: [AUTO, WEBP, JPG]
          layout: FIXED
        )
      }
    }

    ticImage: file(relativePath: { eq: "trauma-informed-coach.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 75
          width: 75
          quality: 100
          placeholder: BLURRED
          formats: [AUTO, WEBP, JPG]
          layout: FIXED
        )
      }
    }
  }
`;

export const Footer = () => {
  const { pccImage, wpccImage, ticImage } = useStaticQuery<{
    pccImage: IGatsbyImageData;
    wpccImage: IGatsbyImageData;
    ticImage: IGatsbyImageData;
  }>(footerQuery);
  return (
    <StyledFooter>
      <FooterImage src={sheilaLogo} alt="Sheila Anne" style={{ width: "14em", height: "10em" }} />
      <FlexFooter margin="0 0 .5rem 0">
        <FooterGatsbyImage
          alt="ICF Professional Certified Coach"
          image={getImage(pccImage) as IGatsbyImageData}
          itemProp="image"
          title="ICF Professional Certified Coach"
        />
        <FooterGatsbyImage
          alt="Whole Person Certified Coach"
          image={getImage(wpccImage) as IGatsbyImageData}
          itemProp="image"
          title="Whole Person Certified Coach"
        />
        <FooterGatsbyImage
          alt="Trauma Informed Coach"
          image={getImage(ticImage) as IGatsbyImageData}
          itemProp="image"
          title="Trauma Informed Coach"
        />
      </FlexFooter>
      <FlexFooter>
        <SubscribeForm />
      </FlexFooter>
      <FlexFooter>
        <FooterColumn>
          <FooterList>
            <StyledListItem>
              <FooterLink to="/">Home</FooterLink>
            </StyledListItem>
            <StyledListItem>
              <FooterLink to="/about/">About</FooterLink>
            </StyledListItem>
            <StyledListItem>
              <FooterLink to="/media/">Media</FooterLink>
            </StyledListItem>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterList>
            <StyledListItem>
              <FooterLink to="/writing-desk/">Latest Stories</FooterLink>
            </StyledListItem>
            <StyledListItem itemType="https://schema.org/SiteNavigationElement" itemScope={true}>
              <FooterLink to="/contact/">Contact</FooterLink>
            </StyledListItem>
          </FooterList>
        </FooterColumn>
        <FooterSocial />
      </FlexFooter>
    </StyledFooter>
  );
};
