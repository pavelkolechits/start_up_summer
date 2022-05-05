import {ACTIONS} from '../../constants'
import { takeEvery} from "@redux-saga/core/effects";
import { getUserData} from "../workers/getUserData";
import { getRepositories } from "../workers/getRepositories";

export function* getUserDataWatcher (){
  yield  takeEvery(ACTIONS.GET_USER_DATA_REQUEST, getUserData)
  yield  takeEvery(ACTIONS.GET_USER_REPOSITORIES_REQUEST, getRepositories)
}