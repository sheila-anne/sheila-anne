import React, { FC } from "react";
import styled, { css } from "styled-components";

import BackgroundImage from "gatsby-background-image";
import { Constants } from "../constants";
import { useWindow } from "../hooks/useWindow";

type FullWidthImageProps = {
  containImage?: boolean;
  moveHeadlineOnMobile?: boolean;
};

type BannerImageProps = FullWidthImageProps & {
  color?: string;
  image: NestedImage;
  imageHeadline: string;
  title: string;
};

export const FullWidthImage = styled(BackgroundImage)<FullWidthImageProps>`
  height: 400px;
  background-attachment: fixed;
  background-size: ${({ containImage }) =>
    !!containImage ? "contain" : "cover"};
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    &,
    &::before,
    &::after {
      ${({ moveHeadlineOnMobile }) =>
        !!moveHeadlineOnMobile &&
        `
        height: 200px!important;
        background-size: contain!important;
        background-position: unset!important;
        `}
    }
  }
`;

const ImageHeadlineContainer = styled.h1<{
  color: string;
  moveHeadlineOnMobile?: boolean;
}>`
  box-shadow: ${({ color }) => `0.5rem 0 0 ${color}, -0.5rem 0 0 ${color}`};
  background-color: ${({ color }) => color};
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-around;
  line-height: 1;
  padding: 1rem;

  @media (max-width: ${Constants.mobileWidth}) {
    ${({ moveHeadlineOnMobile }) => !!moveHeadlineOnMobile && `margin-top: 0;`}
  }
`;

export const BannerImage: FC<BannerImageProps> = ({
  containImage,
  color,
  image,
  imageHeadline,
  moveHeadlineOnMobile,
  title
}) => {
  const imageData = image.childImageSharp?.fluid;
  const headlineColor = !!color ? color : Constants.Colors.lighterBlue;
  const { isMobile } = useWindow();
  return (
    <>
      <FullWidthImage
        alt={title}
        containImage={containImage}
        critical={true}
        fluid={imageData}
        moveHeadlineOnMobile={moveHeadlineOnMobile}
        title={title}
      >
        {((moveHeadlineOnMobile && !isMobile) || !moveHeadlineOnMobile) && (
          <ImageHeadlineContainer color={headlineColor}>
            {imageHeadline}
          </ImageHeadlineContainer>
        )}
      </FullWidthImage>
      {!!isMobile && !!moveHeadlineOnMobile && (
        <ImageHeadlineContainer
          color={headlineColor}
          moveHeadlineOnMobile={moveHeadlineOnMobile}
        >
          {imageHeadline}
        </ImageHeadlineContainer>
      )}
    </>
  );
};
