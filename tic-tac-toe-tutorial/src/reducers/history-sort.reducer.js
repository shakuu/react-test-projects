import { HistorySortTypes, SORT_HISTORY } from '../actions/sort-history.action'

export default function sortHistory(state = HistorySortTypes.default, action) {

  switch (action.type) {
    case SORT_HISTORY:
      return action.sort
    default:
      return state
  }
}
