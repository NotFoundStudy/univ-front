import React from "react";
import styled from "styled-components";
import PostList from "../../../components/Post/PostList";
import SearchBar from "../../../components/SearchBar/SearchBar";
import RightWrap from "../../../components/HalfWrap/RightWrap";

// mock
const list = [];

const NoticeList = (props) => {
  return (
    <Wrapper>
      <RightWrap style={{ marginBottom: "30px" }}>
        <SearchBar />
      </RightWrap>
      <PostList list={list} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default NoticeList;
