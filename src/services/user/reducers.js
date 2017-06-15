import * as types from '../types'

const initialState = {
  repos: [],
  error: '',
  isLoading: ''
};

export default (state= initialState , action = {}) => {
  switch (action.type) {
    case types.GET_USER_REPO:
      return {
        ...state,
        isLoading:true,
      };
    case types.GET_USER_REPO_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        error: '',
        isLoading: false,
      };
    case types.GET_USER_REPO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default: return state
  }
}