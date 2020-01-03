import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

import { Constants } from "../constants";

type BurgerProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const StyledBurger = styled.button<{ isOpen: boolean }>`
  align-items: center;
  position: absolute;
  top: 28%;
  left: 4%;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

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
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: ${Constants.mobileWidth}) {
    display: flex;
    height: 30px;
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
