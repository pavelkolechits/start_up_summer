import { configureStore } from "@reduxjs/toolkit";
import { manageUserDataReducer } from "./reducers/manageUserDataReducer";
import { getUserDataWatcher } from "./saga/watchers/getUserDataWatcher";
import createSagaMiddleware from "redux-saga";
import {manageRepositoriesReducer} from '../redux/reducers/manageRepositoriesReducer'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { manageUserDataReducer, manageRepositoriesReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(getUserDataWatcher);
