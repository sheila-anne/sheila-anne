import React, { FC } from "react";
import styled from "styled-components";

import { Footer } from "./footer";
import { Nav } from "./nav";
import { maxPageWidth, rhythm } from "../utils/";
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
  max-width: ${maxPageWidth};
  padding: ${rhythm(1 / 2)} ${rhythm(3 / 4)};
  z-index: 100;
  height: 100%;
  max-height: 100%;

  & > * li {
    &:before {
      content: "";
      display: inline-block;
      height: 1rem;
      width: 1rem;
      background-image: initial;
      background-image: url(/img/pine-tree.svg);
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 0.5rem;
    }
  }
`;

const Layout: FC<GatsbyPage> = ({ children, location, itemType }) => {
  useScrollHandler(location);
  return (
    <>
      <Nav location={location} />
      <MainWrapper
        itemType={itemType}
        itemScope={!!itemType ? true : undefined}
      >
        {children}
      </MainWrapper>
      <Footer />
    </>
  );
};

export { Layout };
