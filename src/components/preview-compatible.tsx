import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled, { css } from "styled-components";

import { FlexImageCSS } from "./flex";

export const BreakOutCss = css`
  left: 50%;
  margin-left: -48vw;
  margin-right: -48vw;
  right: 50%;
  width: 96vw;
`;

type PreviewCompatibleImageProps = {
  className?: string;
  imageInfo: IGatsbyImageData | undefined;
  imageAlt?: string;
  loading?: "eager" | "lazy" | undefined;
  title?: string;
};

export const PreviewCompatibleImage = ({
  className,
  imageAlt,
  imageInfo,
  title,
  loading,
}: PreviewCompatibleImageProps) => {
  const imageStyle = {
    maxWidth: "inherit",
    maxHeight: "inherit",
  };
  const altText = imageAlt || "";
  const loadType = loading;

  if (!!imageInfo) {
    return (
      <GatsbyImage
        alt={altText}
        className={className}
        image={imageInfo}
        loading={loadType}
        itemProp="image"
        style={imageStyle}
        title={title}
      />
    );
  }

  return null;
};

export const PreviewCompatibleFlexImage = styled(PreviewCompatibleImage)`
  ${FlexImageCSS}
`;

export const BreakOutImage = styled(PreviewCompatibleImage)`
  ${BreakOutCss}
`;
