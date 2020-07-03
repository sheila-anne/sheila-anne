import React, {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import styled from "styled-components";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { CenteredText } from "./centered";
import { Constants } from "../constants";
import { SquareButton } from "./button";
import { trackFacebook } from "../utils";

type PageNames = "Working Together" | "Homepage";

type BookingSectionProps = {
  backgroundColor?: string;
  formTitle: string;
  formDescription: string;
  formParagraph?: string;
  id?: string;
  page: PageNames;
};

const PaddedParagraph = styled.p`
  padding: 5px;
`;

export const BookingIframe = styled.iframe<{
  height?: string;
  showBookingSection: boolean;
}>`
  border: none;
  display: ${({ showBookingSection }) =>
    showBookingSection ? "block" : "none"};
  min-height: ${({ height }) => (height ? height : "500px")};
  width: 100%;
`;

const handleSubmit = (
  e: MouseEvent<HTMLButtonElement, MouseEvent>,
  setShowBookingSection: Dispatch<SetStateAction<boolean>>,
  showBookingSection: boolean,
  page: PageNames
) => {
  e.preventDefault();

  const args = {
    action: "click",
    category: `Schedule`,
    label: page,
  };

  trackCustomEvent(args);
  trackFacebook("track", "Schedule", args);

  setShowBookingSection(!showBookingSection);
};

export const BookingSection: FC<BookingSectionProps> = ({
  backgroundColor,
  formDescription,
  formParagraph,
  formTitle,
  page,
}) => {
  const [showBookingSection, setShowBookingSection] = useState(false);

  return (
    <section>
      <CenteredText
        backgroundColor={!!backgroundColor ? backgroundColor : "#FFF"}
        padding="1rem"
      >
        {!showBookingSection && <h1>{formTitle}</h1>}
        {!showBookingSection && <h2>{formDescription}</h2>}
        {!!formParagraph && !showBookingSection && (
          <PaddedParagraph>{formParagraph}</PaddedParagraph>
        )}
        <SquareButton
          onClick={(e) =>
            handleSubmit(e, setShowBookingSection, showBookingSection, page)
          }
        >
          {showBookingSection ? "Hide" : "Tap To Schedule With Sheila Anne"}
        </SquareButton>
      </CenteredText>
      <BookingIframe
        showBookingSection={showBookingSection}
        src={Constants.schedulingUrl}
      />
    </section>
  );
};
