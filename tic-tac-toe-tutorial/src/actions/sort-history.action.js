export const SORT_HISTORY = 'SORT_HISTORY'

export const HistorySortTypes = {
  default: 'Default',
  newestFirst: 'Newest First',
  xFirst: 'X Moves First',
  oFirst: 'O Moves First'
}

export function sortHistory(sort) {

  return {
    type: SORT_HISTORY,
    sort
  }
}
