import { connect } from 'react-redux'

import Board from '../components/board.component'

import { playerMove } from '../actions/player-move.action'

const mapStateToProps = state => {

  const board = state.boardHistory.history[state.boardHistory.historyIndex]

  return {
    board,
    rowSize: 3
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onClick: (playerName, squareIndex) => {
      dispatch(playerMove(playerName, squareIndex))
    }
  }
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardContainer
