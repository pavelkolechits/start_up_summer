import { ACTIONS } from "../../constants";
import { call, put } from "@redux-saga/core/effects";
export function* getRepositories(action) {
  try {
    const result = yield call(() =>
      fetch(
        `https://api.github.com/users/${action.userName}/repos?per_page=4&page=${action.page}`,
        {
          method: "GET",
          Accept: "application/vnd.github.v3+json",
        }
      )
    );
    const request = yield result.json();
 
    yield put({ type: ACTIONS.GET_USER_REPOSITORIES_SUCCESS, request });
  } catch (e) {
    alert(e);
  }
}
