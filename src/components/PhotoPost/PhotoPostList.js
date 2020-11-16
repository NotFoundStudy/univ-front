import React from "react";
import styled from "styled-components";
import { Card, Col, Row } from "antd";

const PhotoPostList = (props) => {
  return (
    <Wrapper>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default PhotoPostList;
