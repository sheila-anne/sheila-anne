import React, { useState } from "react";
import styled from "styled-components";

import { applyStyle } from "../utils";
import { Burger } from "./burger";
import { Constants } from "../constants";
import { Social } from "./social";
import { SmartLink } from "./smart-link";
import { useWindow } from "../hooks/useWindow";

type NavProps = {
  location: Location;
};

type NavHeaderProps = NavProps & MobileNavProps;

type OpenNavProps = {
  isOpen?: boolean;
};

type MobileNavProps = {
  isMobile: boolean;
};

type OpenAndMobile = OpenNavProps & MobileNavProps;

const ColoredInternalLink = styled(SmartLink)<{
  "aria-current"?: boolean;
}>`
  ${props => !!props["aria-current"] && "border: 1px solid #fff; border-radius: 5rem;"}
`;

const LogoText = styled.div.withConfig<OpenAndMobile>({
  shouldForwardProp: prop => prop !== "isOpen" && prop !== "isMobile",
})`
  background: ${({ isOpen, isMobile }) => (!!isOpen && !!isMobile ? Constants.Colors.theGroveGreen : "inherit")};
  flex-basis: 33%;
  padding-top: 5px;
  margin: 0 -2rem 0 2rem;

  @media (max-width: ${Constants.mobileWidth}) {
    flex-basis: 100%;
    height: 50px;
    max-width: 90%;
  }
`;

const DesktopSocialWrapper = styled.div.withConfig<OpenNavProps>({
  shouldForwardProp: prop => prop !== "isOpen",
})`
  display: flex;
  flex-basis: 33%;
  align-self: center;
  justify-content: flex-end;

  @media (max-width: ${Constants.mobileWidth}) {
    ${({ isOpen }) => applyStyle("display", !!isOpen ? "block" : "none")}
  }
`;

const Header = styled.header.withConfig<{ flipColors: boolean }>({ shouldForwardProp: prop => prop !== "flipColors" })`
  left: 0;
  letter-spacing: 0.1em;
  position: sticky;
  top: 0;
  z-index: 1000;

  ${ColoredInternalLink} {
    ${({ flipColors }) => applyStyle("color", !!flipColors ? "#FFF" : "inherit")}
  }
`;

const StyledNav = styled.nav.withConfig<OpenNavProps>({
  shouldForwardProp: prop => prop !== "isOpen",
})`
  align-items: center;
  background-color: ${({ isOpen }) => (!!isOpen ? Constants.Colors.theGroveGreen : "#FFF")};
  display: flex;
  height: 75px;
  justify-content: center;

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
  }
`;

const SideLinkWrapper = styled.div<{ location: Location; to: string }>`
  ${({ location, to }) => (location && location.pathname === to ? `color: ${Constants.Colors.theGroveGreen};` : "")}
  display: inline;
  font-family: Inria Serif;
  font-weight: 500;
  font-size: 18px;

  padding: 0 0 0 15px;

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
  }
`;

const Headline = styled.h1`
  font-size: 45px;
  font-weight: 100;
  margin: 5px 2rem 0 0;

  :hover {
    color: ${Constants.Colors.gray};
  }

  @media (max-width: ${Constants.mobileWidth}) {
    font-size: 35px;
    padding: 0;
  }
`;

const NavLinkList = styled.ol.withConfig<OpenNavProps>({
  shouldForwardProp: prop => prop !== "isOpen",
})`
  flex-basis: 33%;
  list-style-type: none;
  margin: 0;

  @media (max-width: ${Constants.mobileWidth}) {
    ${({ isOpen }) => applyStyle("display", !!isOpen ? "block" : "none")}
    flex-basis: 100%;
  }
`;

const NavSocialList = styled.div.withConfig<OpenNavProps>({ shouldForwardProp: prop => prop !== "isOpen" })`
  @media (max-width: ${Constants.mobileWidth}) {
    ${({ isOpen }) => applyStyle("display", !!isOpen ? "block" : "none")}
  }
`;

const NavListItem = styled.li`
  display: inline;
  margin-bottom: 0;
  padding-top: 10px;
`;

const MobileMenu = styled.div.withConfig<OpenNavProps>({ shouldForwardProp: prop => prop !== "isOpen" })`
  background: ${Constants.Colors.theGroveGreen};
  border: 1px solid ${Constants.Colors.theGroveGreen};
  height: 100vh;
  padding: 0.5rem;
  position: relative;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translate(0,0)" : "translate(0, -150%)")};

  ${ColoredInternalLink} {
    display: block;
    font-weight: bold;
    padding: 0.5rem 0;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${Constants.mobileWidth}) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

const getNavLinkItems = (
  location: Location,
  isOpen = false,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const navLinks = [
    { to: "/about/", text: "About Me", title: "About Sheila Anne" },
    { to: "/nourish/", text: "Nourish", title: "A whole-person group coaching program" },
    {
      to: "/working-together/",
      text: "Working Together",
      title: "Life coaching help from Sheila Anne",
    },
    {
      to: "/writing-desk/",
      text: "Blog",
      title: "Writing samples from Sheila Anne",
    },
    { to: "/events/", text: "Events", title: "Upcoming events with Sheila Anne" },
    { to: "#subscribeForm", text: "Subscribe", title: "Join the community!" },
    { to: "/corporate-wellness/", text: "Corporate Wellness", title: "Corporate Wellness offerings" },
  ];
  !!isOpen && location.pathname !== "/" && navLinks.push({ to: "/", text: "Home", title: "Sheila Anne" });
  return navLinks.map(navLink => (
    <NavListItem
      key={navLink.to}
      itemType="https://schema.org/SiteNavigationElement"
      itemScope={true}
      role="presentation"
    >
      <SideLinkWrapper location={location} to={navLink.to}>
        <ColoredInternalLink
          // if you're in the mobile-menu, some links are links;
          // some are page references. close the menu if the setState handler
          // is passed in to show relative page refs
          onClick={() => setIsOpen && setIsOpen(!isOpen)}
          aria-current={location && location.pathname === navLink.to}
          ariaLabel={navLink.title}
          role="menuitem"
          title={navLink.title}
          to={navLink.to}
        >
          {navLink.text}
        </ColoredInternalLink>
      </SideLinkWrapper>
    </NavListItem>
  ));
};

const NavHeader = ({ location, isMobile }: NavHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header flipColors={!!isOpen && !!isMobile}>
      <StyledNav isOpen={isOpen} role="navigation">
        <LogoText isMobile={isMobile} isOpen={isOpen}>
          <Headline itemType="https://schema.org/SiteNavigationElement" itemScope={true}>
            <ColoredInternalLink
              ariaLabel="Sheila Anne logo, click to visit homepage"
              title={`Sheila Anne homepage`}
              to="/"
            >
              Sheila Anne
            </ColoredInternalLink>
          </Headline>
        </LogoText>
        {!!isMobile ? (
          <>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu aria-expanded={!!isOpen ? true : undefined} aria-hidden={!isOpen} isOpen={isOpen}>
              <NavLinkList aria-current={isOpen} isOpen={isOpen} role="menubar">
                {getNavLinkItems(location, isMobile && isOpen, setIsOpen)}
              </NavLinkList>
              <NavSocialList isOpen={isOpen}>
                <Social />
              </NavSocialList>
            </MobileMenu>
          </>
        ) : (
          <>
            <NavLinkList role="menubar">{getNavLinkItems(location)}</NavLinkList>
            <DesktopSocialWrapper isOpen={isMobile}>
              <Social />
            </DesktopSocialWrapper>
          </>
        )}
      </StyledNav>
    </Header>
  );
};

export const Nav = ({ location }: NavProps) => {
  const { isMobile } = useWindow();
  return <NavHeader location={location} isMobile={isMobile} />;
};
