import React from "react";

import { Content } from ".";

export const BaseTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section itemProp="mainContentOfPage">
      <PageContent content={content} />
    </section>
  );
};
