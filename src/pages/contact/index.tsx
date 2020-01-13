import React from "react";

import { ContactForm, Layout, SEO } from "../../components/";

export default ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Contact | Sheila Anne"
        description="Get in touch with Sheila Anne today"
      />
      <ContactForm />
    </Layout>
  );
};
