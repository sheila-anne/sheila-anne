import { graphql } from "gatsby";

export const logoQuery = graphql`
  fragment BlogPosts on MarkdownRemarkConnection {
    posts: edges {
      node {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          featuredpost
          featuredImage {
            publicURL
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
