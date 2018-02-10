import { PLAYER_MOVE } from '../actions/player-move.action'
import { NAVIGATE_HISTORY } from '../actions/navigate-history.action'

import calculateWinner from '../utilities/calculate-winner'

const initialBoardHistory = {
  historyIndex: 0,
  history: [{
    squares: Array.from({ length: 9 }).map(square => null),
    clickedSquare: null,
    player: null,
    nextPlayer: 'X',
    isWon: false,
    isDraw: false,
    winningLine: null
  }]
}

export default function boardHistory(state = initialBoardHistory, action) {

  switch (action.type) {
    case PLAYER_MOVE:
      return playerMove(state, action)
    case NAVIGATE_HISTORY:
      return Object.assign({}, state, { historyIndex: action.historyIndex })
    default:
      return state
  }
}

function playerMove(state, action) {

  const history = state.history.slice(0, state.historyIndex + 1)
  const previousBoard = state.history[state.historyIndex]

  if (previousBoard.isWon || previousBoard.isDraw || previousBoard[action.squareIndex]) {
    return state
  }

  const squares = [...previousBoard.squares]
  const clickedSquare = action.move.squareIndex
  const player = action.move.playerName
  const nextPlayer = player === 'X' ? 'O' : 'X'

  squares[action.move.squareIndex] = action.move.playerName
  const winningLine = calculateWinner(squares)
  const isWon = winningLine !== null;
  const isDraw = isWon === false && squares.every(square => square !== null)

  const newBoard = {
    squares, clickedSquare, player, nextPlayer, isWon, isDraw, winningLine
  }
  history.push(newBoard)

  return {
    history,
    historyIndex: history.length - 1
  }
}
