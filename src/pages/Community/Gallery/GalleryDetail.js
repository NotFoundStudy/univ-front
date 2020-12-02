import React from "react";
import styled from "styled-components";
import PhotoPost from "../../../components/PhotoPost/PhotoPost";

const GalleryDetail = (props) => {
  // 뷰어 또는 커스텀? => 내부에 뷰어여야겠넴.html (에디터에서 등록한 스타일 읽히도록)
  return <PhotoPost />;
};

const Wrapper = styled.div``;

export default GalleryDetail;
