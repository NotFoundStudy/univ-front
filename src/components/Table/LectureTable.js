import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';

import ModalPDF from "../Modal/PDF";

const { Column, ColumnGroup } = Table;

const config = {
  pagination : {
    pageSizeOptions : ['5', '10'],
    showSizeChanger : true
  }
}

const LectureTable = ({data}) => {

  return (
    <Table dataSource={data} {...config}>
      <Column title="Date" dataIndex="date" key="date" width="15%"/>
      <ColumnGroup title="Author">
        <Column title="Name" dataIndex="name" key="name" width="10%"/>
        <Column title="Edu" dataIndex="education" key="education" width="5%"/>
      </ColumnGroup>
      <Column title="Title" dataIndex="title" key="title" width="40%"	/>
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        width="20%"
        render={tags => (
          <>
            {tags.map(tag => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            {record.pdfUrl && <ModalPDF title={"PDF"} PDFurl={record.pdfUrl}/>}
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  )
};

export default LectureTable;