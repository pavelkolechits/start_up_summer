import { call, put } from "@redux-saga/core/effects";
import { ACTIONS } from "../../constants";

export function* getUserData(action) {
  try {
    const result = yield call(() =>
      fetch(`https://api.github.com/users/${action.userName}`, {
        method: "GET",
        Accept: "application/vnd.github.v3+json",
      })
    );
    const request = yield result.json();
    yield put({ type: ACTIONS.GET_USER_DATA_SUCCESS, request });
  } catch (e) {
    alert(e);
  }
}
