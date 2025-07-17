import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import styled from "styled-components";

import { CenteredText } from "./centered";
import { Constants } from "../constants";
import { PillButton } from "./button";
import { maxPageWidth, trackCustomEvent, trackFacebook } from "../utils";

type PageNames = "Working Together" | "Homepage" | "Coaching";

type BookingSectionProps = {
  backgroundColor?: string;
  bookingUrl?: string;
  formTitle: string;
  formDescription: string;
  formParagraph?: string;
  id?: string;
  page: PageNames;
};

type BookingFrame = {
  $showBookingSection: boolean;
};

const PaddedParagraph = styled.p`
  padding: 5px;
`;

export const BookingIframe = styled.iframe<BookingFrame>`
  border: none;
  display: ${({ $showBookingSection }) => ($showBookingSection ? "block" : "none")};
  height: 800px;
  width: ${maxPageWidth};

  @media (max-width: ${Constants.mobileWidth}) {
    width: 100%;
  }
`;

const getBookingArgs = (page: string) => ({
  event_category: `Schedule Booking`,
  event_label: page,
  send_to: "AW-456930843/upZZCOSniPMBEJvs8NkB",
});

export const BookingScript = () => {
  return <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async={true} />;
};

const handleSubmit = (
  e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  setShowBookingSection: Dispatch<SetStateAction<boolean>>,
  showBookingSection: boolean,
  page: PageNames
) => {
  e.preventDefault();

  const args = getBookingArgs(page);
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
  bookingUrl = Constants.booking.allServicesUrl,
}: BookingSectionProps) => {
  const [showBookingSection, setShowBookingSection] = useState(false);

  return (
    <section>
      <BookingScript />
      <CenteredText
        $backgroundColor={!!backgroundColor && !showBookingSection ? backgroundColor : "#FFF"}
        $padding="1rem"
      >
        {!showBookingSection && <h1>{formTitle}</h1>}
        {!showBookingSection && <h2>{formDescription}</h2>}
        {!!formParagraph && !showBookingSection && <PaddedParagraph>{formParagraph}</PaddedParagraph>}
        <PillButton
          color={Constants.Colors.theGroveGreen}
          onClick={e => handleSubmit(e, setShowBookingSection, showBookingSection, page)}
        >
          {showBookingSection ? "Hide Scheduling Section" : "Tap To Schedule With Sheila Anne"}
        </PillButton>
      </CenteredText>
      <BookingIframe $showBookingSection={showBookingSection} src={bookingUrl} />
    </section>
  );
};
