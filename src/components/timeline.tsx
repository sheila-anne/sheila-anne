import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  position: relative;

  &::after {
    background-color: ${Constants.Colors.bodyCopy};
    content: "";
    height: 100%;
    left: calc(50% - 2px);
    position: absolute;
    width: 2px;
  }
`;

const TimelineItemWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  padding-right: 30px;
  position: relative;
  width: 50%;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }
`;

const TimelineItemContent = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  max-width: 70%;
  padding: 15px 15px 0px 10px;
  position: relative;
  text-align: center;
  width: 400px;

  &::after {
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    content: " ";
    height: 15px;
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
  }

  @media (max-width: 1023px) {
    max-width: 100%;
  }

  @media (max-width: ${Constants.mobileWidth}) {
    align-items: center;
  }

  // prettier-ignore
  ${TimelineItemWrapper}:nth-child(odd) & {

  &::after {
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
    left: -7.5px;
    right: auto;
  }

  @media (max-width: ${Constants.mobileWidth}) {
    align-items: center;
    text-align: center;
  }
}
`;

const TimelineText = styled.p<{ $isBold: boolean }>`
  ${({ $isBold }) => (!!$isBold ? "font-weight: 800;" : undefined)}
  font-size: 16px;
  line-height: 24px;
  margin: 15px 0;
  max-width: 250px;
`;

const TimelineCircle = styled.span`
  background-color: ${Constants.Colors.redRocksRed};
  border: 3px solid ${Constants.Colors.theGroveGreenGray};
  border-radius: 50%;
  height: 20px;
  position: absolute;
  right: -40px;
  top: calc(50% - 10px);
  width: 20px;
  z-index: 100;

  ${TimelineItemWrapper}:nth-child(odd) & {
    left: -40px;
    right: auto;
  }
`;

const TimelineItem = ({ timelineData }: { timelineData: TimelineType }) => {
  return timelineData.text && timelineData.text.length > 0 ? (
    <TimelineItemWrapper>
      <TimelineItemContent>
        <TimelineText $isBold={!!timelineData.isBold}>{timelineData.text}</TimelineText>
        <TimelineCircle />
      </TimelineItemContent>
    </TimelineItemWrapper>
  ) : null;
};

type TimelineType = {
  text: string;
  isBold?: boolean;
};

type TimelineList = {
  timelines: TimelineType[];
};

export const Timeline = ({ timelines }: TimelineList) => (
  <TimelineContainer>
    {timelines.map((timeline, index: number) => (
      <TimelineItem timelineData={timeline} key={index} />
    ))}
  </TimelineContainer>
);
