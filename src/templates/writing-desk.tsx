import React, { FC } from "react";
import { graphql } from "gatsby";

import {
  BannerImage,
  BlogRollAll,
  Content,
  HTMLContent,
  Layout,
  SEO
} from "../components";
import { Constants } from "../constants";

type WritingDeskProps = BannerImagePreviewPage & {
  content: string;
  contentComponent?: FC<any>;
  pageTitle: string;
};

export const WritingDeskPageTemplate: FC<WritingDeskProps> = ({
  content,
  contentComponent,
  image,
  imageHeadline,
  pageTitle
}) => {
  const PageContent = contentComponent || Content;
  const safeImage = image as NestedImage;

  return (
    <section>
      <PageContent content={content} />
      <BannerImage
        color={Constants.Colors.theGroveTeal}
        image={safeImage}
        title={pageTitle}
        imageHeadline={imageHeadline}
      />
      <BlogRollAll />
    </section>
  );
};

const WritingDeskPage = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;
  const bannerImage = frontmatter.bannerImage;
  return (
    <Layout location={location}>
      <SEO
        description={frontmatter.pageDescription}
        image={bannerImage.childImageSharp.fluid.src}
        imageAlt="Notes from the Writing Desk"
        location={location}
        title={frontmatter.pageTitle}
      />
      <WritingDeskPageTemplate
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
        image={bannerImage}
        imageHeadline={frontmatter.bannerImageHeadline}
        pageTitle={frontmatter.pageTitle}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query TheWritingDeskPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerImageHeadline
        pageDescription
        pageTitle
      }
    }
  }
`;

export default WritingDeskPage;
