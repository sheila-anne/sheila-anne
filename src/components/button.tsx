import React, { FC, MouseEvent, ReactNode } from "react";
import styled, { css } from "styled-components";

import { Constants } from "../constants";
import { SmartLink } from "./smart-link";

type PillButtonProps = {
  color?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  type?: "submit" | undefined;
};

type ButtonProps = {
  backgroundColor?: string;
  color?: string;
};

export const FocusCss = css`
  :focus {
    border: 0.5px solid #000;
    border-radius: 1rem;
  }
`;

const ButtonCss = css<ButtonProps>`
  background-color: ${({ backgroundColor }) => (!!backgroundColor ? backgroundColor : Constants.Colors.theGroveGreen)};
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
`;

export const PlainButton = styled.button.withConfig<ButtonProps>({
  shouldForwardProp: prop => prop !== "backgroundColor",
})`
  ${ButtonCss}
  ${FocusCss}
`;

export const LinkButton = styled(SmartLink).withConfig<ButtonProps>({
  shouldForwardProp: prop => prop !== "backgroundColor",
})`
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

  @media (max-width: ${Constants.mobileWidth}) {
    background-color: ${Constants.Colors.redRocksRed};
  }
`;

const StyledPillButton = styled.button<{ color?: string }>`
  background: transparent;
  border: none;
  color: #000;
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

export const PillButton: FC<PillButtonProps> = ({ color, children, onClick, type }) => (
  <StyledPillButton color={color} onClick={e => onClick && onClick(e)} type={type}>
    <ButtonSpan>{children}</ButtonSpan>
  </StyledPillButton>
);
