import { configureStore } from "@reduxjs/toolkit";
import { manageUserDataReducer } from "./reducers/manageUserDataReducer";
import { getUserDataWatcher } from "./saga/watchers/getUserDataWatcher";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { manageUserDataReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(getUserDataWatcher);
