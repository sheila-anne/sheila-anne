import React, { FC } from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import { SmartLink } from "./smart-link";

type PillButtonProps = {
  text: string;
  type?: "submit" | undefined;
};

export const Button = styled(SmartLink)`
  background-color: ${Constants.Colors.theGroveGreen};
  box-shadow: inset 0 0 0 2px ${Constants.Colors.theGroveGreen};
  border-radius: 1rem;
  color: #fff;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 1rem 0;
  }
`;

const ButtonSpan = styled.span`
  display: block;
  position: relative;
  padding: 17px 28px;
  background-size: 100% 200%;
  background-position: top;

  @media (max-width: ${Constants.mobileWidth}) {
    background-color: #000;
  }
`;

const StyledSquareButton = styled.button`
  position: relative;
  padding: 0;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: transparent;
  color: #29292a;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transition: 0.3s ease height;
    background: #29292a;
  }

  &:hover,
  &:focus {
    color: #fff;
    transition: all 0.3s ease;
    span {
      background-position: bottom;
    }
    &::before {
      height: 100%;
    }
  }

  @media (max-width: ${Constants.mobileWidth}) {
    color: #fff;
    margin-top: 1rem;
  }
`;

export const SquareButton: FC<PillButtonProps> = ({ text, type }) => (
  <StyledSquareButton type={type}>
    <ButtonSpan>{text}</ButtonSpan>
  </StyledSquareButton>
);
