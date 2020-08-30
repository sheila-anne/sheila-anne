import React from "react";
import styled from "styled-components";

import { CenteredText } from "./centered";
import { FlexColumn, FlexContainer } from "./flex";
import { PreviewCompatibleImage } from "./preview-compatible";
import { Constants } from "../constants";

type FeaturedProps = {
  gridItems: FeaturedGridItem[];
};

type ColoredFlexColumnProps = {
  colorIndex: number;
};

const ColorsMap = {
  0: Constants.Colors.theGroveGreenGray,
  1: Constants.Colors.theGroveLightGreen,
  2: Constants.Colors.theGroveTeal,
  3: Constants.Colors.theGroveGreen,
};

const ClickableCard = styled.a`
  color: inherit;
  text-decoration: none;
`;

const ColoredFlexColumn = styled(FlexColumn)<ColoredFlexColumnProps>`
  background-color: ${({ colorIndex }) => ColorsMap[colorIndex]};
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
  width: 240px;
`;

const SmallHeadline = styled.h3`
  font-size: 1rem;
  margin-top: 0;
`;

export const Features = ({ gridItems }: FeaturedProps) => (
  <FlexContainer>
    {gridItems.map((item, index) => (
      <ColoredFlexColumn key={item.text} colorIndex={index}>
        {/* hack to fix trailing comma being purged when sourced from markdown */}
        <ClickableCard href={item.href + "/"}>
          <CenteredText>
            <FlexImage imageInfo={item} imageAlt={item.imageAlt} />
            <SmallHeadline>{item.title}</SmallHeadline>
          </CenteredText>
          <p>{item.text}</p>
        </ClickableCard>
      </ColoredFlexColumn>
    ))}
  </FlexContainer>
);
