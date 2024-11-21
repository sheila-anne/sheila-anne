import React, { Dispatch, MouseEvent, SetStateAction, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import { SmartLink } from "./smart-link";
import { hasWindow } from "../utils";

type TextBannerProps = {
  path: string;
};

const BannerDiv = styled.div`
  align-items: center;
  background-color: ${Constants.Colors.theGroveGreenGray};
  border: 1px solid ${Constants.Colors.theGroveGreenGray};
  display: flex;
  height: 50px;
  justify-content: center;

  @media (max-width: ${Constants.mobileWidth}) {
    height: min-content;
  }
`;

const CloseButton = styled.button`
  background-color: ${Constants.Colors.theGroveGreenGray};
  border: 1px solid ${Constants.Colors.navLinkText};
  cursor: pointer;
  margin-right: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    flex: 10%;
  }
`;

const Text = styled.div`
  margin: auto;

  @media (max-width: ${Constants.mobileWidth}) {
    flex: 80%;
    overflow: hidden;
    padding: 0.5rem 3rem;
  }
`;

const UnderlineLink = styled(SmartLink)`
  text-decoration: underline;
`;

const TRUE_SESSION_VALUE = "1";

const clickHandler = (setIsShown: Dispatch<SetStateAction<boolean>>) => {
  setIsShown(false);
  window.sessionStorage.setItem(Constants.textBannerKey, TRUE_SESSION_VALUE);
};

const NoShowValue = "freebie";

const InnerBanner = ({ path }: TextBannerProps) => {
  const useIsomorphicLayoutEffect = hasWindow ? useLayoutEffect : useEffect;
  const [isShown, setIsShown] = useState(true);
  useIsomorphicLayoutEffect(() => {
    const isDismissed = window.sessionStorage.getItem(Constants.textBannerKey);
    if (isDismissed === TRUE_SESSION_VALUE || (path && path.includes(NoShowValue))) {
      clickHandler(setIsShown);
    }
  }, [path]);

  const innerHandler = (_: MouseEvent<HTMLAnchorElement | HTMLButtonElement, globalThis.MouseEvent>) => {
    clickHandler(setIsShown);
  };
  const bannerText = `Flow State | 4 Weeks of fluid transformation | Early bird pricing available until 12.12.24 | Join Now!`;
  return isShown ? (
    <BannerDiv>
      <Text>
        <UnderlineLink
          aria-label={bannerText}
          onClick={innerHandler}
          to="https://sheila-anne.mykajabi.com/flow-state"
          title={bannerText}
        >
          {bannerText}
        </UnderlineLink>
      </Text>
      <CloseButton onClick={innerHandler} title="Close">
        X
      </CloseButton>
    </BannerDiv>
  ) : null;
};

export const BannerText = ({ path }: TextBannerProps) => {
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    setIsShown(true);
  }, []);

  return isShown ? <InnerBanner path={path} /> : null;
};
