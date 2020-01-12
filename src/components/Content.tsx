import React, { FC } from "react";

type ContentProps = {
  itemProp?: string;
  content: string;
};

export const HTMLContent: FC<ContentProps> = ({ content, itemProp }) => (
  <div itemProp={itemProp} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content: FC<ContentProps> = ({ content, itemProp }) => (
  <div itemProp={itemProp}>{content}</div>
);

export default Content;
