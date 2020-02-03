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
  background-size: contain;

  &,
  &::before,
  &::after {
    margin-bottom: 1rem;
  }

  @media (max-width: ${Constants.mobileWidth}) {
    &,
    &::before,
    &::after {
      height: 250px !important;
    }
  }

  @media (max-width: 360px) {
    &,
    &::before,
    &::after {
      height: 200px !important;
    }
  }
`;

export const ImageHeadlineContainer = styled.div<{
  color: string;
}>`
  background-color: ${({ color }) => color};
  box-shadow: ${({ color }) => `0.5rem 0 0 ${color}, -0.5rem 0 0 ${color}`};
  color: #fff;
  line-height: 1;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;

  @media (max-width: ${Constants.mobileWidth}) {
    margin-top: 1rem;
  }
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
    <section>
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
    </section>
  );
};
