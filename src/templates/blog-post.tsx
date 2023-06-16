import React from "react";
import kebabCase from "lodash.kebabcase";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import { BlogPostMeta, Content, Layout, HTMLContent, SEO, Share, TagList } from "../components";
import { Constants } from "../constants";
import { getImage } from "gatsby-plugin-image";

const Smalltext = styled.small`
  margin-bottom: 1rem;
  @media (max-width: ${Constants.mobileWidth}) {
    font-size: 12px;
  }
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  datePublished,
  description,
  featuredImage,
  location,
  ogImage,
  tags,
  title,
  isPreview = false,
}) => {
  const PostContent = contentComponent || Content;

  const navTitle = `${title} | The Writing Desk | Sheila Anne`;

  return (
    <article itemType="https://schema.org/BlogPosting" itemScope={true}>
      <SEO
        description={description}
        isPreview={isPreview}
        image={ogImage?.publicURL}
        imageAlt={title}
        location={location}
        title={navTitle}
        type="article"
      />
      <BlogPostMeta datePublished={datePublished} featuredImage={featuredImage} isPreview={isPreview} />
      <h1 itemProp="name headline">{title}</h1>
      <Smalltext>Published {datePublished} by Sheila Anne Murray</Smalltext>
      <Share />
      <PostContent itemProp="articleBody mainEntityOfPage" content={content} />
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <h4>Tags</h4>
          <TagList>
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </TagList>
        </div>
      ) : null}
    </article>
  );
};

const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        datePublished={post.frontmatter.date}
        description={post.frontmatter.description}
        featuredImage={getImage(post.frontmatter.featuredImage)}
        location={location}
        ogImage={post.frontmatter.ogImage}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 600, height: 200, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG])
          }
        }
        ogImage: featuredImage {
          publicURL
        }
      }
    }
  }
`;
