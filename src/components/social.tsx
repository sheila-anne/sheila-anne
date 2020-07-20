import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import facebookImg from "../img/social/facebook.svg";
import { FocusCss } from "./button";
import instagramImg from "../img/social/instagram.svg";
import { SmartLink } from "./smart-link";

type SocialLinks = {
  image: string;
  url: string;
  title: string;
};

const SocialImage = styled.img`
  height: 1em;
  margin-bottom: -0.2rem;
  width: 1em;
`;

const SocialLink = styled(SmartLink)`
  color: #000;
  cursor: pointer;
  display: block;
  padding: 0.75rem;
  text-decoration: none;

  ${FocusCss}
  :focus {
    outline: none;
  }
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

const socialQuery = graphql`
  query socialMedia {
    site {
      siteMetadata {
        social {
          facebook
          instagram
        }
      }
    }
  }
`;

const SocialItem = (item: SocialLinks) => (
  <SocialLink ariaLabel={item.title} key={item.url} title={item.title} to={item.url}>
    <SocialImage src={item.image} alt={item.title} />
  </SocialLink>
);

export const FixedSocialItems = () => {
  const {
    site: {
      siteMetadata: {
        social: { facebook, instagram },
      },
    },
  } = useStaticQuery(socialQuery);

  return (
    <>
      <SocialItem title="Follow Sheila Anne on Facebook" image={facebookImg} url={facebook} />
      <SocialItem title="Follow Sheila Anne on Instagram" image={instagramImg} url={instagram} />
    </>
  );
};

export const Social = () => {
  return (
    <SocialWrapper>
      <FixedSocialItems />
      <span itemType="https://schema.org/SiteNavigationElement" itemScope={true}>
        <SocialLink
          ariaLabel="Book Your Free Life Coaching Session With Sheila Anne"
          title="Book Your Free Life Coaching Session With Sheila Anne"
          to="/book/"
        >
          Book
        </SocialLink>
      </span>
    </SocialWrapper>
  );
};
