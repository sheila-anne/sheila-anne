import React, { FC } from "react";
import Img from "gatsby-image";

type PreviewCompatibleImageProps = {
  className?: string;
  imageInfo: PreviewImage;
  imageAlt?: string;
  loading?: "eager" | "lazy" | "auto";
  title?: string;
};

const PreviewCompatibleImage: FC<PreviewCompatibleImageProps> = ({
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

export { PreviewCompatibleImage };
