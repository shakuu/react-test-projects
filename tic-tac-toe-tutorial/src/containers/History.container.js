import { connect } from 'react-redux'

import { navigateHistory } from '../actions/navigate-history.action'
import { HistorySortTypes } from '../actions/sort-history.action'

import BoardHistory from '../components/history.component'

const boardCoordinatesByIndex = new Map([
  [0, 'Row: 1, Col 1'],
  [1, 'Row: 1, Col 2'],
  [2, 'Row: 1, Col 3'],
  [3, 'Row: 2, Col 1'],
  [4, 'Row: 2, Col 2'],
  [5, 'Row: 2, Col 3'],
  [6, 'Row: 3, Col 1'],
  [7, 'Row: 3, Col 2'],
  [8, 'Row: 3, Col 3'],
])

function getHistoryButtonLabel(stepNumber, historyItem) {

  const isFirstItem = stepNumber === 0
  if (isFirstItem) {
    return 'Game start'
  }

  const coordinatesLabel = boardCoordinatesByIndex.get(historyItem.clickedSquare)
  if (historyItem.isWon) {
    return `#${stepNumber} ${historyItem.player} Won: ${coordinatesLabel}`
  }
  if (historyItem.isDraw) {
    return `#${stepNumber} ${historyItem.player} Draw: ${coordinatesLabel}`
  }

  return `#${stepNumber} ${historyItem.player} Move: ${coordinatesLabel}`
}

function getSortByPlayerCallback(xFirst) {

  const firstPlayer = xFirst ? 'X' : 'O'

  return (itemA, itemB) => {

    const itemAPlayer = itemA.player
    const itemBPlayer = itemB.player
    if (itemAPlayer === itemBPlayer) {
      return 0
    }

    if (itemAPlayer === firstPlayer) {
      return -1
    }

    if (itemBPlayer === firstPlayer) {
      return 1
    }
  }
}

const mapStateToProps = state => {

  let historyItems = state.boardHistory.history.map((item, index) => {
    return {
      index,
      description: getHistoryButtonLabel(index, item),
      player: item.player
    }
  })

  if (state.sortHistory !== HistorySortTypes.default) {
    switch (state.sortHistory) {

      case HistorySortTypes.newestFirst:
        const historyItemsLength = historyItems.length
        historyItems = historyItems.sort((_, __) => 1)
        break
      case HistorySortTypes.xFirst:
        historyItems = historyItems.sort(getSortByPlayerCallback(true))
        break
      case HistorySortTypes.oFirst:
        historyItems = historyItems.sort(getSortByPlayerCallback(false))
        break
      default:
        break
    }
  }

  return {
    historyItems,
    historyIndex: state.boardHistory.historyIndex
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onClick: (historyIndex) => {
      dispatch(navigateHistory(historyIndex))
    }
  }
}

const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardHistory)

export default HistoryContainer;
