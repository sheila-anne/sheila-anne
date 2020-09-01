import { graphql } from "gatsby";
import React from "react";

import {
  Layout,
  FlexContainer,
  FlexColSplitImage,
  HalfColumn,
  OptInForm,
  PreviewCompatibleImage,
  SEO,
} from "../../components/";

export default ({ data, location }: GatsbyPage) => {
  return (
    <Layout location={location}>
      <SEO
        description="Sign up to get Sheila Anne's Pathfinder freebie."
        location={location}
        title="Pathfinder | Sheila Anne"
      />
      <FlexContainer justifyContent="center" margin="1rem 0">
        <HalfColumn>
          <FlexColSplitImage>
            <PreviewCompatibleImage
              imageInfo={{
                alt: "A guide entitled PATHFINDER",
                childImageSharp: data.pathfinder.childImageSharp,
              }}
              imageAlt="A book entitled Pathfinder"
              title="The Pathfinder freebie"
            />
          </FlexColSplitImage>
        </HalfColumn>
        <HalfColumn>
          <OptInForm
            backgroundColor="#FFF"
            formTitle="Grab Your Free Copy Of PATHFINDER!"
            formDescription="10 key questions to help you find your path:"
            page="opt-in"
            submitText="Send me my free copy!"
          />
        </HalfColumn>
      </FlexContainer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PathfinderQuery {
    pathfinder: file(relativePath: { eq: "freebie-pathfinder-teaser-image.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
