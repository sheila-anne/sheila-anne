import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

import { Constants } from "../constants";

type BurgerProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StyledBurger = styled.button<{ isOpen: boolean }>`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
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
    background: ${Constants.Colors.navLinkText};
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
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: ${Constants.mobileWidth}) {
    display: flex;
    height: 35px;
  }
`;

const Burger: FC<BurgerProps> = ({ isOpen, setIsOpen }) => (
  <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export { Burger };
