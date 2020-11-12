import { takeLatest, call, put, delay, spawn } from "@redux-saga/core/effects";
import { Action } from "./redux";
import { dataCreators } from "../actionCreators";

export default function* () {
  // yield takeLatest(Action.Types.SET_TOAST_MESSAGE, function* ({message}) {
  //   yield put(appCreators.updateState({toastMessage: message}))
  //   yield spawn(function* () {
  //       yield delay(4000);
  //       yield put(appCreators.updateState({toastMessage: ''}))
  //   })
  // });
}
