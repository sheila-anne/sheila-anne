import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import styled from "styled-components";

import { CenteredText } from "./centered";
import { Constants } from "../constants";
import { PillButton } from "./button";
import { maxPageWidth, trackCustomEvent, trackFacebook } from "../utils";

type PageNames = "Working Together" | "Homepage";

type BookingSectionProps = {
  backgroundColor?: string;
  bookingUrl?: string;
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
  showBookingSection: boolean;
}>`
  border: none;
  display: ${({ showBookingSection }) => (showBookingSection ? "block" : "none")};
  height: 800px;
  width: ${maxPageWidth};

  @media (max-width: ${Constants.mobileWidth}) {
    width: 100%;
  }
`;

const handleSubmit = (
  e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  setShowBookingSection: Dispatch<SetStateAction<boolean>>,
  showBookingSection: boolean,
  page: PageNames
) => {
  e.preventDefault();

  const args = {
    event_category: `Schedule Booking`,
    event_label: page,
    send_to: "AW-456930843/upZZCOSniPMBEJvs8NkB",
  };

  trackCustomEvent({ type: "conversion", args });
  trackFacebook({
    eventType: "track",
    eventName: "InitiateCheckout",
    params: { content_name: args.event_label, content_category: args.event_category },
  });

  setShowBookingSection(!showBookingSection);
};

export const BookingSection = ({
  backgroundColor,
  formDescription,
  formParagraph,
  formTitle,
  page,
  bookingUrl = Constants.square.allServicesUrl,
}: BookingSectionProps) => {
  const [showBookingSection, setShowBookingSection] = useState(false);

  return (
    <section>
      <CenteredText backgroundColor={!!backgroundColor ? backgroundColor : "#FFF"} padding="1rem">
        {!showBookingSection && <h1>{formTitle}</h1>}
        {!showBookingSection && <h2>{formDescription}</h2>}
        {!!formParagraph && !showBookingSection && <PaddedParagraph>{formParagraph}</PaddedParagraph>}
        <PillButton onClick={e => handleSubmit(e, setShowBookingSection, showBookingSection, page)}>
          {showBookingSection ? "Hide Scheduling Section" : "Tap To Schedule With Sheila Anne"}
        </PillButton>
      </CenteredText>
      <BookingIframe showBookingSection={showBookingSection} src={bookingUrl} />
    </section>
  );
};
