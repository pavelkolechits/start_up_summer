import { getUserData} from "../workers/getUserData";
import { takeEvery} from "@redux-saga/core/effects";
import {ACTIONS} from '../../constants'

export function* getUserDataWatcher (){
  yield  takeEvery(ACTIONS.GET_USER_DATA_REQUEST, getUserData)
}