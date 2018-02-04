import React from 'react'

export default function BoardStatus(props) {

  const status = props.board.isWon
    ? `Winner is ${props.board.player}`
    : props.board.isDraw
      ? 'Draw'
      : `Next player: ${props.nextPlayer}`

  return (
    <div className="game-status">
      {status}
    </div>
  )
}
