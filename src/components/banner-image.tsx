import React, { FC } from "react";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";
import { Constants } from "../constants";
import { Headline } from "./headline";
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
        fadeIn="soft"
        fluid={imageData}
        preserveStackingContext={true}
        moveHeadlineOnMobile={moveHeadlineOnMobile}
        title={title}
      >
        {((moveHeadlineOnMobile && !isMobile) || !moveHeadlineOnMobile) && (
          <Headline color={headlineColor}>{imageHeadline}</Headline>
        )}
      </FullWidthImage>
      {!!isMobile && !!moveHeadlineOnMobile && (
        <Headline
          color={headlineColor}
          moveHeadlineOnMobile={moveHeadlineOnMobile}
        >
          {imageHeadline}
        </Headline>
      )}
    </>
  );
};
