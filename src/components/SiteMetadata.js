import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            author
            description
            social {
              instagram
            }
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
