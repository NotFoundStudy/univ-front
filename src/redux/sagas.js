import { all } from "@redux-saga/core/effects";
import userSaga from "./user/saga";
import appSaga from "./app/saga";
import dataSaga from "./data/saga";

export default function* () {
  yield all([userSaga(), appSaga(), dataSaga()]);
}
