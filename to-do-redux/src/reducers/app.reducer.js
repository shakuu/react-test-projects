import { VisibilityFilters, ADD_TODO, TOGGLE_TODO } from './actions'

import { todos } from './todos.reducer'
import { visibilityFilter } from './visibility-filter.reducer'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action),
  }
}


