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
  const ogImage = `${Constants.baseUrl}/img/sheila-anne-og-image.png`;

  return (
    <Helmet htmlAttributes={{ lang: `en` }} title={title}>
      <link
        rel="mask-icon"
        href="/static/img/safari-pinned-tab.svg"
        color={Constants.Colors.lightestBlue}
      />
      <meta name="theme-color" content="#fff" />
      <meta name="og:image" content={image ? image : ogImage} />
      <meta
        itemProp="image"
        itemScope={true}
        itemType="https://schema.org/ImageObject"
        name="og:image"
        content={image ? image : ogImage}
      />
      <meta
        name="og:image:alt"
        content={
          imageAlt
            ? imageAlt
            : "Sheila Anne - lifecoaching, yoga, inspirational writing and more."
        }
      />
      <meta name="og:type" content={!!type ? type : "business.business"} />
      <meta name="description" itemProp="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:title" content={title} />
    </Helmet>
  );
};

export { SEO };
