import { ACTIONS } from "../constants";
const initialState = {
  user: {},
};

export const manageUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_USER_DATA_SUCCESS: {
        console.log(state)
      return { ...state, user: action.request };
    }

    default:
      return state;
  }
};