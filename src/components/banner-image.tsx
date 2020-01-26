import React, { FC } from "react";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";
import { Constants } from "../constants";

type BannerImageProps = {
  color?: string;
  image: NestedImage;
  imageHeadline: string;
  title: string;
};

export const FullWidthImage = styled(BackgroundImage)`
  height: 400px;
  background-attachment: fixed;
  background-size: contain;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    &,
    &::before,
    &::after {
      background-position: unset !important;
      height: 200px !important;
    }
  }
`;

export const ImageHeadlineContainer = styled.div<{
  color: string;
}>`
  background-color: ${({ color }) => color};
  box-shadow: ${({ color }) => `0.5rem 0 0 ${color}, -0.5rem 0 0 ${color}`};
  border-radius: 1rem;
  color: #fff;
  line-height: 1;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
`;

export const BannerImage: FC<BannerImageProps> = ({
  color,
  image,
  imageHeadline,
  title
}) => {
  const imageData = image.childImageSharp?.fluid;
  const headlineColor = !!color ? color : Constants.Colors.lighterBlue;
  return (
    <>
      <FullWidthImage
        alt={title}
        critical={true}
        fadeIn="soft"
        fluid={imageData}
        preserveStackingContext={true}
        title={title}
      />
      <ImageHeadlineContainer color={headlineColor}>
        <h1>{imageHeadline}</h1>
      </ImageHeadlineContainer>
    </>
  );
};
