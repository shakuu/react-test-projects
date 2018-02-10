export const SORT_HISTORY = 'SORT_HISTORY'

export const HistorySortTypes = {
  default: 'default'
}

export function sortHistory(sort) {

  return {
    type: SORT_HISTORY,
    sort
  }
}
