import React, { FC } from "react";

import { Layout, SEO } from "../components";

const NotFoundPage: FC<GatsbyPage> = ({ location }) => (
  <Layout location={location}>
    <SEO
      type="website"
      description="404: Not found."
      title="Sheila Anne: Not found"
    />
    <section>
      <h1>NOT FOUND</h1>
      <p>
        Unfortunately, the place you were trying to go either no longer exists
        or never existed at all. Please try re-navigating to one of the existing
        Sheila Anne links using the navigation at the top of the page
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
