import store from "./store";
import {bindActionCreators} from "redux";
import {Action as appAction} from "./app/redux";
import {Action as userAction} from "./user/redux";
import {Action as dataAction} from "./data/redux";

const _dispatch = store && store.dispatch;

export const userCreators = bindActionCreators(userAction.Creators, _dispatch);
export const appCreators = bindActionCreators(appAction.Creators, _dispatch);
export const dataCreators = bindActionCreators(dataAction.Creators, _dispatch);
