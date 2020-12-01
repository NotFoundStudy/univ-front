import React, { useState } from "react";
import styled from "styled-components";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor as RDEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { dataCreators } from "../../redux/actionCreators";
import { Button, Input } from "antd";

const uploadImageCallBack = (file) => {
  const uploadUrl = () => {
    switch (window.location.host) {
      case "data-dev.attracker.shop":
        return "https://data-dev.attracker.shop/upload/imgUpload";
      case "data.attracker.shop":
        return "https://data.attracker.shop/upload/imgUpload";
      default:
        return "https://data-dev.attracker.shop/upload/imgUpload";
    }
  };

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", uploadUrl());
    const data = new FormData();
    data.append("image", file);

    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
};

const uploadAttachmentFile = (userSno, files) => {
  const uploadUrl = () => {
    switch (window.location.host) {
      case "data-dev.attracker.shop":
        return "https://data-dev.attracker.shop/upload/brandNoticeFileUpload";
      case "data.attracker.shop":
        return "https://data.attracker.shop/upload/brandNoticeFileUpload";
      default:
        return "https://data-dev.attracker.shop/upload/brandNoticeFileUpload";
    }
  };

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", uploadUrl());
    const data = new FormData();

    files &&
      files.map((file) => {
        if (!file) {
          return null;
        }

        data.append(userSno, file);
        return null;
      });

    data.append("userSno", userSno);

    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
};

const Editor = (props) => {
  const { initialValue } = props;

  const [title, setTitle] = useState("");
  const [isSecret, setIsSecret] = useState(false);
  const [uploadFileList, setUploadFileList] = useState([null, null, null]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function handleLoadFile(e) {
    const { files, id } = e.target;
    let tempFileList = [...uploadFileList];

    if (!id) {
      return;
    }

    let fileIdx = parseInt(id.split("_")[1]); // _ 후 시작하는 스트링? = 인덱스?

    let file = files[0];
    if (!file) {
      tempFileList[fileIdx] = null;
      setUploadFileList(tempFileList);
      return;
    }

    let maxSize = 20971520; // 20MB
    let fileSize = Math.round(file.size);
    if (fileSize > maxSize) {
      alert("첨부파일 사이즈는 20MB 이내로 등록 가능합니다.");
      e.target.value = null; // 초과시 초기화
      return;
    }

    tempFileList[fileIdx] = file;

    setUploadFileList(tempFileList);
  }

  function handleSubmit(e) {
    // 필수값 alert 처리
    if (!title) {
      // props.dispatch(
      //   commonActions.alertMessage(
      //     "제목을 입력하세요",
      //     "제목은 필수 입력값 입니다."
      //   )
      // );
      return;
    }

    let content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    // uploadAttachmentFile(userData["user_sno"], uploadFileList).then(
    //   (result) => {
    //     let filePaths = result["paths"] ? result["paths"] : [];

    //     dataCreators.props.dispatch(
    //       brandActions.noticeCreate(
    //         noticeSno,
    //         userData["user_sno"],
    //         userData["brand_code"],
    //         noticeType,
    //         noticeTitle,
    //         content,
    //         sendOfficeList,
    //         sendUserList,
    //         filePaths
    //       )
    //     );
    //   }
    // );
  }

  return (
    <Wrapper>
      <RDEditor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="form-control"
        // onEditorStateChange={onEditorStateChange}
        localization={{ locale: "ko" }}
        toolbar={{
          image: {
            uploadCallback: uploadImageCallBack,
            previewImage: true,
            alt: false,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
          },
          options: [
            "blockType",
            "fontFamily",
            "fontSize",
            "textAlign",
            "inline",
            "list",
            "colorPicker",
            "link",
            "emoji",
            "image",
            "history",
          ],
          inline: { options: ["bold", "italic", "underline"] },
          list: { options: ["unordered", "ordered"] },
          textAlign: { options: ["left", "center", "right"] },
          link: { options: ["link"] },
        }}
      />

      {uploadFileList &&
        uploadFileList.map((file, i) => {
          if (!file && i !== uploadFileList.findIndex((item) => !item)) {
            return null;
          }
          return (
            <div
              key={i}
              style={{
                border: "1px solid #F1F1F1",
                margin: "4px 0",
                backgroundColor: "#fbfbfb",
              }}
            >
              <Input
                id={"file_" + i}
                type="file"
                style={{ padding: "8px 8px 8px 12px" }}
                onChange={handleLoadFile}
              />
            </div>
          );
        })}

      <Button onClick={handleSubmit}>등록하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Editor;
