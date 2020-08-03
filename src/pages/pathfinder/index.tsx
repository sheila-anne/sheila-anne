import React, { useLayoutEffect } from "react";

import { Constants } from "../../constants";
import { OptInForm, Layout, SEO } from "../../components/";

export default ({ location }: { location: Location }) => {
  useLayoutEffect(() => {
    window.sessionStorage.setItem(Constants.textBannerKey, "1");
  }, []);
  return (
    <Layout location={location}>
      <SEO
        description="Sign up to get Sheila Anne's Pathfinder freebie."
        location={location}
        title="Pathfinder | Sheila Anne"
      />
      <OptInForm
        backgroundColor="#FFF"
        formTitle="Don't miss out!"
        formDescription="This is the pathfinder freebie"
        formParagraph="You could have some more text here if you'd like!"
        page="opt-in"
        submitText="Yes, sign me up!"
      />
    </Layout>
  );
};
