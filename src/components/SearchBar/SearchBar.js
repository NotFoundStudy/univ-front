import React, { useState } from "react";
import styled from "styled-components";
import { Select, Input } from "antd";

const { Option } = Select;
const { Search } = Input;

const defaultOptions = [
  {
    value: "title",
    text: "제목",
    disabled: false,
  },
  {
    value: "author",
    text: "작성자",
    disabled: false,
  },
  {
    value: "content",
    text: "내용",
    disabled: false,
  },
];
const SearchBar = (props) => {
  const { options = defaultOptions, optionDefaultValue = "" } = props;

  const [submitData, setSubmitData] = useState({
    category: "",
    keyword: "",
  });

  return (
    <Wrapper>
      <Select
        defaultValue={
          optionDefaultValue ? optionDefaultValue : options[0].value
        }
        style={{ width: 100 }}
        onChange={(v) => setSubmitData({ ...submitData, category: v })}
      >
        {options.map((opt) => (
          <Option value={opt.value} key={opt.value} disabled={opt.diabled}>
            {opt.text}
          </Option>
        ))}
      </Select>
      <Search
        placeholder="검색어 입력"
        allowClear
        onSearch={(v) => {
          //dispatch submitData
        }}
        enterButton
        style={{ width: 200, marginLeft: "5px" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-input-group-addon .ant-input-search-button {
    width: 33px;
    padding: 0;
  }
`;

export default SearchBar;
