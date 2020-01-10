import React, { FC } from "react";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";
import { Constants } from "../constants";
import { useWindow } from "../hooks/useWindow";

type BannerImageProps = {
  image: PreviewImage;
  imageHeadline: string;
  title: string;
  moveHeadlineOnMobile?: boolean;
};

export const FullWidthImage = styled(BackgroundImage)<{
  moveHeadlineOnMobile?: boolean;
}>`
  height: 400px;
  background-attachment: fixed;
  background-size: cover;
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
        margin-bottom: 0;
        `}
    }
  }
`;

const ImageHeadlineContainer = styled.h1<{ moveHeadlineOnMobile?: boolean }>`
  box-shadow: 0.5rem 0 0 ${Constants.Colors.lighterBlue},
    -0.5rem 0 0 ${Constants.Colors.lighterBlue};
  background-color: ${Constants.Colors.lighterBlue};
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
  image,
  imageHeadline,
  moveHeadlineOnMobile,
  title
}) => {
  const imageData = image.childImageSharp?.fluid;
  const { isMobile } = useWindow();
  return (
    <>
      <FullWidthImage
        alt={title}
        fluid={imageData}
        moveHeadlineOnMobile={moveHeadlineOnMobile}
        title={title}
      >
        {moveHeadlineOnMobile && !isMobile && (
          <ImageHeadlineContainer>{imageHeadline}</ImageHeadlineContainer>
        )}
      </FullWidthImage>
      {!!isMobile && !!moveHeadlineOnMobile && (
        <ImageHeadlineContainer moveHeadlineOnMobile={moveHeadlineOnMobile}>
          {imageHeadline}
        </ImageHeadlineContainer>
      )}
    </>
  );
};
