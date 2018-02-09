import { combineReducers } from 'redux'

import todos from './todos.reducer'
import visibilityFilter from './visibility-filter.reducer'

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// }

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
