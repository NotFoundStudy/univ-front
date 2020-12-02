import React from "react";
import styled from "styled-components";
import { Layout as AntdLayout } from "antd";

const Content = (props) => {
  const { children, exceptLayout } = props;
  return <Wrapper exceptLayout={exceptLayout}>{children}</Wrapper>;
};

const Wrapper = styled(AntdLayout.Content)`
  padding-left: ${(props) => (props.exceptLayout ? 0 : "30px")};
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;

export default Content;
