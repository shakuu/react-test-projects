import React from 'react'

import Board from './board.component'
import BoardHistory from './history.component'
import BoardStatus from './status.component'

import calculateWinner from '../utilities/calculate-winner'

import '../styles/game.css'

export default class Game extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      history: [{
        squares: Array(9).fill(null),
        clickedSquare: null,
        player: null,
        isWon: false,
        isDraw: false,
        winningLine: null
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleBoardClick(clickedSquareIndex) {

    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[clickedSquareIndex]) {
      return
    }

    const player = this.state.xIsNext ? 'X' : 'O'
    squares[clickedSquareIndex] = player
    const winningLine = calculateWinner(squares)
    const isWon = winningLine !== null;
    const isDraw = squares.every(square => square !== null)

    this.setState({
      history: history.concat([{
        squares: squares,
        clickedSquare: clickedSquareIndex,
        player: player,
        isWon: isWon,
        isDraw: isDraw,
        winningLine: winningLine
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  handelJumpTo(stepNumber) {

    this.setState({
      stepNumber: stepNumber,
      xIsNext: stepNumber % 2 === 0
    })
  }

  render() {
    const history = this.state.history
    const currentBoard = history[this.state.stepNumber]
    const nextPlayer = this.state.xIsNext ? 'X' : 'O'

    return (
      <div className="game">
        <div className="game-board">
          <Board
            rowSize={3}
            board={currentBoard}
            onClick={(i) => this.handleBoardClick(i)} />
        </div>
        <div className="game-info">
          <BoardStatus
            board={currentBoard}
            nextPlayer={nextPlayer} />
          <BoardHistory
            history={this.state.history}
            stepNumber={this.state.stepNumber}
            onJumpTo={(stepNumber) => this.handelJumpTo(stepNumber)} />
        </div>
      </div>
    );
  }
}
