import React from "react";
import styled from "styled-components";
import { Layout as AntdLayout } from "antd";

const Content = (props) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled(AntdLayout.Content)`
  padding-left: 30px !important;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;

export default Content;
