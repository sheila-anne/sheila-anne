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
  frontmatter: any;
};

export const WritingDeskPageTemplate: FC<WritingDeskProps> = ({
  content,
  contentComponent,
  frontmatter,
  image,
  imageHeadline
}) => {
  const PageContent = contentComponent || Content;
  const safeImage = image as NestedImage;

  return (
    <section>
      <BannerImage
        color={Constants.Colors.theGroveTeal}
        image={safeImage}
        title={frontmatter.pageTitle}
        imageHeadline={imageHeadline}
      />
      <PageContent content={content} />
      <BlogRollAll />
    </section>
  );
};

const WritingDeskPage = ({ location, data }) => {
  const { frontmatter } = data.markdownRemark;
  const imageHeadline = frontmatter.bannerImageHeadline;
  const bannerImage = frontmatter.bannerImage;
  return (
    <Layout location={location}>
      <SEO
        description={frontmatter.pageDescription}
        image={bannerImage.childImageSharp.fluid.src}
        imageAlt="Notes from the Writing Desk"
        title={frontmatter.pageTitle}
      />
      <WritingDeskPageTemplate
        contentComponent={HTMLContent}
        content={data.markdownRemark.html}
        frontmatter={frontmatter}
        image={bannerImage}
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
        bannerImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
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
