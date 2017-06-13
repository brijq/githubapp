import axios from 'axios'
import {API_BASE} from '../ApiBase'
import 'url-search-params-polyfill';

export function GetUserRepo(user) {
  let params = new URLSearchParams();
  params.append('user', user);
  return axios.get(`${API_BASE}/users/${user}/repos`)
}
