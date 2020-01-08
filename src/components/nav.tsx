import React, { FC, useState } from "react";
import styled from "styled-components";

import { Burger } from "./burger";
import { Constants } from "../constants";
import { InternalLink } from "./internal-link";
import { useWindow } from "../hooks/useWindow";

type NavProps = {
  location: Location;
};

type NavHeaderProps = NavProps & {
  isMobile: boolean;
};

const CenteredText = styled.div<{ isOpen: boolean; isMobile: boolean }>`
  background: ${({ isOpen, isMobile }) =>
    isOpen && isMobile ? Constants.Colors.blue : "inherit"};

  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen, isMobile }) =>
    isOpen && isMobile ? "translateX(-16%)" : ""};
  padding-top: 5px;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  left: 0;
  letter-spacing: 0.1em;
  justify-content: center;
  position: sticky;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const StyledNav = styled.nav`
  background-color: #fff;
  width: 100%;

  @media (max-width: ${Constants.mobileWidth}) {
    height: 50px;
  }
`;

const SideLinkWrapper = styled.div<{ location: Location; to: string }>`
  ${({ location, to }) =>
    location && location.pathname === to
      ? `color: ${Constants.Colors.darkBlue};`
      : ""}
  display: inline;
  font-family: Inria Serif;
  font-weight: 500;
  font-size: 18px;

  padding: 0 0 0 15px;

  @media (max-width: ${Constants.mobileWidth}) {
    padding: 0 0 0 5px;
  }
`;

const Headline = styled.h1`
  display: block;
  font-size: 45px;
  font-weight: 100;
  margin: 5px 0;

  :hover {
    color: ${Constants.Colors.gray};
  }

  @media (max-width: ${Constants.mobileWidth}) {
    font-size: 35px;
    margin: 0;
    padding: 5px;
  }
`;

const NavLinkList = styled.ol<{ isOpen?: boolean; show?: boolean }>`
  list-style-type: none;
  margin: 0;

  @media (max-width: ${Constants.mobileWidth}) {
    display: ${({ isOpen, show }) =>
      show && isOpen && show ? "block" : "none"};
  }
`;

const NavListItem = styled.li`
  display: inline;
  margin-bottom: 0;
  padding-top: 10px;
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  background: ${Constants.Colors.blue};
  height: 100vh;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  padding: 0.5rem;
  position: relative;
  bottom: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(50%)")};

  @media (max-width: ${Constants.mobileWidth}) {
    width: 100%;
  }

  ${InternalLink} {
    display: block;
    padding: 0.5rem 0;
    font-weight: bold;
    color: ${Constants.Colors.navLinkText};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${Constants.mobileWidth}) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

const getNavLinkItems = (location: Location, show = false) => {
  const navLinks = [
    {
      to: "/the-grove/",
      text: "The Grove",
      title: "Life coaching help from Sheila Anne"
    },
    {
      to: "/blog/",
      text: "Writing Desk",
      title: "Writing samples from Sheila Anne"
    },

    { to: "/about/", text: "About", title: "About Sheila Anne" }
  ];
  show &&
    location.pathname !== "/" &&
    navLinks.push({ to: "/", text: "HOME", title: "Sheila Anne" });
  return navLinks.map(navLink => (
    <NavListItem key={navLink.to}>
      <SideLinkWrapper location={location} to={navLink.to}>
        <InternalLink
          to={navLink.to}
          aria-current={location && location.pathname === navLink.to}
          title={navLink.title}
        >
          {navLink.text}{" "}
        </InternalLink>
      </SideLinkWrapper>{" "}
    </NavListItem>
  ));
};

const NavHeader: FC<NavHeaderProps> = ({ location, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <StyledNav>
        <CenteredText isMobile={isMobile} isOpen={isOpen}>
          <Headline>
            <InternalLink
              aria-label="Sheila Anne logo, click to visit homepage"
              color={
                isOpen && isMobile ? Constants.Colors.lightestBlue : undefined
              }
              title={`Sheila Anne homepage`}
              to="/"
            >
              Sheila Anne
            </InternalLink>
          </Headline>
        </CenteredText>
        {isMobile ? (
          <>
            <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
            <MobileMenu isOpen={isOpen} aria-hidden={!isMobile}>
              <NavLinkList
                id="mobileNavLinks"
                show={isMobile}
                isOpen={isOpen}
                aria-current={isOpen}
              >
                {getNavLinkItems(location, isMobile)}
              </NavLinkList>{" "}
            </MobileMenu>
          </>
        ) : null}
        {isMobile ? null : (
          <NavLinkList id="desktopNavLinks">
            {getNavLinkItems(location)}
          </NavLinkList>
        )}
      </StyledNav>
    </Header>
  );
};

const Nav: FC<NavProps> = ({ location }) => {
  const { isMobile } = useWindow();
  return <NavHeader location={location} isMobile={isMobile} />;
};

export { Nav };
