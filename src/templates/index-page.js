import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import { Layout } from "../components/layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

const FullWidthImage = styled.div`
  height: 400px;
  background-attachment: fixed;
  background-size: cover;
  background-position: left top;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

const ImageHeadlineContainer = styled.h1`
  display: flex;
  height: 150px;
  line-height: 1;
  justify-content: space-around;
  flex-direction: column;
`;

const FlexColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
  margin-bottom: 0.75rem;
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <FullWidthImage
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <ImageHeadlineContainer
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: "#4d80e4 0.5rem 0px 0px, #4d80e4 -0.5rem 0px 0px",
            backgroundColor: "#4d80e4",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            width: "50%"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: "#4d80e4 0.5rem 0px 0px, #4d80e4 -0.5rem 0px 0px",
            backgroundColor: "#4d80e4",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3>
      </ImageHeadlineContainer>
    </FullWidthImage>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <FlexColumns>
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FlexColumns>
        </div>
      </div>
    </section>
  </div>
);

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
