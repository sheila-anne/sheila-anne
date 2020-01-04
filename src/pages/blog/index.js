import React from "react";
import styled from "styled-components";

import { Layout } from "../../components/layout";
import { BlogRoll } from "../../components/BlogRoll";

const FullWidthImage = styled.div`
  width: 100vw;
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

const BlogIndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <FullWidthImage
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`
        }}
      >
        <ImageHeadlineContainer
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
            backgroundColor: "#f40",
            color: "white",
            padding: "1rem"
          }}
        >
          Latest Stories
        </ImageHeadlineContainer>
      </FullWidthImage>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndexPage;
