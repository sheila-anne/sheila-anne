import React, { FC, MouseEvent } from "react";
import styled, { css } from "styled-components";

import { Constants } from "../constants";
import { SmartLink } from "./smart-link";

type PillButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "submit" | undefined;
};

type ButtonProps = {
  backgroundColor?: string;
  color?: string;
};

const ButtonCss = css<ButtonProps>`
  background-color: ${({ backgroundColor }) =>
    !!backgroundColor ? backgroundColor : Constants.Colors.theGroveGreen};
  border: none;
  border-radius: 1rem;
  color: ${({ color }) => (!!color ? color : "#FFF")};
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  outline: none;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease;

  @media (max-width: ${Constants.mobileWidth}) {
    margin: 1rem 0;
  }

  :hover {
    color: ${({ color }) =>
      !!color ? Constants.Colors.theGroveGreen : "#000"};
  }
`;

export const PlainButton = styled.button<ButtonProps>`
  ${ButtonCss}
`;

export const Button = styled(SmartLink)<ButtonProps>`
  ${ButtonCss}
`;

const ButtonSpan = styled.span`
  display: block;
  position: relative;
  padding: 17px 28px;
  background-size: 100% 200%;
  background-position: top;

  @media (max-width: ${Constants.mobileWidth}) {
    background-color: ${Constants.Colors.theGroveGreen};
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
  color: #000;
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
    background: ${Constants.Colors.theGroveGreen};
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

export const SquareButton: FC<PillButtonProps> = ({
  children,
  onClick,
  type,
}) => (
  <StyledSquareButton onClick={(e) => onClick && onClick(e as any)} type={type}>
    <ButtonSpan>{children}</ButtonSpan>
  </StyledSquareButton>
);
