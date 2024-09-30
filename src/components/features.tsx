import React from "react";
import styled from "styled-components";

import { CenteredText } from "./centered";
import { FlexColumn, FlexContainer } from "./flex";
import { PreviewCompatibleImage } from "./preview-compatible";
import { Constants } from "../constants";


const ClickableCard = styled.a`
  color: inherit;
  text-decoration: none;
`;

const ColoredFlexColumn = styled(FlexColumn).withConfig({
  shouldForwardProp: prop => prop !== "colorIndex",
})`
  background-color: ${Constants.Colors.theGroveGreenGray};
  border-radius: 1rem;
  flex-basis: 30%;
  padding: 10px;
  margin: 1rem auto;
  text-align: center;
`;

const FlexImage = styled(PreviewCompatibleImage)`
  display: inline-block;
  max-height: 240px;
  max-width: 240px;
  margin-bottom: 15px;
  width: 240px;
`;

const SmallHeadline = styled.h3`
  font-size: 1rem;
  margin-top: 0;
`;

export const Features = ({ gridItems }) => (
  <FlexContainer>
    {gridItems.map((item) => (
      <ColoredFlexColumn key={item.text}>
        {/* hack to fix trailing comma being purged when sourced from markdown */}
        <ClickableCard href={item.href + "/"}>
          <CenteredText>
            <FlexImage imageInfo={item.image.childImageSharp.gatsbyImageData} imageAlt={item.imageAlt} />
            <SmallHeadline>{item.title}</SmallHeadline>
          </CenteredText>
          <p>{item.text}</p>
        </ClickableCard>
      </ColoredFlexColumn>
    ))}
  </FlexContainer>
);
