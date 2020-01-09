import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";
import React, { useState, useEffect } from "react";
import { StyleSheetManager } from "styled-components";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ColorsPreview from "./preview-templates/ColorsPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import TheGrovePagePreview from "./preview-templates/TheGrovePagePreview";
import TheMatPagePreview from "./preview-templates/TheMatPagePreview";

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName("iframe")[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  );
}

export default function withStyledComponents(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("about", withStyledComponents(AboutPagePreview));
CMS.registerPreviewTemplate("blog", withStyledComponents(BlogPostPreview));
CMS.registerPreviewTemplate(
  "color-config",
  withStyledComponents(ColorsPreview)
);
CMS.registerPreviewTemplate("index", withStyledComponents(IndexPagePreview));
CMS.registerPreviewTemplate(
  "products",
  withStyledComponents(ProductPagePreview)
);
CMS.registerPreviewTemplate(
  "the-grove",
  withStyledComponents(TheGrovePagePreview)
);
CMS.registerPreviewTemplate("the-mat", withStyledComponents(TheMatPagePreview));
