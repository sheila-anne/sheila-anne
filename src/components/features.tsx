import React, { FC } from "react";
import styled from "styled-components";

import { CenteredText } from "./centered-text";
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
  0: Constants.Colors.theGroveTeal,
  1: Constants.Colors.theGroveLightGreen,
  2: Constants.Colors.theGroveGreenGray,
  3: Constants.Colors.lightestBlue
};

const ColoredFlexColumn = styled(FlexColumn)<ColoredFlexColumnProps>`
  background-color: ${({ colorIndex }) => ColorsMap[colorIndex]};
  border-radius: 2rem;
  flex: none;
  padding: 10px;
  margin: 1rem auto;
  text-align: center;
  width: 45%;
`;

const FlexCenteredText = styled(CenteredText)`
  display: inline-block;
  max-height: 240px;
  max-width: 240px;
  width: 240px;
`;

const SmallHeadline = styled.h3`
  font-size: 1rem;
  margin-top: 0;
`;

const Features: FC<FeaturedProps> = ({ gridItems }) => (
  <FlexContainer>
    {gridItems.map((item, index) => (
      <ColoredFlexColumn key={item.text} colorIndex={index}>
        <section>
          <CenteredText>
            <FlexCenteredText>
              <PreviewCompatibleImage
                imageInfo={item}
                imageAlt={item.imageAlt}
              />
            </FlexCenteredText>
            <SmallHeadline>{item.title}</SmallHeadline>
          </CenteredText>
          <p>{item.text}</p>
        </section>
      </ColoredFlexColumn>
    ))}
  </FlexContainer>
);

export { Features };