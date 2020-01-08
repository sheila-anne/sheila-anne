import React, { FC } from "react";

type ContentProps = {
  content: string;
};

export const HTMLContent: FC<ContentProps> = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
);

const Content: FC<ContentProps> = ({ content }) => <div>{content}</div>;

export default Content;
