import React, { FC } from "react";
import { Helmet } from "react-helmet";

import { Constants } from "../constants";

type SEOProps = {
  description: string;
  image?: string;
  imageAlt?: string;
  title: string;
  type?: "article" | "website";
};

const SEO: FC<SEOProps> = ({ description, image, imageAlt, title, type }) => {
  const fallbackImage = `${Constants.baseUrl}/img/sheila-anne-og-image.png`;
  const ogImage = !!image ? Constants.baseUrl + image : fallbackImage;

  return (
    <Helmet htmlAttributes={{ lang: `en` }} title={title}>
      <link
        rel="mask-icon"
        href="/img/safari-pinned-tab.svg"
        color={Constants.Colors.lightestBlue}
      />
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
      <meta property="og:type" content={!!type ? type : "business.business"} />
      <meta
        property="description"
        itemProp="description"
        content={description}
      />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
    </Helmet>
  );
};

export { SEO };
