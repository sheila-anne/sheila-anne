import React, { FC } from "react";
import Helmet from "react-helmet";

import { Constants } from "../constants";

type SEOProps = {
  description: string;
  image?: string;
  imageAlt?: string;
  title: string;
  type?: "article" | "website";
};

type MetaProperties = {
  content: string;
  itemprop?: string;
  itemscope?: string;
  itemtype?: string;
  property: string;
};

const getMetaList = ({
  description,
  image,
  imageAlt,
  title,
  type
}: SEOProps) => {
  const ogImage = "/img/sheila-anne-og-image.png";
  const metaList = [
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: description
    },
    {
      property: `description`,
      itemprop: `description`,
      content: description
    },
    {
      property: `og:type`,
      content: !!type ? type : "business.business"
    },
    {
      property: `og:image`,
      content: image ? image : ogImage
    },
    {
      property: `image`,
      itemprop: `image`,
      content: image ? image : ogImage,
      itemscope: "true",
      itemtype: "https://schema.org/ImageObject"
    },
    {
      property: `og:image:alt`,
      content: imageAlt
        ? imageAlt
        : "Sheila Anne - lifecoaching, yoga, inspirational writing and more."
    }
  ] as MetaProperties[];
  return metaList;
};

const SEO: FC<SEOProps> = ({ description, image, imageAlt, title, type }) => {
  const metaList = getMetaList({ description, image, imageAlt, title, type });
  return (
    <Helmet htmlAttributes={{ lang: `en` }} meta={metaList} title={title}>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/img/favicon-16x16.png"
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href="/img/safari-pinned-tab.svg"
        color={Constants.Colors.lightestBlue}
      />
      <meta name="theme-color" content="#fff" />
    </Helmet>
  );
};

export { SEO };
