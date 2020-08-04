import React, { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import { SmartLink } from "./smart-link";

const BannerDiv = styled.div`
  align-items: center;
  background-color: ${Constants.Colors.theGroveGreenGray};
  border: 1px solid ${Constants.Colors.theGroveGreenGray};
  display: flex;
  height: 50px;
  justify-content: center;

  @media (max-width: ${Constants.mobileWidth}) {
    height: 75px;
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

export const BannerText = () => {
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    const isDismissed = window.sessionStorage.getItem(Constants.textBannerKey);
    if (isDismissed === TRUE_SESSION_VALUE) {
      setIsShown(false);
    }
  }, []);

  const innerHandler = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement, globalThis.MouseEvent>) => {
    clickHandler(setIsShown);
  };
  return isShown ? (
    <BannerDiv>
      <Text>
        <UnderlineLink
          aria-label={"Click to sign up for the Pathfinder freebie"}
          onClick={innerHandler}
          to="/pathfinder/"
          title="Pathfinder freebie"
        >
          Sign up to receive my free Pathfinder kit!
        </UnderlineLink>
      </Text>
      <CloseButton onClick={innerHandler} title="Close">
        X
      </CloseButton>
    </BannerDiv>
  ) : null;
};
