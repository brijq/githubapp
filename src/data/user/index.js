import axios from 'axios'
import {API_BASE} from '../ApiBase'
import 'url-search-params-polyfill';

export function GetUserRepo(userName) {
  return axios.get(`${API_BASE}/users/${userName}/repos`)
}

