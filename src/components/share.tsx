import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";

type ShareNavigator = typeof navigator & {
  share?: (shareProps: ShareProps) => Promise<any>;
};
type ShareProps = {
  title: string;
  url: string;
};

const ShareButton = styled.button`
  background-color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  text-decoration: none;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 1rem 0;
  }
`;

const shareNav = typeof navigator !== "undefined" && (navigator as ShareNavigator);

const hasShare = !!shareNav && !!shareNav.share;

const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const title = document.title;
  const url = (document.querySelector("link[rel=canonical]") as HTMLAnchorElement)?.href ?? document.location.href;

  if (!!shareNav && !!shareNav.share) {
    shareNav
      .share({
        title,
        url,
      })
      .catch();
  }
};

export const Share = () => {
  if (!hasShare) {
    return null;
  }

  return (
    <ShareButton onClick={e => onClick(e)}>
      <span role="img" aria-label="share">
        📤
      </span>{" "}
      Share!
    </ShareButton>
  );
};
