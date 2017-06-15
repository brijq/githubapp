import { combineReducers } from 'redux'

import User from './services/user/reducers'
import Stats from './services/stats/reducers'


export default combineReducers({
  User,
  Stats,
});


