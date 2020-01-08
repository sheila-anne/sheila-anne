import React, { FC } from "react";
import Helmet from "react-helmet";

type SEOProps = {
  description: string;
  image?: string;
  imageAlt?: string;
  title: string;
  type: "article" | "website";
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
      content: type
    }
  ] as MetaProperties[];
  image &&
    metaList.push(
      {
        property: `og:image`,
        content: image
      },
      {
        property: `image`,
        itemprop: `image`,
        content: image,
        itemscope: "true",
        itemtype: "https://schema.org/ImageObject"
      }
    );
  imageAlt &&
    metaList.push({
      property: `og:image:alt`,
      content: imageAlt
        ? imageAlt
        : "Sheila Anne - lifecoaching, yoga, inspirational writing and more."
    });
  return metaList;
};

const SEO: FC<SEOProps> = ({ description, image, imageAlt, title, type }) => {
  const metaList = getMetaList({ description, image, imageAlt, title, type });
  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      meta={metaList}
      title={title}
    ></Helmet>
  );
};

export { SEO };
