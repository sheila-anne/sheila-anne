import React, { FC } from "react";
import Img from "gatsby-image";

type PreviewCompatibleImageProps = {
  imageInfo: PreviewImage;
  imageAlt?: string;
  loading?: "eager" | "lazy" | "auto";
};

const PreviewCompatibleImage: FC<PreviewCompatibleImageProps> = ({
  imageAlt,
  imageInfo,
  loading
}) => {
  const imageStyle = { borderRadius: "5px" };
  let { alt = "", childImageSharp, image } = imageInfo;
  const altText = alt || imageAlt;
  const potentialImage = image as NestedImage;
  const loadType = loading || "auto";

  if (!!image && !!potentialImage.childImageSharp) {
    return (
      <Img
        alt={altText}
        loading={loadType}
        style={imageStyle}
        fluid={potentialImage.childImageSharp.fluid}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        loading={loadType}
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={altText}
      />
    );
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={altText} />;

  return null;
};

export { PreviewCompatibleImage };
