import React, { useEffect, useState } from "react";
import { Pagination, Table } from "antd";
import styled from "styled-components";
import { IoMdAttach } from "react-icons/all";
import { navigate } from "../../helper/historyHelper";
import { useRouteMatch } from "react-router-dom";

const columns = [
  {
    title: "No.",
    dataIndex: "No",
    key: "index",
    render: (text, record, index) => <>{index + 1}</>,
    align: "center",
    width: "10%",
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
    width: "40%",
    ellipsis: true,
  },
  {
    title: "작성자",
    dataIndex: "author",
    key: "author",
    align: "center",
    width: "15%",
  },
  {
    title: "작성일",
    dataIndex: "created_date",
    key: "created_date",
    align: "center",
    width: "15%",
  },
  {
    title: "첨부파일",
    dataIndex: "attatched",
    key: "attatched",
    render: (text, record) =>
      record.attatched && (
        <IoMdAttach
          style={{
            transform: "translateY(5px) rotate(45deg)",
            fontSize: "14px",
          }}
        />
      ),
    align: "center",
    width: "10%",
  },
  {
    title: "조회수",
    dataIndex: "hits",
    key: "hits",
    align: "center",
    width: "10%",
  },
];

const data = [
  {
    pk: "1",
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: false,
    hits: 1234,
  },
  {
    pk: "2",
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
];

const PostList = (props) => {
  const match = useRouteMatch();
  // const {noticeList} = useSelector(state => state.data);
  const noticeList = columns; // mock
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    //dispatch noticeList
  }, []);

  if (!noticeList) {
    return false;
  }

  // 나중 defaultCurrent from ls

  return (
    <Wrapper>
      <Table
        columns={noticeList}
        dataSource={data}
        pagination={false}
        onRow={(record, rowIndex) => {
          return {
            onClick: (e) => {
              navigate(`${match.path}${record.pk}`);
            },
          };
        }}
      />
      <div class="pagination-wrap">
        <Pagination
          showSizeChanger
          onShowSizeChange={(current, pageSize) =>
            console.log("@@ curr", current, " pageSize ", pageSize)
          }
          defaultCurrent={currentPage}
          total={500}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-table-row {
    cursor: pointer;
  }
  .pagination-wrap {
    padding-top: 40px;
    text-align: right;
  }
`;

export default PostList;
