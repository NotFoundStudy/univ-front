import React from "react";
import styled from "styled-components";
import Replies from "../Replies/Replies";
import Viewer from "../Editor/Viewer";
import { Descriptions } from "antd";

const sampleList = [{}];

const Post = (props) => {
  return (
    <Wrapper>
      <Head>
        <div className="desc">
          <div className="item">
            <div>작성일</div>
            <div className="bold">20/10/13 화</div>
          </div>
          {/* <div className="item">
            <div>수정일</div>
            <div className="bold"></div>
          </div> */}
          <div className="item">
            <div>작성자</div>
            <div className="bold">김갑수</div>
          </div>
          <div className="item">
            <div>조회수</div>
            <div className="bold">1234</div>
          </div>
        </div>
        <div className="title">
          고분자복합재료연구실 학부 연구생 및 대학원생 모집
        </div>
      </Head>
      <Content>
        <Viewer />
        <div className="attachment">
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        </div>
        <Replies />
      </Content>
      <Tail></Tail>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Head = styled.div``;
const Content = styled.div``;
const Tail = styled.div``;
export default Post;
