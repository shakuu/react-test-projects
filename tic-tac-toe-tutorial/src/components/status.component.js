import React from 'react'

import { Alert } from 'reactstrap';

export default function BoardStatus(props) {

  const status = props.board.isWon
    ? `Winner is ${props.board.player}`
    : props.board.isDraw
      ? 'Draw'
      : `Next player: ${props.nextPlayer}`

  return (
    <div className="game-status">
      <Alert
        color="info">
        {status}
      </Alert>
    </div>
  )
}
