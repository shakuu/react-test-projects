import { combineReducers } from 'redux'

import boardHistory from './board-history.reducer'

const gameApp = combineReducers({
  boardHistory
})

export default gameApp
