import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";

import { BaseForm } from "./base-form";
import { linkClickHandler } from "../../utils";
import { Input } from "./form-elements";

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
      {isSubmitSuccess && (
        <div>
          Congrats! To get your Pathfinder freebie:{" "}
          <a href={data.file.absolutePath} target="_blank" onClick={linkClickHandler}>
            Click here!
          </a>
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
