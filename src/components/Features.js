import React from "react";
import styled from "styled-components";

import { CenteredText } from "./centered-text";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const FlexCenteredText = styled(CenteredText)`
  display: inline-block;
  width: 240px;
`;

const FlexArea = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const FlexColumn = styled.div`
  flex: none;
  width: 50%;
`;

const FeatureGrid = ({ gridItems }) => (
  <FlexArea>
    {gridItems.map(item => (
      <FlexColumn key={item.text}>
        <section className="section">
          <CenteredText>
            <FlexCenteredText>
              <PreviewCompatibleImage imageInfo={item} />
            </FlexCenteredText>
          </CenteredText>
          <p>{item.text}</p>
        </section>
      </FlexColumn>
    ))}
  </FlexArea>
);

export default FeatureGrid;
