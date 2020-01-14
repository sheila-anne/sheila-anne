import React, { FC } from "react";
import { graphql } from "gatsby";

import {
  BannerImage,
  BlogRollAll,
  Content,
  HTMLContent,
  Layout,
  SEO,
  PreviewCompatibleBanner
} from "../components";
import { Constants } from "../constants";

type WritingDeskProps = BannerImagePreviewPage & {
  content: string;
  contentComponent?: FC<any>;
};

export const WritingDeskPageTemplate: FC<WritingDeskProps> = ({
  content,
  contentComponent,
  image,
  imageHeadline,
  isPreview
}) => {
  const PageContent = contentComponent || Content;
  const safeImage = image as NestedImage;

  const bannerImage = (
    <BannerImage
      color={Constants.Colors.theGroveTeal}
      image={safeImage}
      title="Welcome to The Writing Desk"
      imageHeadline={imageHeadline}
    />
  );

  return (
    <section>
      <PreviewCompatibleBanner
        Component={bannerImage}
        image={image}
        isPreview={isPreview}
      />
      <PageContent content={content} />
      <BlogRollAll />
    </section>
  );
};

const WritingDeskPage = ({ location, data }) => {
  const imageData = data.image;
  const imageHeadline = data.markdownRemark.frontmatter.bannerImageHeadline;
  return (
    <Layout location={location}>
      <SEO
        description="Excerpts from the Writing Desk of Sheila Anne"
        image={data.image.childImageSharp.fluid.src}
        imageAlt="Notes from the Writing Desk"
        title={`${data.markdownRemark.frontmatter.title} | Sheila Anne`}
      />
      <WritingDeskPageTemplate
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
        image={imageData}
        imageHeadline={imageHeadline}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query TheWritingDeskPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImageHeadline
        title
      }
    }

    image: file(relativePath: { eq: "blog-index.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default WritingDeskPage;
