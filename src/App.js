import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Community from "./pages/Community";
import Page404 from "./pages/Error/Page404";
import Home from "./pages/Home/Home";
import Introduction from "./pages/Introduction";
import Lecture from "./pages/Lecture";
import Member from "./pages/Member";
import Professor from "./pages/Professor";
import Publication from "./pages/Publication";

const App = (props) => {
  const { toastMessage } = useSelector((state) => state.app);
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <Wrapper>
      {toastMessage && <ToastMessage message={toastMessage} />}

      <Layout>
        <Switch>
          <Route exact path={"/"} component={Home} />

          {/*<Route path={'/login'} component={Login*/}
          {/*<Route path={'/register'} component={Register*/}

          <Route path={"/introduction"} component={Introduction} />
          <Route path={"/professor"} component={Professor} />
          <Route path={"/member"} component={Member} />
          <Route path={"/publication"} component={Publication} />

          <Route path={"/lecture"} component={Lecture} />
          <Route path={"/community"} component={Community} />

          <Route path={"/error/404"} component={Page404} />
          <Redirect to={"/error/404"} />
        </Switch>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
