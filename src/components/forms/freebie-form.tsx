import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

import { BaseForm } from "./base-form";
import { Input } from "./form-elements";
import { linkClickHandler } from "../../utils";
import { SmartLink } from "../smart-link";

type PathfinderFile = {
  file: {
    publicURL: string;
  };
};

export const FreebieForm = () => {
  const data = useStaticQuery<PathfinderFile>(FreebieFormQuery);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  return (
    <BaseForm
      formDescription="You're moments away from getting your free download!"
      formTitle="Enter your Pathfinder code"
      formRoute="/.netlify/functions/freebie-handler"
      isSubmitSuccess={setIsSubmitSuccess}
      page="freebie"
      submitText="Submit"
      trackArgs={{ eventName: "SubmitApplication", params: { content_name: "PATHFINDER" } }}
    >
      {!isSubmitSuccess && (
        <Input
          type="text"
          id="code"
          name="code"
          required={true}
          placeholder="Enter code from email"
          title="Enter code from email"
        />
      )}
      {isSubmitSuccess && !!data.file && (
        <div>
          Congrats! To get your Pathfinder freebie:{" "}
          <a href={data.file.publicURL} download={true} onClick={linkClickHandler}>
            Click here!
          </a>
        </div>
      )}
      {isSubmitSuccess && !data.file && (
        <div>
          That's the right code, but there was an unexpected error. Please{" "}
          <SmartLink to="/contact/">contact me</SmartLink> to let me know!
        </div>
      )}
    </BaseForm>
  );
};

const FreebieFormQuery = graphql`
  query FreebieFormQuery {
    file(relativePath: { eq: "sheila-anne-pathfinder.pdf" }) {
      publicURL
    }
  }
`;
