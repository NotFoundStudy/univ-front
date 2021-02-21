import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Lecture from "../PDF/Lecture";
import styled from "styled-components";

const PDF = ({title, PDFurl}) => {
  const [visible, setVisible] = useState(false);
  console.log(PDFurl)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        {title}
      </Button>
      <Modal
        title="PDF viwer"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Lecture PDFurl={PDFurl} />
      </Modal>
    </>
  );
};

export default  PDF;