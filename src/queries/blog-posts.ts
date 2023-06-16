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
              gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, JPG], width: 100, layout: FIXED)
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`;
