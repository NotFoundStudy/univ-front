import React from "react";
import styled from "styled-components";
import Post from "../../../components/Post/Post";

const NoticeDetail = (props) => {
  const { item } = props;

  return <Post item={item} />;
};

const Wrapper = styled.div``;

export default NoticeDetail;
