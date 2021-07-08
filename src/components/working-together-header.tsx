import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Constants } from "../constants";
import { PreviewCompatibleImage } from "../components";

const WorkingTogetherSections = [
  { name: "Exploration Call", href: "exploration-call" },
  { name: "Group Coaching Program", href: "nourish" },
  { name: "Private Coaching", href: "root-to-rise" },
];

const Heading = styled.h1`
  margin-top: 0.25rem;
`;

const Subheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 100;
`;

const ListContainer = styled.ol`
  align-items: center;
  justify-content: space-around;
  display: flex;

  @media (max-width: ${Constants.mobileWidth}) {
    display: block;
    text-align: center;
    margin-left: 0;
    margin-bottom: 2rem;
  }
`;

const WorkingTogetherAnchor = styled.a`
  text-decoration: none;
`;

const NonTreeListItem = styled.li`
  background-color: ${Constants.Colors.theGroveGreen};
  border: 1px solid ${Constants.Colors.theGroveGreen};
  border-radius: 1rem;
  color: #fff;
  margin-top: 1rem;
  padding-right: 1.5rem;
  &:before {
    background-image: unset !important;
  }
`;

export const WorkingTogetherHeader = () => {
  const data = useStaticQuery<{ markdownRemark: { frontmatter: { featuredImage: PreviewImage } } }>(
    WorkingTogetherHeaderQuery
  );

  return (
    <>
      <header>
        <nav>
          <Subheading>Ready — Set — Go! Here are my offerings:</Subheading>
          <ListContainer>
            {WorkingTogetherSections.map(item => (
              <WorkingTogetherAnchor href={`#${item.href}`} key={item.name} title={item.name}>
                <NonTreeListItem>{item.name}</NonTreeListItem>
              </WorkingTogetherAnchor>
            ))}
          </ListContainer>
        </nav>
      </header>
      <Heading>Working Together</Heading>
      <Subheading>
        Work with me if you’d like to create a life that is inspiring, energizing, and aligned. I’m here to support you
        to confidently step into your next-level self and thrive in your body, mind, and soul.
      </Subheading>
      <Subheading as="h3">Is this you?</Subheading>
      <p>
        Awaiting the day that you'll play by your own rules and courageously take action? You are not alone, and yes,
        there is a way to make it happen.
      </p>
      <PreviewCompatibleImage
        imageInfo={data.markdownRemark.frontmatter.featuredImage}
        imageAlt="Working together with Sheila Anne"
        title="Work with me to achieve your dream life"
      />
    </>
  );
};

const WorkingTogetherHeaderQuery = graphql`
  query WorkingTogetherHeaderQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "working-together" } }) {
      frontmatter {
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
