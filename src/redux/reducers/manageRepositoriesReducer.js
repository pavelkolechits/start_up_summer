import { ACTIONS } from "../constants";
const initialState = {
  repositories: [],
};

export const manageRepositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_USER_REPOSITORIES_REQUEST: {
      return initialState
    }
    case ACTIONS.GET_USER_REPOSITORIES_SUCCESS: {
      
        
      return {...state, repositories: action.request.length === 0 ? ["Not Found"] : action.request}
    }
    default:
      return state;
  }
};