import React from "react";
import kebabCase from "lodash.kebabcase";
import { graphql, Link } from "gatsby";

import { Layout } from "../components/layout";
import Content, { HTMLContent } from "../components/Content";
import { SEO } from "../components/seo";
import { TagList } from "../components/tag-list";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      <article>
        <SEO
          description={description}
          title={`${title} | The Writing Desk | Sheila Anne`}
          type="article"
        />
        <h1>{title}</h1>
        <p>{description}</p>
        <PostContent content={content} />
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
    </section>
  );
};

const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout location={location}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
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
      }
    }
  }
`;
