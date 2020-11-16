import React from "react";
import styled from "styled-components";
import Replies from "../../components/Replies/Replies";

const PhotoPost = (props) => {
  return (
    <Wrapper>
      <Head></Head>
      <Content></Content>
      <Replies />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Head = styled.div``;
const Content = styled.div``;
export default PhotoPost;
