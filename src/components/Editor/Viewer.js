import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "tui-editor/dist/tui-editor-contents.css";
// import 'highlight.js/styles/github.css';
import TuiViewer from "tui-editor/dist/tui-editor-Viewer";

const Viewer = (props) => {
  const { content } = props;

  const [viewerEl, setViewerEl] = useState(null);

  useEffect(() => {
    setViewerEl(
      new TuiViewer({
        el: document.querySelector("#viewerSection"),
        height: "500px",
        initialValue: content,
      })
    );
  }, []);

  return (
    <Wrapper>
      <div id="viewerSection"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Viewer;
