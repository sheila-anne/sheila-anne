import React from "react";
import styled from "styled-components";

import { Constants } from "../../constants";
import { BlogRollAll } from "../../components/blog-roll-all";
import { Layout } from "../../components/layout";

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
  box-shadow: 0.5rem 0 0 ${Constants.Colors.lighterBlue},
    -0.5rem 0 0 ${Constants.Colors.lighterBlue};
  background-color: ${Constants.Colors.lighterBlue};
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-around;
  line-height: 1;
  padding: 1rem;
`;

const BlogIndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <FullWidthImage
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`
        }}
      >
        <ImageHeadlineContainer>Latest Stories</ImageHeadlineContainer>
      </FullWidthImage>
      <section>
        <BlogRollAll />
      </section>
    </Layout>
  );
};

export default BlogIndexPage;
