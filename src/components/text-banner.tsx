import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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

const clickHandler = (setIsShown: Dispatch<SetStateAction<boolean>>) => {
  setIsShown(false);
  window.sessionStorage.setItem(Constants.textBannerKey, "1");
};

export const BannerText = () => {
  const [isShown, setIsShown] = useState(true);
  useEffect(() => {
    const isDismissed = window.sessionStorage.getItem(Constants.textBannerKey);
    if (isDismissed === "1") {
      setIsShown(false);
    }
  }, []);
  return isShown ? (
    <BannerDiv>
      <Text>
        <UnderlineLink
          aria-label={"Click to sign up for the Pathfinder freebie"}
          onClick={() => clickHandler(setIsShown)}
          to="/pathfinder/"
          title="Pathfinder freebie"
        >
          Sign up to receive my free Pathfinder kit!
        </UnderlineLink>
      </Text>
      <CloseButton onClick={() => clickHandler(setIsShown)} title="Close">
        X
      </CloseButton>
    </BannerDiv>
  ) : null;
};
