import { connect } from 'react-redux'

import { navigateHistory } from '../actions/navigate-history.action'

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

const mapStateToProps = state => {

  const historyItems = state.boardHistory.history.map((item, index) => {
    return {
      index,
      description: getHistoryButtonLabel(index, item)
    }
  })

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
