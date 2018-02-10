import { connect } from 'react-redux'

import BoardStatus from '../components/status.component'

const mapStateToProps = state => {

  const board = state.boardHistory.history[state.boardHistory.historyIndex]

  const status = board.isWon
    ? `Winner is ${board.player}`
    : board.isDraw
      ? 'Draw'
      : `Next player: ${board.nextPlayer}`

  return {
    statusMessage: status || 'Invalid state'
  }
}

const BoardStatusContainer = connect(
  mapStateToProps
)(BoardStatus)

export default BoardStatusContainer
