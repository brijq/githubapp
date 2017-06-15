import * as types from '../types'

const initialState = {
  repoStats: [],
  error: '',
  isLoading: ''
};

export default (state= initialState , action = {}) => {
  switch (action.type) {
    case types.GET_REPO_STATS:
      return {
        ...state,
        isLoading:true,
      };
    case types.GET_REPO_STATS_SUCCESS:
      return {
        ...state,
        repoStats: action.payload,
        error: '',
        isLoading: false,
      };
    case types.GET_REPO_STATS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default: return state
  }
}
