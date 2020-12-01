import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

import { BaseForm } from "./base-form";
import { Input } from "./form-elements";
import { linkClickHandler } from "../../utils";
import { SmartLink } from "../smart-link";
import { Youtube } from "../youtube";

type FileLocation = {
  publicURL: string;
};
type FreebieFile = {
  flashcards: FileLocation;
  wallpaper: FileLocation;
};

export const FreebieForm = () => {
  const data = useStaticQuery<FreebieFile>(FreebieFormQuery);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  return (
    !isSubmitSuccess ? (
    <BaseForm
      formDescription="You're moments away from getting your free download!"
      formTitle="Enter your Positivity Pack code"
      formRoute="/.netlify/functions/freebie-handler"
      isSubmitSuccess={setIsSubmitSuccess}
      page="freebie"
      submitText="Submit"
      trackArgs={{ eventName: "SubmitApplication", params: { content_name: "POSITIVITY_PACK" } }}
    >
        <Input
          type="text"
          id="code"
          name="code"
          required={true}
          placeholder="Enter code from email"
          title="Enter code from email"
        />
      </BaseForm>
      ) :
       !!data.flashcards ? (
        <>
          <div>Success! Click each of the links to get your:</div>
          <ul>
            <li>
            <a href={data.flashcards.publicURL} download={true} onClick={linkClickHandler}>
              Affirmation deck
            </a></li>
            <li>
            <a href={data.wallpaper.publicURL} download={true} onClick={linkClickHandler}>
              Phone wallpapers
            </a></li>
          </ul>
          <div style={{marginBottom: "1rem"}}>The guided meditation link is also in your email inbox, but you can enjoy the meditation here as well:</div>
          <Youtube url="nzn9x-yqS0s" />
        </>
      ) :
       (
        <div>
          That's the right code, but there was an unexpected error. Please{" "}
          <SmartLink to="/contact/">contact me</SmartLink> to let me know!
        </div>
      )
  );
};

const FreebieFormQuery = graphql`
  query FreebieFormQuery {
    flashcards: file(relativePath: { eq: "Affirmation flashcards - Sheila Anne Positivity Pack.pdf" }) {
      publicURL
    }
    wallpaper: file(relativePath: { eq: "Phone wallpaper - Sheila Anne Positivity Pack.pdf" }) {
      publicURL
    }
  }
`;
