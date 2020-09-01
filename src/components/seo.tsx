import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet-async";
import React from "react";

type SEOProps = {
  description: string;
  image?: string;
  imageAlt?: string;
  isPreview?: boolean;
  location: Location;
  title: string;
  type?: "article" | "website";
};

const siteQuery = graphql`
  query siteInfo {
    site {
      siteMetadata {
        siteUrl
        social {
          facebook
          instagram
        }
      }
    }
    backupImage: file(relativePath: { eq: "sheila-anne-og-image.png" }) {
      publicURL
    }
  }
`;

export const SEO = ({ description, image, imageAlt, isPreview, location, title, type }: SEOProps) => {
  if (isPreview) {
    return null;
  }
  const { backupImage, site } = useStaticQuery(siteQuery);
  const ogImage = !!image ? image : backupImage.publicURL;
  const pathname = location && location.pathname;

  const schemaGraph = [
    {
      "@type": "Organization",
      "@id": `${site.siteMetadata.siteUrl}/#organization`,
      name: "Sheila Anne",
      url: site.siteMetadata.siteUrl,
      sameAs: [site.siteMetadata.social.facebook, site.siteMetadata.social.instagram],
      logo: {
        "@type": "ImageObject",
        "@id": `${site.siteMetadata.siteUrl}/#logo`,
        url: backupImage.publicURL,
        caption: "Life coaching with Sheila Anne.",
      },
      image: {
        "@type": "ImageObject",
        "@id": `${ogImage}/#image`,
        url: ogImage,
        caption: !!imageAlt ? imageAlt : "Life coaching with Sheila Anne.",
      },
    },

    {
      "@type": "WebSite",
      "@id": `${site.siteMetadata.siteUrl}${pathname}#website`,
      url: `${site.siteMetadata.siteUrl}${pathname}`,
      name: title,
      publisher: {
        "@id": `${site.siteMetadata.siteUrl}/#organization`,
      },
    },
  ] as any[];

  schemaGraph.push({
    "@type": "WebPage",
    "@id": `${site.siteMetadata.siteUrl}${pathname}#webpage`,
    url: `${site.siteMetadata.siteUrl}${pathname}`,
    inLanguage: `en-US`,
    about: { "@id": `${site.siteMetadata.siteUrl}/#organization` },
    description: description,
    headline: title,
    primaryimageOfPage: { "@id": `${ogImage}/#image` },
  });

  const schemaOrgWebPage = {
    "@context": "https://schema.org",
    "@graph": schemaGraph,
  };

  return (
    <Helmet htmlAttributes={{ lang: `en` }} title={title}>
      <meta property="theme-color" content="#fff" />
      <meta property="og:image" content={ogImage} />
      <meta
        itemProp="image"
        itemScope={true}
        itemType="https://schema.org/ImageObject"
        property="og:image"
        content={ogImage}
      />
      <meta
        property="og:image:alt"
        content={!!imageAlt ? imageAlt : "Sheila Anne - lifecoaching, yoga, inspirational writing and more."}
      />
      <meta property="canonical" content={site.siteMetadata.siteUrl + pathname} />
      <meta property="og:type" content={!!type ? type : "business.business"} />
      <meta property="description" itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
    </Helmet>
  );
};
