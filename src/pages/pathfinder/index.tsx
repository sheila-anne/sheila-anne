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
            formTitle="Grab Your Digital Copy Of PATHFINDER!"
            formDescription="You've outgrown your current lifestyle, relationship, or career ... so what's next?"
            formParagraph="PATHFINDER offers the 10 key questions you need to blaze your path forward:"
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
    pathfinder: file(relativePath: { eq: "freebie-pathfinder-teaser-image.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
