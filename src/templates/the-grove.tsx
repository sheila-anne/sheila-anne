import { graphql } from "gatsby";
import React from "react";

import { Constants } from "../constants";
import {
  BannerImage,
  BlogRoll,
  Content,
  FlexContainer,
  FlexColumn,
  FlexImage,
  HTMLContent,
  Layout,
  SEO,
  SubscribeForm
} from "../components";

export const TheGroveTemplate = ({ content, contentComponent, data }) => {
  const { frontmatter } = data.markdownRemark;
  const PageContent = contentComponent || Content;
  const { allMarkdownRemark } = data as BlogPostsGraphql;

  return (
    <section>
      <BannerImage
        image={frontmatter.bannerImage}
        title="Life Coaching in The Grove"
        imageHeadline={frontmatter.imageHeadline}
        moveHeadlineOnMobile={true}
      />
      <PageContent
        backgroundColor={Constants.Colors.theGroveGreenGray}
        content={content}
        margin="0 0 1rem 0"
        padding="5px"
      />
      <FlexContainer>
        <FlexColumn>
          <FlexImage
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
            title="Schedule a free discovery call today!"
            alt="Sheila Anne Murray in the mountains of Switzerland"
          />
        </FlexColumn>
        <FlexColumn backgroundColor={Constants.Colors.theGroveLightGreen}>
          <SubscribeForm
            backgroundColor="#fff"
            formDescription={frontmatter.formSubHeadline}
            formParagraph={frontmatter.formParagraph}
            formTitle={frontmatter.formHeadline}
            page="theGrove"
          />
        </FlexColumn>
      </FlexContainer>
      {allMarkdownRemark.posts.length > 0 && (
        <BlogRoll posts={allMarkdownRemark.posts} />
      )}
    </section>
  );
};

const TheGrove = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <SEO
        title="Life Coaching In The Grove | Sheila Anne"
        description="Discover how to supercharge your life, focus your mental clarity, and balance your ambitions with the ability to be present with Sheila Anne Life Coaching"
        image={post.frontmatter.bannerImage.childImageSharp.fluid.src}
        imageAlt={post.frontmatter.imageHeadline}
      />
      <TheGroveTemplate
        contentComponent={HTMLContent}
        content={post.html}
        data={data}
      />
    </Layout>
  );
};

export default TheGrove;

export const pageQuery = graphql`
  query TheGrovePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        bannerImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        formHeadline
        formSubHeadline
        formParagraph
        imageHeadline
        title
      }
    }

    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { eq: "the grove" } } }
    ) {
      ...BlogPosts
    }
  }
`;
