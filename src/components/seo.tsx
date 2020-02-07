import { Helmet } from "react-helmet";
import React, { FC } from "react";

import { Constants } from "../constants";

type SEOProps = {
  description: string;
  image?: string;
  imageAlt?: string;
  location: Location;
  title: string;
  type?: "article" | "website";
};

const SEO: FC<SEOProps> = ({
  description,
  image,
  imageAlt,
  location,
  title,
  type
}) => {
  const fallbackImage = `${Constants.baseUrl}/img/sheila-anne-og-image.png`;
  const ogImage = !!image ? Constants.baseUrl + image : fallbackImage;

  const schemaGraph = [
    {
      "@type": "Organization",
      "@id": `${Constants.baseUrl}/#organization`,
      name: "Sheila Anne",
      url: Constants.baseUrl,
      sameAs: [
        "https://facebook.com/sheilaannecoaching",
        "https://instagram.com/shetravls"
      ],
      logo: {
        "@type": "ImageObject",
        "@id": `${Constants.baseUrl}/#logo`,
        url: fallbackImage,
        caption: "Life coaching with Sheila Anne."
      },
      image: {
        "@type": "ImageObject",
        "@id": `${ogImage}/#image`,
        url: ogImage,
        caption: !!imageAlt ? imageAlt : "Life coaching with Sheila Anne."
      }
    },

    {
      "@type": "WebSite",
      "@id": `${Constants.baseUrl}${location.pathname}#website`,
      url: `${Constants.baseUrl}${location.pathname}`,
      name: title,
      publisher: {
        "@id": `${Constants.baseUrl}/#organization`
      }
    }
  ] as any[];

  schemaGraph.push({
    "@type": "WebPage",
    "@id": `${Constants.baseUrl}${location.pathname}#webpage`,
    url: `${Constants.baseUrl}${location.pathname}`,
    inLanguage: `en-US`,
    about: { "@id": `${Constants.baseUrl}/#organization` },
    description: description,
    headline: title,
    primaryimageOfPage: { "@id": `${ogImage}/#image` }
  });

  const schemaOrgWebPage = {
    "@context": "https://schema.org",
    "@graph": schemaGraph
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
        content={
          !!imageAlt
            ? imageAlt
            : "Sheila Anne - lifecoaching, yoga, inspirational writing and more."
        }
      />
      <meta
        property="canonical"
        content={Constants.baseUrl + location.pathname}
      />
      <meta property="og:type" content={!!type ? type : "business.business"} />
      <meta
        property="description"
        itemProp="description"
        content={description}
      />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
    </Helmet>
  );
};

export { SEO };
