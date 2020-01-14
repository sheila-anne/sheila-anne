import React, { FC, ReactElement } from "react";

type PreviewCompatibleBannerProps = {
  Component: ReactElement;
  image: string | NestedImage;
  isPreview?: boolean;
};

export const PreviewCompatibleBanner: FC<PreviewCompatibleBannerProps> = ({
  Component,
  image,
  isPreview
}) => {
  return !!isPreview ? (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`
      }}
    />
  ) : (
    Component
  );
};
