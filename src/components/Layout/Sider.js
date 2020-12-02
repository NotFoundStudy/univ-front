import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Layout as AntdLayout } from "antd";
import Menu from "../Menu/Menu";
import { AppstoreOutlined } from "@ant-design/icons/";
import { useSelector } from "react-redux";
import COMMON_CONST from "../../assets/constant/common";

const siteWholeMenu = [
  {
    head: "Introduction\n & Research",
    list: [COMMON_CONST.WHOLE_MENU[0]], // [ {} ]
  },
  {
    head: "Professor",
    list: [COMMON_CONST.WHOLE_MENU[1]],
  },
  {
    head: "Member",
    list: [COMMON_CONST.WHOLE_MENU[2]],
  },
  {
    head: "Publication",
    list: [COMMON_CONST.WHOLE_MENU[3]],
  },
  {
    head: "Lecture",
    list: [COMMON_CONST.WHOLE_MENU[4]],
  },
  {
    head: "Community",
    list: [COMMON_CONST.WHOLE_MENU[5]],
  },
];

const Sider = (props) => {
  const { currentViewKey } = useSelector((state) => state.app);
  const [currentItem, setCurrentItem] = useState([]);

  useEffect(() => {
    currentViewKey
      ? setCurrentItem(
          COMMON_CONST.WHOLE_MENU.filter(
            (item) => item.key.toLowerCase() === currentViewKey.toLowerCase()
          )
        )
      : setCurrentItem(null);
  }, [currentViewKey]);

  if (!currentItem) {
    return null;
  }

  return (
    <Wrapper width={240}>
      <Head>{currentItem[0]?.title}</Head>
      <Menu mode={"inline"} list={currentItem} openFistKey={true} />
    </Wrapper>
  );
};

const Wrapper = styled(AntdLayout.Sider)`
  background: transparent;
  .ant-menu-inline {
    border-left: 1px solid #f0f0f0;
  }
  .ant-menu-sub {
    > li {
      padding-top: 10px;
      padding-bottom: 10px;
      color: #6c6c6c;
    }
  }
  .ant-menu-submenu-inline > .ant-menu-submenu-title {
    .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-arrow::after {
      background: #999;
    }
  }
  .ant-menu-item,
  .ant-menu-submenu-title,
  .ant-menu-item-only-child {
    margin: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    height: 55px !important;
    line-height: 55px !important;
    font-size: 16px;
    font-weight: 400;
    color: #484848;
    &:hover {
      color: #1890ff;
    }
  }
  .ant-menu-submenu-title {
    border-bottom: 1px solid #f0f0f0;
  }
  .ant-menu-sub {
    box-shadow: inset 0 6px 6px -7px rgba(0, 0, 0, 0.1);
    background: #f0f0f0;
  }
`;

const Head = styled.div`
  white-space: pre-line;
  padding: 20px 10px;
  background: #094c90;
  text-transform: capitalize;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
`;

export default Sider;
