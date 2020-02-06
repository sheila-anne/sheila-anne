import React from "react";

import { Layout, SEO, SubscribeForm } from "../../components/";

export default ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Contact | Sheila Anne"
        description="Get in touch with Sheila Anne today"
      />
      <SubscribeForm
        backgroundColor="#FFF"
        formTitle="Let's get in touch"
        formDescription="Have further questions for me? Don't hesitate to reach out, let's get to know one another:"
        page="contact"
      />
    </Layout>
  );
};
