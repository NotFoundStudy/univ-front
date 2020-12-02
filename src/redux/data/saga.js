import { takeLatest, call, put, delay, spawn } from "@redux-saga/core/effects";
import { Action } from "./redux";
import { dataCreators } from "../actionCreators";
import { getAccessToken } from "../../helper/localStorageHelper";
import { Api } from "../../api/editor";

export default function* () {
  yield takeLatest(Action.Types.CREACT_NOTICE, function* ({ data }) {
    const token = getAccessToken();
    const result = yield call(Api.createNotice, token, data);

    // 할것
    // if (result?.res === "success") {
    //   alert("등록 성공");
    //   navigate("/community/notice");
    // } else {
    //   alert("등록 실패");
    // }
  });
}
