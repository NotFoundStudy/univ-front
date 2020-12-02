import { Empty } from "antd";
import React from "react";
import styled from "styled-components";

const NoList = (props) => {
  const { description, style } = props;

  return (
    <Wrapper>
      <Empty description={description} style={style} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-empty-description {
    opacity: 0.3;
  }
`;

export default NoList;
