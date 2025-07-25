import React, { FC, MouseEvent, ReactNode } from "react";
import styled, { css } from "styled-components";

import { Constants } from "../constants";
import { SmartLink } from "./smart-link";

type PillButtonProps = {
  color?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  title?: string;
  type?: "submit" | undefined;
};

type ButtonProps = {
  color?: string;
};

export const FocusCss = css`
  :focus {
    border: 0.5px solid ${Constants.Colors.bodyCopy};
    border-radius: 1rem;
  }
`;

const ButtonCss = css<ButtonProps>`
  background-color: ${Constants.Colors.buttonFallback};
  border: none;
  border-radius: 1rem;
  color: ${({ color }) => (!!color ? color : "#FFF")};
  cursor: pointer;
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
`;

export const PlainButton = styled.button<ButtonProps>`
  ${ButtonCss}
  ${FocusCss}
`;

export const LinkButton = styled(SmartLink)<ButtonProps>`
  ${ButtonCss}
  ${FocusCss}
`;

const ButtonSpan = styled.span`
  display: block;
  position: relative;
  padding: 17px 28px;
  background-size: 100% 200%;
  background-position: top;
  border-radius: 1rem;
`;

const StyledPillButton = styled.button<{ color?: string }>`
  background: transparent;
  border: none;
  color: ${Constants.Colors.bodyCopy};
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 1.2;
  margin: 1rem 0;
  outline: none;
  padding: 0;
  position: relative;
  text-transform: uppercase;

  &:before {
    background: ${({ color }) => (!!color ? color : Constants.Colors.theGroveLightGreen)};
    border-radius: 1rem;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    transition: 0.3s ease height;
    width: 100%;

    @media (max-width: ${Constants.mobileWidth}) {
      display: none;
    }
  }

  &:hover,
  &:focus {
    color: #fff;
    transition: all 0.3s ease;
    span {
      background-position: bottom;
    }
    &:before {
      height: 100%;
    }
  }

  ${FocusCss}

  @media (max-width: ${Constants.mobileWidth}) {
    color: #fff;
    margin-top: 1rem;
  }
`;

export const PillButton: FC<PillButtonProps> = ({ color, children, onClick, title, type }) => (
  <StyledPillButton title={title} color={color} onClick={e => onClick && onClick(e)} type={type}>
    <ButtonSpan>{children}</ButtonSpan>
  </StyledPillButton>
);
