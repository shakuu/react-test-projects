import React from 'react'

import Board from './board.component'
import BoardHistory from './history.component'

import calculateWinner from '../utilities/calculate-winner'

export default class Game extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      history: [{
        squares: Array(9).fill(null),
        clickedSquare: null,
        player: null,
        isWon: false
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
    const isWon = !!calculateWinner(squares)

    this.setState({
      history: history.concat([{
        squares: squares,
        clickedSquare: clickedSquareIndex,
        player: player,
        isWon: isWon
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

    const winner = calculateWinner(currentBoard.squares)
    const status = winner ? 'Winner is ' + winner : this.state.xIsNext ? 'Next player: X' : 'Next player: O';

    return (
      <div className="game">
        <div className="game-board">
          <Board
            rowSize={3}
            squares={currentBoard.squares}
            onClick={(i) => this.handleBoardClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <BoardHistory history={this.state.history} stepNumber={this.state.stepNumber} onJumpTo={(stepNumber) => this.handelJumpTo(stepNumber)} />
        </div>
      </div>
    );
  }
}
