import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Layout as AntdLayout } from "antd";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from "./Content";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Container from "./Container";
import { useHistory, useRouteMatch } from "react-router-dom";

const Layout = (props) => {
  const { children } = props;

  const [exceptLayout, setExceptLayout] = useState(false);
  // 랜더 될떄마다 useHistory 트리거 해줄만한 곳이 없음
  const [history, setHistory] = useState(useHistory());

  useEffect(() => {
    history.location.pathname === "/"
      ? setExceptLayout(true)
      : setExceptLayout(false);

    console.log("@@ history2", history);
  }, [history]);

  // rwd breakpoint 3항 연산

  return (
    <AntdLayoutWrapper>
      <Header />
      <AntdLayout
        style={{
          borderBottom: "1px solid #eaeaea",
          backgroundColor: "#f1f1f1",
          ...row,
        }}
      >
        <Container>{!exceptLayout && <Breadcrumb />}</Container>
      </AntdLayout>
      <AntdLayout
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 0",
        }}
      >
        {!exceptLayout && <Sider />}
        <Content exceptLayout={exceptLayout}>{children}</Content>
      </AntdLayout>
      <Footer />
    </AntdLayoutWrapper>
  );
};

const AntdLayoutWrapper = styled(AntdLayout)`
  min-height: 100vh;
  background: #fff;
  .ant-breadcrumb {
    padding-left: 53px;
  }
  > section,
  footer {
    background: #fff;
  }
`;

const row = {
  flex: "0 0 0%",
};

export default Layout;
