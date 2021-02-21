import React, { useState, useEffect } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import sample from "../../mock/sample.pdf";
import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Lecture({PDFurl}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  //numPages === maximum page, pageNumber === current page
  const next = () => {
    setPageNumber(pageNumber => (pageNumber + 1) >= numPages ? numPages : pageNumber + 1)
  }
  const prev = () => {
    setPageNumber(pageNumber => (pageNumber - 1) <= 0 ? 1 : pageNumber - 1)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // 수정필, file 을 axios로 받아와서 넣어줘야 함, ~ file params
  return (
    <Wrapper>
      <Document
        file={sample}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => alert('Error while loading page! ' + error)}
      >
        <PDFDocument pageNumber={pageNumber} />
        <button onClick={prev}>이전</button>
        <button onClick={next}>다음</button>
      </Document>,
      <p>Page {pageNumber} of {numPages}</p>
    </Wrapper>
  );
}

const PDFDocument = styled(Page)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
`

const Wrapper = styled.div`
`;

export default Lecture;