import axios from 'axios'
import {API_BASE} from '../ApiBase'
import 'url-search-params-polyfill';

export function GetRepoStats(username,repo) {
  return axios.get(`${API_BASE}/repos/${username}/brijqtify-profilepage/contributors`)
}

