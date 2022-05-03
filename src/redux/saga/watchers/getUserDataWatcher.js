import { getUserData} from "../workers/getUserData";
import { takeEvery} from "@redux-saga/core/effects";
import {ACTIONS} from '../../constants'
import { getRepositories } from "../workers/getRepositories";

export function* getUserDataWatcher (){
  yield  takeEvery(ACTIONS.GET_USER_DATA_REQUEST, getUserData)
  yield  takeEvery(ACTIONS.GET_USER_REPOSITORIES_REQUEST, getRepositories)
}