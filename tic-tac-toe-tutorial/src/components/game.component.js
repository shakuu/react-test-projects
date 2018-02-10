import React from 'react'

import BoardStatusContainer from '../containers/BoardStatus.container'
import BoardContainer from '../containers/Board.container'
import HistoryContainer from '../containers/History.container'

import '../styles/game.css'

export default class Game extends React.Component {

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
          <HistoryContainer />
        </div>
      </div>
    );
  }
}
