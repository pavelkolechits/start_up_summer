import { ACTIONS } from "../constants";
const initialState = {
  user: {},
};

export const manageUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_USER_DATA_SUCCESS: {
      if (action.request.message && action.request.message !== "Not found" ) {
        return {
          ...state,
          user: { message: "api limit exceded", fullMessage: action.request },
        };
      }
      return { ...state, user: action.request };
    }
    default:
      return state;
  }
};
