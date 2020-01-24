import React, { FC, ReactElement } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { Headline } from "./headline";
import { FlexImageCSS } from "./flex";

type PreviewCompatibleBannerProps = {
  Component: ReactElement;
  ComponentChildren?: ReactElement;
  image: string | NestedImage;
  isPreview?: boolean;
};

type PreviewCompatibleBannerHeadlineProps = {
  color: string;
  imageHeadline: string;
  isPreview?: boolean;
};

type PreviewCompatibleImageProps = {
  className?: string;
  imageInfo: PreviewImage;
  imageAlt?: string;
  loading?: "eager" | "lazy" | "auto";
  title?: string;
};

export const PreviewCompatibleBanner: FC<PreviewCompatibleBannerProps> = ({
  Component,
  ComponentChildren,
  image,
  isPreview
}) => {
  return !!isPreview ? (
    <div
      style={{
        backgroundAttachment: `fixed`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `contain`,
        height: "200px"
      }}
    >
      {ComponentChildren}
    </div>
  ) : (
    Component
  );
};

export const PreviewCompatibleBannerHeadline: FC<PreviewCompatibleBannerHeadlineProps> = ({
  color,
  imageHeadline,
  isPreview
}) => (
  <Headline color={color} isPreview={isPreview} moveHeadlineOnMobile={true}>
    {imageHeadline}
  </Headline>
);

export const PreviewCompatibleImage: FC<PreviewCompatibleImageProps> = ({
  className,
  imageAlt,
  imageInfo,
  loading,
  title
}) => {
  const imageStyle = {
    borderRadius: "5px",
    maxWidth: "inherit",
    maxHeight: "inherit"
  };
  let { alt = "", childImageSharp, image } = imageInfo;
  const altText = alt || imageAlt;
  const potentialImage = image as NestedImage;
  const loadType = loading || "auto";

  if (!!image && !!potentialImage.childImageSharp) {
    return (
      <Img
        alt={altText}
        className={className}
        fluid={potentialImage.childImageSharp.fluid}
        loading={loadType}
        style={imageStyle}
        title={title}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        alt={altText}
        className={className}
        fluid={childImageSharp.fluid}
        loading={loadType}
        style={imageStyle}
        title={title}
      />
    );
  }

  const rawImg =
    typeof imageInfo === "string"
      ? imageInfo
      : !!image && typeof image === "string"
      ? image
      : "";

  if (!!rawImg) {
    return (
      <img
        alt={altText}
        className={className}
        style={imageStyle}
        src={rawImg}
        title={title}
      />
    );
  }

  return null;
};

export const PreviewCompatibleFlexImage = styled(PreviewCompatibleImage)`
  ${FlexImageCSS}
`;
