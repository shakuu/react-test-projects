import { playerMove, PLAYER_MOVE } from '../actions/player-move.action'

import calculateWinner from '../utilities/calculate-winner'

const initialBoardHistory = {
  historyIndex: 0,
  history: {
    squares: Array.from({ length: 9 }).map(square => null),
    clickedSquare: null,
    player: null,
    nextPlayer: 'X',
    isWon: false,
    isDraw: false,
    winningLine: null
  }
}

export default function boardHistory(state = initialBoardHistory, action) {

  switch (action.type) {
    case PLAYER_MOVE:
      return playerMove(state, action)
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
  const clickedSquare = action.squareIndex
  const player = action.playerName
  const nextPlayer = player === 'X' ? 'O' : 'X'

  squares[action.squareIndex] = action.playerName
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
