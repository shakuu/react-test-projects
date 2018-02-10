import { combineReducers } from 'redux'

import boardHistory from './board-history.reducer'
import sortHistory from './history-sort.reducer'

const gameApp = combineReducers({
  boardHistory,
  sortHistory
})

export default gameApp
