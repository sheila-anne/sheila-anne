import React, { FC } from "react";
import Img from "gatsby-image";

type PreviewCompatibleImageProps = {
  imageInfo: PreviewImage;
};

const PreviewCompatibleImage: FC<PreviewCompatibleImageProps> = ({
  imageInfo
}) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = imageInfo;
  const potentialImage = image as NestedImage;

  if (!!image && !!potentialImage.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={potentialImage.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

export default PreviewCompatibleImage;
