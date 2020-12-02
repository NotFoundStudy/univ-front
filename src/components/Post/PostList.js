import React, { useEffect, useState } from "react";
import { Pagination, Table } from "antd";
import styled from "styled-components";
import { IoMdAttach } from "react-icons/all";
import { navigate } from "../../helper/historyHelper";
import { useRouteMatch } from "react-router-dom";

const columns = [
  {
    title: "No.",
    dataIndex: "post_no",
    key: "post_no",
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
    post_no: 1,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: false,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 2,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 3,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 4,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 5,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 6,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 7,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 8,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 9,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 10,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  }, // 10

  {
    pk: "1",
    post_no: 11,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: false,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 12,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 13,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 14,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 15,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 16,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 17,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 18,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 19,
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
  {
    pk: "2",
    post_no: 20,
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
  const noticeList = data; // mock
  const [viewList, setViewList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPageSize, setPrevPageSize] = useState(15); // right before to be new

  useEffect(() => {
    //dispatch noticeList (with totalCount, defaultPageSize 15)
  }, []);

  useEffect(() => {
    trimViewList();
  }, [noticeList, currentPage]);

  if (!noticeList) {
    return false;
  }

  function trimViewList() {
    const start = (currentPage - 1) * prevPageSize;
    const end =
      start + prevPageSize >= noticeList.length
        ? noticeList.length - 1
        : prevPageSize;
    setViewList(noticeList.slice(start, end));
    console.log(
      "@@ start",
      start,
      "end",
      end,
      "result",
      noticeList.slice(start, end)
    );
  }

  function getCurrentPage(current, newPageSize) {
    let resultCurrent =
      Math.floor((prevPageSize * current) / newPageSize) === 0
        ? 1
        : Math.floor((prevPageSize * current) / newPageSize);

    // dispatch (resultCurrent, newPageSize)
    trimViewList();
    setCurrentPage(resultCurrent);
    setPrevPageSize(newPageSize);
  }

  // 나중 defaultCurrent from ls
  // BE에서 리스트 목록 얼만끔씩 잘라서 주느냐에 따라 달라질 것 : 리스트는 전체 다 가져오고(페이지네이션에서 따로 통신 필요x, pageChange 시 pageSize에 따른 것도 로컬에서
  // 인덱스 계산해서 slice해서 보여주면 됨 / 아니면 재fetch시 cached 없이 데이터 계속 요청해야할듯), 디테일은 클릭시 새로 받아오는 게 좋을 것 같음.
  // 리스트는 totalCount와 함게, (필요시 defaultPageSize는 15로)

  return (
    <Wrapper>
      <Table
        columns={columns}
        dataSource={viewList}
        pagination={false}
        onRow={(record) => {
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
          defaultPageSize={15}
          pageSizeOptions={[15, 30, 50, 100]}
          onShowSizeChange={(current, newPageSize) =>
            getCurrentPage(current, newPageSize)
          }
          onChange={(current, newPageSize) =>
            getCurrentPage(current, newPageSize)
          }
          current={currentPage}
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
