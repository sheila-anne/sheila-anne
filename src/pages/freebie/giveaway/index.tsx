import React from "react";

import { FreebieForm, Layout, SEO } from "../../../components";

export default ({ location }: { location: Location }) => (
  <Layout location={location}>
    <SEO
      description="Confirm your secret code received by email in order to get the Positivity Pack freebie!"
      location={location}
      title="Get your Positivity Pack freebie! | Sheila Anne"
    />
    <FreebieForm />
  </Layout>
);
