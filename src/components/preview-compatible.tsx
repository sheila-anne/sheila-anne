import React, { FC, ReactElement } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { FlexImageCSS } from "./flex";

type PreviewCompatibleBannerProps = {
  Component: ReactElement;
  ComponentChildren?: ReactElement;
  image: string | NestedImage;
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
  isPreview,
}) => {
  return !!isPreview ? (
    <div>
      <div
        style={{
          backgroundAttachment: `inherit`,
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: `contain`,
          height: "200px",
        }}
      />
      {ComponentChildren}
    </div>
  ) : (
    Component
  );
};

export const PreviewCompatibleImage: FC<PreviewCompatibleImageProps> = ({
  className,
  imageAlt,
  imageInfo,
  title,
  loading = "auto",
}) => {
  const imageStyle = {
    maxWidth: "inherit",
    maxHeight: "inherit",
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
        itemProp="image"
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
        itemProp="image"
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
