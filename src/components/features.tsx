import React, { FC } from "react";
import styled from "styled-components";

import { CenteredText } from "./centered-text";
import { FlexColumn, FlexContainer } from "./flex";
import { PreviewCompatibleImage } from "./preview-compatiable-image";

type FeaturedProps = {
  gridItems: FeaturedGridItem[];
};

const FlexCenteredText = styled(CenteredText)`
  display: inline-block;
  max-height: 240px;
  max-width: 240px;
  width: 240px;
`;

const Features: FC<FeaturedProps> = ({ gridItems }) => (
  <FlexContainer>
    {gridItems.map(item => (
      <FlexColumn key={item.text}>
        <section>
          <CenteredText>
            <FlexCenteredText>
              <PreviewCompatibleImage
                imageInfo={item}
                imageAlt={item.imageAlt}
              />
            </FlexCenteredText>
          </CenteredText>
          <p>{item.text}</p>
        </section>
      </FlexColumn>
    ))}
  </FlexContainer>
);

export { Features };
