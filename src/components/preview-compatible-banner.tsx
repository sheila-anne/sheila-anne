import React, { FC, ReactElement } from "react";

type PreviewCompatibleBannerProps = {
  Component: ReactElement;
  ComponentChildren?: ReactElement;
  image: string | NestedImage;
  isPreview?: boolean;
};

export const PreviewCompatibleBanner: FC<PreviewCompatibleBannerProps> = ({
  Component,
  ComponentChildren,
  image,
  isPreview
}) => {
  console.log(image);
  return !!isPreview ? (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`
      }}
    >
      {ComponentChildren}
    </div>
  ) : (
    Component
  );
};
