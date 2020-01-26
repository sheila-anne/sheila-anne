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
    border: 1rem ${({ color }) => color} solid;
    border-radius: 1rem;
    box-shadow: ${({ color }) => `0.5rem 0 0 ${color}, -0.5rem 0 0 ${color}`};
    color: #fff;
    ${({ height }) => applyStyle("height", height)}
    line-height: 1;
    padding: 1rem;
    ${({ isPreview }) => !!isPreview && "position: fixed; height: 50px;"}

    ${({ inline }) => !!inline && `display: inline;`}

    @media (max-width: ${Constants.mobileWidth}) {
      padding: .5rem;
      ${({ lessMargin }) => !!lessMargin && "margin: 0;"}
      ${({ moveHeadlineOnMobile }) =>
        !!moveHeadlineOnMobile && `margin-top: 0;`}
      text-align: center;
    }
  `;
