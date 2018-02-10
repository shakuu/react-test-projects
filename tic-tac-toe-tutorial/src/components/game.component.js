import React from 'react'

// import Board from './board.component'
import BoardHistory from './history.component'
// import BoardStatus from './status.component'

import BoardStatusContainer from '../containers/BoardStatus.container'
import BoardContainer from '../containers/Board.container'

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

  handelJumpTo(stepNumber) {

    this.setState({
      stepNumber: stepNumber,
      xIsNext: stepNumber % 2 === 0
    })
  }

  render() {

    return (
      <div className="game">
        <div className="game-board">
          <BoardStatusContainer />
          <div className="board-container">
            <BoardContainer />
          </div>
        </div>
        <div className="game-info">
          <BoardHistory
            history={this.state.history}
            stepNumber={this.state.stepNumber}
            onJumpTo={(stepNumber) => this.handelJumpTo(stepNumber)} />
        </div>
      </div>
    );
  }
}
