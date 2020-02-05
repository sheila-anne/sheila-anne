import React, {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useState
} from "react";
import styled from "styled-components";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import { CenteredText } from "./centered";
import { SquareButton } from "./button";

type PageNames = "The Grove" | "Homepage";

type BookingSectionProps = {
  backgroundColor: string;
  formTitle: string;
  formDescription: string;
  formParagraph?: string;
  id?: string;
  page: PageNames;
};

const PaddedParagraph = styled.p`
  padding: 5px;
`;

const BookingIframe = styled.iframe<{ showBookingSection: boolean }>`
  border: none;
  display: ${({ showBookingSection }) =>
    showBookingSection ? "block" : "none"};
  min-height: 500px;
  width: 100%;
`;

const handleSubmit = (
  e: MouseEvent<HTMLButtonElement, MouseEvent>,
  setShowBookingSection: Dispatch<SetStateAction<boolean>>,
  showBookingSection: boolean,
  page: PageNames
) => {
  e.preventDefault();

  trackCustomEvent({
    action: "click",
    category: `Schedule`,
    label: page
  });

  setShowBookingSection(!showBookingSection);
};

const BookingSection: FC<BookingSectionProps> = ({
  backgroundColor,
  formDescription,
  formParagraph,
  formTitle,
  page
}) => {
  const [showBookingSection, setShowBookingSection] = useState(false);

  return (
    <section>
      <CenteredText backgroundColor={backgroundColor} padding="1rem">
        {!showBookingSection && <h1>{formTitle}</h1>}
        {!showBookingSection && <h2>{formDescription}</h2>}
        {!!formParagraph && !showBookingSection && (
          <PaddedParagraph>{formParagraph}</PaddedParagraph>
        )}
        <SquareButton
          onClick={e =>
            handleSubmit(e, setShowBookingSection, showBookingSection, page)
          }
        >
          {showBookingSection ? "Hide" : "Tap To Schedule With Sheila Anne"}
        </SquareButton>
      </CenteredText>

      <BookingIframe
        showBookingSection={showBookingSection}
        src="https://squareup.com/appointments/buyer/widget/vlggwbtks6vh2m/T2G1BPTFKKDBJ"
      />
    </section>
  );
};

export { BookingSection };
