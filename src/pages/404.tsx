import React from "react";

import { Layout, SEO } from "../components";

const NotFoundPage = ({ location }: GatsbyPage) => (
  <Layout location={location}>
    <SEO description="404: Not found." location={location} title="Sheila Anne: Not found" type="website" />
    <section>
      <h1>NOT FOUND</h1>
      <p>
        Unfortunately, the place you were trying to go either no longer exists or never existed at all. Please try
        re-navigating to one of the existing Sheila Anne links using the navigation at the top of the page
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
