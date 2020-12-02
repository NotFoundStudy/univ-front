import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import NoticeList from "./NoticeList";
import NoticeDetail from "./NoticeDetail";
import NoticeWrite from "./NoticeWrite";
import { appCreators } from "../../../redux/actionCreators";
import PageTitle from "../../../components/Titles/PageTitle";

const Notice = (props) => {
  const match = useRouteMatch();

  useEffect(() => {
    appCreators.updateState({
      breadcrumbList: [
        {
          to: "",
          title: "community",
        },
        {
          to: `${match.path}/`,
          title: "Notice",
        },
      ],
    });
  }, []);

  return (
    <Wrapper>
      <PageTitle title={"Notice"} />
      <Switch>
        <Route path={`${match.path}/write`} component={NoticeWrite} />
        <Route path={`${match.path}/:id`} component={NoticeDetail} />
        <Route exact path={`${match.path}/`} component={NoticeList} />
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Notice;
