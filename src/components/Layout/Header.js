import React from "react";
import styled from "styled-components";
import { Layout as AntdLayout } from "antd";
import Images from "../../assets/image";
import Menu from "../Menu/Menu";
import COMMON_CONST from "../../assets/constant/common";
import { navigate } from "../../helper/historyHelper";
import Container from "./Container";

const Header = (props) => {
  return (
    <StyledAntdHeader>
      <LogoWrap onClick={() => navigate("/")}>
        <img src={Images.headerLogo} alt="" />
      </LogoWrap>
      <NavWrap>
        <StyledMenu mode={"horizontal"} list={COMMON_CONST.WHOLE_MENU} />
      </NavWrap>
    </StyledAntdHeader>
  );
};

const StyledAntdHeader = styled(AntdLayout.Header)`
  position: relative;
  z-index: 20;
  height: 210px;
  background-image: url(${Images.headerCover});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LogoWrap = styled.div`
  display: inline-block;
  padding-top: 27px;
  padding-left: 130px;
  cursor: pointer;
  img {
    height: 90px;
  }
`;

const NavWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.43);
`;

const StyledMenu = styled(Menu)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  border-bottom: none;
  background: transparent;
  .ant-menu-submenu,
  .ant-menu-item-only-child {
    flex-grow: 1;
    text-align: center;
    font-size: 19px;
    color: #fff;
    .ant-menu-item {
      // dropdown
      height: 44px;
      padding: 5px 0;
      text-align: center;
      line-height: 44px;
      font-size: 17px;
    }
  }
`;
export default Header;
