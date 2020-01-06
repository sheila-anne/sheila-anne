import React, { FC } from "react";
import styled from "styled-components";

import { CenteredText } from "./centered-text";
import { FlexColumn, FlexContainer } from "./flex";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

type FeaturedProps = {
  gridItems: FeaturedGridItem[];
};

type FeaturedGridItem = PreviewImage & {
  text: string;
};

const FlexCenteredText = styled(CenteredText)`
  display: inline-block;
  width: 240px;
`;

const FeatureGrid: FC<FeaturedProps> = ({ gridItems }) => (
  <FlexContainer>
    {gridItems.map(item => (
      <FlexColumn key={item.text}>
        <section>
          <CenteredText>
            <FlexCenteredText>
              <PreviewCompatibleImage imageInfo={item} />
            </FlexCenteredText>
          </CenteredText>
          <p>{item.text}</p>
        </section>
      </FlexColumn>
    ))}
  </FlexContainer>
);

export default FeatureGrid;
