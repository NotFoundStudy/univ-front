import React from "react";
import styled from "styled-components";
import PostDetail from "../../../components/Post/PostDetail";

const NoticeDetail = (props) => {
  const { item } = props;

  return (
    <Wrapper>
      <PostDetail item={item} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default NoticeDetail;
