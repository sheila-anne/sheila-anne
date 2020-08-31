import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

import { BaseForm } from "./base-form";
import { linkClickHandler } from "../../utils";
import { Input } from "./form-elements";
import { SmartLink } from "../smart-link";

type PathfinderFile = {
  file: {
    absolutePath: string;
  };
};

export const FreebieForm = () => {
  const data = useStaticQuery<PathfinderFile>(PathfinderQuery);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  return (
    <BaseForm
      formDescription="You're moments away from getting your free download!"
      formTitle="Enter your Pathfinder code"
      formRoute="/.netlify/functions/freebie-handler"
      isSubmitSuccess={setIsSubmitSuccess}
      page="freebie"
      submitText="Submit"
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
          <a href={data.file.absolutePath} target="_blank" onClick={linkClickHandler}>
            Click here!
          </a>
        </div>
      )}
      {isSubmitSuccess && !data.file && (
        <div>
          That's the right code, but there was an unexpected error. Please{" "}
          <SmartLink to="/contact">contact me</SmartLink> to let me know!
        </div>
      )}
    </BaseForm>
  );
};

const PathfinderQuery = graphql`
  query PathfinderQuery {
    file(relativePath: { eq: "sheila-anne-pathfinder.pdf" }) {
      absolutePath
    }
  }
`;
