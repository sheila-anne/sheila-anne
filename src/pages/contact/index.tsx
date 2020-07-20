import React from "react";

import { ContactForm, Layout, SEO } from "../../components/";

export default ({ location }) => {
  return (
    <Layout location={location} itemType="https://schema.org/ContactPage">
      <SEO description="Get in touch with Sheila Anne today" location={location} title="Contact | Sheila Anne" />
      <ContactForm
        backgroundColor="#FFF"
        formTitle="Let's get in touch"
        formDescription="Have further questions for me? Don't hesitate to reach out, let's get to know one another:"
        page="contact"
        submitText="Submit!"
      />
    </Layout>
  );
};
