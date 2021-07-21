import { graphql } from "gatsby";
import React from "react";

import { Layout, NourishForm, SEO } from "../components";

const NourishFormPage = ({
  data: {
    markdownRemark: { frontmatter },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO description={frontmatter.pageDescription} location={location} title={frontmatter.pageTitle} />
    <NourishForm page="nourish" submitText="Apply now!" />
  </Layout>
);

export default NourishFormPage;

export const pageQuery = graphql`
  query NourishFormPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        pageDescription
        pageTitle
      }
    }
  }
`;
