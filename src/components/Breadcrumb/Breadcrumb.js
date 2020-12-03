import React from "react";
import styled from "styled-components";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { GoLocation } from "react-icons/all";
import { useSelector } from "react-redux";

const { Item: BreadcrumbItem } = AntdBreadcrumb;

const sampleData = [
  {
    to: "",
    title: "sample",
  },
  {
    to: "/sample2",
    title: "sample2",
  },
  {
    to: "/sample3",
    title: "sample3",
  },
];

const Breadcrumb = (props) => {
  const { list = sampleData } = props;

  const { breadcrumbList } = useSelector((state) => state.app);

  if (!list) {
    return false;
  }

  return (
    <StyledAntdBreadcrumb separator={""}>
      <BreadcrumbItem>
        <GoLocation />
      </BreadcrumbItem>
      {breadcrumbList?.map((item) => (
        <BreadcrumbItem key={item.to}>
          {item.to.length > 0 ? (
            <a href={item.to}>{item.title}</a>
          ) : (
            <>{item.title}</>
          )}
        </BreadcrumbItem>
      ))}
    </StyledAntdBreadcrumb>
  );
};

const StyledAntdBreadcrumb = styled(AntdBreadcrumb)`
  font-size: 0;
  > span {
    // .ant-breadcrumb span span.ant-breadcrumb-link a
    .ant-breadcrumb-link {
      display: inline-block;
      vertical-align: middle;
      min-height: 50px;
      border-right: 1px solid #dedede;
      padding: 12px 18px;
      font-size: 1.7rem;
      color: #676767;
    }
    &:first-child {
      .ant-breadcrumb-link {
        padding: 12px 7px;
        font-size: 1.7rem;
        border-left: 1px solid #dedede;
        svg {
          position: relative;
          top: 2px;
        }
      }
    }
    &:last-child .ant-breadcrumb-link a {
      color: #1d7fe2;
    }
  }
`;

export default Breadcrumb;
