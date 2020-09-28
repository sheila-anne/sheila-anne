import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { Constants } from "../constants";
import { trackFacebook } from "../utils";

type BurgerProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StyledBurger = styled.button<{ isOpen: boolean }>`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  outline: none;
  padding: 0;
  position: absolute;
  right: calc(1.5vh);
  top: calc(2vh);
  width: 2rem;
  z-index: 10;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ isOpen }) => (!!isOpen ? "#FFF" : Constants.Colors.navLinkText)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      height: ${({ isOpen }) => !!isOpen && "0"};
      transform: ${({ isOpen }) => (isOpen ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const onClick = (isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>) => {
  const newOpenValue = !isOpen;
  setIsOpen(newOpenValue);
  const args = {
    action: "navigation",
    category: `Mobile Menu`,
    label: `Toggle ${newOpenValue ? "closed" : "open"}`,
  };
  trackCustomEvent(args);
  trackFacebook({ eventType: "trackCustom", eventName: "Menu Interaction", params: args });
};

export const Burger = ({ isOpen, setIsOpen }: BurgerProps) => (
  <StyledBurger aria-haspopup={true} isOpen={isOpen} onClick={() => onClick(isOpen, setIsOpen)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);
