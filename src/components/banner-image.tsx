import React, { FC } from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import { BreakOutImage } from "./preview-compatible";

type BannerImageProps = {
  color?: string;
  image: NestedImage;
  imageHeadline: string;
  title: string;
};

const BannerImageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    flex-flow: column wrap;
  }
`;

export const ImageHeadlineContainer = styled.h1<{
  color: string;
  height?: string;
}>`
  align-self: center;
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  color: #fff;
  flex-grow: 1;
  line-height: 1;
  padding: 1rem;
  text-align: center;
  z-index: 1;

  @media (max-width: ${Constants.mobileWidth}) {
    font-size: 1rem;
  }
`;

export const BannerImage: FC<BannerImageProps> = ({ color, image, imageHeadline, title }) => {
  const headlineColor = !!color ? color : Constants.Colors.theGroveLightGreen;
  return (
    <BannerImageWrapper>
      <BreakOutImage imageAlt={title} imageInfo={{ image, alt: title }} title={title} />
      <ImageHeadlineContainer color={headlineColor}>{imageHeadline}</ImageHeadlineContainer>
    </BannerImageWrapper>
  );
};
