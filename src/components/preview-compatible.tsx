import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { FlexImageCSS } from "./flex";

type PreviewCompatibleImageProps = {
  className?: string;
  imageInfo: PreviewImage;
  imageAlt?: string;
  loading?: "eager" | "lazy" | "auto";
  title?: string;
};

export const PreviewCompatibleImage = ({
  className,
  imageAlt,
  imageInfo,
  title,
  loading = "auto",
}: PreviewCompatibleImageProps) => {
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

  const rawImg = typeof imageInfo === "string" ? imageInfo : !!image && typeof image === "string" ? image : "";

  if (!!rawImg) {
    return <img alt={altText} className={className} style={imageStyle} src={rawImg} title={title} />;
  }

  return null;
};

export const PreviewCompatibleFlexImage = styled(PreviewCompatibleImage)`
  ${FlexImageCSS}
`;

export const BreakOutImage = styled(PreviewCompatibleImage)`
  left: 50%;
  margin-left: -48vw;
  margin-right: -48vw;
  max-width: 96w;
  right: 50%;
  width: 96vw;
`;
