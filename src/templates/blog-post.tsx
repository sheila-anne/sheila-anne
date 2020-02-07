import React from "react";
import kebabCase from "lodash.kebabcase";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import { Content, Layout, HTMLContent, SEO, TagList } from "../components";
import { Constants } from "../constants";

const Smalltext = styled.small`
  margin-bottom: 1rem;
  @media (max-width: ${Constants.mobileWidth}) {
    font-size: 12px;
  }
`;

const BlogPostMeta = ({ featuredImage, logo }) => (
  <>
    <div
      itemScope={true}
      itemType="https://schema.org/Organization"
      itemProp="publisher"
      key="publisher"
    >
      <meta
        itemProp="name"
        content="Sheila Anne"
        key="publisherName"
        id="publisherName"
      />
      <meta
        itemProp="url"
        content={Constants.baseUrl}
        itemID={Constants.baseUrl}
        key="publisherUrl"
      />
      <div
        itemScope={true}
        itemType="https://schema.org/ImageObject"
        itemProp="logo"
        key="logo"
      >
        <meta
          itemID={`${Constants.baseUrl}${logo?.childImageSharp?.fluid.src}`}
          itemProp="url"
          content={`${Constants.baseUrl}${logo?.childImageSharp?.fluid.src}`}
          key="logoUrl"
        />
      </div>
    </div>
    <meta
      itemProp="image"
      content={`${Constants.baseUrl}${featuredImage?.childImageSharp?.fluid.src}`}
      key="image"
    />
    <meta
      itemProp="dateModified"
      content={new Date().toLocaleDateString()}
      key="dateModified"
    />
  </>
);

export const BlogPostTemplate = ({
  content,
  contentComponent,
  datePublished,
  description,
  featuredImage,
  logo,
  tags,
  title
}) => {
  const PostContent = contentComponent || Content;

  const navTitle = `${title} | The Writing Desk | Sheila Anne`;

  return (
    <article itemType="https://schema.org/BlogPosting" itemScope={true}>
      <SEO description={description} title={navTitle} type="article" />
      <BlogPostMeta logo={logo} featuredImage={featuredImage} />
      <h1 itemProp="name headline">{title}</h1>
      <Smalltext>
        Published <span itemProp="datePublished">{datePublished}</span> by{" "}
        <span
          itemProp="author"
          itemType="https://schema.org/Person"
          itemScope={true}
        >
          <span itemProp="name">Sheila Murray</span>{" "}
        </span>
      </Smalltext>
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
  const { markdownRemark: post, logo } = data;

  return (
    <Layout location={location}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        datePublished={post.frontmatter.date}
        description={post.frontmatter.description}
        featuredImage={post.frontmatter.featuredImage}
        logo={logo}
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
          childImageSharp {
            fluid(maxWidth: 600, quality: 100, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    logo: file(relativePath: { eq: "sheila-anne-coaching-header.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;
