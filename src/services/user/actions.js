import * as types from '../types'
import * as req from '../../data/user'

export function getUserRepo(userName) {
  return dispatch => {
    dispatch({type: types.GET_USER_REPO});
    return req.GetUserRepo(userName).then((resp) => {
      dispatch({
        type: types.GET_USER_REPO_SUCCESS,
        payload: resp.data,
      })
    }).catch((error) => {
      dispatch({
        type: types.GET_USER_REPO_FAILURE,
        payload: error,
      });
    });
  }
}
