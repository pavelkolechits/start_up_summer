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
    if (request.message?.includes("exceeded")) {
      throw new Error("API limit excedded");
    }
    if (request.message === "Not Found") {
      throw new Error("User not found");
    }

    yield put({
      type: ACTIONS.GET_USER_REPOSITORIES_REQUEST,
      userName: action.userName,
      page: action.page,
    });
  } catch (e) {
    console.log(e);
  }
}
