import { Box, Grid, Anchor, Text } from "grommet";
import { Favorite, Chat } from "grommet-icons";
import React, { FC } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { CenteredText } from "./centered";
import { SmartLink } from "./smart-link";

type InstagramPictureProps = {
  comments: string;
  id: string;
  likes: string;
  localFile: NestedImage;
};

type InstagramNodeProps = {
  node: InstagramPictureProps;
};

type InstagramProps = {
  insta: {
    edges: InstagramNodeProps[];
  };
  instagramUrl: string;
};

const Content = styled(Box)`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Info = styled(Box)`
  opacity: 0;
  transition: all 0.4s ease 0s;
`;

const OpaqueOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease 0s;
`;

const Wrapper = styled(Anchor)`
  box-shadow: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    ${OpaqueOverlay} {
      opacity: 1;
    }
    ${Info} {
      opacity: 1;
    }
  }
`;

const InstagramPicture = ({ node }) => (
  <Wrapper href={`https://www.instagram.com/p/${node.id}/`}>
    <OpaqueOverlay />
    <Img fluid={node.localFile.childImageSharp.fluid} loading="lazy" />
    <Content justify="center">
      <Info gap="medium" alignSelf="center" direction="row">
        <Favorite color="white" />
        <Text color="white">{node.likes}</Text>
        <Chat color="white" />
        <Text color="white">{node.comments}</Text>
      </Info>
    </Content>
  </Wrapper>
);

export const Instagram: FC<InstagramProps> = ({ insta, instagramUrl }) => (
  <section>
    <CenteredText>
      <h1>Don't Miss A Beat</h1>
      <div>
        Follow along on <SmartLink to={instagramUrl}> Instagram</SmartLink> for
        motivation, inspiration, and yoga flows:
      </div>
    </CenteredText>
    <Grid
      justifyContent="start"
      gap={"small"}
      columns={[`1fr`, `1fr`, `1fr`]}
      margin="1rem 0 0 0"
    >
      {insta.edges.map(
        instagram =>
          instagram.node.localFile &&
          instagram.node.localFile.childImageSharp && (
            <InstagramPicture key={instagram.node.id} node={instagram.node} />
          )
      )}
    </Grid>
  </section>
);
