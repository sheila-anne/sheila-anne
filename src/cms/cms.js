import CMS from "netlify-cms-app";
import React, { useState, useEffect } from "react";
import { StyleSheetManager } from "styled-components";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ColorsPreview from "./preview-templates/ColorsPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import WorkingTogetherPagePreview from "./preview-templates/WorkingTogetherPagePreview";
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
  return (props) => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}

CMS.registerPreviewTemplate("about", withStyledComponents(AboutPagePreview));
CMS.registerPreviewTemplate("blog", withStyledComponents(BlogPostPreview));
CMS.registerPreviewTemplate(
  "color-config",
  withStyledComponents(ColorsPreview)
);
CMS.registerPreviewTemplate("index", withStyledComponents(IndexPagePreview));
CMS.registerPreviewTemplate(
  "working-together",
  withStyledComponents(WorkingTogetherPagePreview)
);
CMS.registerPreviewTemplate("the-mat", withStyledComponents(TheMatPagePreview));
