import React, { FC } from "react";
import styled from "styled-components";

import { applyStyle } from "../utils/";
import { Constants } from "../constants";

type ContentContainerProps = {
  backgroundColor?: string;
  margin?: string;
  padding?: string;
};

type ContentProps = ContentContainerProps & {
  content: string;
  itemProp?: string;
};

const ContentContainer = styled.div<ContentContainerProps>`
  ${({ backgroundColor }) => applyStyle("background-color", backgroundColor)}
  ${({ margin }) => applyStyle("margin", margin)}
  ${({ padding }) => applyStyle("padding", padding)}

  @media(max-width: ${Constants.mobileWidth}) {
    border-radius: 1rem;
  }
`;

export const HTMLContent: FC<ContentProps> = ({
  backgroundColor,
  content,
  itemProp,
  margin,
  padding
}) => (
  <ContentContainer
    backgroundColor={backgroundColor}
    dangerouslySetInnerHTML={{ __html: content }}
    margin={margin}
    itemProp={itemProp}
    padding={padding}
  />
);

export const Content: FC<ContentProps> = ({ content, itemProp }) => (
  <ContentContainer itemProp={itemProp}>{content}</ContentContainer>
);
