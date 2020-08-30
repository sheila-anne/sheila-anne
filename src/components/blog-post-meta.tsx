import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Constants } from "../constants";

type BlogPostMetaProps = {
  datePublished: string;
  featuredImage?: NestedImage;
  isPreview?: boolean;
};

export const BlogPostMeta = ({ datePublished, featuredImage, isPreview }: BlogPostMetaProps) => {
  const { logo } = useStaticQuery(blogPostMetaQuery);
  if (isPreview) {
    return null;
  }

  return (
    <>
      <div itemScope={true} itemType="https://schema.org/Organization" itemProp="publisher" key="publisher">
        <meta itemProp="name" content="Sheila Anne" key="publisherName" id="publisherName" />
        <meta itemProp="url" content={Constants.baseUrl} itemID={Constants.baseUrl} key="publisherUrl" />
        <div itemScope={true} itemType="https://schema.org/ImageObject" itemProp="logo" key="logo">
          <meta
            itemID={`${Constants.baseUrl}${logo?.childImageSharp?.original.src}`}
            itemProp="url"
            content={`${Constants.baseUrl}${logo?.childImageSharp?.original.src}`}
            key="logoUrl"
          />
        </div>
      </div>
      <meta itemProp="dateModified" content={new Date().toLocaleDateString()} key="dateModified" />
      <meta itemProp="datePublished" content={datePublished} key="datePublished" />
      <div itemProp="author" itemType="https://schema.org/Person" itemScope={true}>
        <meta itemProp="name" content="Sheila Anne Murray" key="authorPerson" />
      </div>
      <meta itemProp="image" content={`${Constants.baseUrl}${featuredImage?.childImageSharp?.fluid.src}`} key="image" />
    </>
  );
};

export const blogPostMetaQuery = graphql`
  query BlogPostMeta {
    logo: file(relativePath: { eq: "sheila-anne-logo.jpg" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`;
