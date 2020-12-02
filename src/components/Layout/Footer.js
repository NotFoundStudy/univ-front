import React from "react";
import styled from "styled-components";
import { Layout as AntdLayout } from "antd";
import Container from "./Container";
import Select from "../Select/Select";
import Images from "../../assets/image";

const Footer = (props) => {
  return (
    <StyledAntdFooter>
      <StyledContainer>
        <Top>
          <Links>
            <LinkItem href={""}>개인정보처리방침</LinkItem>
            <LinkItem href={""}>저작권보호정책</LinkItem>
            <LinkItem href={""}>이메일무단수집거부</LinkItem>
          </Links>
          <SelectWrap>
            <Select
              options={[
                {
                  name: "관련사이트 바로가기",
                  value: "",
                },
                {
                  name: "수원대학교",
                  value: "https://www.suwon.ac.kr/index.html?menuno=593",
                },
              ]}
              defaultValue={"관련사이트 바로가기"}
              onChange={(v) => (v.length > 0 ? (window.location.href = v) : "")}
              style={{ width: "160px" }}
            />
            <DemoUi>이동</DemoUi>
          </SelectWrap>
        </Top>

        <Bottom>
          <Text>
            <p>18323) 경기도 화성시 봉담읍 와우안길 17</p>
            <p>TEL : +82-31-220-2114 / Lab) +82-nn-nnn-nnnn</p>
            <p className={"light"}>
              Copyright (C) THE UNIVERSITY OF SUWON. All rights reserved.
            </p>
          </Text>
          <Logo href={"https://www.suwon.ac.kr/index.html?menuno=593"}>
            <img src={Images.logoUniversity} alt="" />
          </Logo>
        </Bottom>
      </StyledContainer>
    </StyledAntdFooter>
  );
};

const StyledAntdFooter = styled(AntdLayout.Footer)`
  padding: 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  // rwd
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    padding-bottom: 14px;
    justify-content: center;
  }
`;
const Links = styled.div`
  padding: 14px 0;
`;
const LinkItem = styled.a`
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid #b5b5b5;
  &:first-child {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
  }
  font-size: 0.8rem;
  color: #444444;
`;
const SelectWrap = styled.div`
  display: flex;
  align-items: center;
`;
const DemoUi = styled.div`
  margin-left: 4px;
  padding: 6px 9px;
  border-radius: 3px;
  background: #3d4e5f;
  font-size: 13px;
  color: #e4e4e4;
  cursor: pointer;
`;

const Text = styled.div`
  p {
    margin: 0;
    line-height: 1.7;
    font-size: 0.75rem;
    color: #868686;
    &.light {
      color: #b7b7b7;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px;
  // rwd
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    ${Text} {
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;
const Logo = styled.a`
  height: 47px;
  cursor: pointer;
  img {
    height: 100%;
  }
`;

export default Footer;
