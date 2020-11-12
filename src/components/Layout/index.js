import React from "react";
import styled, { css } from "styled-components";
import { Layout as AntdLayout } from "antd";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import Content from "./Content";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Container from "./Container";

const Layout = (props) => {
  const { children } = props;

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
        <Container>
          <Breadcrumb />
        </Container>
      </AntdLayout>
      <AntdLayout
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 0",
        }}
      >
        <Sider />
        <Content>{children}</Content>
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
