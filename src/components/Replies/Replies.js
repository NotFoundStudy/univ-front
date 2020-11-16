import React, { useEffect } from "react";
import styled from "styled-components";
import { Comment, Avatar, Spin } from "antd";
import Reply from "./Reply";

const Replies = (props) => {
  const { replyList } = props;

  // if (replyList === undefined) {
  //   return <Spin />;
  // }

  // 기획 - 대댓글 여부 체크 후 구현

  return (
    <Wrapper>
      <Reply>
        <Reply>
          <Reply />
          <Reply />
        </Reply>
      </Reply>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Replies;
