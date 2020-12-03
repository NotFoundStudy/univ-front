import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import { appCreators } from "../../redux/actionCreators";
import Viewer from "../../components/Editor/Viewer";
import Editor from "../../components/Editor/Editor";
import PageTitle from "../../components/Titles/PageTitle";

const contentMock = (
  <div>
    <p>먀ㅐㅈㄷ러설명이 이러구저러구한 인트로덕션 제목</p>
    <p>
      The PCL is aiming to be a world-class laboratory by creating the research
      breakthrough for academy and the engineering solution for industry. We are
      currently interested in providing the engineering solutions for
      manufacturing process of fiber reinforced polymer composites with the
      required functions as well as structural performances, designing new
      structures and materials for futuristic electronics including wearable
      device and display, and understanding relationship between structure,
      property and process utilizing rheology. Our most basic and powerful means
      are “working smart and thinking safety” in all the activities for everyday
      life as well as research.
    </p>
  </div>
);

const Honorship = (props) => {
  const { content = contentMock } = props;
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
      <PageTitle title={"Introduction"} />
      <Editor />
      <Viewer content={""} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Honorship;
