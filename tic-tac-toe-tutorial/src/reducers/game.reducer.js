import { combineReducers } from 'redux'

import boardHistory from './board-history.reducer'

const game = combineReducers({
  boardHistory
})

export default game
