import React, { FC } from "react";
import styled from "styled-components";

import { Footer } from "./footer";
import { Nav } from "./nav";
import { rhythm } from "../utils/typography";
import { useScrollHandler } from "../hooks/useScrollHandler";

const MainWrapper = styled.main`
  @font-face {
    font-family: "Inria Serif";
    font-display: fallback;
    src: local("InriaSerif"),
      url("/Fonts/InriaSerif/InriaSerif.woff2") format("woff2");
  }

  @font-face {
    font-family: "Montserrat";
    font-display: fallback;
    src: local("Montserrat"),
      url("/Fonts/Montserrat/Montserrat.woff2") format("woff2");
    font-weight: 400;
  }

  margin: 0 auto;
  max-width: ${rhythm(50)};
  padding: ${rhythm(0.5)} ${rhythm(3 / 4)};
  z-index: 100;
`;

const Layout: FC<GatsbyPage> = ({ children, location }) => {
  useScrollHandler(location);
  return (
    <>
      <Nav location={location} />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
};

export { Layout };