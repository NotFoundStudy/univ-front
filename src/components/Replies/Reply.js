import React, { useEffect } from "react";
import styled from "styled-components";
import { Comment, Avatar } from "antd";

const Reply = (props) => {
  const { item, children } = props;

  return (
    <Wrapper>
      <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a>Han Solo</a>}
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        }
      >
        {children}
      </Comment>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Reply;
