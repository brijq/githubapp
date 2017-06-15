import * as types from '../types'
import * as req from '../../data/stats'

export function getRepoStats(userName) {
  return dispatch => {
    dispatch({type: types.GET_REPO_STATS});

    return req.GetRepoStats(userName).then((resp) => {
      console.log(resp);
      dispatch({
        type: types.GET_REPO_STATS_SUCCESS,
        payload: resp.data,
      })
    }).catch((error) => {
      dispatch({
        type: types.GET_REPO_STATS_FAILURE,
        payload: error,
      });
    });
  }
}
