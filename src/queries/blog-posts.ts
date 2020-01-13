import { graphql } from "gatsby";

export const logoQuery = graphql`
  fragment BlogPosts on MarkdownRemarkConnection {
    posts: edges {
      node {
        excerpt(pruneLength: 150)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          featuredpost
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
