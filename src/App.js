import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Auth from "./hoc/auth";
import Page404 from "./pages/Error/Page404";
import { appCreators } from "./redux/actionCreators";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Introduction from "./pages/Introduction";
import Professor from "./pages/Professor";
import Member from "./pages/Member";
import Publication from "./pages/Publication";
import Lecture from "./pages/Lecture";
import Community from "./pages/Community";
import Layout from "./components/Layout";

const App = (props) => {
  const { toastMessage } = useSelector((state) => state.app);
  const { isLoggedIn } = useSelector((state) => state.user);

  const history = useHistory();
  const [exceptLayout, setExceptLayout] = useState();

  useEffect(() => {
    history.location.pathname === "/"
      ? setExceptLayout(true)
      : setExceptLayout(false);
  }, [history]);

  return (
    <Wrapper>
      {toastMessage && <ToastMessage message={toastMessage} />}

      <Layout exceptLayout={exceptLayout}>
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
