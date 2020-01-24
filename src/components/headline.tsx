import styled from "styled-components";

import { applyStyle } from "../utils";
import { Constants } from "../constants";

type HeadlineProps = {
  color: string;
  height?: string;
  inline?: boolean;
  isPreview?: boolean;
  lessMargin?: boolean;
  moveHeadlineOnMobile?: boolean;
};

export const Headline = styled.h1<HeadlineProps>`
    background-color: ${({ color }) => color};
    border: 5px ${({ color }) => color} solid;
    border-radius: 1rem;
    box-shadow: ${({ color }) => `0.5rem 0 0 ${color}, -0.5rem 0 0 ${color}`};
    color: #fff;
    display: flex;
    flex-direction: column;
    ${({ height }) => applyStyle("height", height)}
    justify-content: center;
    line-height: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    ${({ isPreview }) => !!isPreview && "position: fixed; height: 50px;"}

    ${({ inline }) => !!inline && `display: inline;`}

    @media (max-width: ${Constants.mobileWidth}) {
      ${({ lessMargin }) => !!lessMargin && "margin: 0;"}
      ${({ moveHeadlineOnMobile }) =>
        !!moveHeadlineOnMobile && `margin-top: 0;`}
      text-align: center;
    }
  `;
