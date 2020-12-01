import React, { useEffect } from "react";
import styled from "styled-components";
import { appCreators } from "../../redux/actionCreators";
import { useRouteMatch } from "react-router-dom";
import Viewer from "../../components/Editor/Viewer";
import Editor from "../../components/Editor/Editor";

const Honorship = (props) => {
  const match = useRouteMatch();

  useEffect(() => {
    appCreators.updateState({
      breadcrumbList: [
        {
          to: "",
          title: "Introduction & Research",
        },
        {
          to: `${match.path}`,
          title: "Introduction",
        },
      ],
    });
  }, []);

  return (
    <Wrapper>
      <Editor />
      <Viewer content={""} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Honorship;
